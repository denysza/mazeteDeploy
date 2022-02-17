var Q=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var M=(a,u,r)=>u in a?Q(a,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[u]=r,H=(a,u)=>{for(var r in u||(u={}))Z.call(u,r)&&M(a,r,u[r]);if(q)for(var r of q(u))V.call(u,r)&&M(a,r,u[r]);return a},P=(a,u)=>X(a,Y(u));import{u as J,r as i,v as ee,a as _,j as e,b as c,A as te,T as ae,c as ue,d as se,F as K,e as re,B as ie,R as ne,f as z,g as le,h as oe}from"./vendor.138df582.js";const ce=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};ce();const de="https://mazete-api-dev.pechakucha.ai";function pe(){const a=J();return i.exports.useEffect(()=>{let u=ee();var r=JSON.stringify({register_id:u}),l={method:"post",url:`${de}/register_id`,headers:{"Content-Type":"application/json"},data:r};_(l).then(o=>{localStorage.setItem("register_id",u)}).catch(o=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}),e("div",{className:"container",children:c("div",{className:"container-wrap",children:[e("div",{className:"top-header",children:e("h1",{children:"\u30DE\u305C\u3066"})}),c("div",{className:"top-banner",children:[e("img",{src:"/assets/image/top-banner-img01.png",alt:"",className:"top-banner01"}),e("img",{src:"/assets/image/top-banner-img02.png",alt:"",className:"top-banner02"}),e("img",{src:"/assets/image/top-banner-img03.png",alt:"",className:"top-banner03"}),e("img",{src:"/assets/image/top-banner-img04.png",alt:"",className:"top-banner04"}),e("div",{className:"top-banner-text",children:"\u203B\u30B5\u30FC\u30D3\u30B9\u5185\u5BB9\u4F1D\u308F\u308B\u30A4\u30E9\u30B9\u30C8\u5916\u6CE8"})]}),e("a",{href:"/select",className:"start-btn",children:"\u30B9\u30BF\u30FC\u30C8"}),e("div",{className:"top-banner-border"}),c("div",{className:"top-delusion",children:[e("div",{className:"top-delusion-title",children:"\u307F\u3093\u306A\u306E\u5984\u60F3"}),c("div",{className:"top-delusion-body",children:[e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img01.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img02.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img03.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img04.png",alt:"",className:"top-delusion-img"})})]})]})]})})}const k="https://mazete-api-dev.pechakucha.ai",ge=ue({stringify:a=>a.kana+a.label});function he(){const[a,u]=i.exports.useState([0,0]);return i.exports.useLayoutEffect(()=>{function r(){u([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]),a}function me(){const a=J(),[u,r]=i.exports.useState(1),[l,o]=i.exports.useState([]),[s,f]=i.exports.useState(null),[w,D]=i.exports.useState(!1),[A,$]=i.exports.useState([]),[T,L]=i.exports.useState([]),[F,x]=i.exports.useState([]),[g,b]=i.exports.useState([]),[C,h]=i.exports.useState([]),[E,N]=i.exports.useState(null),[O,y]=he();i.exports.useEffect(()=>{let n=window.innerHeight;document.getElementById("character_select").style.height=n+"px";let t=localStorage.register_id||null;t||window.location.assign("/");let p=JSON.stringify({user_id:t,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),d={method:"post",url:`${k}/get_chara_list`,headers:{"Content-Type":"application/json"},data:p};_(d).then(m=>{$(m.data.chara_list)}).catch(m=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let v=JSON.stringify({user_id:t,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),j={method:"post",url:`${k}/get_world_list`,headers:{"Content-Type":"application/json"},data:v};_(j).then(m=>{L(m.data.world_list)}).catch(m=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let S={method:"post",url:`${k}/get_autocomplete_chara`,headers:{"Content-Type":"application/json"},data:{}};_(S).then(m=>{b(m.data.auto_complete),h(m.data.auto_complete)}).catch(m=>{});let B={method:"post",url:`${k}/get_autocomplete_world`,headers:{"Content-Type":"application/json"},data:{}};_(B).then(m=>{x(m.data.auto_complete)}).catch(m=>{})},[]),i.exports.useEffect(()=>{s&&l.length>0&&D(!0)},[l,s]);const I=n=>{let t=l,p=A.filter(d=>d.chara_id==n)[0];if(t.map(d=>d.chara_id).includes(n)){for(let d=0;d<t.length;d++)t[d].chara_id===n&&(t.splice(d,1),d--);o([...t])}else t.length<3&&(t.push(p),o([...t]))},R=()=>{let n=localStorage.register_id||null,t=JSON.stringify({user_id:n,chosen_chara_ids:l.map(d=>d.chara_id).toString(),chosen_world_ids:[s.world_id].toString()}),p={method:"post",url:`${k}/generate_outline`,headers:{"Content-Type":"application/json"},data:t};_(p).then(d=>{localStorage.setItem("outline_id",d.data.outline_id),localStorage.setItem("background",s.img_url),localStorage.setItem("user_list",JSON.stringify(l.map(v=>v.img_url))),window.location.assign("/synopsis")}).catch(d=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},W=n=>{n.preventDefault();let t=localStorage.register_id||null,p=E,d=l.map(S=>S.chara_id).toString(),v="";s&&(v=[s.world_id].toString());let j=JSON.stringify({user_id:t,search_query:p,chosen_chara_ids:d,chosen_world_ids:v});if(u==1){let S={method:"post",url:`${k}/get_chara_list`,headers:{"Content-Type":"application/json"},data:j};_(S).then(B=>{$(B.data.chara_list)}).catch(B=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}else{let S={method:"post",url:`${k}/get_world_list`,headers:{"Content-Type":"application/json"},data:j};_(S).then(B=>{L(B.data.world_list)}).catch(B=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}};return c("div",{className:"container",id:"character_select",children:[c("div",{className:"container-wrap",children:[c("div",{className:"preview",children:[c("div",{className:"preview-part",onClick:()=>{r(1),h(g),N(null)},children:[c("div",{className:"preview-img-part",children:[l.map(n=>e("div",{style:{backgroundImage:`url(${n.img_url})`},className:"avatar-preview"},n.chara_id)),l.length==0&&e("div",{className:"avatar-preview",style:{backgroundImage:"url(/assets/image/default-avatar.png)"}})]}),e("div",{className:u===1?"preview-title-part active":"preview-title-part",children:"\u30AD\u30E3\u30E9"})]}),c("div",{className:"preview-part",onClick:()=>{r(2),h(F),N(null)},children:[e("div",{className:"preview-img-part",children:e("div",{style:{backgroundImage:`url(${s!=null?s.img_url:"/assets/image/point-bg.png"})`},className:s!=null?"world-preview":"world-none-preview"})}),e("div",{className:u===2?"preview-title-part active":"preview-title-part",children:"\u4E16\u754C"})]})]}),c("div",{className:"point-select",children:[e("div",{className:"point-search",children:c("form",{onSubmit:W,children:[e(te,{value:E,onChange:(n,t)=>{typeof t=="string"?N({label:t}):t&&t.inputValue?N({label:t.inputValue}):N(t)},filterOptions:(n,t)=>ge(n,t),selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:C,getOptionLabel:n=>typeof n=="string"?n:n.label,renderOption:(n,t)=>e("li",P(H({},n),{children:t.label})),renderInput:n=>e(ae,P(H({},n),{label:""}))}),e("button",{className:"search-btn",children:e("img",{src:"/assets/image/point-search.png",alt:""})})]})}),c("div",{className:"point-body",style:{height:`calc(${y}px - 340px)`},children:[u===1&&e("div",{className:"point-body-wrap",children:A.map((n,t)=>e("div",{style:{backgroundImage:`url(${n.img_url})`},onClick:()=>I(n.chara_id),className:`${l.map(p=>p.chara_id).includes(n.chara_id)?"active":""} character-item`,children:e("span",{})},t))}),u==2&&e("div",{className:"point-body-wrap",children:T.map((n,t)=>e("div",{style:{backgroundImage:`url(${n.img_url})`},className:`${(s==null?void 0:s.img_url)==n.img_url?"active":""} location-item`,onClick:p=>{f(n)},children:e("span",{})},t))})]})]})]}),e("div",{className:"character-add-btn-part",children:e("button",{onClick:R,className:`character-add-btn ${w?"active":""}`,disabled:!w,children:"\u30DE\u305C\u308B"})})]})}const G="https://mazete-api-dev.pechakucha.ai";function fe(){const[a,u]=i.exports.useState([0,0]);return i.exports.useLayoutEffect(()=>{function r(){u([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]),a}function ve(){const a=J(),u=i.exports.useRef(),[r,l]=i.exports.useState(!1),[o,s]=i.exports.useState(!0),[f,w]=i.exports.useState(`\u30D3\u30EB\u306E\u5C4B\u4E0A\u306B\u3042\u3064\u3081\u3089\u308C\u305F\u30B4\u30F3\u9054\u3002

\u5229\u6839\u5DDD\u304B\u3089\u9244\u9AA8\u306E\u4E0A\u3092\u6E21\u3063\u3066\u3001\u5411\u3053\u3046\u306E\u30D3\u30EB\u3078\u884C\u3051\u305F\u3082\u306E\u306B\u8CDE\u91D1\u304C\u3082\u3089\u3048\u308B\u3068\u8AAC\u660E\u3092\u53D7\u3051\u308B\u3002

\u30B4\u30F3\u9054\u306F\u3044\u304B\u306B\u3057\u3066\u3053\u306E\u5371\u6A5F\u3092\u4E57\u308A\u8D8A\u3048\u308B\u306E\u304B\uFF1F`),[D,A]=i.exports.useState([]),[$,T]=i.exports.useState(null),[L,F]=fe();i.exports.useEffect(()=>{let g=window.innerHeight;document.getElementById("loading_synposis").style.height=g+"px";let b=localStorage.register_id||null,C=localStorage.outline_id||null,h=localStorage.background||null,E=localStorage.user_list||null;console.log(E,h),(!E||!h)&&a("/select",{state:{}}),T(h),A(JSON.parse(E));let N=JSON.stringify({user_id:b,outline_id:C}),O={method:"post",url:`${G}/get_outline`,headers:{"Content-Type":"application/json"},data:N};_(O).then(y=>{y.data.generated&&y.data.outline&&!y.data.error?(s(!1),w(y.data.outline)):a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(y=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]);const x=()=>{let g=localStorage.register_id||null,b=localStorage.outline_id||null,C=JSON.stringify({user_id:g,outline_id:b,outline:f}),h={method:"post",url:`${G}/generate_story`,headers:{"Content-Type":"application/json"},data:C};_(h).then(E=>{window.location.assign(`/talk/${E.data.story_id}`)}).catch(E=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return i.exports.useEffect(()=>{u.current&&r&&u.current.focus()},[r]),c("div",{className:"container",id:"loading_synposis",children:[c("div",{className:"container-wrap",children:[e("div",{className:`ls-top ${r?"editing":""}`,children:e("div",{className:"",style:{backgroundImage:`url(${$}`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:e("div",{className:"ls-top-body",children:D.map((g,b)=>e("div",{className:"ls-top-item",style:{backgroundImage:`url(${g})`}},b))})})}),c("div",{className:"ls-main",style:{height:`calc(${F}px - 280px)`},children:[e("div",{className:"ls-main-title",children:"\u3042\u3089\u3059\u3058"}),c("div",{className:"ls-main-loading-text",style:{height:"calc(100% - 70px)"},children:[o&&c("div",{className:"ls-main-loading-part",children:[e("img",{src:"/assets/image/white-loading.gif",alt:""}),e("span",{children:"\u4E0B\u66F8\u304D\u6E96\u5099\u4E2D"})]}),!o&&e("textarea",{ref:u,className:"ls-main-loading-wrap",value:f,disabled:!r,onChange:g=>{w(g.target.value)},onBlur:()=>{l(!1)}})]}),!r&&c("a",{className:"ls-main-edit-btn",onClick:()=>{u.current.focus(),l(!0)},children:[e("span",{children:"\u7DE8\u96C6"}),e("img",{src:"/assets/image/edit-icon.png",alt:""})]})]})]}),!r&&e("div",{className:"ls-main-making-btn-part",children:e("button",{onClick:x,className:o?"ls-main-making-btn":"ls-main-making-btn active",disabled:o,children:"\u3053\u306E\u4E16\u754C\u7DDA\u306B\u5165\u308B"})})]})}const _e="https://mazete-api-dev.pechakucha.ai";function U(a){return new Promise(u=>setTimeout(u,a))}function be(){const[a,u]=i.exports.useState([0,0]);return i.exports.useLayoutEffect(()=>{function r(){u([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",r),r(),()=>window.removeEventListener("resize",r)},[]),a}function Ee(){const a=J(),[u,r]=i.exports.useState(!0),[l,o]=i.exports.useState(null),[s,f]=i.exports.useState(0),[w,D]=i.exports.useState(null),[A,$]=i.exports.useState(null),[T,L]=i.exports.useState([]),[F,x]=i.exports.useState(!1),[g,b]=i.exports.useState(!1),[C,h]=i.exports.useState(!1),[E,N]=be();let{story_id:O}=se();i.exports.useEffect(()=>{let t=localStorage.register_id||null,p=JSON.stringify({user_id:t,story_id:O}),d={method:"post",url:`${_e}/get_story`,headers:{"Content-Type":"application/json"},data:p};_(d).then(v=>{r(!1),v.data.generated&&!v.data.error?(r(!1),o(v.data)):a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(v=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]),i.exports.useEffect(()=>{l&&y()},[l,s]),i.exports.useEffect(async()=>{if(l){let t=l.story;await U(1),D(t[s].position)}},[A]);const y=()=>{let t=l.story;$(t[s].chara_img_url),t[s].multiple?(x(!0),L(t[s].content)):(x(!1),I(t[s].content))},I=async t=>{h(!0);for(var p=0;p<t.length;)L([t.substring(0,p+1)]),p++,await U(75);h(!1),l.story.length-1==s&&b(!0)},R=t=>{F&&(x(!1),I(t))},W=()=>{!C&&!F&&l.story.length-1>s&&f(s+1)},n=()=>{console.log(s),s===0&&a("/synopsis",{state:{}}),s!=0&&!C&&(f(s-1),b(!1))};return c(K,{children:[u&&c("div",{className:"container",id:"loading_adventure",children:[e("div",{className:"container-wrap",children:c("div",{className:"la-wrap",children:[e("img",{src:"/assets/image/black-loading.gif",alt:""}),e("span",{children:"\u6E96\u5099\u4E2D"})]})}),e("button",{className:"back-to-btn",onClick:n,children:e("img",{src:"/assets/image/back-to-img.svg",alt:""})})]}),!u&&c("div",{className:"container",id:"adventure_state",style:{height:N},children:[c("div",{className:"container-wrap",onClick:W,children:[e("div",{className:"as-thumb",style:{backgroundImage:`url(${l==null?void 0:l.background_url})`},children:A&&e("img",{src:A,alt:"",className:`as-thumb-character ${w==0?"lb":w==1?"mb":"rb"}`})}),e("div",{className:"as-text",children:T.map((t,p)=>e("div",{className:"as-text-wrap",onClick:()=>{R(t)},children:t},p))})]}),e("button",{className:"back-to-btn",onClick:n,children:e("img",{src:"/assets/image/back-to-img.svg",alt:""})}),!g&&c("div",{className:"text-select-btn-group",children:[!F&&e("a",{className:"next-btn",children:"\u30BF\u30C3\u30D7\u3057\u3066\u6B21\u3078\xA0\xA0\u25B6"}),F&&e("a",{className:"next-btn active",children:"\u9078\u629E\u3057\u3066\u4E0B\u3055\u3044\xA0\xA0\u25B6"})]}),g&&c("div",{className:"text-select-btn-group",children:[e("a",{href:"",className:"final-btn",children:"\u3082\u3046\u4E00\u5EA6\u898B\u308B"}),e("a",{href:"",className:"final-btn",children:"\u3053\u306E\u7269\u8A9E\u3092\u30B7\u30A7\u30A2\u3059\u308B"})]})]})]})}function Ne(){const a=re();return console.log(a),e("div",{className:"flex-center position-ref full-height full-width bg-white",children:e("div",{className:"message",style:{padding:"10px"},dangerouslySetInnerHTML:{__html:a.state.message}})})}function ye(){return e(ie,{children:c(ne,{children:[e(z,{path:"/",element:e(pe,{})}),e(z,{path:"/select",element:e(me,{})}),e(z,{path:"/synopsis",element:e(ve,{})}),e(z,{path:"/talk/:id",element:e(Ee,{})}),e(z,{path:"/error",element:e(Ne,{})})]})})}function we(){return e(K,{children:e(ye,{})})}le.render(e(oe.StrictMode,{children:e(we,{})}),document.getElementById("root"));
