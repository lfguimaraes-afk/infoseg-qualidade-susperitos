// Operational values, unit names, coverage relationships and evidence below are fictitious.
// Municipal names/codes and map geometry are official IBGE references.
import {states,score as calculateIQD} from './data.js';

export const DEMO_UFS=[{uf:'PR',id:'41',name:'Paraná'},{uf:'BA',id:'29',name:'Bahia'},{uf:'PA',id:'15',name:'Pará'}];
export const institutions=[
 {id:'PC',name:'Polícia Civil',flow:'Boletins de ocorrência; CT aplicada à rede de delegacias'},
 {id:'PM',name:'Polícia Militar',flow:'Registros de atendimento ostensivo; diagnóstico próprio'},
 {id:'CBM',name:'Corpo de Bombeiros Militar',flow:'Registros de socorro; diagnóstico próprio'},
 {id:'GM',name:'Guarda Municipal',flow:'Registros de atendimento municipal; diagnóstico próprio'}
];
const MUNICIPALITIES={
 PR:[['4106902','Curitiba'],['4100400','Almirante Tamandaré'],['4104253','Campo Magro'],['4113700','Londrina']],
 BA:[['2927408','Salvador'],['2919207','Lauro de Freitas'],['2905701','Camaçari'],['2933307','Vitória da Conquista']],
 PA:[['1501402','Belém'],['1500800','Ananindeua'],['1504422','Marituba'],['1506807','Santarém']]
};
export const COUNT_KEYS=['totalUnits','dailyUnits','localBO','receivedBO','expectedFields','validFields','timelyBO','consistentBO','nullFields','late72BO','rejectedBO','submittedBO'];
export const analyticsMethodology={
 fictitious:true,
 geographicReference:'IBGE, malha simplificada 2022; códigos de municípios conferidos na API de Localidades em 23/10/2026.',
 reconciliation:'Os nove estabelecimentos PC detalhados e o agregado das demais delegacias recompõem exatamente os doze numeradores e denominadores da UF, em todos os ciclos. O residual é um agregado, nunca uma unidade nem participante de ranking.',
 municipalScope:'O município identifica o território dos registros no fluxo demonstrativo; sede e área de atendimento são campos independentes. As unidades multimunicipais têm observações próprias para cada território; sua nota global não é repetida nos municípios.',
 applicability:'IQD somente para grupos de delegacias PC com pelo menos duas unidades. Na delegacia individual a CT é uma situação binária de envio diário e não se aplica IQD unitário. PM, CBM e GM têm diagnóstico por componentes, sem IQD equivalente ou competição entre corporações.',
 syntheticLimits:'As relações territoriais e nomes de unidades não representam organogramas reais. Ausência de dados no recorte demonstrativo não significa inexistência de órgão, desempenho zero ou irregularidade.',
 ranking:'As listas de unidades comparam somente a mesma instituição e perfil de registro, ordenadas pela tempestividade em até 24h. Não atribuem ranking de IQD às unidades individuais. Perfis especializados permanecem separados dos territoriais.',
 stage:'As evidências demonstrativas distinguem registro, validação, transmissão e recepção. O local onde a falha aparece não define, por si, a responsabilidade por sua correção.'
};
const pct=(n,d)=>d?100*n/d:null;
const sum=(rows,key)=>rows.reduce((n,r)=>n+(r[key]||0),0);
const emptyCounts=()=>Object.fromEntries(COUNT_KEYS.map(k=>[k,0]));
const aggregate=rows=>Object.fromEntries(COUNT_KEYS.map(k=>[k,sum(rows,k)]));
const cleanCycle=c=>Math.max(0,Math.min(3,Number.isFinite(Number(c))?Math.trunc(Number(c)):3));
export function municipalitiesFor(uf){return (MUNICIPALITIES[uf]||[]).map(([id,name])=>({id,name,uf}));}

