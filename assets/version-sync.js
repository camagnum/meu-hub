/* Pure helpers for reconciling live Netlify releases with the local Hub catalog. */
(function(root, factory) {
  const value = factory();
  if (typeof module === 'object' && module.exports) module.exports = value;
  if (root) root.HubVersionSync = value;
})(typeof window !== 'undefined' ? window : null, function() {
  'use strict';
  const canonical = v => String(v || '').trim().replace(/^v/i, '');
  const validVersion = v => /^v?\d+(?:\.\d+){1,3}(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(String(v || ''));
  const normalizeName = v => String(v || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const origin = v => { try { const u = new URL(v); return u.protocol === 'https:' ? u.origin : ''; } catch { return ''; } };
  const compare = (a, b) => {
    const pa = canonical(a).split(/[+-]/,1)[0].split('.').map(Number), pb = canonical(b).split(/[+-]/,1)[0].split('.').map(Number);
    for(let i=0; i < Math.max(pa.length,pb.length); i++) if ((pa[i]||0)!==(pb[i]||0)) return (pa[i]||0)>(pb[i]||0)?1:-1;
    return 0;
  };
  // Explicit links win; automatic links require a UNIQUE, non-conflicting candidate.
  function match(site, projects, sites, explicitLinks={}) {
    if (!site?.id || !Array.isArray(projects)) return null;
    const named = id => projects.find(p=>p.id===id) || null;
    const explicit = explicitLinks[site.id];
    if (explicit) { const p=named(explicit); return p ? {project:p,method:'manual'} : null; }
    const claimed = new Set(Object.entries(explicitLinks).filter(([sid])=>sid!==site.id).map(([,pid])=>pid));
    const available = p => !claimed.has(p.id);
    const unique = predicate => {
      const matches=projects.filter(p=>available(p)&&predicate(p));
      if (matches.length!==1) return null;
      const p=matches[0];
      // A different site advertising the same ID/name/domain is ambiguous.
      const competing=(sites||[]).some(other=>other.id!==site.id && !explicitLinks[other.id] && (
        (site.metadata?.id && other.metadata?.id===site.metadata.id) ||
        (site.metadata?.name && other.metadata?.name && normalizeName(other.metadata.name)===normalizeName(site.metadata.name)) && normalizeName(p.name)===normalizeName(site.metadata.name) ||
        (origin(site.url) && origin(site.url)===origin(other.url))
      ));
      return competing ? null : p;
    };
    if (site.metadata?.id) {
      const byId=unique(p=>p.id===site.metadata.id);
      if(byId) return {project:byId,method:'id'};
      return null; // A declared but unknown/ambiguous ID must not be guessed by weaker rules.
    }
    if (origin(site.url)) {
      const byUrl=unique(p=>origin(p.url)&&origin(p.url)===origin(site.url));
      if(byUrl) return {project:byUrl,method:'url'};
    }
    // Missing 'id' is common in older version.json files; names still need to be exact and unique.
    if (site.metadata?.name) {
      if (projects.filter(p=>available(p)&&normalizeName(p.name)===normalizeName(site.metadata.name)).length>1) return null;
      const byName=unique(p=>normalizeName(p.name)===normalizeName(site.metadata.name));
      if(byName) return {project:byName,method:'name'};
      if((sites||[]).some(other=>other.id!==site.id&&!explicitLinks[other.id]&&normalizeName(other.metadata?.name)===normalizeName(site.metadata.name)))return null;
    }
    const slug=normalizeName(site.name);
    if(slug) {
      const bySlug=unique(p=>[p.id,p.folder].some(s=>normalizeName(s)===slug));
      if(bySlug) return {project:bySlug,method:'slug'};
    }
    return null;
  }
  function newer(site, project) {
    return !!(site?.hasPublished && site.versionStatus==='ok' && site.metadata?.version && validVersion(site.metadata.version) && project && (!validVersion(project.version) || compare(site.metadata.version,project.version)>0));
  }
  function apply(state, site, project) {
    if(!state || !site || !project || !state.projects.includes(project) || !newer(site,project)) return {updated:false,reason:'not_newer'};
    const published=site.metadata.version;
    const version=(String(project.version||'').startsWith('v') && !published.startsWith('v')) ? 'v'+published : published;
    const date=/^\d{4}-\d{2}-\d{2}$/.test(site.metadata.releaseDate||'') ? site.metadata.releaseDate : /^\d{4}-\d{2}-\d{2}/.test(site.publishedAt||'') ? site.publishedAt.slice(0,10) : new Date().toISOString().slice(0,10);
    const notes=Array.isArray(site.metadata.changelog) && site.metadata.changelog.length ? site.metadata.changelog.map(x=>'• '+String(x).slice(0,300)).join('\n') : 'Versão detectada no Netlify; changelog não informado no version.json.';
    const previous=project.version;
    const exists=state.releases.some(r=>r.projectId===project.id&&canonical(r.version)===canonical(published));
    if(!exists) state.releases.push({id:'netlify-'+project.id+'-'+canonical(published).replace(/[^a-zA-Z0-9.-]/g,'-'),projectId:project.id,version,date,type:'Atualização',notes,source:'netlify',siteId:site.id,deployId:site.deployId||''});
    project.version=version;
    if(project.status==='Planejado'||project.status==='Backlog')project.status='Ativo';
    return {updated:true,projectId:project.id,previous,version,createdRelease:!exists};
  }
  return {canonical,validVersion,normalizeName,compare,match,newer,apply};
});
