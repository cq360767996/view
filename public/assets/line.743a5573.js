import{_ as r}from"./array.bf0c4971.js";import{u as i,i as c,f as l,b as p,c as d}from"./echarts.a540ba97.js";import{d as f,P as n,o as u,q as m,cX as _,c_ as v}from"./vendor.bd18f1cd.js";import"./lodash.5864dd39.js";import"./ant-design-vue.b127929a.js";import"./node-forge.a6b0f3f3.js";import"./prettier.da792cf3.js";const j=f({props:{data:{type:Object,default:()=>({type:"static",data:[]})}},setup(a){const t=n(),e=n();i([c,l,p]);const s=()=>{if(!e.value)return;const o={xAxis:{type:"category"},yAxis:{type:"value"},series:[{type:"line"}],dataset:{source:a.data.static}};e.value.setOption(o)};return u(()=>{t.value&&(e.value=d(t.value),m(s))}),{line:t}}}),y={ref:"line",class:"line"};function b(a,t,e,s,o,h){return _(),v("div",y,null,512)}var B=r(j,[["render",b]]);export{B as default};
