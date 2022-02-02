import{j as S,u as D,r as u,v as R,a as A,b as J,c as M,B as P,R as z,d as y,e as q,f as H}from"./vendor.2d405d2a.js";const K=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function c(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=c(a);fetch(a.href,i)}};K();const e=S.exports.jsx,s=S.exports.jsxs,T=S.exports.Fragment,U="https://mazete-api-dev.pechakucha.ai";function W(){const l=D();return u.exports.useEffect(()=>{let o=R();var c=JSON.stringify({register_id:o}),n={method:"post",url:`${U}/register_id`,headers:{"Content-Type":"application/json"},data:c};A(n).then(a=>{localStorage.setItem("register_id",o)}).catch(a=>{l("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}),e("div",{className:"container",children:s("div",{className:"container-wrap",children:[e("div",{className:"top-header",children:e("h1",{children:"\u30DE\u305C\u3066"})}),s("div",{className:"top-banner",children:[e("img",{src:"/assets/image/top-banner-img01.png",alt:"",className:"top-banner01"}),e("img",{src:"/assets/image/top-banner-img02.png",alt:"",className:"top-banner02"}),e("img",{src:"/assets/image/top-banner-img03.png",alt:"",className:"top-banner03"}),e("img",{src:"/assets/image/top-banner-img04.png",alt:"",className:"top-banner04"}),e("div",{className:"top-banner-text",children:"\u203B\u30B5\u30FC\u30D3\u30B9\u5185\u5BB9\u4F1D\u308F\u308B\u30A4\u30E9\u30B9\u30C8\u5916\u6CE8"})]}),e("a",{href:"/select",className:"start-btn",children:"\u30B9\u30BF\u30FC\u30C8"}),e("div",{className:"top-banner-border"}),s("div",{className:"top-delusion",children:[e("div",{className:"top-delusion-title",children:"\u307F\u3093\u306A\u306E\u5984\u60F3"}),s("div",{className:"top-delusion-body",children:[e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img01.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img02.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img03.png",alt:"",className:"top-delusion-img"})}),e("div",{className:"top-delusion-part",children:e("img",{src:"/assets/image/top-delusion-img04.png",alt:"",className:"top-delusion-img"})})]})]})]})})}const w="https://mazete-api-dev.pechakucha.ai";function G(){const[l,o]=u.exports.useState(1),[c,n]=u.exports.useState([]),[a,i]=u.exports.useState(null),[h,F]=u.exports.useState(!1),[b,C]=u.exports.useState([]),[_,x]=u.exports.useState([]);u.exports.useEffect(()=>{let t=localStorage.register_id||null;t||window.location.assign("/");let r=JSON.stringify({user_id:t,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),d={method:"post",url:`${w}/get_chara_list`,headers:{"Content-Type":"application/json"},data:r};A(d).then(v=>{C(v.data.chara_list)}).catch(v=>{navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let N=JSON.stringify({user_id:t,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),m={method:"post",url:`${w}/get_world_list`,headers:{"Content-Type":"application/json"},data:N};A(m).then(v=>{x(v.data.world_list)}).catch(v=>{navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]),u.exports.useEffect(()=>{a&&c.length>0&&F(!0)},[c,a]);const g=t=>{let r=c;if(r.includes(t)){for(let d=0;d<r.length;d++)r[d]===t&&(r.splice(d,1),d--);n([...r])}else r.length<3&&(r.push(t),n([...r]))},f=()=>{let t=localStorage.register_id||null,r=JSON.stringify({user_id:t,chosen_chara_ids:c.toString(),chosen_world_ids:[a].toString()}),d={method:"post",url:`${w}/generate_outline`,headers:{"Content-Type":"application/json"},data:r};A(d).then(N=>{localStorage.setItem("outline_id",N.data.outline_id),localStorage.setItem("background",_.filter(m=>m.world_id==a)[0].img_url),localStorage.setItem("user_list",JSON.stringify(c.map(m=>b.filter(v=>v.chara_id==m)[0].img_url))),window.location.assign("/synopsis")}).catch(N=>{navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return e("div",{className:"container",id:"character_select",children:s("div",{className:"container-wrap",children:[s("div",{className:"preview",children:[s("div",{className:"preview-part",onClick:()=>o(1),children:[s("div",{className:"preview-img-part",children:[c.map(t=>e("img",{src:b.filter(r=>r.chara_id==t)[0].img_url,alt:""},t)),c.length==0&&e("img",{src:"/assets/image/default-avatar.png"})]}),e("div",{className:l===1?"preview-title-part active":"preview-title-part",children:"\u30AD\u30E3\u30E9"})]}),s("div",{className:"preview-part",onClick:()=>{o(2)},children:[e("div",{className:"preview-img-part",children:e("img",{src:a!=null?_.filter(t=>t.world_id==a)[0].img_url:"/assets/image/point-bg.png",alt:""})}),e("div",{className:l===2?"preview-title-part active":"preview-title-part",children:"\u4E16\u754C"})]})]}),s("div",{className:"point-select",children:[s("div",{className:"point-search",children:[e("input",{type:"text"}),e("button",{type:"button",className:"search-btn",children:e("img",{src:"/assets/image/point-search.png",alt:""})})]}),s("div",{className:"point-body",children:[l===1&&e("div",{className:"point-body-wrap",children:b.map((t,r)=>s("div",{onClick:()=>g(t.chara_id),className:`${c.includes(t.chara_id)?"active":""} character-item`,children:[e("img",{src:t.img_url,alt:""}),e("span",{})]},r))}),l==2&&e("div",{className:"point-body-wrap",children:_.map((t,r)=>s("div",{className:`${a==t.world_id?"active":""} location-item`,onClick:d=>{i(t.world_id)},children:[e("img",{src:t.img_url,alt:""}),e("span",{})]},r))}),e("button",{onClick:f,className:`character-add-btn ${h?"active":""}`,disabled:!h,children:"\u30DE\u305C\u308B"})]})]})]})})}const $="https://mazete-api-dev.pechakucha.ai";function Q(){const l=u.exports.useRef(),[o,c]=u.exports.useState(!1),[n,a]=u.exports.useState(!0),[i,h]=u.exports.useState(`\u30D3\u30EB\u306E\u5C4B\u4E0A\u306B\u3042\u3064\u3081\u3089\u308C\u305F\u30B4\u30F3\u9054\u3002

\u5229\u6839\u5DDD\u304B\u3089\u9244\u9AA8\u306E\u4E0A\u3092\u6E21\u3063\u3066\u3001\u5411\u3053\u3046\u306E\u30D3\u30EB\u3078\u884C\u3051\u305F\u3082\u306E\u306B\u8CDE\u91D1\u304C\u3082\u3089\u3048\u308B\u3068\u8AAC\u660E\u3092\u53D7\u3051\u308B\u3002

\u30B4\u30F3\u9054\u306F\u3044\u304B\u306B\u3057\u3066\u3053\u306E\u5371\u6A5F\u3092\u4E57\u308A\u8D8A\u3048\u308B\u306E\u304B\uFF1F`),[F,b]=u.exports.useState([]),[C,_]=u.exports.useState(null);u.exports.useEffect(()=>{let g=localStorage.register_id||null,f=localStorage.outline_id||null,t=localStorage.background||null,r=localStorage.user_list||null;_(t),b(JSON.parse(r));let d=JSON.stringify({user_id:g,outline_id:f}),N={method:"post",url:`${$}/get_outline`,headers:{"Content-Type":"application/json"},data:d};A(N).then(m=>{m.data.generated&&m.data.outline&&!m.data.error?(a(!1),h(m.data.outline)):navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(m=>{navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]);const x=()=>{let g=localStorage.register_id||null,f=localStorage.outline_id||null,t=JSON.stringify({user_id:g,outline_id:f,outline:i}),r={method:"post",url:`${$}/generate_story`,headers:{"Content-Type":"application/json"},data:t};A(r).then(d=>{window.location.assign(`/talk/${d.data.story_id}`)}).catch(d=>{navigate("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return u.exports.useEffect(()=>{l.current&&o&&l.current.focus()},[o]),e("div",{className:"container",id:"loading_synposis",children:s("div",{className:"container-wrap",children:[e("div",{className:"ls-top editing",children:e("div",{className:"ls-top-wrap",style:{backgroundImage:`url(${C}`},children:e("div",{className:"ls-top-body",children:F.map((g,f)=>e("div",{className:"ls-top-item",children:e("img",{src:g,alt:""})},f))})})}),s("div",{className:"ls-main",children:[e("div",{className:"ls-main-title",children:"\u3042\u3089\u3059\u3058"}),s("div",{className:"ls-main-loading-text",children:[n&&s("div",{className:"ls-main-loading-part",children:[e("img",{src:"/assets/image/white-loading.gif",alt:""}),e("span",{children:"\u4E0B\u66F8\u304D\u6E96\u5099\u4E2D"})]}),!n&&e("textarea",{ref:l,className:"ls-main-loading-wrap",value:i,disabled:!o,onChange:g=>{h(g.target.value)},onBlur:()=>{c(!1)}})]}),!o&&e("div",{className:"ls-main-edit-btn",children:s("a",{onClick:()=>{c(!0)},children:[e("span",{children:"\u7DE8\u96C6"}),e("img",{src:"/assets/image/edit-icon.png",alt:""})]})}),!o&&e("button",{onClick:x,className:n?"ls-main-making-btn":"ls-main-making-btn active",disabled:n,children:"\u3053\u306E\u4E16\u754C\u7DDA\u306B\u5165\u308B"})]})]})})}const V="https://mazete-api-dev.pechakucha.ai";function X(l){return new Promise(o=>setTimeout(o,l))}function Y(){const l=D(),[o,c]=u.exports.useState(!0),[n,a]=u.exports.useState(null),[i,h]=u.exports.useState(0),[F,b]=u.exports.useState(null),[C,_]=u.exports.useState(null),[x,g]=u.exports.useState([]),[f,t]=u.exports.useState(!1),[r,d]=u.exports.useState(!1),[N,m]=u.exports.useState(!1);let{story_id:v}=J();u.exports.useEffect(()=>{let p=localStorage.register_id||null,E=JSON.stringify({user_id:p,story_id:v}),I={method:"post",url:`${V}/get_story`,headers:{"Content-Type":"application/json"},data:E};A(I).then(B=>{c(!1),B.data.generated&&!B.data.error?(c(!1),a(B.data)):l("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(B=>{l("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]),u.exports.useEffect(()=>{n&&O()},[n,i]);const O=()=>{let p=n.story;_(p[i].chara_img_url),b(p[i].position),p[i].multiple?(t(!0),g(p[i].content)):(t(!1),k(p[i].content))},k=async p=>{m(!0);for(var E=0;E<p.length;)g([p.substring(0,E+1)]),E++,await X(75);m(!1),n.story.length-1==i&&d(!0)},j=p=>{f&&(t(!1),k(p))},L=()=>{console.log(n.story),N||n.story.length-1>i&&h(i+1)};return s(T,{children:[o&&s("div",{className:"container",id:"loading_adventure",children:[e("div",{className:"container-wrap",children:s("div",{className:"la-wrap",children:[e("img",{src:"/assets/image/black-loading.gif",alt:""}),e("span",{children:"\u6E96\u5099\u4E2D"})]})}),e("button",{className:"back-to-btn",onClick:()=>{l("/synopsis",{state:{}})},children:e("img",{src:"/assets/image/back-to-img.svg",alt:""})})]}),!o&&s("div",{className:"container",id:"adventure_state",children:[s("div",{className:"container-wrap",children:[e("div",{className:"as-thumb",style:{backgroundImage:`url(${n==null?void 0:n.background_url})`},children:C&&e("img",{src:C,alt:"",className:`as-thumb-character ${F==0?"lb":F==1?"mb":"rb"}`})}),e("div",{className:"as-text",children:x.map((p,E)=>e("div",{className:"as-text-wrap",onClick:()=>{j(p)},children:p},E))}),!r&&s("div",{className:"text-select-btn-group",children:[!f&&e("a",{onClick:L,className:"next-btn",children:"\u30BF\u30C3\u30D7\u3057\u3066\u6B21\u3078\xA0\xA0\u25B6"}),f&&e("a",{className:"next-btn active",children:"\u9078\u629E\u3057\u3066\u4E0B\u3055\u3044\xA0\xA0\u25B6"})]}),r&&s("div",{className:"text-select-btn-group",children:[e("a",{href:"",className:"final-btn",children:"\u3082\u3046\u4E00\u5EA6\u898B\u308B"}),e("a",{href:"",className:"final-btn",children:"\u3053\u306E\u7269\u8A9E\u3092\u30B7\u30A7\u30A2\u3059\u308B"})]})]}),e("button",{className:"back-to-btn",onClick:()=>{l("/synopsis",{state:{}})},children:e("img",{src:"/assets/image/back-to-img.svg",alt:""})})]})]})}function Z(){const l=M();return console.log(l),e("div",{className:"flex-center position-ref full-height full-width bg-white",children:e("div",{className:"message",style:{padding:"10px"},dangerouslySetInnerHTML:{__html:l.state.message}})})}function ee(){return e(P,{children:s(z,{children:[e(y,{path:"/",element:e(W,{})}),e(y,{path:"/select",element:e(G,{})}),e(y,{path:"/synopsis",element:e(Q,{})}),e(y,{path:"/talk/:id",element:e(Y,{})}),e(y,{path:"/error",element:e(Z,{})})]})})}function te(){return e(T,{children:e(ee,{})})}q.render(e(H.StrictMode,{children:e(te,{})}),document.getElementById("root"));