// Integer apportionment with capacities; preserves every numerator, including small tails.
function allocate(total,weights,caps=weights.map(()=>Infinity)){
 const out=weights.map(()=>0);let remaining=total;
 while(remaining>0){
  const eligible=weights.map((w,i)=>({w,i})).filter(x=>out[x.i]<caps[x.i]);
  if(!eligible.length)throw Error(`Insufficient capacity for ${total}`);
  const denominator=eligible.reduce((n,x)=>n+x.w,0)||eligible.length;
  const quotas=eligible.map(x=>{const raw=remaining*(denominator?x.w/denominator:1/eligible.length);return {...x,raw,share:Math.min(caps[x.i]-out[x.i],Math.floor(raw))};});
  let used=0;for(const q of quotas){out[q.i]+=q.share;used+=q.share;}
  remaining-=used;
  if(!remaining)break;
  quotas.sort((a,b)=>(b.raw-Math.floor(b.raw))-(a.raw-Math.floor(a.raw))||a.i-b.i);
  let singles=0;for(const q of quotas){if(remaining&&out[q.i]<caps[q.i]){out[q.i]++;remaining--;singles++;}}
  if(!used&&!singles)throw Error('Apportionment did not progress');
 }
 return out;
}

function unitDefinitions(uf){
 const m=municipalitiesFor(uf),units=[];
 const labels=['Alfa','Beta','Gama','Delta','Épsilon','Zeta','Eta','Teta'];
 const add=(institution,profile,profileName,name,seat,served,number)=>units.push({
  id:`${uf}-${institution}-${String(number).padStart(2,'0')}`,uf,institution,profile,profileName,
  name:`${name} · fictício`,seatMunicipality:m[seat].id,municipalities:served.map(i=>m[i].id),
  regional:`Coordenação ${seat===3?'Interior':'Metropolitana'} · fictícia`,fictitious:true,
  territorialNote:served.length>1?'Uma unidade atende vários municípios; as métricas são recortadas pelas observações de cada território.':'Vínculo territorial exclusivamente demonstrativo.'
 });
 for(let i=0;i<8;i++)add('PC','territorial','Delegacia territorial',`DP Territorial ${labels[i]}`,Math.floor(i/2),[Math.floor(i/2)],i+1);
 add('PC','especializada','Delegacia especializada','DP Especializada Iota',0,[0],9);
 add('PM','ostensivo','Atendimento ostensivo','Batalhão Ostensivo Alfa',0,[0,1,2],1);
 add('PM','ostensivo','Atendimento ostensivo','Batalhão Ostensivo Beta',1,[0,1],2);
 add('PM','ostensivo','Atendimento ostensivo','Batalhão Ostensivo Gama',3,[3],3);
 add('CBM','socorro','Registro de socorro','Grupamento de Socorro Alfa',0,[0,1,2],1);
 add('CBM','socorro','Registro de socorro','Grupamento de Socorro Beta',3,[3],2);
 add('GM','municipal','Atendimento municipal','Unidade Municipal Alfa',0,[0],1);
 add('GM','municipal','Atendimento municipal','Unidade Municipal Beta',1,[1],2);
 return units;
}

function civilCounts(uf,cycle){
 const state=states.find(s=>s.uf===uf).history[cycle];
 const weights=[18,13,12,9,8,7,12,9,6,906];
 const risk=[.55,2.1,.7,2.5,1.1,3.1,.6,1.7,1.4,.98];
 const local=allocate(state.localBO,weights);
 const lossWeights=local.map((v,i)=>v*risk[i]);
 const missing=allocate(state.localBO-state.receivedBO,lossWeights,local);
 const received=local.map((v,i)=>v-missing[i]);
 const expected=received.map(v=>v*8);
 const invalid=allocate(state.expectedFields-state.validFields,expected.map((v,i)=>v*risk[(i+2)%risk.length]),expected);
 const nulls=allocate(state.nullFields,invalid,invalid);
 const late=allocate(state.receivedBO-state.timelyBO,received.map((v,i)=>v*risk[i]),received);
 const late72=allocate(state.late72BO,late,late);
 const inconsistent=allocate(state.receivedBO-state.consistentBO,received.map((v,i)=>v*risk[(i+4)%risk.length]),received);
 const rejected=allocate(state.rejectedBO,received.map((v,i)=>v*risk[(i+1)%risk.length]));
 const daily=Array.from({length:9},(_,i)=>((i+({PR:0,BA:2,PA:4}[uf]))%(cycle===3?7:cycle===2?5:3))===0?0:1);
 daily.push(state.dailyUnits-daily.reduce((a,b)=>a+b,0));
 const total=Array(9).fill(1);total.push(state.totalUnits-9);
 const rows=local.map((localBO,i)=>({totalUnits:total[i],dailyUnits:daily[i],localBO,receivedBO:received[i],expectedFields:expected[i],validFields:expected[i]-invalid[i],timelyBO:received[i]-late[i],consistentBO:received[i]-inconsistent[i],nullFields:nulls[i],late72BO:late72[i],rejectedBO:rejected[i],submittedBO:received[i]+rejected[i]}));
 return {rows:rows.slice(0,9),residual:{id:`${uf}-PC-RESIDUAL`,name:'Demais delegacias e municípios — agregado não individualizado',aggregate:true,rankingEligible:false,counts:rows[9],note:'Agregado necessário à conciliação estadual; não equivale a uma delegacia nem permite atribuir resultado a um município específico.'}};
}

