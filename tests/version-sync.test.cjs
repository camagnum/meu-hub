'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const sync=require('../assets/version-sync.js');
const makeSite=(version,id='')=>({id:'site-1',name:'fc27-tracker',url:'https://fc27-tracker.netlify.app',hasPublished:true,deployId:'deploy-123',publishedAt:'2026-11-17T02:10:44Z',versionStatus:'ok',metadata:{id,name:'FC 27 Ultimate Tracker',version,releaseDate:'2026-11-16',changelog:['Nova avaliação','Substituições']}});
const project=()=>({id:'fc27-tracker',name:'FC 27 Ultimate Tracker',folder:'fc27-tracker',url:'',version:'v1.75.0',status:'Ativo'});
test('match the real FC Tracker without id using unique name/slug and explicit manual link',()=>{
  let p=project(),s=makeSite('1.75.4');
  assert.equal(sync.match(s,[p],[s],{}).project,p);
  assert.equal(sync.match(s,[p],[s],{}).method,'name');
  assert.equal(sync.match({...s,metadata:{...s.metadata,id:'fc27-tracker'}},[p],[s],{}).method,'id');
  assert.equal(sync.match({...s,name:'another-site',metadata:{...s.metadata,name:'Another Project'}},[p],[s],{'site-1':'fc27-tracker'}).method,'manual');
});
test('do not guess an ambiguous match or steal manually linked projects',()=>{
  const p=project(),s=makeSite('1.75.4');
  assert.equal(sync.match(s,[p,{...p,id:'duplicate',folder:'duplicate'}],[s],{}),null);
  assert.equal(sync.match(s,[p],[s],{'other-site':'fc27-tracker'}),null);
  const other={...s,id:'site-2',name:'fc27-tracker-2'};
  assert.equal(sync.match(s,[p],[s,other],{}),null);
});
test('apply only newer published versions, keep version prefix and register changelog once',()=>{
  const p=project(),s=makeSite('1.75.4'),st={projects:[p],releases:[]};
  assert.equal(sync.newer(s,p),true);
  let result=sync.apply(st,s,p);
  assert.equal(result.updated,true);
  assert.equal(p.version,'v1.75.4');
  assert.equal(st.releases.length,1);
  assert.match(st.releases[0].notes,/Nova avaliação/);
  assert.equal(st.releases[0].date,'2026-11-16');
  assert.equal(st.releases[0].source,'netlify');
  assert.equal(sync.apply(st,s,p).updated,false);
  assert.equal(st.releases.length,1);
  assert.equal(sync.apply(st,makeSite('1.75.2'),p).updated,false);
  assert.equal(p.version,'v1.75.4');
});
test('missing changelog is labeled accurately; preserve existing release notes',()=>{
  const p=project(),s=makeSite('1.75.4');s.metadata.changelog=[];
  const st={projects:[p],releases:[{id:'manual',projectId:p.id,version:'v1.75.4',notes:'Notas do usuário'}]};
  assert.equal(sync.apply(st,s,p).createdRelease,false);
  assert.equal(st.releases.length,1);
  assert.equal(st.releases[0].notes,'Notas do usuário');
  const st2={projects:[project()],releases:[]};
  assert.equal(sync.apply(st2,s,st2.projects[0]).createdRelease,true);
  assert.match(st2.releases[0].notes,/não informado/);
});
test('ignore unverified, old, equal or malformed versions',()=>{
  const p=project(),s=makeSite('1.75.4');
  assert.equal(sync.newer({...s,versionStatus:'missing'},p),false);
  assert.equal(sync.newer({...s,hasPublished:false},p),false);
  assert.equal(sync.newer(makeSite('1.75.0'),p),false);
  assert.equal(sync.newer(makeSite('not-a-version'),p),false);
});
