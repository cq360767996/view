var et=Object.defineProperty,tt=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var Be=(e,t,n)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))ke.call(t,n)&&Be(e,n,t[n]);if(ne)for(var n of ne(t))De.call(t,n)&&Be(e,n,t[n]);return e},B=(e,t)=>tt(e,nt(t));var ue=(e,t)=>{var n={};for(var o in e)ke.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&ne)for(var o of ne(e))t.indexOf(o)<0&&De.call(e,o)&&(n[o]=e[o]);return n};import{m as F,T as Fe,E as st}from"./ant-design-vue.a2b6f06b.js";import{r as Y,s as se,t as de,o as q,x as he,y as Se,n as pe,w as ot,d2 as T,d3 as xe,d4 as at,d5 as Re,$ as oe,d6 as it,d7 as lt,d8 as ct,d as ae,j as Oe,cV as R,cW as fe,d9 as Pe,da as Ie,cT as ie,db as Te,dc as Le,dd as Me,de as $e,df as Xe,dg as Ye,dh as ge,a6 as me,di as rt,dj as ut,cY as V,dk as Ge,F as ye,dl as je,u as le,O as He,dm as dt,dn as ht,k as f,dp as L,dq as pt,dr as Ue,ad as ft,Z as gt,B as mt,N as yt}from"./vendor.ec269a17.js";import{k as ve,l as O}from"./lodash.f14311af.js";import"./node-forge.38760642.js";import{g as vt}from"./echarts.abad894d.js";import"./prettier.97963628.js";const _t=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};_t();const G=(e,t,n)=>{document.addEventListener(e,t,n)},Z=(e,t,n)=>{document.removeEventListener(e,t,n)},_e=e=>{const t=["width","height","top","left","bottom","right","fontSize","borderWidth","borderRadius"],n={};for(const[o,s]of Object.entries(e))if(!!s){if(o==="rotate"){n.transform=`rotate(${s}deg)`;continue}if(o==="scale"){n.transform=`scale(${s/100})`;continue}n[o]=t.includes(o)?s+"px":s}return n},wt=(e,t=!0)=>{const r=e,{width:n,height:o,left:s,top:a}=r,i=ue(r,["width","height","left","top"]),l=t?{width:n,height:o,left:s,top:a}:b({},i);return _e(l)};var we={maxSnapshot:20,defaultComponentSize:{width:100,height:100},defaultPageSize:{width:1920,height:1080}};const sn=["url","static"];var ze;(function(e){e.RADIO="radio",e.CHECKBOX="checkbox",e.INPUT="input",e.INPUT_NUMBER="input-number",e.SELECT="select",e.SWITCH="switch",e.SLIDER="slider",e.COLOR_PICKER="color-picker",e.BTN_GROUP="btn-group",e.TEXTAREA="textarea",e.CUSTOM="custom"})(ze||(ze={}));var j;(function(e){e.USER_INFO="user-info",e.AUTHORIZATION="authorization",e.IS_DARK="is-dark"})(j||(j={}));var k;(function(e){e.X="x",e.Y="y"})(k||(k={}));const on=()=>{const e=E(),t=Y({show:!1,style:{width:0,height:0,top:0,left:0}});return{selectMask:t,handleMousedown:o=>{if(o.buttons===1){t.show=!0;const{pageX:s,pageY:a}=o,i=Rt(s,a);if(!i)return;t.style=B(b(b({},t.style),i),{width:0,height:0});const l=d=>{const{pageX:h,pageY:u}=d,g=P(h-s),m=P(u-a);g<0&&(t.style.left=i.left+g),m<0&&(t.style.top=i.top+m),t.style.width=Math.abs(g),t.style.height=Math.abs(m),e.calcSelectedByRect(t.style)},r=d=>{d.stopPropagation(),Z("mousemove",l),Z("mouseup",r),t.show=!1,d.clientX==s&&d.clientY==a&&e.cancelSelected()};G("mousemove",l),G("mouseup",r)}}}},bt=()=>{const e=n=>{const s=E().refs[n];if(s){const a=vt(s);a==null||a.resize()}};return{handleEchartsResize:e,handleAllEchartsResize:n=>{for(let o=0,s=n.data.length;o<s;o++)e(o)}}},an=(e,t,n)=>{const o=se(),s=Y({width:0,height:0,top:0,left:0}),a=de(!0),i=U(),l=Ce(),r=()=>{if(!e.value||!t.value||!o.value)return;const{width:y,height:c}=e.value.getBoundingClientRect(),{width:p,height:_}=t.value.getBoundingClientRect(),{width:v,height:C}=o.value.getBoundingClientRect(),I=p/y,S=_/c;s.width=Math.min(I*v,v),s.height=Math.min(S*C,C),n.value++},d=y=>{if(y.buttons!==1||!o.value)return;const c=y.target;let p=y.clientX,_=y.clientY,{left:v,top:C}=s;const{width:I,height:S}=o.value.getBoundingClientRect(),{width:M,height:$}=c.getBoundingClientRect(),D=I-M,w=S-$,x=X=>{if(X.stopPropagation(),!t.value||!e.value)return;const{clientX:N,clientY:K}=X,W=N-p,re=K-_;let ee=0,te=0;W<0&&s.left<=0?(p=N,v=0,ee=0):W>=0&&s.left>=D?(p=N,v=D,ee=D):ee=v+W,re<0&&s.top<=0?(_=K,C=0,te=0):re>=0&&s.top>=w?(_=K,C=w,te=w):te=C+re,s.left=ee,s.top=te},z=X=>{X.stopPropagation(),Z("mousemove",x),Z("mouseup",z)};G("mousemove",x),G("mouseup",z)},h=()=>{if(!e.value||!t.value||!o.value)return;const y=U(),c=o.value.getContext("2d");if(!c)return;const{width:p,height:_}=o.value;c.clearRect(0,0,p,_);const{width:v,height:C}=o.value.getBoundingClientRect(),{width:I,height:S}=e.value.getBoundingClientRect(),{width:M,height:$}=y.config,D=v/P(I),w=C/P(S),x=D*2,z=w*2,X=M*x,N=$*z,K=60*x,W=60*z;c.strokeStyle="#1890ff",c.lineWidth=2,c.strokeRect(K,W,X,N)},u=ve(r,100),g=ve(h,100),m=()=>{if(!e.value||!t.value||!o.value)return;const{width:y,height:c}=e.value.getBoundingClientRect(),{width:p,height:_}=o.value.getBoundingClientRect(),{scrollLeft:v,scrollTop:C}=t.value;s.left=v/y*p,s.top=C/c*_};return q(()=>{window.addEventListener("resize",u),window.addEventListener("resize",g),he(()=>{r(),h()})}),Se(()=>{window.removeEventListener("resize",u),window.removeEventListener("resize",g)}),pe(()=>{if(!t.value||!o.value||!e.value)return;const{width:y,height:c}=e.value.getBoundingClientRect(),{width:p,height:_}=o.value.getBoundingClientRect(),v=s.left*y/p,C=s.top*c/_;t.value.scroll(v,C)}),ot(l,()=>{setTimeout(()=>{r(),h()},300)}),pe(()=>{i.config.scale&&(u(),g())}),{viewportSize:s,resizeViewport:r,thumbnailRef:o,handleThumbnailMousedown:d,syncScroll:m,showThumbnail:a,switchThumbnail:()=>{a.value=!a.value}}},ln=e=>{const t=U(),n=Y({width:0,height:0}),o=de(0),s=l=>l+"%",a=()=>{if(!e.value)return;const{width:l,height:r}=e.value.getBoundingClientRect(),{width:d,height:h}=t.config,u=P(d+400,!0),g=P(h+400,!0),m=l-4,A=r-4;n.width=u<=m?m:u,n.height=g<=A?A:g,o.value++},i=ve(a,100);return q(()=>{pe(()=>{t.config.scale&&a()})}),{sliderFormatter:s,handleSliderChange:i,screenShotSize:n,rulerKey:o}},cn=()=>{const e=Y([{direction:k.X,marklineDct:k.Y,marklines:[]},{direction:k.Y,marklineDct:k.X,marklines:[]}]);return{rulerData:e,getStyle:(a,i)=>{const l=a===k.Y?" rotate(90deg)":"",r=a===k.Y?"top":"left";return`transform:${l} translateX(${i[r]}px)`},getUnit:a=>a===k.X?"width":"height",addMarkline:(a,i)=>{const{clientX:l,clientY:r}=a,d=a.target,{left:h,top:u}=d.getBoundingClientRect(),[g,m]=i===k.X?[r-u,1]:[l-h,0];e[m].marklines.push(g)},cancelMarkline:(a,i)=>{const l=i===k.X?0:1;e[l].marklines.splice(a,1)}}},rn=()=>{const e=U(),t=Ce(),n=E(),o={Backspace:()=>n.del(),a:a=>a&&n.selectAll(),s:a=>a&&e.savePage(),c:a=>a&&n.copy(),ArrowLeft:a=>{a?t.switchPanelShow("layer"):n.selected.forEach(i=>{n.data[i].style.left-=e.config.gap})},ArrowUp:a=>{a?t.switchPanelShow("component"):n.selected.forEach(i=>{n.data[i].style.top-=e.config.gap})},ArrowRight:a=>{a?t.switchPanelShow("config"):n.selected.forEach(i=>{n.data[i].style.left+=e.config.gap})},ArrowDown:()=>{n.selected.forEach(a=>{n.data[a].style.top+=e.config.gap})}},s=a=>{var l;if(!((l=document.querySelector(".canvas-wrapper"))==null?void 0:l.contains(document.activeElement)))return;const i=o[a.key];if(i){a.preventDefault(),a.stopPropagation();const r=a.ctrlKey||a.metaKey;i(r)}};q(()=>G("keydown",s)),Se(()=>Z("keydown",s))},Ct=T("gallery",{state(){return{group:[],list:[]}},actions:{setGroup(e){this.group=e},setList(e){this.list=e},getGallery(e){const t=this.list.find(n=>n.type===e);if(t)return O(t)}}}),E=T("board",{state:()=>({selected:[],data:[],refs:[],offset:{left:0,top:0}}),getters:{curCom(e){return e.selected.length>0?e.data[e.selected[0]]:void 0},curComs(e){return e.selected.map(t=>e.data[t])}},actions:{rawAppend(e){const t=[],n=[];Array.isArray(e)?e.forEach((o,s)=>{t.push(o),n.push(this.data.length+s)}):(t.push(e),n.push(this.data.length)),this.data.push(...t),this.selected=n},append({top:e=0,left:t=0,type:n=""}){const s=Ct().getGallery(n);if(!s)throw new Error("\u83B7\u53D6\u4E0D\u5230\u8BE5\u7EC4\u4EF6\u4FE1\u606F");const{style:a,data:i,propsData:l}=O(s),r=0,d=1,h=n,u=xe(),g=b(b({top:e,left:t,rotate:r,opacity:d},we.defaultComponentSize),a),m=s.name;this.rawAppend({id:u,component:h,label:m,propsData:l,style:g,data:i})},del(){this.selected.length>0&&(We(this.data,this.selected),this.selected=[],F.success("\u5220\u9664\u6210\u529F\uFF01"))},cancelSelected(){this.selected=[]},setIndex(e){const t=typeof e=="number"?[e]:e,n=[],{data:o}=this;t.forEach(s=>{!o[s].locked&&o[s].style.display!=="none"&&n.push(s)}),this.selected=n},spliceSelected(e){this.selected.splice(this.selected.indexOf(e),1)},appendSelected(e){const{data:t}=this,n=typeof e=="number"?[e]:e,o=[];n.forEach(s=>{!t[s].locked&&t[s].style.display!=="none"&&o.push(s)}),this.selected.push(...o)},changeSelected(e){this.selected.includes(e)?this.spliceSelected(e):this.appendSelected(e)},setBoard(e){e?Object.assign(this,e):(this.data=[],this.selected=[]),he(()=>{const{handleAllEchartsResize:t}=bt();t(this)})},copy(){if(this.selected.length>0){const e=this.selected.map(t=>{const n=O(this.data[t]);return n.style.left+=10,n.style.top+=10,n});this.rawAppend(e)}},moveUp(e=!1){const{data:t,selected:n}=this,o=t.length;if(n.length!==0)if(n.length>1)F.error("\u591A\u9009\u65E0\u6CD5\u79FB\u52A8");else if(n[0]===o-1)F.error("\u5DF2\u7ECF\u662F\u6700\u9876\u5C42\uFF01");else{const s=e?o-1:n[0]+1;[t[n[0]],t[s]]=[t[s],t[n[0]]]}},moveDown(e=!1){const{data:t,selected:n}=this;if(n.length!==0)if(n.length>1)F.error("\u591A\u9009\u65E0\u6CD5\u79FB\u52A8");else if(n[0]===0)F.error("\u5DF2\u7ECF\u662F\u6700\u5E95\u5C42\uFF01");else{const o=e?0:n[0]-1;[t[n[0]],t[o]]=[t[o],t[n[0]]]}},calcSelectedByRect(e){this.cancelSelected();const t=[];this.data.forEach((n,o)=>{const{width:s,height:a,left:i,top:l}=n.style,r=Math.min(i,e.left),d=Math.min(l,e.top),h=Math.max(i+s,e.left+e.width),u=Math.max(l+a,e.top+e.height),g=h-r,m=u-d;g<s+e.width&&m<a+e.height&&t.push(o)}),this.setIndex(t)},group(){const{selected:e,data:t}=this,n=We(t,e),o=n.reduce((u,g)=>{const{left:m,top:A,width:y,height:c}=g.style;return{leftX:Math.min(u.leftX,m),leftY:Math.min(u.leftY,A),rightX:Math.max(u.rightX,y+m),rightY:Math.max(u.rightY,c+A)}},{leftX:1/0,leftY:1/0,rightX:0,rightY:0}),{leftX:s,leftY:a,rightX:i,rightY:l}=o;n.forEach(u=>{u.style.top-=a,u.style.left-=s});const r=i-s,d=l-a,h={id:xe(),component:"group",label:"\u6210\u7EC4",group:n,style:{top:a,left:s,width:r,height:d,rotate:0,opacity:1}};e.length=0,this.rawAppend(h)},cancelGroup(){const{selected:e,data:t}=this,n=t[e[0]];t.splice(e[0],1);const o=n.group;if(!o)return;const{left:s,top:a}=n.style,i=[];o.forEach(l=>{l.style.left+=s,l.style.top+=a,i.push(l)}),this.rawAppend(i)},toggleLocked(e){const{data:t,selected:n}=this;(typeof e=="number"?[e]:[...e]).forEach(s=>{const a=t[s],i=n.indexOf(s);a.locked=!a.locked,a.locked&&i>-1&&n.splice(i,1)})},hide(e){const{data:t,selected:n}=this;(typeof e=="number"?[e]:[...e]).forEach(s=>{t[s].style.display="none";const a=n.indexOf(s);a>-1&&n.splice(a,1)})},show(e){this.data[e].style.display="block"},selectAll(){const{data:e}=this;this.selected=e.map((t,n)=>n)},clearRefs(){this.refs.length=0},setOffset(e){this.offset=e},pushRef(e){this.refs.push(e)}}}),Et="\u8FDE\u63A5\u51FA\u9519\u4E86~",be=e=>{const t=typeof e=="string"?e:Et;return Promise.resolve({code:-1e4,msg:t})},At="/api/v1/",kt=e=>{const t={400:"\u8BF7\u6C42\u9519\u8BEF(400)",401:"\u672A\u6388\u6743\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55(401)",403:"\u62D2\u7EDD\u8BBF\u95EE(403)",404:"\u8BF7\u6C42\u51FA\u9519(404)",408:"\u8BF7\u6C42\u8D85\u65F6(408)",500:"\u670D\u52A1\u5668\u9519\u8BEF(500)",501:"\u670D\u52A1\u672A\u5B9E\u73B0(501)",502:"\u7F51\u7EDC\u9519\u8BEF(502)",503:"\u670D\u52A1\u4E0D\u53EF\u7528(503)",504:"\u7F51\u7EDC\u8D85\u65F6(504)",505:"HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301(505)",0:`\u8FDE\u63A5\u51FA\u9519(${e})!`};return`${t[e]||t[0]}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216\u8054\u7CFB\u7BA1\u7406\u5458\uFF01`},H=at.create({baseURL:At,timeout:1e4,headers:{"Content-Type":"application/json"},transformResponse:[e=>(typeof e=="string"&&e.startsWith("{")&&(e=Re.parse(e)),e)]});H.interceptors.request.use(e=>{const t=ce.get(j.AUTHORIZATION);return t&&e.headers&&(e.headers.authorization=t),e},be);H.interceptors.response.use(async e=>{const t=e.status;return t<200||t>=300?be(kt(t)):e.data},be);const Ne=(e,t,n)=>H.get(e,B(b({},n),{params:t})),Dt=(e,t,n)=>H.post(e,t,n),Bt=(e,t,n)=>H.put(e,t,n),Ft=(e,t,n)=>H.delete(e,B(b({},n),{params:t})),J="page",St=e=>Dt(J,e),un=e=>Ft(`${J}/${e}`),xt=e=>Bt(J,e),dn=e=>Ne(`${J}/${e}`),hn=()=>Ne(J),U=T("page",{state(){const e=B(b({_id:"",__v:0},we.defaultPageSize),{title:"",description:"",backgroundColor:"",scale:100,gap:1,url:"",zoom:0,author:"",pageMode:0});return{config:e,cache:B(b({},e),{components:[]})}},actions:{updateCache(){const e=E();Object.assign(this.cache,this.config),this.cache.components=O(oe(e.data))},async savePage(){const e=E(),t=it();if(e.data.length===0){F.error("\u5C1A\u672A\u6DFB\u52A0\u4EFB\u4F55\u7EC4\u4EF6\uFF01");return}const n=O(oe(e.data)),o=b({components:n},this.config),i=o,{_id:s}=i,a=ue(i,["_id"]);if(s)(await xt(oe(o))).code===0&&(F.success("\u4FDD\u5B58\u6210\u529F\uFF01"),this.updateCache());else{const l=await St(b({},a));l.code===0&&(F.success("\u521B\u5EFA\u6210\u529F\uFF01"),this.config._id=l.data._id,this.updateCache(),t.push(`/editor/${l.data._id}`))}},isModified(){const e=E(),t=B(b({},this.config),{components:oe(e.data)});return JSON.stringify(t)!==JSON.stringify(this.cache)}}}),pn=T("snapshot",{state:()=>({data:[],index:-1}),actions:{undo(){if(this.index>-1){this.index--;const e=this.index===-1?void 0:O(this.data[this.index]);if(e){const{selected:t,page:n}=e,{components:o}=n;E().setBoard({selected:t,data:o})}}},redo(){if(this.index<this.data.length-1){this.index++;const e=E(),t=O(this.data[this.index]),{selected:n,page:o}=t,{components:s}=o;e.setBoard({selected:n,data:s})}},rawRecordSnapshot(e,t){this.data[++this.index]={page:e,selected:t},this.index<this.data.length-1&&(this.data=this.data.slice(0,this.index+1)),this.data.length>we.maxSnapshot&&this.data.shift(),F.success("\u4FDD\u5B58\u6210\u529F\uFF01")},recordSnapshot(){const e=U(),t=E(),{data:n,selected:o}=t,s=O(n),a=B(b({},e.config),{components:s});this.rawRecordSnapshot(a,o)}}}),fn=T("theme",{state(){return{value:"light"}},actions:{async changeTheme(e){this.value=e,e==="dark"?(ct||await lt(),ce.set(j.IS_DARK,1)):ce.remove(j.IS_DARK),document.documentElement.setAttribute("data-theme",this.value)},async switchTheme(){const e=ce.get(j.IS_DARK);this.changeTheme(e?"light":"dark")}}}),Ce=T("panel",{state(){return{layer:!0,component:!0,config:!0,util:!0}},actions:{switchPanelShow(e){this[e]=!this[e]}}});var Q;(function(e){e.BOARD="board",e.LAYER="layer"})(Q||(Q={}));const Ke=T("menu",{state(){return{board:{show:!1,style:{}},layer:{show:!1,style:{}}}},actions:{show(e,t,n){e.preventDefault();const{pageX:o,pageY:s}=e;n.selected.length!==0&&(this[t].show=!0,he(()=>{const{ref:a,container:i,style:l}=this[t];if(!a||!i)return;const r=10,{width:d,height:h}=a.getBoundingClientRect(),{width:u,height:g,left:m,top:A}=i.getBoundingClientRect();l.left=Math.min(o-m,u-d-r),l.top=Math.min(s-A,g-h-r)}))},hide(e){this[e].show=!1},hideAll(){Object.values(Q).forEach(e=>{this.hide(e)})},setRefAndContainer(e,t,n){this[e].ref=t,this[e].container=n}}});function P(e,t=!1){const o=U().config.scale/100,s=t?e*o:e/o;return Math.floor(s)}const Rt=(e,t,n=".board")=>{const o=document.querySelector(n);if(!o)return;const s=o.getBoundingClientRect();return{top:P(t-s.top),left:P(e-s.left)}},ce={set(e,t,n=864e5){const o=typeof t=="string"?t:Re.stringify(t);return localStorage.setItem(e,o),localStorage.setItem(`${e}__expires__`,Date.now()+n+""),t},get(e){const t=Date.now(),n=localStorage.getItem(`${e}__expires__`)||t+1;if(t>=n){this.remove(e);return}return localStorage.getItem(e)},remove(e){localStorage.removeItem(e),localStorage.removeItem(`${e}__expires__`)}},gn=e=>e.map(t=>{const n="center";return B(b({},t),{dataIndex:t.dataIndex||t.key,align:n})}),We=(e,t)=>{const n=t.map(o=>e[o]);return n.forEach(o=>{const s=e.indexOf(o);e.splice(s,1)}),n},qe=e=>{const{selected:t,data:n}=e;if(t.length<=1)return!0;let o=0;return t.forEach(s=>{if(!n[s])return;const{group:a}=n[s];(!a||a.length===0)&&o++}),o!==t.length},Ve=e=>{const{selected:t,data:n}=e;if(t.length!==1)return!0;const{group:o}=n[t[0]];return!(o==null?void 0:o.length)},Ot=async(e,t)=>new Promise(n=>{const{name:o,animationDelay:s,animationDuration:a,animationIterationCount:i}=t,l="animate__animated",r=`animate__${o}`;e.style.animationDelay=`${s}s`,e.style.animationDuration=`${a}s`,e.style.animationIterationCount=`${i}`,e.classList.add(l,r);const d=()=>{e.removeEventListener("animationend",d),e.removeEventListener("animationcancel",d),e.style.animationDelay="",e.style.animationDuration="",e.style.animationIterationCount="",e.classList.remove(l,r),n()};e.addEventListener("animationend",d),e.addEventListener("animationcancel",d)}),Pt=async(e,t)=>{if(!!t)for(let n=0;n<t.length;n++)await Ot(e,t[n])},It="modulepreload",Ze={},Tt="/",Je=function(t,n){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=`${Tt}${o}`,o in Ze)return;Ze[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":It,s||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),s)return new Promise((l,r)=>{i.addEventListener("load",l),i.addEventListener("error",r)})})).then(()=>t())};var Qe=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const Ee={cn:{top:"\u7F6E\u9876",bottom:"\u7F6E\u5E95",up:"\u4E0A\u79FB",down:"\u4E0B\u79FB",group:"\u6210\u7EC4",cancelGroup:"\u53D6\u6D88\u6210\u7EC4",lock:"\u9501\u5B9A",hide:"\u9690\u85CF",layer:"\u56FE\u5C42",tip:"\u5C1A\u672A\u6DFB\u52A0\u4EFB\u4F55\u7EC4\u4EF6"},en:{top:"Top",bottom:"Bottom",up:"Up",down:"Down",group:"Group",cancelGroup:"Cancel Group",lock:"Lock",hide:"Hide",layer:"Layer",tip:"There is No Component"}},Lt={cn:{top:"\u7F6E\u9876",bottom:"\u7F6E\u5E95",up:"\u4E0A\u79FB\u4E00\u5C42",down:"\u4E0B\u79FB\u4E00\u5C42",group:"\u6210\u7EC4",cancelGroup:"\u53D6\u6D88\u6210\u7EC4",lock:"\u9501\u5B9A",hide:"\u9690\u85CF",copy:"\u590D\u5236",delete:"\u5220\u9664"},en:{top:"Top",bottom:"Bottom",up:"Up",down:"Down",group:"Group",cancelGroup:"Cancel Group",lock:"Lock",hide:"Hide",copy:"Copy",delete:"Delete"}};const Mt=ae({name:"board-box",props:{data:{type:Object,default:()=>({})},patchAll:{type:Boolean,default:!1},editorMode:{type:Boolean,default:!1}},setup(e){const t=se(),n=Oe(()=>e.data);return q(()=>{var s;const{animations:o}=n.value;e.editorMode||!o||!((s=t.value)==null?void 0:s.$el)||Pt(t.value.$el,n.value.animations)}),{splitStyleAndPatch:wt,patchUnit:_e,box:t}}});function $t(e,t,n,o,s,a){return R(),fe(Ie(`cq-${e.data.component}`),{ref:"box",group:e.data.group,data:e.data.data,"props-data":e.data.propsData,style:Pe(e.patchAll?e.patchUnit(e.data.style):e.splitStyleAndPatch(e.data.style,!1))},null,8,["group","data","props-data","style"])}var Xt=Qe(Mt,[["render",$t]]);const Yt=["onClick"],Gt=ae({props:{menuType:{type:String,default:()=>"board"},container:Object},setup(e){const t=e,n=E(),o=Ke(),{t:s}=ie({useScope:"local",messages:Lt}),a=se(),i=Y([{name:s("top"),icon:Te,event:()=>n.moveUp(!0)},{name:s("bottom"),icon:Le,event:()=>n.moveDown(!0)},{name:s("up"),icon:Me,event:()=>n.moveUp()},{name:s("down"),icon:$e,event:()=>n.moveDown()},{name:s("group"),icon:Xe,disable:!1,event:()=>n.group()},{name:s("cancelGroup"),icon:Ye,disable:!1,event:()=>n.cancelGroup()},{name:s("lock"),icon:ge,disable:!1,event:()=>n.toggleLocked(n.selected)},{name:s("hide"),icon:me,disable:!1,event:()=>n.hide(n.selected)},{name:s("copy"),icon:rt,event:()=>n.copy()},{name:s("delete"),icon:ut,event:()=>n.del()}]),l=(d,h,u)=>{if(d.stopPropagation(),h){d.preventDefault();return}o.hide(t.menuType),u()},r=()=>{G("click",d=>{d.stopPropagation(),d.preventDefault(),o.hideAll()})};return q(()=>{i[4].disable=qe(n),i[5].disable=Ve(n),o.setRefAndContainer(t.menuType,a.value,t.container),r()}),(d,h)=>(R(),V("div",{ref_key:"menuRef",ref:a,class:"board-menu",style:Pe(le(_e)(le(o)[e.menuType].style)),onMousedown:h[0]||(h[0]=He(()=>{},["stop"])),onMouseup:h[1]||(h[1]=He(()=>{},["stop"]))},[Ge("ul",null,[(R(!0),V(ye,null,je(le(i),u=>(R(),V("li",{key:u.name,class:dt({"--disable":u.disable}),onClick:g=>l(g,u.disable,u.event)},[(R(),fe(Ie(u.icon))),Ge("span",null,ht(u.name),1)],10,Yt))),128))])],36))}});var jt="/assets/logo.8407279e.svg";function Ht(){const e=E(),{t}=ie({useScope:"local",messages:Ee}),n=[{tip:t("top"),icon:Te,event:()=>e.moveUp(!0)},{tip:t("bottom"),icon:Le,event:()=>e.moveDown(!0)},{tip:t("up"),icon:Me,event:()=>e.moveUp()},{tip:t("down"),icon:$e,event:()=>e.moveDown()}];function o(){return n.map(s=>f(Fe,{key:s.icon.name,placement:"bottom",title:s.tip},{default:()=>[f(s.icon,{onClick:s.event,class:L({"--disable":e.selected.length===0})},null)]}))}return{renderToolBarItems:o}}function Ut(){const e=E(),{t}=ie({useScope:"local",messages:Ee}),n=[{tip:t("group"),icon:Xe,event:()=>e.group()},{tip:t("cancelGroup"),icon:Ye,event:()=>e.cancelGroup()},{tip:t("lock"),icon:ge,event:()=>e.toggleLocked(e.selected)},{tip:t("hide"),icon:me,event:()=>e.hide(e.selected)}],o=Oe(()=>{const a=[];return a[0]={disable:qe(e)},a[1]={disable:Ve(e)},a[2]={disable:e.selected.length===0},a[3]={disable:e.selected.length===0},a});function s(){return n.map((a,i)=>{const l=o.value[i];return f(Fe,{key:a.icon.name,placement:"bottom",title:a.tip},{default:()=>[f(a.icon,{key:a.icon.name,onClick:(l==null?void 0:l.disable)?void 0:a.event,class:L({"--disable":l==null?void 0:l.disable})},null)]})})}return{renderFooterTooltip:s}}function zt(){const e=de("thumbail"),t=[{icon:pt,key:"item"},{icon:Ue,key:"thumbail"}];function n(o){e.value=o}return{mode:e,modeList:t,switchMode:n}}var mn=ae({name:"layer-panel",setup(){const e=E(),t=Ce(),n=Ke(),o=se(),{t:s}=ie({useScope:"local",messages:Ee}),{renderToolBarItems:a}=Ht(),{renderFooterTooltip:i}=Ut(),{mode:l,modeList:r,switchMode:d}=zt(),h=Y({});e.data.forEach(c=>{var p;((p=c==null?void 0:c.group)==null?void 0:p.length)&&(h[c.id]=!1)});function u(c,p){c.stopPropagation(),e.toggleLocked(p)}function g(c,p){c.stopPropagation(),e.show(p)}function m(c,p){c.ctrlKey||c.metaKey?e.changeSelected(p):e.setIndex(p)}function A(c,p){c.preventDefault(),e.selected.includes(p)||e.setIndex(p),n.show(c,Q.LAYER,e)}function y(c,p){const{group:_,id:v,locked:C}=c,{display:I}=c.style,S=l.value==="item"?f(Ue,null,null):f("img",{src:jt},null);let M,$=S,D;if(C&&(D=f(ge,{class:"--icon",onClick:w=>u(w,p)},null)),I==="none"&&(D=f(me,{class:"--icon",onClick:w=>g(w,p)},null)),_==null?void 0:_.length){const w=h[v]?"rotate(90deg)":"rotate(0deg)";$=f(gt,{class:L("--animated",{}),style:{transform:w},onClick:()=>h[v]=!h[v]},null),M=mt(f("ul",null,[_.map(x=>f("li",{key:x.id,class:L("layer-panel__box-item","--animated",`--${l.value}`)},[S,f("b",null,[x.label])]))]),[[yt,h[v]]])}return f(ye,null,[f("li",{key:c.id,onContextmenu:w=>A(w,p),onMouseup:w=>m(w,p)},[f("div",{class:L("layer-panel__box-item",`--${l.value}`,{"--active":e.selected.includes(p)})},[D,$,f("b",null,[c.label])]),M])])}return()=>f("div",{class:L("layer-panel",{"--hide":!t.layer}),ref:o},[f("header",{class:"layer-panel__header"},[f("div",null,[s("layer")]),f("section",null,[r.map((c,p)=>f(c.icon,{key:c.key,class:L({"--active":c.key===l.value}),onClick:d.bind(null,c.key)},null)),f(ft,{onClick:()=>t.switchPanelShow("layer")},null)])]),f("section",{class:"layer-panel__wrapper"},[f("header",{class:"layer-panel__toolbar"},[a()]),e.data.length===0?f(st,{description:s("tip")},null):f("ul",{class:"layer-panel__box"},[e.data.map(y)]),n.layer.show&&f(Gt,{"menu-type":Q.LAYER,container:o.value},null)]),f("footer",{class:"layer-panel__footer"},[i()])])}});const Nt={class:"board-group"},Kt=ae({props:{group:{type:Array,default:()=>[]}},setup(e){return(t,n)=>(R(),V("div",Nt,[(R(!0),V(ye,null,je(e.group,o=>(R(),fe(le(Xt),{key:o.id,data:o,"patch-all":""},null,8,["data"]))),128))]))}});var Wt=Qe(Kt,[["__scopeId","data-v-644c95db"]]);const qt={"./basic/index.ts":()=>Je(()=>import("./index.f4fe0b09.js"),["assets/index.f4fe0b09.js","assets/vendor.ec269a17.js","assets/vendor.266bc503.css","assets/ant-design-vue.a2b6f06b.js","assets/ant-design-vue.b912909b.css","assets/lodash.f14311af.js","assets/node-forge.38760642.js","assets/echarts.abad894d.js","assets/prettier.97963628.js"]),"./chart/index.ts":()=>Je(()=>import("./index.a08b5590.js"),["assets/index.a08b5590.js","assets/vendor.ec269a17.js","assets/vendor.266bc503.css","assets/ant-design-vue.a2b6f06b.js","assets/ant-design-vue.b912909b.css","assets/lodash.f14311af.js","assets/node-forge.38760642.js","assets/echarts.abad894d.js","assets/prettier.97963628.js"])},Ae={};for(const[e,t]of Object.entries(qt)){const n=e.match(/\.\/(.*)\/index\.ts/);(n==null?void 0:n[1])&&(Ae[n[1]]=t)}var yn=async e=>{const t=[],n=[];async function o(s){const i=(await s()).default,{name:l,icon:r,components:d,order:h,dataConfig:u}=i,g=[];for(const[m,A]of Object.entries(d)){const c=(await A()).default;c.type=m,c.dataConfig=u||c.dataConfig,e.component(`cq-${m}`,c.component),g.push(c),t.push(c)}n[h]={groupName:l,icon:r,list:g}}e.component("cq-group",Wt);for(const s in Ae)await o(Ae[s]);return{list:t,group:n}};export{Pt as A,Xt as B,pn as C,sn as D,dn as E,ze as F,jt as G,mn as H,Dt as I,j as L,Q as M,Qe as _,Je as a,yn as b,Ct as c,un as d,gn as e,Ne as f,hn as g,E as h,U as i,Ke as j,Z as k,ce as l,bt as m,on as n,G as o,_e as p,ln as q,an as r,wt as s,cn as t,fn as u,rn as v,P as w,Gt as x,Ce as y,Ot as z};