function ownFlowCounts(uf,unit,index,cycle){
 const base={PR:1,BA:1.17,PA:.88}[uf],scale=unit.institution==='PM'?1:unit.institution==='CBM'?.34:.19;
 const localBO=Math.round((1700+index*187+cycle*61)*base*scale);
 const receivedBO=Math.round(localBO*Math.min(.98,.76+cycle*.045-index%3*.032));
 const fields=unit.institution==='PM'?6:unit.institution==='CBM'?5:4;
 const expectedFields=receivedBO*fields,validFields=Math.round(expectedFields*(.83+cycle*.033-index%4*.02));
 const timelyBO=Math.round(receivedBO*(.62+cycle*.075-index%3*.09));
 const consistentBO=Math.round(receivedBO*(.79+cycle*.047-index%3*.026));
 const rejectedBO=Math.round(receivedBO*(.03+index%3*.023));
 return {totalUnits:1,dailyUnits:(index+cycle)%5?1:0,localBO,receivedBO,expectedFields,validFields,timelyBO,consistentBO,nullFields:Math.round((expectedFields-validFields)*.75),late72BO:Math.round((receivedBO-timelyBO)*.65),rejectedBO,submittedBO:receivedBO+rejectedBO};
}

function splitTerritories(counts,unit){
 const weights=unit.municipalities.map((_,i)=>[.50,.31,.19][i]||.1);
 const local=allocate(counts.localBO,weights),missing=allocate(counts.localBO-counts.receivedBO,weights,local);
 const received=local.map((n,i)=>n-missing[i]);
 const fieldFactor=counts.receivedBO?counts.expectedFields/counts.receivedBO:0,expected=received.map(v=>v*fieldFactor);
 const invalid=allocate(counts.expectedFields-counts.validFields,expected,expected),nulls=allocate(counts.nullFields,invalid,invalid);
 // Deliberately different territorial timeliness: the global unit result is not copied.
 const risk=received.map((v,i)=>v*(1+i*.8));
 const late=allocate(counts.receivedBO-counts.timelyBO,risk,received),late72=allocate(counts.late72BO,late,late);
 const inconsistent=allocate(counts.receivedBO-counts.consistentBO,risk,received),rejected=allocate(counts.rejectedBO,weights);
 return unit.municipalities.map((municipality,i)=>({
  id:`${unit.id}-${municipality}`,unitId:unit.id,municipality,institution:unit.institution,
  counts:{totalUnits:i===0?1:0,dailyUnits:i===0?counts.dailyUnits:0,localBO:local[i],receivedBO:received[i],expectedFields:expected[i],validFields:expected[i]-invalid[i],timelyBO:received[i]-late[i],consistentBO:received[i]-inconsistent[i],nullFields:nulls[i],late72BO:late72[i],rejectedBO:rejected[i],submittedBO:received[i]+rejected[i]},
  territorialRole:municipality===unit.seatMunicipality?'Sede e território atendido':'Território atendido; sede em outro município'
 }));
}
const cache=new Map();
export function getAnalyticsData(uf='PR',cycle=3){
 cycle=cleanCycle(cycle);if(!MUNICIPALITIES[uf])return null;
 const key=`${uf}-${cycle}`;if(cache.has(key))return cache.get(key);
 const units=unitDefinitions(uf),civil=civilCounts(uf,cycle),observations=[];
 for(let i=0;i<units.length;i++){
  const u=units[i];u.counts=u.institution==='PC'?civil.rows[i]:ownFlowCounts(uf,u,i,cycle);
  u.dailySending=Boolean(u.counts.dailyUnits);u.modality=['PPE','API existente','Arquivo / base','Coleta assistida'][(i+cycle)%4];
  observations.push(...splitTerritories(u.counts,u));
 }
 const data={uf,cycle,municipalities:municipalitiesFor(uf),units,observations,residual:civil.residual,stateMetrics:states.find(s=>s.uf===uf).history[cycle],fictitious:true};
 cache.set(key,data);return data;
}

