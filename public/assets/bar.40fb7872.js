import{_ as n}from"./array.6061dcee.js";import{u as c,i,a as p,b as d,c as f}from"./echarts.a540ba97.js";import{d as l,P as r,o as u,q as m,cX as _,c_ as b}from"./vendor.bd18f1cd.js";import"./lodash.5864dd39.js";import"./ant-design-vue.af6cfadf.js";import"./node-forge.a6b0f3f3.js";import"./prettier.da792cf3.js";const v=l({props:{data:{type:Object,default:()=>({type:"static",data:[]})}},setup(e){const t=r(),a=r();c([i,p,d]);const s=()=>{if(!a.value)return;const o={xAxis:{type:"category"},yAxis:{type:"value"},series:[{type:"bar"}],dataset:{source:e.data.static}};a.value.setOption(o)};return u(()=>{t.value&&(a.value=f(t.value),m(s))}),{bar:t}}}),j={ref:"bar",class:"bar"};function y(e,t,a,s,o,h){return _(),b("div",j,null,512)}var B=n(v,[["render",y]]);export{B as default};
