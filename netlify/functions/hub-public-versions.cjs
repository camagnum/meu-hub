'use strict';
// Public, read-only release metadata. This endpoint NEVER exposes the Netlify account,
// arbitrary sites, deployment history, token, or the privileged netlify-sync endpoint.
// Only publicly fetchable version.json documents uniquely matched to the *published*
// Hub catalogue are returned. Adding an unpublished site needs the protected UI.
const catalog=require('../../data/catalogo.json');
const publicProjects=(catalog.projects||[]).filter(p=>p&&p.status==='Ativo'&&typeof p.id==='string');
const headers={'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=60, s-maxage=120','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer'};
const reply=(statusCode,obj)=>({statusCode,headers,body:JSON.stringify(obj)});
const siteName=v=>typeof v==='string'&&/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(v);
const deployId=v=>typeof v==='string'&&/^[a-z0-9-]{8,80}$/i.test(v);
const idOkay=v=>typeof v==='string'&&/^[a-z0-9][a-z0-9_-]{0,79}$/i.test(v);
const clean=(v,max=200)=>typeof v==='string'?v.slice(0,max):'';
const slug=v=>clean(v).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const versionOkay=v=>typeof v==='string'&&/^v?\d+(?:\.\d+){1,3}(?:-[0-9a-zA-Z.-]+)?(?:\+[0-9a-zA-Z.-]+)?$/.test(v)&&v.length<=80;
const aliases={'nos-plus':'nos-mais','fc-photoeditor':'editor-cartas-fc27'};
function parseMetadata(x){
  if(!x||typeof x!=='object'||Array.isArray(x)||!versionOkay(x.version)||!clean(x.name).trim()||(x.id!==undefined&&!idOkay(x.id)))return null;
  return {id:x.id||'',name:clean(x.name),version:x.version,releaseDate:/^\d{4}-\d{2}-\d{2}$/.test(x.releaseDate||'')?x.releaseDate:'',changelog:Array.isArray(x.changelog)?x.changelog.filter(y=>typeof y==='string').slice(0,12).map(y=>clean(y,300)):[]};
}
function match(meta,netlifyName){
  if(meta.id)return publicProjects.find(p=>p.id===meta.id)||null;
  const possibilities=publicProjects.filter(p=>slug(p.name)===slug(meta.name));
  if(possibilities.length===1)return possibilities[0];
  if(possibilities.length>1)return null;
  const bySlug=publicProjects.filter(p=>p.id===netlifyName||slug(p.folder)===netlifyName||aliases[netlifyName]===p.id);
  return bySlug.length===1?bySlug[0]:null;
}
async function getJson(u,opts,fetcher,max=500000){
  const r=await fetcher(u,{...opts,redirect:'error',signal:AbortSignal.timeout(6500)});
  if(!r.ok)throw Error('HTTP '+r.status);
  const chunks=[];let total=0;
  for await(const chunk of r.body){total+=chunk.length;if(total>max)throw Error('Response too large');chunks.push(Buffer.from(chunk))}
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}
async function handler(event,env=process.env,fetcher=fetch){
  if(event.httpMethod!=='GET')return reply(405,{error:'Use GET.'});
  if(!env.NETLIFY_ACCESS_TOKEN)return reply(503,{error:'Consulta de versões não configurada.'});
  const api=(u)=>getJson('https://api.netlify.com/api/v1'+u,{headers:{Authorization:'Bearer '+env.NETLIFY_ACCESS_TOKEN,Accept:'application/json'}},fetcher,4000000);
  try{
    const all=[];let truncated=false;
    for(let page=1;page<=5;page++){
      const batch=await api('/sites?per_page=100&page='+page);
      if(!Array.isArray(batch))throw Error('Unexpected API response');
      all.push(...batch);
      if(batch.length<100)break;
      if(page===5)truncated=true;
    }
    const eligible=all.filter(s=>s&&siteName(s.name)&&deployId(s.published_deploy?.id));
    const matched=[];
    for(let i=0;i<eligible.length;i+=8){
      const group=await Promise.all(eligible.slice(i,i+8).map(async s=>{
        const permalink=`https://${s.published_deploy.id}--${s.name}.netlify.app/version.json`;
        const production=`https://${s.name}.netlify.app/version.json`;
        try{
          // Production must be publicly readable as well; a permissive deploy permalink
          // must never disclose a version hidden behind production access controls.
          const publicMeta=parseMetadata(await getJson(production,{headers:{Accept:'application/json','Cache-Control':'no-cache'}},fetcher,65536));
          if(!publicMeta)return null;
          const m=parseMetadata(await getJson(permalink,{headers:{Accept:'application/json','Cache-Control':'no-cache'}},fetcher,65536));
          if(!m||publicMeta.version!==m.version||(publicMeta.id&&m.id&&publicMeta.id!==m.id))return null;
          const p=match(m,s.name);if(!p)return null;
          const publishedAt=clean(s.published_deploy.published_at||s.published_deploy.created_at||'',40);
          return {id:'public-'+p.id,name:s.name,projectId:p.id,hasPublished:true,versionStatus:'ok',url:'https://'+s.name+'.netlify.app',publishedAt,metadata:{...m,id:p.id}};
        }catch{return null}
      }));matched.push(...group.filter(Boolean));
    }
    // Never guess a project's published site when multiple sites advertise its ID.
    const groups=new Map();
    for(const s of matched)groups.set(s.projectId,[...(groups.get(s.projectId)||[]),s]);
    const sites=[...groups.values()].filter(g=>g.length===1).map(g=>g[0]).sort((a,b)=>a.projectId.localeCompare(b.projectId));
    return reply(200,{sites,checkedAt:new Date().toISOString(),truncated,ambiguous:[...groups.entries()].filter(([,v])=>v.length>1).map(([id])=>id)});
  }catch{return reply(502,{error:'Não foi possível consultar as versões públicas agora.'})}
}
exports.handler=e=>handler(e);
exports._test={handler,parseMetadata,match};
