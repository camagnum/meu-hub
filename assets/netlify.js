(() => {
  'use strict';
  const core=window.HubVersionSync;
  const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const url=v=>{try{let u=new URL(v);return u.protocol==='https:'&&!u.username&&!u.password?u.href:''}catch{return''}};
  const date=v=>{const d=new Date(v);return v&&!Number.isNaN(+d)?d.toLocaleString('pt-BR'):'—'};
  const KEY='meuhub-netlify-snapshot-v2';
  let snapshot={sites:[],checkedAt:'',total:0};
  try{const s=JSON.parse(localStorage.getItem(KEY));if(s&&Array.isArray(s.sites))snapshot=s}catch{}
  const PUBLIC_KEY='meuhub-public-versions-v1';
  let publicSnapshot={sites:[],checkedAt:'',ambiguous:[],truncated:false};
  try{const s=JSON.parse(localStorage.getItem(PUBLIC_KEY));if(s&&Array.isArray(s.sites))publicSnapshot=s}catch{}
  let publicBusy=false,publicError='',lastPublicAttempt=0;
  let secret='',busy=false,error='',notice='',history={},api,lastAttempt=0;
  const publicSites=()=>publicSnapshot.sites||[];
  const visibleSites=()=>{
    const items=secret?snapshot.sites.map(s=>({...s})):[];
    for(const pub of publicSites()){
      const index=items.findIndex(s=>s.name===pub.name);
      if(index>=0)items[index]={...items[index],...pub,id:items[index].id,public:true};
      else items.push({...pub,public:true});
    }
    return items;
  };
  const published=id=>publicSites().find(s=>s.projectId===(id==='central-projetos'?'meu-hub':id));
  const displayVersion=(id,registered)=>{
    const v=published(id)?.metadata?.version;
    if(!v)return registered;
    return String(registered||'').startsWith('v')&&!String(v).startsWith('v')?'v'+v:v;
  };
  const savePublic=()=>{try{localStorage.setItem(PUBLIC_KEY,JSON.stringify(publicSnapshot))}catch{}};
  const saveSnapshot=()=>{try{localStorage.setItem(KEY,JSON.stringify(snapshot))}catch{}};
  const links=()=>api?.state().settings.netlifyLinks||{};
  const autoSettings=()=>api?.state().settings.netlifyAutoUpdateProjects||{};
  const found=s=>{
    const p=s.projectId&&api.state().projects.find(p=>p.id===s.projectId);
    return p?{project:p,method:'public'}:core.match(s,api.state().projects,visibleSites(),links());
  };
  const matched=s=>found(s)?.project||null;

  function publication(id){
    if(!api)return null;
    if(id==='central-projetos')id='meu-hub';
    return published(id) || snapshot.sites.find(s=>links()[s.id]===id) || snapshot.sites.find(s=>matched(s)?.id===id) || null;
  }
  function label(s){
    if(!s)return 'Sem vínculo';
    if(s.versionStatus==='ok')return s.public?'Versão pública verificada':s.metadata?.id?'Versão publicada':'Versão publicada · sem ID';
    return ({not_published:'Sem deploy confirmado',missing:'Sem version.json',invalid:'version.json inválido',protected:'Metadado protegido',unavailable:'Consulta indisponível',not_checked:'Não verificado',no_hostname:'Sem domínio padrão'})[s.versionStatus]||'Não verificado';
  }
  function comparison(s,p){
    if(!s?.metadata||!p?.version)return '';
    if(core.canonical(s.metadata.version)===core.canonical(p.version))return 'Versões iguais';
    return core.compare(s.metadata.version,p.version)<0?'Publicada anterior à registrada':'Publicada mais recente';
  }
  function info(id){
    const s=publication(id);
    if(!s)return '';
    const p=api.state().projects.find(x=>x.id===id);
    return `<span class="net-badge">Publicado: ${escape(s.metadata?.version||label(s))}${comparison(s,p)?' · '+escape(comparison(s,p)):''}</span>`;
  }
  function updateButton(s,p){
    if(!core.newer(s,p))return '';
    return `<button type="button" class="btn primary small" data-net="update" data-site="${escape(s.id)}">Atualizar catálogo para ${escape(s.metadata.version)}</button>`;
  }
  function details(id){
    const s=publication(id);
    if(!s)return '';
    const p=api.state().projects.find(x=>x.id===id);
    return `<div class="panel net-detail"><h3>Publicação Netlify</h3><p>${escape(label(s))} · <strong>${escape(s.metadata?.version||'Não identificada')}</strong></p><p class="muted small">Deploy: ${escape(date(s.publishedAt))} · última consulta ${escape(date(snapshot.checkedAt))}</p><p>${escape(comparison(s,p))}</p>${updateButton(s,p)} ${url(s.url)?`<a class="btn small" href="${escape(url(s.url))}" target="_blank" rel="noopener noreferrer">Abrir publicação</a> `:''}<a class="btn small" href="index.html#netlify">Monitoramento</a></div>`;
  }
  async function request(body){
    const r=await fetch('/.netlify/functions/netlify-sync',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+secret},body:JSON.stringify(body),cache:'no-store',credentials:'same-origin',signal:AbortSignal.timeout(40000)});
    let data;
    try{data=await r.json()}catch{throw Error('Função indisponível. Publique o Hub com Git ou Netlify CLI.')}
    if(!r.ok){if(r.status===401)secret='';throw Error(data.error||'HTTP '+r.status)}
    return data;
  }
  async function syncPublic(){
    if(publicBusy)return;
    publicBusy=true;publicError='';lastPublicAttempt=Date.now();
    try{
      const r=await fetch('/.netlify/functions/hub-public-versions',{method:'GET',cache:'no-store',credentials:'same-origin',signal:AbortSignal.timeout(45000)});
      const data=await r.json();
      if(!r.ok)throw Error(data.error||'Consulta indisponível');
      if(!Array.isArray(data.sites)||typeof data.checkedAt!=='string')throw Error('Resposta inesperada do servidor');
      publicSnapshot={sites:data.sites.filter(s=>s&&s.projectId&&s.versionStatus==='ok'&&s.metadata?.version),checkedAt:data.checkedAt,ambiguous:Array.isArray(data.ambiguous)?data.ambiguous:[],truncated:!!data.truncated};
      savePublic();
      if(!publicSnapshot.truncated){
        let count=0;
        for(const s of publicSites()){
          const p=matched(s);
          if(!p||!core.newer(s,p))continue;
          if(core.apply(api.state(),s,p).updated)count++;
        }
        if(count){api.save();notice=`${count} lançamento(s) público(s) incorporado(s) automaticamente ao catálogo.`}
      }else publicError='Consulta parcial: nenhuma versão foi registrada automaticamente.';
    }catch(e){publicError=e.message||'Sem acesso às versões públicas. Últimas informações preservadas.'}
    finally{publicBusy=false;api.refresh()}
  }
  function updateLocal(s,mode){
    const p=matched(s);
    if(!p||!core.newer(s,p))return null;
    const result=core.apply(api.state(),s,p);
    if(result.updated){api.save();notice=`${mode==='auto'?'Atualização automática':'Catálogo atualizado'}: ${p.name} → ${result.version}${result.createdRelease?' (registrada no histórico)':''}.`}
    return result.updated?result:null;
  }
  function applyAutomatic(){
    const updated=[];
    // Never process cached snapshots here: this function runs only after a successful, complete API scan.
    for(const s of snapshot.sites){
      const p=matched(s);
      if(!p||autoSettings()[p.id]!==true||!core.newer(s,p))continue;
      const result=updateLocal(s,'auto');
      if(result)updated.push(result);
    }
    if(updated.length)notice=`${updated.length} projeto(s) atualizado(s) automaticamente: ${updated.map(x=>x.projectId+' → '+x.version).join('; ')}.`;
    return updated;
  }
  async function sync(){
    if(busy||!secret)return;
    busy=true;error='';notice='';lastAttempt=Date.now();api.refresh();
    try{
      let next=0,sites=[],data;
      do {
        data=await request({action:'list',offset:next});
        if(!Array.isArray(data.sites)||!Number.isInteger(data.total))throw Error('Resposta inesperada do Netlify');
        sites.push(...data.sites);
        const following=data.nextOffset;
        if(following!==null&&(!Number.isInteger(following)||following<=next))throw Error('Paginação inválida');
        next=following;
      }while(next!==null&&sites.length<500);
      snapshot={sites:[...new Map(sites.map(s=>[s.id,s])).values()],checkedAt:data.checkedAt,total:data.total,truncated:data.truncated||next!==null};
      saveSnapshot();
      if(!snapshot.truncated)applyAutomatic();
      else notice='Limite de sites atingido. A atualização automática foi suspensa para evitar associações incompletas.';
    }catch(e){error=e.message||'Falha na consulta. Dados anteriores preservados.'}
    finally{busy=false;api.refresh()}
  }
  const select=s=>`<select class="net-select" data-net-map="${escape(s.id)}" aria-label="Vincular projeto"><option value="">${matched(s)?'Vínculo automático / remover vínculo manual':'Selecionar projeto existente'}</option>${api.state().projects.map(p=>`<option value="${escape(p.id)}" ${links()[s.id]===p.id?'selected':''}>${escape(p.name)}</option>`).join('')}</select>`;
  function siteCard(s){
    const p=matched(s),h=history[s.id],m=found(s),available=core.newer(s,p),enabled=p&&autoSettings()[p.id]===true;
    return `<article class="panel net-site">
      <div class="net-site-head"><div><h3>${escape(s.metadata?.name||s.name)}</h3><p class="small muted">${escape(s.name)} · ${escape(s.deployState||s.latestState||'Estado não informado')}</p></div><span class="net-badge">${escape(label(s))}</span></div>
      <div class="net-versions"><div><label>Registrada no Hub</label><strong>${escape(p?.version||'—')}</strong></div><div><label>Publicada</label><strong>${escape(s.metadata?.version||'—')}</strong></div><div><label>Última publicação</label><strong>${escape(date(s.publishedAt))}</strong></div></div>
      <p class="small muted">${p?'Vinculado a '+escape(p.name)+' ('+escape(({manual:'manual',id:'ID',url:'URL',name:'nome',slug:'identificador do site'})[m.method]||'automático')+')':'Ainda não vinculado ao catálogo'} · ${escape(comparison(s,p)||'Sem comparação de versões')}</p>
      ${s.metadata&&!s.metadata.id?'<p class="small muted">Este version.json não informa ID; o Hub pode associá-lo por nome, endereço ou vínculo manual quando não há ambiguidades. Adicione o campo id para maior confiabilidade.</p>':''}
      ${s.metadata?.releaseDate?`<p class="small muted">Data declarada: ${escape(s.metadata.releaseDate)}</p>`:''}
      ${s.metadata?.changelog?.length?`<details><summary>Changelog publicado (${s.metadata.changelog.length})</summary><ul>${s.metadata.changelog.map(t=>`<li>${escape(t)}</li>`).join('')}</ul></details>`:''}
      ${p&&!s.public?`<label class="net-auto-toggle"><input type="checkbox" data-net-auto="${escape(p.id)}" ${enabled?'checked':''}> Atualizar automaticamente este projeto <span class="small muted">(consulta privada)</span></label>`:''}
      ${s.public?'<p class="small muted">Sincronização pública automática ativa; nenhuma chave necessária.</p>':''}
      <div class="net-form-row">${s.public?'':select(s)}
        ${!p?`<button class="btn small" data-net="add" data-site="${escape(s.id)}">Adicionar ao catálogo</button>`:''}
        ${available?updateButton(s,p):''}
        ${url(s.url)?`<a class="btn small" href="${escape(url(s.url))}" target="_blank" rel="noopener noreferrer">Abrir site</a>`:''}
        ${url(s.adminUrl)?`<a class="btn small" href="${escape(url(s.adminUrl))}" target="_blank" rel="noopener noreferrer">Netlify</a>`:''}
        ${s.public?'':`<button class="btn small" data-net="history" data-site="${escape(s.id)}" ${!secret?'disabled':''}>Deploys recentes</button>`}
      </div>
      ${h?`<div class="net-history">${Array.isArray(h)?h.map(d=>`<div class="net-deploy"><strong>${escape(d.state||'—')}</strong> · ${escape(d.context||'—')} · ${escape(date(d.createdAt))} ${escape(d.title||'')}</div>`).join('')||'Sem deploys.':escape(h)}</div>`:''}
    </article>`;
  }
  function view(){
    const sites=visibleSites(), linked=sites.filter(s=>matched(s)).length;
    const pending=sites.filter(s=>core.newer(s,matched(s))).length;
    return `<div class="pagehead"><div><span class="eyebrow">PUBLICAÇÕES E VERSÕES</span><h1>Sincronização Netlify</h1><p>As versões públicas são consultadas automaticamente ao abrir o Hub e a cada 5 minutos, sem chave. As ferramentas avançadas da conta continuam protegidas.</p></div></div>
      <div class="panel net-control"><div class="net-form-row"><div style="flex:1"><strong>Versões públicas · atualização automática</strong><p class="small muted">Última consulta: ${escape(date(publicSnapshot.checkedAt))} · ${publicBusy?'Consultando…':'A consulta ocorre na abertura e a cada 5 minutos com a página aberta.'}</p></div><button class="btn primary" type="button" data-net="public-sync" ${publicBusy?'disabled':''}>${publicBusy?'Verificando…':'Verificar agora'}</button></div>
        ${publicError?`<p role="alert" class="net-error">${escape(publicError)}</p>`:''}
        ${publicSnapshot.ambiguous?.length?`<p class="net-error">Vínculos ambíguos: ${escape(publicSnapshot.ambiguous.join(', '))}. Corrija os identificadores publicados.</p>`:''}
        ${notice?`<p class="net-notice" role="status">${escape(notice)}</p>`:''}
        <details class="net-detail" style="margin-top:12px"><summary>Ferramentas avançadas da conta (requer chave)</summary>
          <p class="small muted">Listar todos os sites da conta, descobrir projetos sem versão pública e consultar deploys exige a HUB_SYNC_KEY. Ela não é salva no navegador. A consulta automática de versões não precisa dela.</p>
          <form id="net-login"><label for="net-key">HUB_SYNC_KEY</label><div class="net-form-row"><input id="net-key" type="password" minlength="32" autocomplete="off" placeholder="Chave para administração" ${secret?'disabled':''}><button class="btn" type="submit" ${busy?'disabled':''}>${busy?'Sincronizando…':secret?'Sincronizar conta':'Conectar conta'}</button><button type="button" class="btn" data-net="disconnect">Desconectar</button></div></form>
          <p class="small muted">${secret?'Conta conectada nesta aba.':'Sem sessão administrativa.'} Última consulta administrativa: ${escape(date(snapshot.checkedAt))}</p>
          ${error?`<p role="alert" class="net-error">${escape(error)}</p>`:''}
        </details></div>
      <div class="statgrid net-stat"><div class="stat"><div class="value">${sites.length}</div><div class="label">Sites encontrados</div></div><div class="stat"><div class="value">${sites.filter(s=>s.metadata).length}</div><div class="label">Versionados</div></div><div class="stat"><div class="value">${linked}</div><div class="label">Vinculados</div></div><div class="stat"><div class="value">${pending}</div><div class="label">Atualizações disponíveis</div></div></div>
      <div class="section-title"><h2 class="h2">Sites descobertos</h2><span class="small muted">Publicações de produção · sem atualizar versões para trás</span></div>
      ${sites.length?sites.map(siteCard).join(''):'<div class="empty">Nenhum site com version.json público associado ao catálogo foi identificado. Os projetos continuam disponíveis no catálogo local.</div>'}
      <div class="panel"><h3>Como funciona a atualização automática</h3><p class="small muted">As versões públicas verificadas entram automaticamente no catálogo local e no histórico, sem chave. A versão publicada é exibida em destaque, inclusive quando existe um rollback; a versão registrada é preservada separadamente e nunca reduzida. A consulta funciona na abertura e a cada 5 minutos com o Hub aberto. Dados pessoais e histórico administrativo do Netlify não são expostos; a sincronização entre navegadores requer um backend próprio.</p></div>`;
  }
  function init(bind){
    api=bind;
    document.addEventListener('submit',e=>{
      if(e.target.id!=='net-login')return;
      e.preventDefault();
      if(!secret){secret=document.getElementById('net-key').value;if(secret.length<32){error='Informe uma chave com pelo menos 32 caracteres.';secret='';api.refresh();return;}}
      sync();
    });
    document.addEventListener('change',e=>{
      const el=e.target,st=api.state();
      if(el.matches('[data-net-map]')){
        const id=el.dataset.netMap,pid=el.value;
        st.settings.netlifyLinks=st.settings.netlifyLinks||{};
        if(pid){for(const [k,v] of Object.entries(st.settings.netlifyLinks))if(v===pid)delete st.settings.netlifyLinks[k];st.settings.netlifyLinks[id]=pid}
        else delete st.settings.netlifyLinks[id];
        api.save();api.refresh();
      }
      if(el.matches('[data-net-auto]')){
        const pid=el.dataset.netAuto;
        if(!st.projects.some(p=>p.id===pid))return;
        st.settings.netlifyAutoUpdateProjects=st.settings.netlifyAutoUpdateProjects||{};
        st.settings.netlifyAutoUpdateProjects[pid]=el.checked;
        api.save();notice=el.checked?'Atualização automática habilitada. Use Sincronizar agora para aplicar a versão publicada.':'Atualização automática desabilitada.';api.refresh();
      }
    });
    document.addEventListener('click',async e=>{
      const b=e.target.closest('[data-net]');if(!b)return;
      const s=visibleSites().find(x=>x.id===b.dataset.site);
      if(b.dataset.net==='disconnect'){
        if(busy)return;
        secret='';snapshot={sites:[],checkedAt:'',total:0};history={};error='';notice='';saveSnapshot();api.refresh();
      }else if(b.dataset.net==='public-sync'){
        syncPublic();
      }else if(b.dataset.net==='add'&&s&&!matched(s)){
        const st=api.state(),id=s.metadata?.id||'netlify-'+s.id;
        if(st.projects.some(p=>p.id===id)){error='O identificador já existe. Utilize o vínculo manual.';api.refresh();return;}
        if(!confirm('Adicionar '+(s.metadata?.name||s.name)+' ao catálogo pessoal?'))return;
        st.projects.push({id,name:s.metadata?.name||s.name,description:'Descoberto pelo Netlify.',category:'Outros',platform:'Notebook e celular',status:'Ativo',version:'',url:url(s.url),folder:id,icon:'cloud',color:'#9edcff',favorite:false,order:st.projects.length});
        st.deletedProjects=st.deletedProjects.filter(x=>x!==id);
        st.settings.netlifyLinks=st.settings.netlifyLinks||{};st.settings.netlifyLinks[s.id]=id;
        api.save();notice='Projeto adicionado. Atualize o catálogo para registrar a versão publicada.';api.refresh();
      }else if(b.dataset.net==='update'&&s){
        const p=matched(s);
        if(!p||!core.newer(s,p))return;
        if(!confirm('Atualizar '+p.name+' de '+(p.version||'sem versão')+' para '+s.metadata.version+' e registrar o lançamento no histórico?'))return;
        updateLocal(s,'manual');api.refresh();
      }else if(b.dataset.net==='history'&&s&&secret){
        history[s.id]='Consultando…';api.refresh();
        try{const d=await request({action:'history',siteId:s.id});history[s.id]=d.deploys}catch(err){history[s.id]=err.message}
        api.refresh();
      }
    });
    setInterval(()=>{if(!document.hidden&&!publicBusy&&Date.now()-lastPublicAttempt>=300000)syncPublic();if(secret&&!busy&&!document.hidden&&Date.now()-lastAttempt>=300000)sync()},30000);
    document.addEventListener('visibilitychange',()=>{if(!document.hidden&&!publicBusy&&Date.now()-lastPublicAttempt>=300000)syncPublic();if(!document.hidden&&secret&&!busy&&Date.now()-lastAttempt>=300000)sync()});
    Promise.resolve().then(()=>syncPublic());
  }
  window.HubNetlify={init,view,info,details,publication,displayVersion};
})();