export function unitsFor({uf='PR',cycle=3,municipality='',institution='',profile=''}={}){
 return (getAnalyticsData(uf,cycle)?.units||[]).filter(u=>(!municipality||u.municipalities.includes(String(municipality)))&&(!institution||institution==='all'||u.institution===institution)&&(!profile||u.profile===profile));
}
function noData(status,notes=[]){return {status,ct:null,ce:null,cc:null,tm:null,cn:null,score:null,iqdApplicable:false,counts:emptyCounts(),unitsCount:0,dailyUnits:0,scopeLabel:'Sem observações neste recorte demonstrativo',notes,rows:[],dailySending:null};}
export function scopeMetrics({uf='PR',cycle=3,municipality='',institution='PC',unit='',profile=''}={}){
 const data=getAnalyticsData(uf,cycle);if(!data)return noData('not-demonstrated',['Detalhamento disponível somente nas três UFs demonstradoras.']);
 municipality=String(municipality||'');
 if(municipality&&!data.municipalities.some(m=>m.id===municipality))return noData('not-demonstrated',['Município fora do recorte demonstrativo. Não representa nota zero.']);
 const selected=unitsFor({uf,cycle,municipality,institution,profile}).filter(u=>!unit||u.id===unit);
 if(!selected.length)return noData('not-demonstrated',['Não há dados dessa instituição/perfil no recorte. Não indica inexistência da instituição nem desempenho zero.']);
 const ids=new Set(selected.map(u=>u.id));
 const rows=data.observations.filter(o=>ids.has(o.unitId)&&(!municipality||o.municipality===municipality));
 const includeResidual=institution==='PC'&&!municipality&&!unit&&!profile;
 const counts=aggregate(rows.map(o=>o.counts).concat(includeResidual?[data.residual.counts]:[]));
 const singleInstitution=new Set(selected.map(u=>u.institution)).size===1;
 const civil=singleInstitution&&selected[0].institution==='PC';
 const unitsCount=includeResidual?data.stateMetrics.totalUnits:selected.length;
 const dailyUnits=includeResidual?data.stateMetrics.dailyUnits:selected.filter(u=>u.dailySending).length;
 // CT counts unique units once, not one count for each serviced territory.
 counts.totalUnits=unitsCount;counts.dailyUnits=dailyUnits;
 const mixed=!singleInstitution;
 const ct=civil?pct(dailyUnits,unitsCount):null;
 const ce=mixed?null:pct(counts.receivedBO,counts.localBO),cc=mixed?null:pct(counts.validFields,counts.expectedFields),tm=mixed?null:pct(counts.timelyBO,counts.receivedBO),cn=mixed?null:pct(counts.consistentBO,counts.receivedBO);
 const iqdApplicable=civil&&!unit&&unitsCount>=2;
 const metrics={ct,ce,cc,tm,cn};
 const notes=[civil?'CT: delegacias com envio diário / delegacias do recorte; cada unidade é contada uma vez.':'CT e IQD da rede de delegacias não se aplicam a este fluxo.'];
 if(unit)notes.push('Unidade individual: situação de envio diário e componentes; sem IQD unitário.');
 if(includeResidual)notes.push('Inclui o agregado das demais delegacias, conciliado ao consolidado original da UF.');
 else if(civil)notes.push('Recorte demonstrativo: não substitui o consolidado de toda a UF.');
 if(!civil)notes.push('Diagnóstico do próprio fluxo; não somar ao IQD estadual nem comparar corporações.');
 if(selected.some(u=>u.municipalities.length>1))notes.push('Unidades com atendimento multimunicipal: volumes específicos do território selecionado.');
 if(mixed)notes.push('Instituições e fluxos heterogêneos: sem componentes agregados ou ranking entre forças. As contagens misturam registros de fluxos distintos e não representam ocorrências únicas.');
 return {status:'ok',...metrics,score:iqdApplicable?calculateIQD(metrics):null,iqdApplicable,counts,unitsCount,dailyUnits,
  scopeLabel:unit?selected[0].name:municipality?data.municipalities.find(m=>m.id===municipality).name:DEMO_UFS.find(u=>u.uf===uf).name,
  notes,rows,dailySending:unit?selected[0].dailySending:null,
  profile:profile||null,institution:civil?'PC':singleInstitution?selected[0].institution:'all',
  mixed,
  evidenceIds:rows.map(r=>`EVD-FICT-${uf}-${cleanCycle(cycle)+1}-${r.id}`)
 };
}

