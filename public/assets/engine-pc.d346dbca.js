import{H as c,s as l,n as p}from"./array.409b52c0.js";import"./node-forge.b43c0005.js";import"./ant-design-vue.85892d4c.js";import"./echarts.e29966f3.js";import"./lodash.7b2b5227.js";import"./prettier.51b320b7.js";import{d as u,t as m,o as _,cY as n,c$ as o,d7 as y,F as f,d5 as h,u as r,k as b}from"./vendor.9e5eac67.js";const g=["z-index"],B=u({props:{id:{type:String,default:()=>""}},setup(d){const a=d,s=m([]);return _(async()=>{if(!a.id)return;const e=await c(a.id);document.title=e.data.title,s.value=e.data.components,document.body.style.width=e.data.width+"px",document.body.style.height=e.data.height+"px"}),(e,v)=>(n(!0),o(f,null,y(s.value,(t,i)=>(n(),o("div",{key:t.id,class:"board-wrapper","z-index":i,style:h(r(l)(t.style))},[b(r(p),{data:t,class:"board-component"},null,8,["data"])],12,g))),128))}});export{B as default};
