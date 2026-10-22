// Dados inteiramente sintéticos. Regras alinhadas aos entregáveis finais em 22/10/2026.
export const dimensions = [
 {key:'ct',code:'CT',name:'Cobertura territorial integral',short:'Cobertura territorial',weight:35,definition:'Delegacias com envio diário / total de delegacias da UF × 100. Componente de 35% do IQD nos entregáveis finais.'},
 {key:'cc',code:'CC',name:'Completude de campos críticos',short:'Completude crítica',weight:30,definition:'Preenchimento válido dos campos obrigatórios: qualificação, endereço, meio empregado e armas/veículos. A simulação usa campos válidos / campos esperados × 100.'},
 {key:'tm',code:'TM',name:'Tempestividade em até 24 horas',short:'Envio em até 24h',weight:20,definition:'BOs recepcionados em até 24h da lavratura / BOs recepcionados do período × 100. A janela de 24h segue a Nota Técnica 2.4 e o slide 12, conforme confirmação do grupo.'},
 {key:'cn',code:'CN',name:'Consistência e taxonomia',short:'Consistência e taxonomia',weight:15,definition:'Ausência de erros de parametrização e tratamento dos dados recuperados por IA. Nesta demonstração, registros conformes / registros avaliados × 100; inferências permanecem sujeitas à validação humana.'}
];
export const cycles=['D+30','D+60','D+90','D+120'];
const seed = [
 ['AC','Acre','Norte',68,72,57,70,17],['AL','Alagoas','Nordeste',76,79,62,77,15],
 ['AP','Amapá','Norte',49,54,32,56,21],['AM','Amazonas','Norte',66,70,49,67,19],
 ['BA','Bahia','Nordeste',80,82,68,81,12],['CE','Ceará','Nordeste',79,81,66,80,18],
 ['DF','Distrito Federal','Centro-Oeste',97,96,87,94,9],['ES','Espírito Santo','Sudeste',94,94,84,92,10],
 ['GO','Goiás','Centro-Oeste',93,92,82,91,14],['MA','Maranhão','Nordeste',58,62,40,60,22],
 ['MT','Mato Grosso','Centro-Oeste',83,84,70,82,16],['MS','Mato Grosso do Sul','Centro-Oeste',91,91,80,89,13],
 ['MG','Minas Gerais','Sudeste',89,88,76,87,11],['PA','Pará','Norte',64,68,46,64,23],
 ['PB','Paraíba','Nordeste',77,79,62,77,14],['PR','Paraná','Sul',96,95,86,93,11],
 ['PE','Pernambuco','Nordeste',82,83,69,82,15],['PI','Piauí','Nordeste',62,66,44,62,20],
 ['RJ','Rio de Janeiro','Sudeste',72,75,57,72,14],['RN','Rio Grande do Norte','Nordeste',79,80,64,79,16],
 ['RS','Rio Grande do Sul','Sul',87,88,75,86,13],['RO','Rondônia','Norte',73,76,58,72,18],
 ['RR','Roraima','Norte',56,61,37,59,24],['SC','Santa Catarina','Sul',99,98,94,97,8],
 ['SP','São Paulo','Sudeste',91,90,81,89,10],['SE','Sergipe','Nordeste',70,73,55,70,17],
 ['TO','Tocantins','Norte',84,85,72,83,19]
];
const clamp=n=>Math.max(0,Math.min(100,n));
const pct=(n,d)=>d?100*n/d:0;
const round=n=>Math.round((n+Number.EPSILON)*100)/100;
export const score=x=>round(.35*x.ct+.30*x.cc+.20*x.tm+.15*x.cn);
export const band=x=>x>=85?'Ouro':x>=70?'Prata':x>=50?'Bronze':'Crítico';
export const bandClass=x=>({Ouro:'gold',Prata:'silver',Bronze:'bronze','Crítico':'critical'}[band(x)]);
export const adoptionBonus={status:'A pactuar',applied:false,value:null,authority:'Consinesp',description:'Uso efetivo do PPE e das APIs existentes; regra, limite e reflexo na nota dependem de pactuação. Não aplicado neste ranking.'};
export const deliveryModes=[{key:'ppe',name:'Sinesp-PPE',automatic:true},{key:'api',name:'API existente',automatic:true},{key:'base',name:'Arquivo / base',automatic:false},{key:'assistida',name:'Coleta assistida',automatic:false}];
export const states=seed.map((r,index)=>{
 const [uf,name,region,coverage,cc,tm,cn,gain]=r;
 const history=cycles.map((label,c)=>{
  const remaining=[1,.64,.30,0][c];
  const target={ce:clamp(coverage-gain*remaining*.95),ct:clamp(coverage-2+index%4-gain*remaining*.9),cc:clamp(cc-gain*remaining*.8),tm:clamp(tm-gain*remaining*1.5),cn:clamp(cn-gain*remaining*.7)};
  const totalUnits=80+index*17,dailyUnits=Math.round(totalUnits*target.ct/100);
  const localBO=18000+index*3743+c*525,receivedBO=Math.round(localBO*target.ce/100);
  const expectedFields=receivedBO*8,validFields=Math.round(expectedFields*target.cc/100);
  const timelyBO=Math.round(receivedBO*target.tm/100),consistentBO=Math.round(receivedBO*target.cn/100);
  const dims={ct:pct(dailyUnits,totalUnits),ce:pct(receivedBO,localBO),cc:pct(validFields,expectedFields),tm:pct(timelyBO,receivedBO),cn:pct(consistentBO,receivedBO)};
  const nullFields=Math.min(expectedFields-validFields,Math.round(expectedFields*Math.max(0,100-dims.cc-2)/100));
  const late72BO=Math.min(receivedBO-timelyBO,Math.round((receivedBO-timelyBO)*.8));
  const submittedBO=receivedBO+Math.round(receivedBO*(100-dims.cn)*.007);
  const rejectedBO=submittedBO-receivedBO;
  const modality=deliveryModes[index%4];
  const late72Pct=pct(late72BO,receivedBO);
  const latencyHours=round(late72Pct>50?84+index%4*12:dims.tm>=50?(modality.automatic ? .15+index%4*.1 : 8+index%4*3):32+index%4*8);
  return {...dims,score:score(dims),totalUnits,dailyUnits,localBO,receivedBO,expectedFields,validFields,timelyBO,consistentBO,nullFields,nullFieldsPct:pct(nullFields,expectedFields),late72BO,late72Pct:pct(late72BO,receivedBO),submittedBO,rejectedBO,rejectionPct:pct(rejectedBO,submittedBO),modality,latencyHours,periodDays:30,bonusStatus:adoptionBonus.status,attendance:Math.min(100,Math.round(48+index%7*5+c*7)),focal:true,commitments:6,completedCommitments:Math.min(6,Math.max(1,Math.floor((coverage-35)/14)+c-1)),practices:Math.max(0,Math.floor((index%6+c)/2)),returned:Math.min(12,5+index%4+c),requests:12,uses:340+index*61+c*260,dimensionEvidence:'Numeradores e denominadores sintéticos conciliados'};
 });
 return {uf,name,region,index,history};
});
export function quarterScore(history){
 const sum=k=>history.reduce((s,r)=>s+r[k],0);
 return score({ct:pct(sum('dailyUnits'),sum('totalUnits')),cc:pct(sum('validFields'),sum('expectedFields')),tm:pct(sum('timelyBO'),sum('receivedBO')),cn:pct(sum('consistentBO'),sum('receivedBO'))});
}
export function rowsFor(cycle){
 const rows=states.map(s=>({...s,...s.history[cycle],cycle,delta:round(s.history[cycle].score-s.history[0].score),previous:cycle?s.history[cycle-1].score:s.history[0].score,quarterScore:cycle===3?quarterScore(s.history):null,previousQuarterScore:null}));
 rows.sort((a,b)=>b.score-a.score||a.uf.localeCompare(b.uf));
 return rows.map((r,i)=>({...r,rank:i+1}));
}
export function planSignals(r){
 const signals=[];
 if(r.quarterScore!==null&&r.quarterScore<70)signals.push('IQD quadrimestral abaixo de 70 · Nota 2.5');
 if(r.ct<80)signals.push('Menos de 80% das delegacias com envio diário');
 if(r.nullFieldsPct>30)signals.push('Campos nulos acima de 30% na carga mensal');
 if(r.late72Pct>25&&r.periodDays>=30)signals.push('Latência acima de 72h em mais de 25% dos BOs durante 30 dias');
 if(r.rejectionPct>15)signals.push('Rejeição automatizada de carga acima de 15%');
 return signals;
}
export const needsPlan=r=>planSignals(r).length>0;
export const fiscalProposal=s=>({factor:s>=85?1.2:s>=70?1:s>=50?.85:null,status:'Proposta acadêmica; sem repasse ou suspensão automática'});
const auditUfs=['AP','RR','MA','PI','PA','AM','SE','AC','RJ','SC','DF','SP'];
const stages=['Concluída','Em execução','Contraditório','Planejada'];
export function auditsFor(cycle){return auditUfs.map((uf,i)=>{
 const stageIndex=cycle===3?i%4:Math.min(3,i%4+3-cycle),status=stages[stageIndex],total=21;
 const finished=status==='Concluída'||status==='Contraditório'?21:status==='Planejada'?0:8+i%5;
 return {id:`VER-SIM-${String(i+1).padStart(3,'0')}`,uf,type:i===11?'Extraordinária · incidente simulado':i<9?'Ordinária · por risco':'Ordinária · rodízio',status,owner:'DGI / equipe técnica',reviewer:'DGI / revisão técnica',deadline:cycle===3&&i===1?107:cycle*30+35+i%5*7,late:status==='Em execução'&&i===1&&cycle===3,finished,total,findings:status==='Planejada'?0:2+i%4,critical:status==='Planejada'?0:i<4?1:0,selection:i===11?'Incidente fictício selecionado para exame extraordinário.':i<9?'Seleção demonstrativa por risco; sem inferência para todo o universo.':'Rodízio demonstrativo, com escopo de evidências delimitado.',sample:120+i*17,universe:states.find(s=>s.uf===uf).history[cycle].localBO,phase:status==='Concluída'?'Relatório final e encaminhamentos concluídos':status==='Contraditório'?'Relatório preliminar e manifestação do gestor':status==='Em execução'?'Auditoria de ingestão, acesso e evidências':'Planejamento e delimitação do escopo'};
});}
export function plansFor(cycle){return rowsFor(cycle).filter(needsPlan).map((r,i)=>{
 const total=5+r.index%4,completed=Math.min(total-1,Math.max(1,cycle+1+r.index%2));
 return {uf:r.uf,total,completed,progress:Math.round(completed/total*100),due:`D+${cycle*30+20+i%3*10}`,status:cycle===3&&i===2?'Prazo em revisão':'Em acompanhamento',cause:planSignals(r)[0],signals:planSignals(r),owner:'Ponto focal / UF',federal:'DGI / socorro técnico',confirmed:true};
});}
export const methodologyVersion='Entregáveis finais SUSPeritos · CT35 CC30 TM24h20 CN15 · bônus a pactuar ·22/10/2026';