export function diagnosticsFor(scope={}){
 const {uf='PR',cycle=3}=scope,data=getAnalyticsData(uf,cycle);if(!data)return [];
 const metrics=scopeMetrics(scope);if(metrics.status!=='ok')return [];
 const rowsByUnit=new Map();
 for(const r of metrics.rows){if(!rowsByUnit.has(r.unitId))rowsByUnit.set(r.unitId,[]);rowsByUnit.get(r.unitId).push(r);}
 const items=[];
 for(const [unitId,rows]of rowsByUnit){
  const u=data.units.find(x=>x.id===unitId),c=aggregate(rows.map(r=>r.counts));
  const cases=[
   {stage:'registro',title:'Campos críticos sem preenchimento válido',affected:c.nullFields,measure:'campos nulos',owner:'Gestão da unidade produtora / orientação de preenchimento',detail:'Lote demonstrativo possui campos obrigatórios vazios na origem.'},
   {stage:'validação',title:'Rejeição na validação de carga',affected:c.rejectedBO,measure:'registros rejeitados',owner:'Gestão do leiaute / integração estadual',detail:'Log demonstrativo identifica rejeição de esquema ou taxonomia antes da recepção.'},
   {stage:'transmissão',title:'Fila de transmissão com atraso superior a 72h',affected:c.late72BO,measure:'registros com atraso',owner:'Equipe de integração estadual; confirmação pelo auditor',detail:'Eventos fictícios indicam permanência na fila de integração, após o registro da origem.'},
   {stage:'recepção',title:'Registros da origem ainda não recepcionados',affected:c.localBO-c.receivedBO,measure:'registros pendentes',owner:'Pontos focais estadual e federal; conciliação da recepção',detail:'Diferença conciliada entre extrato fictício da origem e protocolo de recepção; etapa causal exige conferência.'}
  ];
  for(const cse of cases)if(cse.affected>0){const id=`EVD-FICT-${uf}-${cleanCycle(cycle)+1}-${unitId}-${cse.stage.normalize('NFD').replace(/[\u0300-\u036f]/g,'')}`;items.push({id,stage:cse.stage,title:cse.title,affected:cse.affected,measure:cse.measure,unitId,unitName:u.name,institution:u.institution,owner:cse.owner,evidence:`${id}: ${cse.detail} ${cse.affected} ${cse.measure}; ciclo D+${(cleanCycle(cycle)+1)*30}.`,disclaimer:'Evidência e hipótese inteiramente fictícias; associação territorial ou à unidade não equivale, sozinha, à responsabilidade pela falha.',humanValidation:true});}
 }
 const stageOrder=['registro','validação','transmissão','recepção'];
 // Group by stage first. A field count must not outrank a record count numerically.
 return items.sort((a,b)=>stageOrder.indexOf(a.stage)-stageOrder.indexOf(b.stage)||b.affected-a.affected||a.id.localeCompare(b.id));
}

export function peerRows(scope={}){
 const institution=scope.institution||'PC';
 if(institution==='all')return [];
 const profile=scope.profile||(institution==='PC'?'territorial':institution==='PM'?'ostensivo':institution==='CBM'?'socorro':'municipal');
 return unitsFor({...scope,institution,profile}).map(u=>({...u,metrics:scopeMetrics({...scope,institution,profile,unit:u.id}),rank:null,comparison:'TM entre pares do mesmo fluxo; sem IQD unitário'})).sort((a,b)=>(b.metrics.tm??-1)-(a.metrics.tm??-1)||a.id.localeCompare(b.id));
}

const mapCache=new Map();
async function loadMap(key){
 if(!mapCache.has(key))mapCache.set(key,fetch(new URL(`./analytics-map-data/${key}.json`,import.meta.url)).then(r=>{if(!r.ok)throw Error('Não foi possível carregar a malha local. Use os seletores para navegar.');return r.json();}).catch(error=>{mapCache.delete(key);throw error;}));
 return mapCache.get(key);
}
export const getBrazilMap=()=>loadMap('br');
export const getStateMap=uf=>MUNICIPALITIES[uf]?loadMap(uf.toLowerCase()):Promise.resolve(null);
