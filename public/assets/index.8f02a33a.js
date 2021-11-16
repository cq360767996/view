import{x as Q,l as M,L as O,u as ee,_ as se,r as oe}from"./array.4626e544.js";import{e as U}from"./string.bb6fd376.js";import{t as F}from"./promise.aa1a7cc9.js";import{e1 as V,e2 as re,d as B,df as ae,dz as ne,e3 as te,cV as $,t as x,r as N,cX as p,c_ as R,d5 as f,l as n,cZ as t,D as k,da as w,u as o,cY as v,db as le,dW as ie,d8 as S,F as A,cW as de,d7 as ue,d9 as ce,e4 as me,e5 as pe,e6 as _e,e7 as fe}from"./vendor.c1777180.js";import{F as D,B as we,u as K,v as y,A as ve,w as ge,n as I,I as j,M as ze,m as C,L as ke,x as ye,y as be,z as Pe}from"./ant-design-vue.83e8893e.js";import"./main.f8461c3a.js";import"./lodash.52f79bb2.js";import"./node-forge.5968f396.js";import"./echarts.2c7d4ddc.js";import"./prettier.bc782120.js";const he="user",$e=i=>Q(`${he}/changePassword`,i),xe=[{key:"page",icon:V},{key:"masterplate",icon:re}];function T(i){i.__i18n=i.__i18n||[],i.__i18n.push({locale:"",resource:{cn:{exit:s=>{const{normalize:e}=s;return e(["\u9000\u51FA\u767B\u5F55"])},password:s=>{const{normalize:e}=s;return e(["\u5BC6\u7801"])},back:s=>{const{normalize:e}=s;return e(["\u8FD4\u56DE\u7BA1\u7406\u9875"])},dialog:{modify:s=>{const{normalize:e,linked:r}=s;return e(["\u4FEE\u6539",r("password")])},old:s=>{const{normalize:e,linked:r}=s;return e(["\u539F",r("password")])},new:s=>{const{normalize:e,linked:r}=s;return e(["\u65B0",r("password")])},confirm:s=>{const{normalize:e,linked:r}=s;return e(["\u786E\u8BA4",r("password")])}},validator:{empty:s=>{const{normalize:e,linked:r}=s;return e([r("password\u4E0D\u80FD\u4E3A\u7A7A\u3002")])},length:s=>{const{normalize:e,linked:r}=s;return e([r("password\u9700\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u957F\u5EA6\u57286~18\u4E4B\u95F4\u3002")])},consistent:s=>{const{normalize:e}=s;return e(["\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4\u3002"])}},message:{success:{edit:s=>{const{normalize:e}=s;return e(["\u4FEE\u6539\u6210\u529F"])},logout:s=>{const{normalize:e,linked:r}=s;return e(["\u5DF2",r("exit")])}}}},en:{exit:s=>{const{normalize:e}=s;return e(["Exit Login"])},password:s=>{const{normalize:e}=s;return e(["Password"])},back:s=>{const{normalize:e}=s;return e(["Back"])},dialog:{modify:s=>{const{normalize:e,linked:r}=s;return e(["Modify ",r("password")])},old:s=>{const{normalize:e}=s;return e(["Old"])},new:s=>{const{normalize:e}=s;return e(["New"])},confirm:s=>{const{normalize:e}=s;return e(["Confirm"])}},validator:{empty:s=>{const{normalize:e,linked:r}=s;return e([r("password")," is empty."])},length:s=>{const{normalize:e,linked:r}=s;return e([r("password")," should start with alphabet, length should be in 6 to 18."])},consistent:s=>{const{normalize:e}=s;return e(["Passwords are inconsistent."])}},message:{success:{edit:s=>{const{normalize:e}=s;return e(["Success"])},exit:s=>{const{normalize:e,linked:r}=s;return e([r("exit")," Success"])}}}}}})}const Se={class:"header-right"},Ie={class:"exit-dropdown"},je={class:"header-right_span"},q=B({setup(i){const s=M.get(O.USER_INFO),e=s?ae.parse(s):{},r=ne(),b=te(),m=ee(),{locale:g,t:u}=$({useScope:"global"}),{t:d}=$({useScope:"local"}),z=x(!1);function H(){g.value=g.value==="en"?"cn":"en"}const c=N({password:"",newPassword:"",confirmPassword:""}),P=async(_,a)=>a?/^[a-zA-Z]\w{5,17}$/.test(a)?Promise.resolve():Promise.reject(d("validator.length")):Promise.reject(d("validator.empty")),W=N({password:[{required:!0,validator:P,trigger:"blur"}],newPassword:[{required:!0,validator:P,trigger:"blur"}],confirmPassword:[{required:!0,validator:async(_,a)=>{const[l]=await F(P(_,a));return l?Promise.reject(l):a!==c.newPassword?Promise.reject(d("validator.consistent")):Promise.resolve()},trigger:"blur"}]}),{resetFields:X,validate:Y,validateInfos:h}=D.useForm(c,W),G=async()=>{const[_]=await F(Y());if(_)return;const a=U(c.password),l=U(c.newPassword),L=await $e({password:a,newPassword:l});L.code===0?(z.value=!1,C.success(d("message.success.edit"))):C.error(L.msg)},J=()=>{M.remove(O.AUTHORIZATION),r.push(`/login?redirect=${b.path}`),C.success(d("message.success.logout"))};return(_,a)=>(p(),R(A,null,[f("div",Se,[n(o(we),{onClick:a[0]||(a[0]=l=>H())},{default:t(()=>[k(w(o(u)("lang")),1)]),_:1}),n(o(ge),null,{overlay:t(()=>[n(o(K),null,{default:t(()=>[n(o(y),{key:"0",onClick:a[1]||(a[1]=l=>z.value=!0)},{default:t(()=>[k(w(o(d)("dialog.modify")),1)]),_:1}),_.$route.path.includes("editor")?(p(),v(o(y),{key:"1",onClick:a[2]||(a[2]=l=>_.$router.push("/"))},{default:t(()=>[k(w(o(d)("back")),1)]),_:1})):le("",!0),n(o(y),{key:"2",onClick:J},{default:t(()=>[k(w(o(d)("exit")),1)]),_:1})]),_:1})]),default:t(()=>[f("div",Ie,[n(o(ve),null,{icon:t(()=>[n(o(V))]),_:1}),f("span",je,w(o(e).name),1)])]),_:1}),n(o(ie),{class:"theme-change",onClick:a[3]||(a[3]=l=>o(m).switchTheme())})]),n(o(ze),{visible:z.value,"onUpdate:visible":a[7]||(a[7]=l=>z.value=l),title:o(d)("dialog.modify"),"after-close":o(X),onOk:G},{default:t(()=>[n(o(D),{model:o(c),"label-col":{span:4},"wrapper-col":{span:16}},{default:t(()=>[n(o(I),S({label:o(d)("dialog.old")},o(h).password),{default:t(()=>[n(o(j),{value:o(c).password,"onUpdate:value":a[4]||(a[4]=l=>o(c).password=l),type:"password"},null,8,["value"])]),_:1},16,["label"]),n(o(I),S({label:o(d)("dialog.new")},o(h).newPassword),{default:t(()=>[n(o(j),{value:o(c).newPassword,"onUpdate:value":a[5]||(a[5]=l=>o(c).newPassword=l),type:"password"},null,8,["value"])]),_:1},16,["label"]),n(o(I),S({label:o(d)("dialog.confirm")},o(h).confirmPassword),{default:t(()=>[n(o(j),{value:o(c).confirmPassword,"onUpdate:value":a[6]||(a[6]=l=>o(c).confirmPassword=l),type:"password"},null,8,["value"])]),_:1},16,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title","after-close"])],64))}});typeof T=="function"&&T(q);function E(i){i.__i18n=i.__i18n||[],i.__i18n.push({locale:"",resource:{cn:{page:s=>{const{normalize:e}=s;return e(["\u9875\u9762\u7BA1\u7406"])},masterplate:s=>{const{normalize:e}=s;return e(["\u6A21\u7248\u7BA1\u7406"])}},en:{page:s=>{const{normalize:e}=s;return e(["Page Manage"])},masterplate:s=>{const{normalize:e}=s;return e(["Masterplate Manage"])}}}})}const Ce=i=>(_e("data-v-8a43c902"),i=i(),fe(),i),Le=Ce(()=>f("div",{class:"logo"},[f("img",{width:"40",height:"40",src:oe})],-1)),Me={class:"main"},Z=B({setup(i){const s=x(["page"]),e=x(!1),{t:r}=$({useScope:"local"});return(b,m)=>{const g=de("RouterView");return p(),v(o(ke),{class:"container"},{default:t(()=>[n(o(ye),{collapsed:e.value,"onUpdate:collapsed":m[1]||(m[1]=u=>e.value=u),trigger:null,collapsible:""},{default:t(()=>[Le,n(o(K),{selectedKeys:s.value,"onUpdate:selectedKeys":m[0]||(m[0]=u=>s.value=u),theme:"dark",mode:"inline"},{default:t(()=>[(p(!0),R(A,null,ue(o(xe),u=>(p(),v(o(y),{key:u.key,onClick:d=>b.$router.push({name:u.key})},{default:t(()=>[(p(),v(ce(u.icon))),f("span",null,w(o(r)(u.key)),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["selectedKeys"])]),_:1},8,["collapsed"]),f("div",Me,[n(o(be),{class:"layout-header"},{default:t(()=>[e.value?(p(),v(o(me),{key:0,class:"trigger",onClick:m[2]||(m[2]=u=>e.value=!e.value)})):(p(),v(o(pe),{key:1,class:"trigger",onClick:m[3]||(m[3]=u=>e.value=!e.value)})),n(q)]),_:1}),n(o(Pe),{class:"layout-content"},{default:t(()=>[n(g)]),_:1})])]),_:1})}}});typeof E=="function"&&E(Z);var qe=se(Z,[["__scopeId","data-v-8a43c902"]]);export{qe as default};
