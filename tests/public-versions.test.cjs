'use strict';
const test=require('node:test');const assert=require('node:assert/strict');
const {handler,parseMetadata,match}=require('../netlify/functions/hub-public-versions.cjs')._test;
const response=(data,status=200)=>new Response(JSON.stringify(data),{status});
const app=(name,id)=>({id, name, published_deploy:{id:'dpl-12345'+id,published_at:'2026-11-19T10:00:00Z'}});
const req={httpMethod:'GET'};
const mockVersions={
  'fc27-tracker':{name:'FC 27 Ultimate Tracker',version:'1.82.0',releaseDate:'2026-11-19',changelog:['Revisão do elenco'],unexpectedSecret:'unsafe'},
  'meu-hub':{id:'meu-hub',name:'Meu Hub',version:'2.2.0'},
  'not-cataloged':{id:'hidden-private',name:'Unknown',version:'1.0.0'}
};
test('public endpoint needs server token but never asks for browser key or accepts POST',async()=>{
  const never=()=>{throw Error('should not fetch')};
  assert.equal((await handler(req,{},never)).statusCode,503);
  assert.equal((await handler({httpMethod:'POST'},{NETLIFY_ACCESS_TOKEN:'test'},never)).statusCode,405);
});
test('metadata accepts old format without id but rejects malformed versions and fields',()=>{
  assert.equal(parseMetadata({name:'FC 27 Ultimate Tracker',version:'1.75.4'}).id,'');
  assert.equal(parseMetadata({name:'X',version:'bad'}),null);
  assert.equal(parseMetadata({name:'X',version:'1.0.0',id:'bad/id'}),null);
  assert.equal(match({name:'FC 27 Ultimate Tracker',id:'',version:'1.75.4'},'fc27-tracker').id,'fc27-tracker');
  assert.equal(match({name:'Nós+',id:'',version:'2.9.4'},'nos-plus').id,'nos-mais');
});
test('returns only uniquely matched PUBLIC versions, never leaks account inventory, ids or token',async()=>{
  const calls=[];
  const fetcher=async(url,opts)=>{
    calls.push({url,auth:opts.headers.Authorization,redirect:opts.redirect});
    if(url.startsWith('https://api.netlify.com/'))return response([app('fc27-tracker','1'),app('meu-hub','2'),app('not-cataloged','3'),app('protected-site','4')]);
    const name=new URL(url).hostname.split('.')[0].split('--').at(-1);
    if(name==='protected-site')return response({message:'Unauthorized'},401);
    return response(mockVersions[name]);
  };
  const r=await handler(req,{NETLIFY_ACCESS_TOKEN:'SENSITIVE-TOKEN'},fetcher);
  assert.equal(r.statusCode,200);
  const body=JSON.parse(r.body);
  assert.deepEqual(body.sites.map(x=>x.projectId),['fc27-tracker','meu-hub']);
  assert.equal(body.sites[0].metadata.id,'fc27-tracker');
  assert.equal(body.sites[0].metadata.version,'1.82.0');
  for(const forbidden of ['SENSITIVE-TOKEN','not-cataloged','protected-site','unexpectedSecret','dpl-12345','netlify_access_token'])assert.ok(!r.body.includes(forbidden),forbidden);
  assert.ok(calls.slice(1).every(x=>!x.auth&&x.redirect==='error'));
  assert.equal(r.headers['Cache-Control'].includes('public'),true);
});
test('two public sites claiming a single project do not yield a guessed version',async()=>{
  const fetcher=async u=>u.startsWith('https://api.netlify.com')?response([app('fc27-tracker','1'),app('second-tracker','2')]):response({id:'fc27-tracker',name:'FC 27 Ultimate Tracker',version:'1.82.0'});
  const r=JSON.parse((await handler(req,{NETLIFY_ACCESS_TOKEN:'x'},fetcher)).body);
  assert.equal(r.sites.length,0);assert.deepEqual(r.ambiguous,['fc27-tracker']);
});
test('failed upstream token never reveals upstream response or tokens',async()=>{
  const r=await handler(req,{NETLIFY_ACCESS_TOKEN:'secret-token'},async()=>response({token:'secret-token'},403));
  assert.equal(r.statusCode,502);assert.ok(!r.body.includes('secret-token'));
});

test('private production is never exposed even when its permalink is publicly readable',async()=>{
  const mock=async(u)=>u.startsWith('https://api.netlify.com')?response([app('fc27-tracker','1')]):u==='https://fc27-tracker.netlify.app/version.json'?response({message:'Authentication required'},401):response({id:'fc27-tracker',name:'FC 27 Ultimate Tracker',version:'1.82.0'});
  const r=JSON.parse((await handler(req,{NETLIFY_ACCESS_TOKEN:'x'},mock)).body);
  assert.deepEqual(r.sites,[]);
});
