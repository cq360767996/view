import{_ as n}from"./index.0aa95df3.js";import{u as c,i,k as p,b as l,c as d}from"./echarts.abad894d.js";import{d as f,s as r,o as u,n as m,cV as _,cY as v}from"./vendor.ec269a17.js";import"./ant-design-vue.a2b6f06b.js";import"./lodash.f14311af.js";import"./node-forge.38760642.js";import"./prettier.97963628.js";const j=f({props:{data:{type:Object,default:()=>({type:"static",data:[]})}},setup(e){const t=r(),s=r();c([i,p,l]);const a=()=>{if(!s.value)return;const o={xAxis:{},yAxis:{},series:[{type:"scatter",symbolSize:20}],dataset:{source:e.data.static}};s.value.setOption(o)};return u(()=>{t.value&&(s.value=d(t.value),m(a))}),{scatter:t}}}),h={ref:"scatter",class:"scatter"};function x(e,t,s,a,o,b){return _(),v("div",h,null,512)}var B=n(j,[["render",x]]);export{B as default};