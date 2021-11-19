import{l as n,L as s,u as _,_ as h,a as r,b as g}from"./index.7c68b2e4.js";import{d as f,cV as E,k as b,p as F,o as v,cW as j,cX as c,cY as A,cZ as y,l as I,u,c_ as P,c$ as R,d0 as x,d1 as L,d2 as T,d3 as B}from"./vendor.5d3ecb3a.js";import{l as V,C as w}from"./ant-design-vue.06bcb110.js";import"./node-forge.bef54000.js";import"./lodash.1c8524b2.js";import"./echarts.c0cd6df1.js";import"./prettier.685e070b.js";const D=f({setup(e){const{locale:t}=E({useScope:"global"}),a=b(()=>t.value==="cn"?V:null);function p(){t.value=t.value==="en"?"cn":"en"}return F("switchLocale",p),v(async()=>{const o=n.get(s.IS_DARK);_().changeTheme(o?"dark":"light")}),(o,m)=>{const d=j("RouterView");return c(),A(u(w),{locale:u(a)},{default:y(()=>[I(d)]),_:1},8,["locale"])}}}),O={};function k(e,t){return c(),P("div",null,"\u9875\u9762\u4E22\u5931\u4E86")}var C=h(O,[["render",k]]);const q={"../views/manage/masterplate.vue":()=>r(()=>import("./masterplate.a25755ab.js"),["assets/masterplate.a25755ab.js","assets/index.7c68b2e4.js","assets/index.8ebb55f6.css","assets/ant-design-vue.06bcb110.js","assets/ant-design-vue.a1e419e8.css","assets/vendor.5d3ecb3a.js","assets/vendor.7d8b91be.css","assets/lodash.1c8524b2.js","assets/node-forge.bef54000.js","assets/echarts.c0cd6df1.js","assets/prettier.685e070b.js"]),"../views/manage/page.vue":()=>r(()=>import("./page.9a35b419.js"),["assets/page.9a35b419.js","assets/vendor.5d3ecb3a.js","assets/vendor.7d8b91be.css","assets/index.7c68b2e4.js","assets/index.8ebb55f6.css","assets/ant-design-vue.06bcb110.js","assets/ant-design-vue.a1e419e8.css","assets/lodash.1c8524b2.js","assets/node-forge.bef54000.js","assets/echarts.c0cd6df1.js","assets/prettier.685e070b.js"])},l=[];for(const[e,t]of Object.entries(q)){const a=e.match(/manage\/(.*).vue/);(a==null?void 0:a[1])&&l.push({path:a[1],name:a[1],component:t})}const S=[{path:"/",name:"home",redirect:"/manage"},{path:"/login",name:"login",props:e=>({redirect:e.query.redirect}),component:()=>r(()=>import("./index.8f1bd6c4.js"),["assets/index.8f1bd6c4.js","assets/index.2262a0eb.css","assets/index.7c68b2e4.js","assets/index.8ebb55f6.css","assets/ant-design-vue.06bcb110.js","assets/ant-design-vue.a1e419e8.css","assets/vendor.5d3ecb3a.js","assets/vendor.7d8b91be.css","assets/lodash.1c8524b2.js","assets/node-forge.bef54000.js","assets/echarts.c0cd6df1.js","assets/prettier.685e070b.js","assets/string.c75e005a.js","assets/promise.aa1a7cc9.js"])},{path:"/editor/:id?",name:"editor",props:!0,meta:{requiresAuth:!0},component:()=>r(()=>import("./index.bf5474cb.js"),["assets/index.bf5474cb.js","assets/index.3cb91146.css","assets/index.7c68b2e4.js","assets/index.8ebb55f6.css","assets/ant-design-vue.06bcb110.js","assets/ant-design-vue.a1e419e8.css","assets/vendor.5d3ecb3a.js","assets/vendor.7d8b91be.css","assets/lodash.1c8524b2.js","assets/node-forge.bef54000.js","assets/echarts.c0cd6df1.js","assets/prettier.685e070b.js","assets/codemirror.3fb3f64a.js","assets/string.c75e005a.js"])},{path:"/manage",name:"manage",meta:{requiresAuth:!0},redirect:"/manage/page",component:()=>r(()=>import("./index.983055c4.js"),["assets/index.983055c4.js","assets/index.9a4dbc1b.css","assets/index.7c68b2e4.js","assets/index.8ebb55f6.css","assets/ant-design-vue.06bcb110.js","assets/ant-design-vue.a1e419e8.css","assets/vendor.5d3ecb3a.js","assets/vendor.7d8b91be.css","assets/lodash.1c8524b2.js","assets/node-forge.bef54000.js","assets/echarts.c0cd6df1.js","assets/prettier.685e070b.js","assets/string.c75e005a.js","assets/promise.aa1a7cc9.js"]),children:l},{path:"/:pathMatch(.*)*",name:"404",component:C}],i=R({routes:S,history:x("/")});i.beforeEach(e=>{if(e.meta.requiresAuth&&!n.get(s.AUTHORIZATION))return{path:"/login",query:{redirect:e.fullPath}}});const H={cn:{placeholder:{select:"\u8BF7\u9009\u62E9"},gallery:{carousel:"\u8F6E\u64AD\u56FE",headline:"\u6807\u9898",input:"\u8F93\u5165\u6846",bar:"\u67F1\u72B6\u56FE",funnel:"\u6F0F\u6597\u56FE",gauge:"\u7801\u8868\u56FE",line:"\u7EBF\u6027\u56FE",pie:"\u73AF\u5F62\u56FE",radar:"\u96F7\u8FBE\u56FE",scatter:"\u6563\u70B9\u56FE",tree:"\u6811\u56FE"}},en:{placeholder:{select:"Please Select"},gallery:{carousel:"Carousel",headline:"Headline",input:"Input",bar:"Bar",funnel:"Funnel",gauge:"Gauge",line:"Line",pie:"Pie",radar:"Radar",scatter:"Scatter",tree:"Tree"}}};const N=async()=>{const e=L(D);e.use(T()),await g(e),e.use(B({legacy:!1,locale:"cn",messages:H})).use(i).mount("#app")};N();export{H as g};
