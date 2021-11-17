import{l as s,L as n,u as _,_ as h,a as o,b as f}from"./index.8809d89e.js";import{d as g,cY as v,k as j,p as A,o as E,cZ as b,c_ as c,c$ as y,d0 as I,l as R,u as i,d1 as x,d2 as L,d3 as P,d4 as T,d5 as w,d6 as O}from"./vendor.9534d2d2.js";import{l as V,C as k}from"./ant-design-vue.9519012f.js";import"./node-forge.63442816.js";import"./lodash.302558bb.js";import"./echarts.f57a768c.js";import"./prettier.76eabaa4.js";const D=g({setup(e){const{locale:t}=v({useScope:"global"}),a=j(()=>t.value==="cn"?V:null);function u(){t.value=t.value==="en"?"cn":"en"}return A("switchLocale",u),E(async()=>{const r=s.get(n.IS_DARK);_().changeTheme(r?"dark":"light")}),(r,l)=>{const d=b("RouterView");return c(),y(i(k),{locale:i(a)},{default:I(()=>[R(d)]),_:1},8,["locale"])}}}),q={};function C(e,t){return c(),x("div",null,"\u9875\u9762\u4E22\u5931\u4E86")}var B=h(q,[["render",C]]);const N={"../views/manage/masterplate.vue":()=>o(()=>import("./masterplate.ee674af9.js"),["assets/masterplate.ee674af9.js","assets/index.8809d89e.js","assets/index.8ebb55f6.css","assets/ant-design-vue.9519012f.js","assets/ant-design-vue.a1e419e8.css","assets/vendor.9534d2d2.js","assets/vendor.7d8b91be.css","assets/lodash.302558bb.js","assets/node-forge.63442816.js","assets/echarts.f57a768c.js","assets/prettier.76eabaa4.js"]),"../views/manage/page.vue":()=>o(()=>import("./page.773ee157.js"),["assets/page.773ee157.js","assets/vendor.9534d2d2.js","assets/vendor.7d8b91be.css","assets/index.8809d89e.js","assets/index.8ebb55f6.css","assets/ant-design-vue.9519012f.js","assets/ant-design-vue.a1e419e8.css","assets/lodash.302558bb.js","assets/node-forge.63442816.js","assets/echarts.f57a768c.js","assets/prettier.76eabaa4.js"])},p=[];for(const[e,t]of Object.entries(N)){const a=e.match(/manage\/(.*).vue/);(a==null?void 0:a[1])&&p.push({path:a[1],name:a[1],component:t})}const S=[{path:"/",name:"home",redirect:"/manage"},{path:"/login",name:"login",props:e=>({redirect:e.query.redirect}),component:()=>o(()=>import("./index.ed1629e7.js"),["assets/index.ed1629e7.js","assets/index.2262a0eb.css","assets/index.8809d89e.js","assets/index.8ebb55f6.css","assets/ant-design-vue.9519012f.js","assets/ant-design-vue.a1e419e8.css","assets/vendor.9534d2d2.js","assets/vendor.7d8b91be.css","assets/lodash.302558bb.js","assets/node-forge.63442816.js","assets/echarts.f57a768c.js","assets/prettier.76eabaa4.js","assets/string.83eb2cb7.js","assets/promise.aa1a7cc9.js"])},{path:"/editor/:id?",name:"editor",props:!0,meta:{requiresAuth:!0},component:()=>o(()=>import("./index.54eb82b8.js"),["assets/index.54eb82b8.js","assets/index.3cb91146.css","assets/index.8809d89e.js","assets/index.8ebb55f6.css","assets/ant-design-vue.9519012f.js","assets/ant-design-vue.a1e419e8.css","assets/vendor.9534d2d2.js","assets/vendor.7d8b91be.css","assets/lodash.302558bb.js","assets/node-forge.63442816.js","assets/echarts.f57a768c.js","assets/prettier.76eabaa4.js","assets/codemirror.ca03adc8.js","assets/string.83eb2cb7.js"])},{path:"/manage",name:"manage",meta:{requiresAuth:!0},redirect:"/manage/page",component:()=>o(()=>import("./index.54f2a2c7.js"),["assets/index.54f2a2c7.js","assets/index.9a4dbc1b.css","assets/index.8809d89e.js","assets/index.8ebb55f6.css","assets/ant-design-vue.9519012f.js","assets/ant-design-vue.a1e419e8.css","assets/vendor.9534d2d2.js","assets/vendor.7d8b91be.css","assets/lodash.302558bb.js","assets/node-forge.63442816.js","assets/echarts.f57a768c.js","assets/prettier.76eabaa4.js","assets/string.83eb2cb7.js","assets/promise.aa1a7cc9.js"]),children:p},{path:"/:pathMatch(.*)*",name:"404",component:B}],m=L({routes:S,history:P("/")});m.beforeEach(e=>{if(e.meta.requiresAuth&&!s.get(n.AUTHORIZATION))return{path:"/login",query:{redirect:e.fullPath}}});const $=async()=>{const e=T(D);e.use(w()),await f(e),e.use(O({legacy:!1,locale:"cn"})).use(m).mount("#app")};$();
