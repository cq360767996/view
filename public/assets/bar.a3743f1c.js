import{_ as c}from"./array.ba4c8e62.js";import{u as n,i,a as p,b as l,c as f}from"./echarts.3ce280c0.js";import{d as u,P as r,o as d,q as m,cX as _,c_ as b}from"./vendor.1aa60481.js";import"./lodash.52f79bb2.js";import"./ant-design-vue.2c5e11f6.js";import"./node-forge.5968f396.js";import"./prettier.bc782120.js";const v=u({props:{data:{type:Object,default:()=>({type:"static",data:[]})}},setup(e){const t=r(),a=r();n([i,p,l]);const s=()=>{if(!a.value)return;const o={xAxis:{type:"category"},yAxis:{type:"value"},series:[{type:"bar"}],dataset:{source:e.data.static}};a.value.setOption(o)};return d(()=>{t.value&&(a.value=f(t.value),m(s))}),{bar:t}}}),j={ref:"bar",class:"bar"};function y(e,t,a,s,o,h){return _(),b("div",j,null,512)}var B=c(v,[["render",y]]);export{B as default};
