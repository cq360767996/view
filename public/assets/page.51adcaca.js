import{t as k,o as w,d as y,dt as D,cV as F,k as v,cY as C,cZ as c,u as a,cX as j,D as u,dn as s,dj as d,l as B}from"./vendor.bd18f1cd.js";import{g as M,c as b,d as x}from"./array.6061dcee.js";import"./node-forge.a6b0f3f3.js";import"./echarts.a540ba97.js";import"./lodash.5864dd39.js";import{m as l,a as E,D as A}from"./ant-design-vue.af6cfadf.js";import"./prettier.da792cf3.js";const P=()=>{const r=k([]),e=async()=>{const t=await M();t.code===0?r.value=t.data:l.error("\u670D\u52A1\u5668\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF5E")};return w(e),{pages:r,getAllPage:e}};function m(r){r.__i18n=r.__i18n||[],r.__i18n.push({locale:"",resource:{en:{author:e=>{const{normalize:t}=e;return t(["author"])},view:e=>{const{normalize:t}=e;return t(["view"])},delete:e=>{const{normalize:t}=e;return t(["delete"])},description:e=>{const{normalize:t}=e;return t(["description"])},title:e=>{const{normalize:t}=e;return t(["title"])},pageMode:e=>{const{normalize:t}=e;return t(["pageMode"])},width:e=>{const{normalize:t}=e;return t(["width"])},height:e=>{const{normalize:t}=e;return t(["height"])},action:e=>{const{normalize:t}=e;return t(["action"])}},cn:{author:e=>{const{normalize:t}=e;return t(["\u4F5C\u8005"])},view:e=>{const{normalize:t}=e;return t(["\u67E5\u770B"])},delete:e=>{const{normalize:t}=e;return t(["\u5220\u9664"])},description:e=>{const{normalize:t}=e;return t(["\u63CF\u8FF0"])},title:e=>{const{normalize:t}=e;return t(["\u6807\u9898"])},pageMode:e=>{const{normalize:t}=e;return t(["\u6A21\u5F0F"])},width:e=>{const{normalize:t}=e;return t(["\u5BBD"])},height:e=>{const{normalize:t}=e;return t(["\u9AD8"])},action:e=>{const{normalize:t}=e;return t(["\u64CD\u4F5C"])}}}})}const V=["onClick"],N=["onClick"],$=y({setup(r){const{pages:e,getAllPage:t}=P(),_=D(),{t:o}=F(),z=v(()=>b([{title:o("author"),key:"author"},{title:o("description"),key:"description"},{title:o("title"),key:"title"},{title:o("pageMode"),key:"pageMode"},{title:o("width"),key:"width"},{title:o("height"),key:"height"},{title:o("action"),key:"action"}])),p=i=>{_.push({path:`/editor/${i}`,params:{id:i}})},h=async i=>{(await x(i)).code===0?(l.success("\u5220\u9664\u6210\u529F\u3002"),t()):l.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF5E")};return(i,g)=>(j(),C(a(E),{bordered:"",size:"small","data-source":a(e),columns:a(z),"row-key":"_id"},{width:c(({text:n})=>[u(s(n)+"px ",1)]),height:c(({text:n})=>[u(s(n)+"px ",1)]),action:c(({record:n})=>[d("a",{onClick:f=>p(n._id)},s(a(o)("view")),9,V),B(a(A),{type:"vertical"}),d("a",{onClick:f=>h(n._id)},s(a(o)("delete")),9,N)]),_:1},8,["data-source","columns"]))}});typeof m=="function"&&m($);export{$ as default};
