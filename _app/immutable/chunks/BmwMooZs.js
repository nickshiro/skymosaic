import{d as M,D as R,F as O,G as P,H as k,I,J as b,K as Y,L as q,M as C,N as T,O as g,P as D,Q as W,v as y,R as $,S as j,T as B,U as F,V as G,W as J,X as K,o as Q,w as U,q as E,y as X,c as z}from"./s5eNgrgx.js";import{b as Z}from"./E5shrYbX.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,A=new Set;function m(r){var N;var e=this,n=e.ownerDocument,c=r.type,o=((N=r.composedPath)==null?void 0:N.call(r))||[],t=o[0]||r.target,f=0,_=r.__root;if(_){var u=o.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=o.indexOf(e);if(h===-1)return;u<=h&&(f=u)}if(t=o[f]||r.target,t!==e){M(r,"currentTarget",{configurable:!0,get(){return t||n}});var w=k,i=I;R(null),O(null);try{for(var a,s=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(P(l)){var[V,...H]=l;V.apply(t,[r,...H])}else l.call(t,r)}catch(p){a?s.push(p):a=p}if(r.cancelBubble||d===e||d===null)break;t=d}if(a){for(let p of s)queueMicrotask(()=>{throw p});throw a}}finally{r.__root=e,delete r.currentTarget,R(w),O(i)}}}function sr(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function tr(r,e){return L(r,e)}function ir(r,e){b(),e.intro=e.intro??!1;const n=e.target,c=E,o=y;try{for(var t=Y(n);t&&(t.nodeType!==8||t.data!==q);)t=C(t);if(!t)throw T;g(!0),D(t),W();const f=L(r,{...e,anchor:t});if(y===null||y.nodeType!==8||y.data!==$)throw j(),T;return g(!1),f}catch(f){if(f===T)return e.recover===!1&&B(),b(),F(n),g(!1),tr(r,e);throw f}finally{g(c),D(o)}}const v=new Map;function L(r,{target:e,anchor:n,props:c={},events:o,context:t,intro:f=!0}){b();var _=new Set,u=i=>{for(var a=0;a<i.length;a++){var s=i[a];if(!_.has(s)){_.add(s);var d=rr(s);e.addEventListener(s,m,{passive:d});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:d}),v.set(s,1)):v.set(s,l+1)}}};u(G(er)),A.add(u);var h=void 0,w=J(()=>{var i=n??e.appendChild(K());return Q(()=>{if(t){U({});var a=z;a.c=t}o&&(c.$$events=o),E&&Z(i,null),h=r(i,c)||{},E&&(I.nodes_end=y),t&&X()}),()=>{var d;for(var a of _){e.removeEventListener(a,m);var s=v.get(a);--s===0?(document.removeEventListener(a,m),v.delete(a)):v.set(a,s)}A.delete(u),i!==n&&((d=i.parentNode)==null||d.removeChild(i))}});return S.set(h,w),h}let S=new WeakMap;function or(r,e){const n=S.get(r);return n?(S.delete(r),n(e)):Promise.resolve()}export{ir as h,tr as m,sr as s,or as u};
