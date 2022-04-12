import{l as s,L as c,u as _,_ as g,a as r,b as h,c as E}from"./array.04226416.js";import{d as F,d3 as f,j as v,p as y,o as A,d4 as w,d5 as i,d6 as B,d7 as b,k as I,u as n,d8 as L,d9 as P,da as R,db as T,dc as C,dd as D}from"./vendor.4ece90b7.js";import{C as O,l as V}from"./ant-design-vue.a569c6dc.js";import"./node-forge.c306b4f9.js";import"./lodash.39fce032.js";import"./echarts.149512d0.js";import"./prettier.16e1de69.js";const k={cn:{confirm:{warning:"\u8B66\u544A",tip:"\u662F\u5426\u8981\u5220\u9664\u8BE5\u7EC4\u4EF6\uFF1F"},placeholder:{select:"\u8BF7\u9009\u62E9"},gallery:{carousel:"\u8F6E\u64AD\u56FE",headline:"\u6807\u9898",input:"\u8F93\u5165\u6846",bar:"\u67F1\u72B6\u56FE",funnel:"\u6F0F\u6597\u56FE",gauge:"\u7801\u8868\u56FE",line:"\u7EBF\u6027\u56FE",pie:"\u73AF\u5F62\u56FE",radar:"\u96F7\u8FBE\u56FE",scatter:"\u6563\u70B9\u56FE",tree:"\u6811\u56FE",group:"\u7EC4\u5BB9\u5668"}},en:{confirm:{warning:"warning",tip:"Are you sure to delete this component?"},placeholder:{select:"Please Select"},gallery:{carousel:"Carousel",headline:"Headline",input:"Input",bar:"Bar",funnel:"Funnel",gauge:"Gauge",line:"Line",pie:"Pie",radar:"Radar",scatter:"Scatter",tree:"Tree",group:"Group"}}},G=F({setup(e){const{locale:t}=f({useScope:"global"}),a=v(()=>t.value==="cn"?V:void 0);function o(){t.value=t.value==="en"?"cn":"en"}return y("switchLocale",o),A(async()=>{const u=s.get(c.IS_DARK);_().changeTheme(u?"dark":"light")}),(u,m)=>{const d=w("RouterView");return i(),B(n(O),{locale:n(a)},{default:b(()=>[I(d)]),_:1},8,["locale"])}}}),S={};function q(e,t){return i(),L("div",null,"\u9875\u9762\u4E22\u5931\u4E86")}var x=g(S,[["render",q]]);const j={"../views/manage/masterplate.vue":()=>r(()=>import("./masterplate.de0db2a5.js"),["assets/masterplate.de0db2a5.js","assets/array.04226416.js","assets/array.f1c7730f.css","assets/vendor.4ece90b7.js","assets/vendor.278b8c1f.css","assets/lodash.39fce032.js","assets/ant-design-vue.a569c6dc.js","assets/ant-design-vue.c2dd0316.css","assets/node-forge.c306b4f9.js","assets/echarts.149512d0.js","assets/prettier.16e1de69.js"]),"../views/manage/page.vue":()=>r(()=>import("./page.4a95cae0.js"),["assets/page.4a95cae0.js","assets/vendor.4ece90b7.js","assets/vendor.278b8c1f.css","assets/array.04226416.js","assets/array.f1c7730f.css","assets/lodash.39fce032.js","assets/ant-design-vue.a569c6dc.js","assets/ant-design-vue.c2dd0316.css","assets/node-forge.c306b4f9.js","assets/echarts.149512d0.js","assets/prettier.16e1de69.js"])},l=[];for(const[e,t]of Object.entries(j)){const a=e.match(/manage\/(.*).vue/);a!=null&&a[1]&&l.push({path:a[1],name:a[1],component:t})}const H=[{path:"/",name:"home",redirect:"/manage"},{path:"/login",name:"login",props:e=>({redirect:e.query.redirect}),component:()=>r(()=>import("./index.4bc02b18.js"),["assets/index.4bc02b18.js","assets/index.5c9b3bf7.css","assets/array.04226416.js","assets/array.f1c7730f.css","assets/vendor.4ece90b7.js","assets/vendor.278b8c1f.css","assets/lodash.39fce032.js","assets/ant-design-vue.a569c6dc.js","assets/ant-design-vue.c2dd0316.css","assets/node-forge.c306b4f9.js","assets/echarts.149512d0.js","assets/prettier.16e1de69.js","assets/string.b1db5bdc.js","assets/promise.aa1a7cc9.js"])},{path:"/editor/:id?",name:"editor",props:!0,meta:{requiresAuth:!0},component:()=>r(()=>import("./index.f1e4ddcc.js"),["assets/index.f1e4ddcc.js","assets/index.461a64e3.css","assets/logo.b4054013.js","assets/array.04226416.js","assets/array.f1c7730f.css","assets/vendor.4ece90b7.js","assets/vendor.278b8c1f.css","assets/lodash.39fce032.js","assets/ant-design-vue.a569c6dc.js","assets/ant-design-vue.c2dd0316.css","assets/node-forge.c306b4f9.js","assets/echarts.149512d0.js","assets/prettier.16e1de69.js","assets/codemirror.0d54f0b1.js","assets/string.b1db5bdc.js"])},{path:"/manage",name:"manage",meta:{requiresAuth:!0},redirect:"/manage/page",component:()=>r(()=>import("./index.ae4df472.js"),["assets/index.ae4df472.js","assets/index.051907cc.css","assets/logo.b4054013.js","assets/array.04226416.js","assets/array.f1c7730f.css","assets/vendor.4ece90b7.js","assets/vendor.278b8c1f.css","assets/lodash.39fce032.js","assets/ant-design-vue.a569c6dc.js","assets/ant-design-vue.c2dd0316.css","assets/node-forge.c306b4f9.js","assets/echarts.149512d0.js","assets/prettier.16e1de69.js","assets/string.b1db5bdc.js","assets/promise.aa1a7cc9.js"]),children:l},{path:"/:pathMatch(.*)*",name:"404",component:x}],p=P({routes:H,history:R("/")});p.beforeEach(e=>{if(e.meta.requiresAuth&&!s.get(c.AUTHORIZATION))return{path:"/login",query:{redirect:e.fullPath}}});async function N(){const e=T(G);e.use(C()),e.use(D({legacy:!1,locale:"cn",messages:k})),e.use(p),await K(e),e.mount("#app")}async function K(e){const{list:t,group:a}=await h(e),o=E();o.setGroup(a),o.setList(t)}N();
