import{E as i,s as l,B as p}from"./index.4cb62cae.js";import"./node-forge.bef54000.js";import"./ant-design-vue.06bcb110.js";import"./echarts.c0cd6df1.js";import"./lodash.1c8524b2.js";import"./prettier.685e070b.js";import{d as u,t as m,o as _,c_ as o,dp as y,F as f,cX as d,dc as b,u as n,l as h}from"./vendor.5d3ecb3a.js";const g=["z-index"],S=u({props:{id:{type:String,default:()=>""}},setup(r){const a=r,s=m([]);return _(async()=>{if(!a.id)return;const e=await i(a.id);document.title=e.data.title,s.value=e.data.components,document.body.style.width=e.data.width+"px",document.body.style.height=e.data.height+"px"}),(e,x)=>(d(!0),o(f,null,y(s.value,(t,c)=>(d(),o("div",{key:t.id,class:"board-wrapper","z-index":c,style:b(n(l)(t.style))},[h(n(p),{data:t,class:"board-component"},null,8,["data"])],12,g))),128))}});export{S as default};
