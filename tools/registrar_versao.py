#!/usr/bin/env python3
"""Atualiza o catálogo do Meu Hub e o seed offline no mesmo comando.

Exemplo:
 python tools/registrar_versao.py --projeto bahflix --versao v0.5.4 --resumo "Correção no player"
 python tools/registrar_versao.py --projeto meu-novo-app --nome "Meu Novo App" --versao v1.0.0 --resumo "Primeira entrega" --plataforma Celular
"""
import argparse
import datetime
import json
from pathlib import Path
import re

ROOT=Path(__file__).resolve().parents[1]
FEED=ROOT/'data'/'catalogo.json'
SEED=ROOT/'assets'/'seed.js'

def main():
    p=argparse.ArgumentParser(description='Registra apps e versões no Meu Hub')
    p.add_argument('--projeto',required=True,help='ID do projeto, ex.: bahflix')
    p.add_argument('--nome',help='Nome de um projeto novo')
    p.add_argument('--versao',help='Versão publicada, ex.: v0.5.4')
    p.add_argument('--resumo',default='',help='Changelog ou descrição da versão')
    p.add_argument('--tipo',default='Lançamento',help='Lançamento, Correção, Patch, Atualização ou Referência')
    p.add_argument('--data',default=datetime.date.today().isoformat(),help='Data de registro YYYY-MM-DD')
    p.add_argument('--plataforma',default='Notebook e celular')
    p.add_argument('--categoria',default='Outros')
    p.add_argument('--status',default='Ativo')
    p.add_argument('--url',default='')
    p.add_argument('--pasta',default='')
    a=p.parse_args()
    if not re.fullmatch(r'[a-z0-9][a-z0-9_-]{1,60}',a.projeto): p.error('O ID deve ter 2-61 caracteres minúsculos, números, hífen ou underscore')
    if a.versao and not re.fullmatch(r'v?(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)',a.versao):p.error('Formato de versão não reconhecido')
    if a.data:
        try:datetime.date.fromisoformat(a.data)
        except ValueError:p.error('Use YYYY-MM-DD para a data')
    feed=json.loads(FEED.read_text('utf-8'))
    project=next((x for x in feed['projects'] if x['id']==a.projeto),None)
    if not project:
        if not a.nome:p.error('Projeto novo: informe --nome')
        project={'id':a.projeto,'name':a.nome,'description':a.resumo if not a.versao else '', 'category':a.categoria,'platform':a.plataforma,'status':a.status if a.versao else 'Planejado','version':'','url':a.url,'folder':a.pasta,'icon':'grid','color':'#9dd1ec','favorite':False,'order':len(feed['projects'])}
        feed['projects'].append(project)
    elif a.url:project['url']=a.url
    if a.pasta:project['folder']=a.pasta
    if a.versao:
        release_id=f'{a.projeto}-{a.versao}'
        old=next((x for x in feed['releases'] if x['projectId']==a.projeto and x['version']==a.versao),None)
        payload={'id':release_id,'projectId':a.projeto,'version':a.versao,'date':a.data,'type':a.tipo,'notes':a.resumo}
        if old:old.update(payload)
        else:feed['releases'].append(payload)
        def vt(v):
            parts=tuple(int(x) for x in re.findall(r'\d+',v or ''))
            if a.projeto=='fc27-tracker' and 1<=len(parts)<=2 and parts[0]>=2: return (1,parts[0],parts[1] if len(parts)>1 else 0)
            return parts
        if not project.get('version') or vt(a.versao)>=vt(project['version']):
            project['version']=a.versao
            project['status']=a.status
    feed['catalogRevision']=int(feed.get('catalogRevision',0))+1
    feed['generatedAt']=datetime.datetime.now(datetime.timezone.utc).isoformat(timespec='seconds')
    FEED.write_text(json.dumps(feed,ensure_ascii=False,indent=2)+'\n','utf-8')
    SEED.write_text('window.HUB_SEED = '+json.dumps(feed,ensure_ascii=False,separators=(',',':'))+';\n','utf-8')
    print(f"Catálogo atualizado: {project['name']} {a.versao or ''} | revisão {feed['catalogRevision']}")
    print('Arquivos atualizados: data/catalogo.json e assets/seed.js')

if __name__=='__main__': main()
