import{_ as r}from"./array.4626e544.js";import{u as i,i as c,f as l,b as p,c as d}from"./echarts.2c7d4ddc.js";import{d as f,P as n,o as u,q as m,cX as _,c_ as v}from"./vendor.c1777180.js";import"./lodash.52f79bb2.js";import"./ant-design-vue.83e8893e.js";import"./node-forge.5968f396.js";import"./prettier.bc782120.js";const j=f({props:{data:{type:Object,default:()=>({type:"static",data:[]})}},setup(s){const e=n(),t=n();i([c,l,p]);const a=()=>{if(!t.value)return;const o={xAxis:{type:"category"},yAxis:{type:"value"},series:[{type:"line"}],dataset:{source:s.data.static}};t.value.setOption(o)};return u(()=>{e.value&&(t.value=d(e.value),m(a))}),{line:e}}}),y={ref:"line",class:"line"};function h(s,e,t,a,o,x){return _(),v("div",y,null,512)}var B=r(j,[["render",h]]);export{B as default};
