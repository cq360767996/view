import{_ as c}from"./array.bf0c4971.js";import{u as n,i,k as p,b as d,c as l}from"./echarts.a540ba97.js";import{d as f,P as r,o as u,q as m,cX as _,c_ as v}from"./vendor.bd18f1cd.js";import"./lodash.5864dd39.js";import"./ant-design-vue.b127929a.js";import"./node-forge.a6b0f3f3.js";import"./prettier.da792cf3.js";const b=f({props:{data:{type:Object,default:()=>({type:"static",data:[]})}},setup(a){const t=r(),s=r();n([i,p,d]);const e=()=>{if(!s.value)return;const o={xAxis:{},yAxis:{},series:[{type:"scatter",symbolSize:20}],dataset:{source:a.data.static}};s.value.setOption(o)};return u(()=>{t.value&&(s.value=l(t.value),m(e))}),{scatter:t}}}),j={ref:"scatter",class:"scatter"};function h(a,t,s,e,o,x){return _(),v("div",j,null,512)}var B=c(b,[["render",h]]);export{B as default};
