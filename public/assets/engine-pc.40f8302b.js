import{E as c,s as l,B as p}from"./array.14c25a96.js";import"./node-forge.5968f396.js";import"./ant-design-vue.65af69df.js";import"./echarts.bae9122d.js";import"./lodash.52f79bb2.js";import"./prettier.bc782120.js";import{d as u,t as m,o as f,c_ as o,di as y,F as _,cX as r,d6 as h,u as n,l as g}from"./vendor.58f5c150.js";const b=["z-index"],S=u({props:{id:{type:String,default:()=>""}},setup(d){const a=d,s=m([]);return f(async()=>{if(!a.id)return;const e=await c(a.id);document.title=e.data.title,s.value=e.data.components,document.body.style.width=e.data.width+"px",document.body.style.height=e.data.height+"px"}),(e,v)=>(r(!0),o(_,null,y(s.value,(t,i)=>(r(),o("div",{key:t.id,class:"board-wrapper","z-index":i,style:h(n(l)(t.style))},[g(n(p),{data:t,class:"board-component"},null,8,["data"])],12,b))),128))}});export{S as default};
