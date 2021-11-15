import{l as a,L as i,u as z,_ as d,a as o,b as p}from"./array.ba4c8e62.js";import{d as h,cV as g,k as f,o as v,cW as w,cX as s,cY as y,cZ as j,l as A,u as l,c_ as P,c$ as b,d0 as E,d1 as x,d2 as I,d3 as R}from"./vendor.1aa60481.js";import{l as T,C as V}from"./ant-design-vue.2c5e11f6.js";import"./node-forge.5968f396.js";import"./lodash.52f79bb2.js";import"./echarts.3ce280c0.js";import"./prettier.bc782120.js";const D=h({setup(e){const{locale:r}=g({useScope:"global"}),n=f(()=>r.value==="cn"?T:null);return v(async()=>{const t=a.get(i.IS_DARK);z().changeTheme(t?"dark":"light")}),(t,u)=>{const _=w("RouterView");return s(),y(l(V),{locale:l(n)},{default:j(()=>[A(_)]),_:1},8,["locale"])}}}),O={};function k(e,r){return s(),P("div",null,"\u9875\u9762\u4E22\u5931\u4E86")}var L=d(O,[["render",k]]);const C={"../views/manage/masterplate.vue":()=>o(()=>import("./masterplate.b6682df2.js"),["assets/masterplate.b6682df2.js","assets/array.ba4c8e62.js","assets/array.2e296517.css","assets/vendor.1aa60481.js","assets/vendor.7d8b91be.css","assets/lodash.52f79bb2.js","assets/ant-design-vue.2c5e11f6.js","assets/ant-design-vue.fd22b5b6.css","assets/node-forge.5968f396.js","assets/echarts.3ce280c0.js","assets/prettier.bc782120.js"]),"../views/manage/page.vue":()=>o(()=>import("./page.d6f54597.js"),["assets/page.d6f54597.js","assets/vendor.1aa60481.js","assets/vendor.7d8b91be.css","assets/array.ba4c8e62.js","assets/array.2e296517.css","assets/lodash.52f79bb2.js","assets/ant-design-vue.2c5e11f6.js","assets/ant-design-vue.fd22b5b6.css","assets/node-forge.5968f396.js","assets/echarts.3ce280c0.js","assets/prettier.bc782120.js"])},m=[];for(const[e,r]of Object.entries(C)){const n=e.match(/manage\/(.*).vue/);(n==null?void 0:n[1])&&m.push({path:n[1],name:n[1],component:r})}const M=[{path:"/",name:"home",redirect:"/manage"},{path:"/login",name:"login",props:e=>({redirect:e.query.redirect}),component:()=>o(()=>import("./index.c689f252.js"),["assets/index.c689f252.js","assets/index.5b8f418b.css","assets/array.ba4c8e62.js","assets/array.2e296517.css","assets/vendor.1aa60481.js","assets/vendor.7d8b91be.css","assets/lodash.52f79bb2.js","assets/ant-design-vue.2c5e11f6.js","assets/ant-design-vue.fd22b5b6.css","assets/node-forge.5968f396.js","assets/echarts.3ce280c0.js","assets/prettier.bc782120.js","assets/string.b9a7e01b.js","assets/promise.aa1a7cc9.js"])},{path:"/editor/:id?",name:"editor",props:!0,meta:{requiresAuth:!0},component:()=>o(()=>import("./index.0d4f719f.js"),["assets/index.0d4f719f.js","assets/index.3cb91146.css","assets/array.ba4c8e62.js","assets/array.2e296517.css","assets/vendor.1aa60481.js","assets/vendor.7d8b91be.css","assets/lodash.52f79bb2.js","assets/ant-design-vue.2c5e11f6.js","assets/ant-design-vue.fd22b5b6.css","assets/node-forge.5968f396.js","assets/echarts.3ce280c0.js","assets/prettier.bc782120.js","assets/codemirror.d686cd27.js","assets/string.b9a7e01b.js"])},{path:"/manage",name:"manage",meta:{requiresAuth:!0},redirect:"/manage/page",component:()=>o(()=>import("./index.44591d07.js"),["assets/index.44591d07.js","assets/index.7ce1661f.css","assets/array.ba4c8e62.js","assets/array.2e296517.css","assets/vendor.1aa60481.js","assets/vendor.7d8b91be.css","assets/lodash.52f79bb2.js","assets/ant-design-vue.2c5e11f6.js","assets/ant-design-vue.fd22b5b6.css","assets/node-forge.5968f396.js","assets/echarts.3ce280c0.js","assets/prettier.bc782120.js","assets/string.b9a7e01b.js","assets/promise.aa1a7cc9.js"]),children:m},{path:"/:pathMatch(.*)*",name:"404",component:L}],c=b({routes:M,history:E("/")});c.beforeEach(e=>{if(e.meta.requiresAuth&&!a.get(i.AUTHORIZATION))return{path:"/login",query:{redirect:e.fullPath}}});var q={cn:{lang:e=>{const{normalize:r}=e;return r(["English"])},exit:e=>{const{normalize:r}=e;return r(["\u9000\u51FA"])},password:{modify:e=>{const{normalize:r}=e;return r(["\u4FEE\u6539\u5BC6\u7801"])},old:e=>{const{normalize:r}=e;return r(["\u539F\u5BC6\u7801"])},new:e=>{const{normalize:r}=e;return r(["\u65B0\u5BC6\u7801"])},confirm:e=>{const{normalize:r}=e;return r(["\u786E\u8BA4\u5BC6\u7801"])}},validator:{empty:e=>{const{normalize:r}=e;return r(["\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\u3002"])},length:e=>{const{normalize:r}=e;return r(["\u5BC6\u7801\u9700\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u957F\u5EA6\u57286~18\u4E4B\u95F4\u3002"])},consistent:e=>{const{normalize:r}=e;return r(["\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4\u3002"])}},author:e=>{const{normalize:r}=e;return r(["\u4F5C\u8005"])},view:e=>{const{normalize:r}=e;return r(["\u67E5\u770B"])},delete:e=>{const{normalize:r}=e;return r(["\u5220\u9664"])},description:e=>{const{normalize:r}=e;return r(["\u63CF\u8FF0"])},title:e=>{const{normalize:r}=e;return r(["\u6807\u9898"])},pageMode:e=>{const{normalize:r}=e;return r(["\u6A21\u5F0F"])},width:e=>{const{normalize:r}=e;return r(["\u5BBD"])},height:e=>{const{normalize:r}=e;return r(["\u9AD8"])},action:e=>{const{normalize:r}=e;return r(["\u64CD\u4F5C"])}},en:{lang:e=>{const{normalize:r}=e;return r(["\u4E2D\u6587"])},exit:e=>{const{normalize:r}=e;return r(["exit"])},password:{modify:e=>{const{normalize:r}=e;return r(["Modify Password"])},old:e=>{const{normalize:r}=e;return r(["Old"])},new:e=>{const{normalize:r}=e;return r(["New"])},confirm:e=>{const{normalize:r}=e;return r(["Confirm"])}},validator:{empty:e=>{const{normalize:r}=e;return r(["Password is empty."])},length:e=>{const{normalize:r}=e;return r(["Password should start with alphabet, length should be in 6 to 18."])},consistent:e=>{const{normalize:r}=e;return r(["Passwords are inconsistent."])}},author:e=>{const{normalize:r}=e;return r(["Author"])},view:e=>{const{normalize:r}=e;return r(["View"])},delete:e=>{const{normalize:r}=e;return r(["Delete"])},description:e=>{const{normalize:r}=e;return r(["Description"])},title:e=>{const{normalize:r}=e;return r(["Title"])},pageMode:e=>{const{normalize:r}=e;return r(["PageMode"])},width:e=>{const{normalize:r}=e;return r(["Width"])},height:e=>{const{normalize:r}=e;return r(["Height"])},action:e=>{const{normalize:r}=e;return r(["Action"])}}};const N=async()=>{const e=x(D),r=I({legacy:!1,locale:"cn",messages:q});await p(e),e.use(r).use(c).use(R()).mount("#app")};N();
