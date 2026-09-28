/* Synthetic values only. Shared by both views; no network or production integration. */
(function(root) {
const DATA=[{p:1,ns:16.2,budget:16.7,pc:38.2,dio:36,dso:33,dpo:24,quality:1.1},{p:2,ns:16.9,budget:17.2,pc:39.1,dio:37,dso:33,dpo:24,quality:1.3},{p:3,ns:17.5,budget:17.9,pc:38.8,dio:35,dso:33,dpo:24,quality:1.0},{p:4,ns:17.5,budget:18.1,pc:39.4,dio:37,dso:34,dpo:24,quality:1.5},{p:5,ns:17.8,budget:18.3,pc:40.0,dio:38,dso:34,dpo:24,quality:1.2},{p:6,ns:18.4,budget:19.0,pc:39.1304347826,dio:42,dso:33,dpo:24,quality:1.6}];
DATA.forEach(d=>{d.cogs=d.ns*(1-d.pc/100);d.contribution=d.ns-d.cogs;d.ccc=d.dio+d.dso-d.dpo});

const sum=(rows,key)=>rows.reduce((total,row)=>total+row[key],0);
function contextFor(period) {
if (!['p5','p6','ytd'].includes(period)) throw new Error('Unsupported sample period');
const idx=period==='p5'?4:5,last=DATA[idx],previous=DATA[idx-1],rows=period==='ytd'?DATA: [last],trailing=DATA.slice(idx-2,idx+1),ns=sum(rows,'ns'),cogs=sum(rows,'cogs'),quality=sum(rows,'quality'),budget=sum(rows,'budget'),contribution=ns-cogs,rollingSales=sum(trailing,'ns'),rollingCOGS=sum(trailing,'cogs');return {...last,ns,cogs,quality,budget,contribution,pc:contribution/ns*100,previous,idx,rows,trailing,rollingSales,rollingCOGS,inventory:last.dio*rollingCOGS/90,ar:last.dso*rollingSales/90,ap:last.dpo*rollingCOGS/90,label:period==='ytd'?'YTD · P1–P6':`Period ${last.p}`,snapshot:`P${last.p}`,window:`P${last.p-2}–P${last.p}`,chartRows:DATA.slice(0,idx+1)}
}
root.PortfolioAnalytics = Object.freeze({ DATA: Object.freeze(DATA.map(Object.freeze)), contextFor });
})(globalThis);
