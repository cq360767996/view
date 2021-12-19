import{_ as Y}from"./logo.b4054013.js";import{I as W,l as I,L as S,u as X,_ as G}from"./array.4159bd4f.js";import{e as A}from"./string.95d6467b.js";import{t as D}from"./promise.aa1a7cc9.js";import{e1 as L,e2 as J,d as M,db as Q,dc as ee,e3 as se,cW as C,t as B,h as ae,r as O,cY as d,c$ as U,dh as p,k as o,c_ as t,D as y,dg as m,u as e,dY as oe,cZ as w,di as te,dj as E,F as N,cX as re,d7 as le,d6 as ne,e4 as ue,e5 as de,e6 as ie,e7 as ce}from"./vendor.b44267a2.js";import{F as V,B as pe,u as R,v as _,A as me,w as we,a as $,I as j,M as fe,m as x,L as ve,x as ge,y as ye,z as _e}from"./ant-design-vue.f40a8748.js";import"./main.678f5677.js";import"./lodash.b6b4d22a.js";import"./node-forge.c92fc5b0.js";import"./echarts.c6b037a5.js";import"./prettier.a4187c2c.js";const be={cn:{exit:"\u9000\u51FA\u767B\u5F55",password:"\u5BC6\u7801",back:"\u8FD4\u56DE\u7BA1\u7406\u9875",dialog:{modify:"\u4FEE\u6539@:password",old:"\u539F@:password",new:"\u65B0@:password",confirm:"\u786E\u8BA4@:password"},validator:{empty:"@:password\u4E0D\u80FD\u4E3A\u7A7A\u3002",length:"@:password\u9700\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u957F\u5EA6\u57286~18\u4E4B\u95F4\u3002",consistent:"\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4\u3002"},message:{success:{edit:"\u4FEE\u6539\u6210\u529F",logout:"\u5DF2@:exit"}}},en:{exit:"Exit Login",password:"Password",back:"Back",dialog:{modify:"Modify @:password",old:"Old",new:"New",confirm:"Confirm"},validator:{empty:"@:password is empty.",length:"@:password should start with alphabet, length should be in 6 to 18.",consistent:"Passwords are inconsistent."},message:{success:{edit:"Success",exit:"@:exit Success"}}}},ke={cn:{page:"\u9875\u9762\u7BA1\u7406",masterplate:"\u6A21\u7248\u7BA1\u7406"},en:{page:"Page Manage",masterplate:"Masterplate Manage"}},Pe="user",he=i=>W(`${Pe}/changePassword`,i),Fe=[{key:"page",icon:L},{key:"masterplate",icon:J}];const Ce={class:"header-right"},Be={class:"exit-dropdown"},Ee={class:"header-right_span"},$e=M({setup(i){const f=I.get(S.USER_INFO),u=f?Q.parse(f):{},b=ee(),k=se(),n=X(),{locale:P}=C({useScope:"global"}),{t:a}=C({useScope:"local",messages:be}),v=B(!1),K=ae("switchLocale"),l=O({password:"",newPassword:"",confirmPassword:""}),h=async(c,s)=>s?/^[a-zA-Z]\w{5,17}$/.test(s)?Promise.resolve():Promise.reject(a("validator.length")):Promise.reject(a("validator.empty")),T=O({password:[{required:!0,validator:h,trigger:"blur"}],newPassword:[{required:!0,validator:h,trigger:"blur"}],confirmPassword:[{required:!0,validator:async(c,s)=>{const[r]=await D(h(c,s));return r?Promise.reject(r):s!==l.newPassword?Promise.reject(a("validator.consistent")):Promise.resolve()},trigger:"blur"}]}),{resetFields:q,validate:z,validateInfos:F}=V.useForm(l,T),Z=async()=>{const[c]=await D(z());if(c)return;const s=A(l.password),r=A(l.newPassword),g=await he({password:s,newPassword:r});g.code===0?(v.value=!1,x.success(a("message.success.edit"))):x.error(g.msg)},H=()=>{I.remove(S.AUTHORIZATION),b.push(`/login?redirect=${k.path}`),x.success(a("message.success.logout"))};return(c,s)=>(d(),U(N,null,[p("div",Ce,[o(e(pe),{size:"small",onClick:s[0]||(s[0]=r=>{var g;return(g=e(K))==null?void 0:g()})},{default:t(()=>[y(m(e(P)),1)]),_:1}),o(e(oe),{class:"theme-change",onClick:s[1]||(s[1]=r=>e(n).switchTheme())}),o(e(we),null,{overlay:t(()=>[o(e(R),null,{default:t(()=>[o(e(_),{key:"0",onClick:s[2]||(s[2]=r=>v.value=!0)},{default:t(()=>[y(m(e(a)("dialog.modify")),1)]),_:1}),c.$route.path.includes("editor")?(d(),w(e(_),{key:"1",onClick:s[3]||(s[3]=r=>c.$router.push("/"))},{default:t(()=>[y(m(e(a)("back")),1)]),_:1})):te("",!0),o(e(_),{key:"2",onClick:H},{default:t(()=>[y(m(e(a)("exit")),1)]),_:1})]),_:1})]),default:t(()=>[p("div",Be,[o(e(me),null,{icon:t(()=>[o(e(L))]),_:1}),p("span",Ee,m(e(u).name),1)])]),_:1})]),o(e(fe),{visible:v.value,"onUpdate:visible":s[7]||(s[7]=r=>v.value=r),title:e(a)("dialog.modify"),"after-close":e(q),onOk:Z},{default:t(()=>[o(e(V),{model:e(l),"label-col":{span:4},"wrapper-col":{span:16}},{default:t(()=>[o(e($),E({label:e(a)("dialog.old")},e(F).password),{default:t(()=>[o(e(j),{value:e(l).password,"onUpdate:value":s[4]||(s[4]=r=>e(l).password=r),type:"password"},null,8,["value"])]),_:1},16,["label"]),o(e($),E({label:e(a)("dialog.new")},e(F).newPassword),{default:t(()=>[o(e(j),{value:e(l).newPassword,"onUpdate:value":s[5]||(s[5]=r=>e(l).newPassword=r),type:"password"},null,8,["value"])]),_:1},16,["label"]),o(e($),E({label:e(a)("dialog.confirm")},e(F).confirmPassword),{default:t(()=>[o(e(j),{value:e(l).confirmPassword,"onUpdate:value":s[6]||(s[6]=r=>e(l).confirmPassword=r),type:"password"},null,8,["value"])]),_:1},16,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title","after-close"])],64))}});const je=i=>(ie("data-v-02b8afc7"),i=i(),ce(),i),xe=je(()=>p("div",{class:"logo"},[p("img",{width:"40",height:"40",src:Y})],-1)),Ie={class:"main"},Se=M({setup(i){const f=B(["page"]),u=B(!1),{t:b}=C({useScope:"local",messages:ke});return(k,n)=>{const P=re("RouterView");return d(),w(e(ve),{class:"container"},{default:t(()=>[o(e(ge),{collapsed:u.value,"onUpdate:collapsed":n[1]||(n[1]=a=>u.value=a),trigger:null,collapsible:""},{default:t(()=>[xe,o(e(R),{selectedKeys:f.value,"onUpdate:selectedKeys":n[0]||(n[0]=a=>f.value=a),theme:"dark",mode:"inline"},{default:t(()=>[(d(!0),U(N,null,le(e(Fe),a=>(d(),w(e(_),{key:a.key,onClick:v=>k.$router.push({name:a.key})},{default:t(()=>[(d(),w(ne(a.icon))),p("span",null,m(e(b)(a.key)),1)]),_:2},1032,["onClick"]))),128))]),_:1},8,["selectedKeys"])]),_:1},8,["collapsed"]),p("div",Ie,[o(e(ye),{class:"layout-header"},{default:t(()=>[u.value?(d(),w(e(ue),{key:0,class:"trigger",onClick:n[2]||(n[2]=a=>u.value=!u.value)})):(d(),w(e(de),{key:1,class:"trigger",onClick:n[3]||(n[3]=a=>u.value=!u.value)})),o($e)]),_:1}),o(e(_e),{class:"layout-content"},{default:t(()=>[o(P)]),_:1})])]),_:1})}}});var ze=G(Se,[["__scopeId","data-v-02b8afc7"]]);export{ze as default};
