import{G as c,s as l,B as p}from"./index.8b89fc1d.js";import"./node-forge.38760642.js";import"./ant-design-vue.a8154fe3.js";import"./echarts.21e99673.js";import"./lodash.f14311af.js";import"./prettier.97963628.js";import{d as u,t as m,o as f,cY as o,db as y,F as _,cV as n,d9 as h,u as d,k as g}from"./vendor.ff91a360.js";const x=["z-index"],S=u({props:{id:{type:String,default:()=>""}},setup(r){const a=r,s=m([]);return f(async()=>{if(!a.id)return;const e=await c(a.id);document.title=e.data.title,s.value=e.data.components,document.body.style.width=e.data.width+"px",document.body.style.height=e.data.height+"px"}),(e,v)=>(n(!0),o(_,null,y(s.value,(t,i)=>(n(),o("div",{key:t.id,class:"board-wrapper","z-index":i,style:h(d(l)(t.style))},[g(d(p),{data:t,class:"board-component"},null,8,["data"])],12,x))),128))}});export{S as default};
