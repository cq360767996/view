import{_ as i}from"./index.8809d89e.js";import{u as r,i as l,d as u,b as d,c as p}from"./echarts.f57a768c.js";import{d as c,P as n,o as f,q as m,c_ as b,d1 as h}from"./vendor.9534d2d2.js";import"./ant-design-vue.9519012f.js";import"./lodash.302558bb.js";import"./node-forge.63442816.js";import"./prettier.76eabaa4.js";const _=c({props:{data:{type:Object,default:()=>({type:"static",data:[]})}},setup(a){const e=n(),t=n();r([l,u,d]);const s=()=>{if(!t.value)return;const o={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},legend:{data:["\u5C55\u73B0","\u70B9\u51FB","\u8BBF\u95EE","\u54A8\u8BE2","\u8BA2\u5355"]},series:[{name:"\u6F0F\u6597\u56FE",type:"funnel",left:"10%",top:60,bottom:60,width:"80%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"descending",gap:2,label:{show:!0,position:"inside"},labelLine:{length:10,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{fontSize:20}}}],dataset:{source:a.data.static}};t.value.setOption(o)};return f(()=>{e.value&&(t.value=p(e.value),m(s))}),{funnel:e}}}),v={ref:"funnel",class:"funnel"};function B(a,e,t,s,o,g){return b(),h("div",v,null,512)}var S=i(_,[["render",B]]);export{S as default};
