import{_ as n}from"./index.7c68b2e4.js";import{u as c,i,e as u,b as p,c as l}from"./echarts.c0cd6df1.js";import{d,P as r,o as f,q as m,cX as g,c_ as _}from"./vendor.5d3ecb3a.js";import"./ant-design-vue.06bcb110.js";import"./lodash.1c8524b2.js";import"./node-forge.bef54000.js";import"./prettier.685e070b.js";const v=d({props:{data:{type:Object,default:()=>({type:"static",data:[]})}},setup(a){const e=r(),t=r();c([i,u,p]);const s=()=>{if(!t.value)return;const o={series:[{name:"Pressure",type:"gauge",detail:{formatter:"{value}"}}],dataset:{source:a.data.static}};t.value.setOption(o)};return f(()=>{e.value&&(t.value=l(e.value),m(s))}),{gauge:e}}}),b={ref:"gauge",class:"gauge"};function j(a,e,t,s,o,h){return g(),_("div",b,null,512)}var E=n(v,[["render",j]]);export{E as default};
