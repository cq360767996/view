import{l as u,L as s,u as _,_ as g,a as r,b as f,c as h}from"./array.e81239c1.js";import{d as E,cY as F,j as v,p as y,o as j,cZ as A,c_ as c,c$ as b,d0 as B,k as w,u as i,d1 as I,d2 as L,d3 as P,d4 as R,d5 as T,d6 as x}from"./vendor.aebf5efd.js";import{C,l as D}from"./ant-design-vue.a6e02813.js";import"./node-forge.8d25fd16.js";import"./lodash.ca867d26.js";import"./echarts.f47e2d7b.js";import"./prettier.0c7bff8d.js";const O={cn:{confirm:{warning:"\u8B66\u544A",tip:"\u662F\u5426\u8981\u5220\u9664\u8BE5\u7EC4\u4EF6\uFF1F"},placeholder:{select:"\u8BF7\u9009\u62E9"},gallery:{carousel:"\u8F6E\u64AD\u56FE",headline:"\u6807\u9898",input:"\u8F93\u5165\u6846",bar:"\u67F1\u72B6\u56FE",funnel:"\u6F0F\u6597\u56FE",gauge:"\u7801\u8868\u56FE",line:"\u7EBF\u6027\u56FE",pie:"\u73AF\u5F62\u56FE",radar:"\u96F7\u8FBE\u56FE",scatter:"\u6563\u70B9\u56FE",tree:"\u6811\u56FE",group:"\u7EC4\u5BB9\u5668"}},en:{confirm:{warning:"warning",tip:"Are you sure to delete this component?"},placeholder:{select:"Please Select"},gallery:{carousel:"Carousel",headline:"Headline",input:"Input",bar:"Bar",funnel:"Funnel",gauge:"Gauge",line:"Line",pie:"Pie",radar:"Radar",scatter:"Scatter",tree:"Tree",group:"Group"}}},V=E({setup(e){const{locale:t}=F({useScope:"global"}),a=v(()=>t.value==="cn"?D:void 0);function o(){t.value=t.value==="en"?"cn":"en"}return y("switchLocale",o),j(async()=>{const n=u.get(s.IS_DARK);_().changeTheme(n?"dark":"light")}),(n,d)=>{const m=A("RouterView");return c(),b(i(C),{locale:i(a)},{default:B(()=>[w(m)]),_:1},8,["locale"])}}}),k={};function G(e,t){return c(),I("div",null,"\u9875\u9762\u4E22\u5931\u4E86")}var S=g(k,[["render",G]]);const q={"../views/manage/masterplate.vue":()=>r(()=>import("./masterplate.8143fcac.js"),["assets/masterplate.8143fcac.js","assets/array.e81239c1.js","assets/array.c6c48634.css","assets/vendor.aebf5efd.js","assets/vendor.266bc503.css","assets/lodash.ca867d26.js","assets/ant-design-vue.a6e02813.js","assets/ant-design-vue.14443ef1.css","assets/node-forge.8d25fd16.js","assets/echarts.f47e2d7b.js","assets/prettier.0c7bff8d.js"]),"../views/manage/page.vue":()=>r(()=>import("./page.373de28e.js"),["assets/page.373de28e.js","assets/vendor.aebf5efd.js","assets/vendor.266bc503.css","assets/array.e81239c1.js","assets/array.c6c48634.css","assets/lodash.ca867d26.js","assets/ant-design-vue.a6e02813.js","assets/ant-design-vue.14443ef1.css","assets/node-forge.8d25fd16.js","assets/echarts.f47e2d7b.js","assets/prettier.0c7bff8d.js"])},l=[];for(const[e,t]of Object.entries(q)){const a=e.match(/manage\/(.*).vue/);(a==null?void 0:a[1])&&l.push({path:a[1],name:a[1],component:t})}const H=[{path:"/",name:"home",redirect:"/manage"},{path:"/login",name:"login",props:e=>({redirect:e.query.redirect}),component:()=>r(()=>import("./index.ba4f4d66.js"),["assets/index.ba4f4d66.js","assets/index.2262a0eb.css","assets/array.e81239c1.js","assets/array.c6c48634.css","assets/vendor.aebf5efd.js","assets/vendor.266bc503.css","assets/lodash.ca867d26.js","assets/ant-design-vue.a6e02813.js","assets/ant-design-vue.14443ef1.css","assets/node-forge.8d25fd16.js","assets/echarts.f47e2d7b.js","assets/prettier.0c7bff8d.js","assets/string.90f922c2.js","assets/promise.aa1a7cc9.js"])},{path:"/editor/:id?",name:"editor",props:!0,meta:{requiresAuth:!0},component:()=>r(()=>import("./index.e5fe62d1.js"),["assets/index.e5fe62d1.js","assets/index.3cb91146.css","assets/logo.b4054013.js","assets/array.e81239c1.js","assets/array.c6c48634.css","assets/vendor.aebf5efd.js","assets/vendor.266bc503.css","assets/lodash.ca867d26.js","assets/ant-design-vue.a6e02813.js","assets/ant-design-vue.14443ef1.css","assets/node-forge.8d25fd16.js","assets/echarts.f47e2d7b.js","assets/prettier.0c7bff8d.js","assets/codemirror.c95d415a.js","assets/string.90f922c2.js"])},{path:"/manage",name:"manage",meta:{requiresAuth:!0},redirect:"/manage/page",component:()=>r(()=>import("./index.f9dfb38b.js"),["assets/index.f9dfb38b.js","assets/index.9a4dbc1b.css","assets/logo.b4054013.js","assets/array.e81239c1.js","assets/array.c6c48634.css","assets/vendor.aebf5efd.js","assets/vendor.266bc503.css","assets/lodash.ca867d26.js","assets/ant-design-vue.a6e02813.js","assets/ant-design-vue.14443ef1.css","assets/node-forge.8d25fd16.js","assets/echarts.f47e2d7b.js","assets/prettier.0c7bff8d.js","assets/string.90f922c2.js","assets/promise.aa1a7cc9.js"]),children:l},{path:"/:pathMatch(.*)*",name:"404",component:S}],p=L({routes:H,history:P("/")});p.beforeEach(e=>{if(e.meta.requiresAuth&&!u.get(s.AUTHORIZATION))return{path:"/login",query:{redirect:e.fullPath}}});async function N(){const e=R(V);e.use(T()),e.use(x({legacy:!1,locale:"cn",messages:O})),e.use(p),await $(e),e.mount("#app")}async function $(e){const{list:t,group:a}=await f(e),o=h();o.setGroup(a),o.setList(t)}N();
