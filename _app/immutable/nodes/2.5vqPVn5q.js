import{b as Z,e as _e,a as c,t as y,d as x}from"../chunks/E5shrYbX.js";import{i as ie}from"../chunks/D2o1e2lG.js";import{D as ee,F as te,H as me,I as pe,k as xe,q as L,Q as Y,o as be,v as re,M as he,S as $e,N as ge,P as ye,K as we,p as Pe,at as ke,au as Ce,a6 as Le,av as Te,aw as Ae,a as C,ac as Ie,A as l,B as d,w as I,z as se,y as S,C as n,ax as b}from"../chunks/s5eNgrgx.js";import{s as D,a as K,b as E}from"../chunks/CT_BN0iJ.js";import{w as Se}from"../chunks/BtnobKeV.js";import{s as M}from"../chunks/BmwMooZs.js";let ae=!1;function ne(){ae||(ae=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function je(e){var t=me,r=pe;ee(null),te(null);try{return e()}finally{ee(t),te(r)}}function De(e,t,r,i=r){e.addEventListener(t,()=>je(r));const a=e.__on_r;a?e.__on_r=()=>{a(),i(!0)}:e.__on_r=()=>i(!0),ne()}function Ee(e,t,r,i,a){var o=e,s="",v;xe(()=>{if(s===(s=t()??"")){L&&Y();return}v!==void 0&&(Pe(v),v=void 0),s!==""&&(v=be(()=>{if(L){re.data;for(var f=Y(),m=f;f!==null&&(f.nodeType!==8||f.data!=="");)m=f,f=he(f);if(f===null)throw $e(),ge;Z(re,m),o=ye(f);return}var $=s+"",p=_e($);Z(we(p),p.lastChild),o.before(p)}))})}function le(e,t,r,i,a){var v;L&&Y();var o=(v=t.$$slots)==null?void 0:v[r],s=!1;o===!0&&(o=t.children,s=!0),o===void 0||o(e,s?()=>i:i)}function V(e){if(L){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var i=e.value;q(e,"value",null),e.value=i}if(e.hasAttribute("checked")){var a=e.checked;q(e,"checked",null),e.checked=a}}};e.__on_r=r,ke(r),ne()}}function q(e,t,r,i){var a=e.__attributes??(e.__attributes={});L&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||a[t]!==(a[t]=r)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[Ce]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ne(e).includes(t)?e[t]=r:e.setAttribute(t,r))}var oe=new Map;function Ne(e){var t=oe.get(e.nodeName);if(t)return t;oe.set(e.nodeName,t=[]);for(var r,i=e,a=Element.prototype;a!==i;){r=Te(i);for(var o in r)r[o].set&&t.push(o);i=Le(i)}return t}function F(e,t,r=t){var i=Ae();De(e,"input",a=>{var o=a?e.defaultValue:e.value;if(o=O(e)?z(o):o,r(o),i&&o!==(o=t())){var s=e.selectionStart,v=e.selectionEnd;e.value=o??"",v!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(v,e.value.length))}}),(L&&e.defaultValue!==e.value||C(t)==null&&e.value)&&r(O(e)?z(e.value):e.value),Ie(()=>{var a=t();O(e)&&a===z(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function O(e){var t=e.type;return t==="number"||t==="range"}function z(e){return e===""?null:+e}var Re=y('<div class="flex h-9 items-center pl-4 pr-2"><h2 class="text-text-primary font-primary select-none text-[14px] font-medium leading-4"><!></h2></div>');function A(e,t){var r=Re(),i=l(r),a=l(i);le(a,t,"default",{}),d(i),d(r),c(e,r)}var He=y('<div class="pl-4"><p class="text-text-secondary font-primary select-none text-[12px] font-medium leading-[16px]"><!></p></div>');function k(e,t){var r=He(),i=l(r),a=l(i);le(a,t,"default",{}),d(i),d(r),c(e,r)}const w=Se({date:"2024-08-09",time:"03:00",latitude:59.855774,longitude:31.410969,header:"Under this sky, I found you",subtitle:""});var Be=y('<div class="relative my-auto ml-4 mr-2 mt-1 box-border h-8"><div class="text-text-secondary pointer-events-none absolute left-0 top-0 flex h-full w-6 select-none items-center justify-center text-center"><p class="font-primary leading-2 align-middle text-[14px] font-medium"><!></p></div> <input type="text" class="leading-2 focus:border-border bg-input-bg selection:bg-input-selection-bg selection:text-input-selection-text box-border h-full w-full rounded-lg border border-transparent pl-6 pr-2 align-middle text-[14px] font-normal outline-none"></div>');function j(e,t){I(t,!0);const[r,i]=D(),a=()=>E(w,"$paperContext",r);var o=Be(),s=l(o),v=l(s),f=l(v);Ee(f,()=>t.icon),d(v),d(s);var m=n(s,2);V(m),d(o),se(()=>q(m,"maxlength",t.maxlength)),F(m,()=>a()[t.identifier],$=>K(w,C(a)[t.identifier]=$,C(a))),c(e,o),S(),i()}var Me=y('<div class="relative my-auto ml-4 mr-2 mt-1 box-border h-8"><div class="text-text-secondary pointer-events-none absolute left-0 top-0 flex h-full w-6 select-none items-center justify-center text-center"><p class="font-primary leading-2 align-middle text-[14px] font-medium">D</p></div> <input type="date" class="leading-2 focus:border-border bg-input-bg selection:bg-input-selection-bg selection:text-input-selection-text box-border h-full w-full rounded-lg border border-transparent pl-6 pr-2 align-middle text-[14px] font-normal outline-none"></div>');function Oe(e,t){I(t,!0);const[r,i]=D(),a=()=>E(w,"$paperContext",r);var o=Me(),s=n(l(o),2);V(s),d(o),F(s,()=>a()[t.identifier],v=>K(w,C(a)[t.identifier]=v,C(a))),c(e,o),S(),i()}var ze=y('<div class="relative my-auto ml-4 mr-2 mt-1 box-border h-8"><div class="text-text-secondary pointer-events-none absolute left-0 top-0 flex h-full w-6 select-none items-center justify-center text-center"><p class="font-primary leading-2 align-middle text-[14px] font-medium">T</p></div> <input type="time" class="leading-2 focus:border-border bg-input-bg selection:bg-input-selection-bg selection:text-input-selection-text box-border h-full w-full rounded-lg border border-transparent pl-6 pr-2 align-middle text-[14px] font-normal outline-none"></div>');function Ye(e,t){I(t,!0);const[r,i]=D(),a=()=>E(w,"$paperContext",r);var o=ze(),s=n(l(o),2);V(s),d(o),F(s,()=>a()[t.identifier],v=>K(w,C(a)[t.identifier]=v,C(a))),c(e,o),S(),i()}var qe=y('<hr class="border-border h-0 w-full border-t">');function T(e){var t=qe();c(e,t)}var Ke=y('<aside class="border-border bottom-0] fixed left-0 top-0 z-50 box-border flex h-screen w-60 scale-100 transform flex-col items-stretch justify-between overflow-hidden border-r bg-secondary"><div><h1 class="font-primary select-none py-2 pl-4 text-xl">Skymosaic</h1> <!> <div class="mb-3"><!> <!> <!></div> <div class="mb-4 mt-2"><!> <!></div> <div class="mb-3 mt-2"><!> <!> <!> <!></div> <div class="mb-4 mt-2"><!> <!></div> <div class="mb-3 mt-2"><!> <!> <!> <!></div> <div class="mb-4 mt-2"><!> <!></div> <!></div></aside>');function Ve(e,t){I(t,!1),w.subscribe(u=>{}),ie();var r=Ke(),i=l(r),a=n(l(i),2);T(a);var o=n(a,2),s=l(o);A(s,{children:(u,P)=>{b();var _=x("Coordinates");c(u,_)},$$slots:{default:!0}});var v=n(s,2);k(v,{children:(u,P)=>{b();var _=x("Latitude");c(u,_)},$$slots:{default:!0}});var f=n(v,2);j(f,{maxlength:10,identifier:"latitude",icon:"Y"}),d(o);var m=n(o,2),$=l(m);k($,{children:(u,P)=>{b();var _=x("Longitude");c(u,_)},$$slots:{default:!0}});var p=n($,2);j(p,{maxlength:11,identifier:"longitude",icon:"X"}),d(m);var g=n(m,2),h=l(g);T(h);var N=n(h,2);A(N,{children:(u,P)=>{b();var _=x("Date and time");c(u,_)},$$slots:{default:!0}});var G=n(N,2);k(G,{children:(u,P)=>{b();var _=x("Date");c(u,_)},$$slots:{default:!0}});var de=n(G,2);Oe(de,{identifier:"date"}),d(g);var R=n(g,2),Q=l(R);k(Q,{children:(u,P)=>{b();var _=x("Time");c(u,_)},$$slots:{default:!0}});var ve=n(Q,2);Ye(ve,{identifier:"time"}),d(R);var H=n(R,2),U=l(H);T(U);var X=n(U,2);A(X,{children:(u,P)=>{b();var _=x("Signature");c(u,_)},$$slots:{default:!0}});var J=n(X,2);k(J,{children:(u,P)=>{b();var _=x("Header");c(u,_)},$$slots:{default:!0}});var ce=n(J,2);j(ce,{identifier:"header",maxlength:80,icon:"T"}),d(H);var B=n(H,2),W=l(B);k(W,{children:(u,P)=>{b();var _=x("Subtitle");c(u,_)},$$slots:{default:!0}});var fe=n(W,2);j(fe,{identifier:"subtitle",maxlength:80,icon:"T"}),d(B);var ue=n(B,2);T(ue),d(i),d(r),c(e,r),S()}var Fe=y('<div class="relative box-border h-full select-none bg-white [aspect-ratio:0.7070]"><div>gg</div> <div class="absolute bottom-0 left-0 h-[30%] w-full items-center"><h1 class="font-primary text-center"> </h1> <p class="font-primary text-center"> </p></div> <div class="absolute bottom-0 left-0 h-[10%] w-full items-center"><p class="font-primary text-center"> </p></div></div>');function Ge(e,t){I(t,!1);const[r,i]=D(),a=()=>E(w,"$paperContext",r);w.subscribe(N=>{}),ie();var o=Fe(),s=n(l(o),2),v=l(s),f=l(v,!0);d(v);var m=n(v,2),$=l(m,!0);d(m),d(s);var p=n(s,2),g=l(p),h=l(g);d(g),d(p),d(o),se(()=>{M(f,a().header),M($,a().subtitle),M(h,`${a().date??""} ${a().time??""}`)}),c(e,o),S(),i()}var Qe=y('<aside class="border-border fixed bottom-0 right-0 top-0 z-50 box-border flex h-screen w-60 scale-100 transform flex-col items-stretch justify-between overflow-hidden border-r bg-secondary"><div><div class="mb-3"><!> <!></div></div> <div><!> <!> <div class="mb-4"><!></div></div></aside>');function Ue(e){var t=Qe(),r=l(t),i=l(r),a=l(i);A(a,{children:(p,g)=>{b();var h=x("Colors");c(p,h)},$$slots:{default:!0}});var o=n(a,2);k(o,{children:(p,g)=>{b();var h=x("Latitude");c(p,h)},$$slots:{default:!0}}),d(i),d(r);var s=n(r,2),v=l(s);T(v);var f=n(v,2);A(f,{children:(p,g)=>{b();var h=x("Export");c(p,h)},$$slots:{default:!0}});var m=n(f,2),$=l(m);k($,{children:(p,g)=>{b();var h=x("Longitude");c(p,h)},$$slots:{default:!0}}),d(m),d(s),d(t),c(e,t)}var Xe=y('<div class="relative h-screen justify-between bg-primary"><!> <main class="flex h-screen items-center justify-center"><div class="h-[90%]"><!></div></main> <!></div>');function at(e){var t=Xe(),r=l(t);Ve(r,{});var i=n(r,2),a=l(i),o=l(a);Ge(o,{}),d(a),d(i);var s=n(i,2);Ue(s),d(t),c(e,t)}export{at as component};
