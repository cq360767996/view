import{e as j,_ as y,l as p,L as i}from"./array.c6fe6417.js";import{F as m,b as l,I as f,B as x,m as _}from"./ant-design-vue.690beb7d.js";import{e as C}from"./string.d594dd0c.js";import{t as k}from"./promise.aa1a7cc9.js";import{d as q,r as g,dq as D,cZ as N,dh as v,l as o,cY as u,u as e,du as S,dv as L,cW as U,D as O}from"./vendor.2f48f3fc.js";import"./lodash.5864dd39.js";import"./node-forge.a6b0f3f3.js";import"./echarts.6d889a97.js";import"./prettier.da792cf3.js";const R=s=>j("login",s);const T=s=>(S("data-v-1fe04428"),s=s(),L(),s),V={class:"login"},A={class:"login-box"},E=T(()=>v("span",null,"\u7528\u6237\u767B\u5F55",-1)),Z=O("\u767B\u5F55"),H=q({props:{redirect:{type:String,default:()=>""}},setup(s){const F=s,a=g({name:"ccq",password:"a123456"}),n=g({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"}]}),w=D(),{validate:B}=m.useForm(a,n),b=async()=>{const[d]=await k(B());if(d)return;const{name:r,password:t}=a,c=await R({name:r,password:C(t)});if(c.code===0){const{token:h,name:I}=c.data;p.set(i.AUTHORIZATION,h),p.set(i.USER_INFO,{name:I}),_.success("\u767B\u5F55\u6210\u529F\uFF01"),w.push(F.redirect||"/")}else _.error("\u767B\u5F55\u5931\u8D25\uFF01")};return(d,r)=>(U(),N("div",V,[v("div",A,[E,o(e(m),{"hide-required-mark":"","label-align":"left","label-col":{span:8},"wrapper-col":{span:16},model:e(a)},{default:u(()=>[o(e(l),{name:"name",label:"\u7528\u6237\u540D",rules:e(n).name},{default:u(()=>[o(e(f),{value:e(a).name,"onUpdate:value":r[0]||(r[0]=t=>e(a).name=t),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1},8,["rules"]),o(e(l),{name:"password",label:"\u5BC6\u7801",rules:e(n).password},{default:u(()=>[o(e(f),{value:e(a).password,"onUpdate:value":r[1]||(r[1]=t=>e(a).password=t),placeholder:"\u5BC6\u7801"},null,8,["value"])]),_:1},8,["rules"]),o(e(l),{"wrapper-col":{span:8,offset:8}},{default:u(()=>[o(e(x),{type:"primary",onClick:b},{default:u(()=>[Z]),_:1})]),_:1})]),_:1},8,["model"])])]))}});var X=y(H,[["__scopeId","data-v-1fe04428"]]);export{X as default};
