import{_ as i}from"./array.c6fe6417.js";import{u as r,i as l,d as u,b as d,c as f}from"./echarts.6d889a97.js";import{d as c,P as n,o as p,q as m,cW as b,cZ as h}from"./vendor.2f48f3fc.js";import"./lodash.5864dd39.js";import"./ant-design-vue.690beb7d.js";import"./node-forge.a6b0f3f3.js";import"./prettier.da792cf3.js";const _=c({props:{data:{type:Object,default:()=>({type:"static",data:[]})}},setup(a){const e=n(),t=n();r([l,u,d]);const s=()=>{if(!t.value)return;const o={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},legend:{data:["\u5C55\u73B0","\u70B9\u51FB","\u8BBF\u95EE","\u54A8\u8BE2","\u8BA2\u5355"]},series:[{name:"\u6F0F\u6597\u56FE",type:"funnel",left:"10%",top:60,bottom:60,width:"80%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"descending",gap:2,label:{show:!0,position:"inside"},labelLine:{length:10,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{fontSize:20}}}],dataset:{source:a.data.static}};t.value.setOption(o)};return p(()=>{e.value&&(t.value=f(e.value),m(s))}),{funnel:e}}}),v={ref:"funnel",class:"funnel"};function B(a,e,t,s,o,g){return b(),h("div",v,null,512)}var S=i(_,[["render",B]]);export{S as default};