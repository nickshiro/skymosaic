import{S as D,x as j,y as z,z as P,A as H,B as g,C as T,U as d,g as y,D as U,F as V,G as J,H as Q,I as $,n as F,J as W,K as X,L as k,M as p,N as ee,R as re,O as Y,P as ne,Q as te,T as ae,b as q,f as G,V as ie,W as fe,X as ue,Y as se,Z as le,_ as ve}from"./BfgA6K2y.js";import{s as _e,g as de}from"./Bniq2Nku.js";function O(r,i=null,l){if(typeof r!="object"||r===null||D in r)return r;const v=J(r);if(v!==j&&v!==z)return r;var f=new Map,c=Q(r),I=P(0);c&&f.set("length",P(r.length));var w;return new Proxy(r,{defineProperty(u,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&H();var a=f.get(e);return a===void 0?(a=P(n.value),f.set(e,a)):g(a,O(n.value,w)),!0},deleteProperty(u,e){var n=f.get(e);if(n===void 0)e in u&&f.set(e,P(d));else{if(c&&typeof e=="string"){var a=f.get("length"),t=Number(e);Number.isInteger(t)&&t<a.v&&g(a,t)}g(n,d),K(I)}return!0},get(u,e,n){var b;if(e===D)return r;var a=f.get(e),t=e in u;if(a===void 0&&(!t||(b=T(u,e))!=null&&b.writable)&&(a=P(O(t?u[e]:d,w)),f.set(e,a)),a!==void 0){var s=y(a);return s===d?void 0:s}return Reflect.get(u,e,n)},getOwnPropertyDescriptor(u,e){var n=Reflect.getOwnPropertyDescriptor(u,e);if(n&&"value"in n){var a=f.get(e);a&&(n.value=y(a))}else if(n===void 0){var t=f.get(e),s=t==null?void 0:t.v;if(t!==void 0&&s!==d)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return n},has(u,e){var s;if(e===D)return!0;var n=f.get(e),a=n!==void 0&&n.v!==d||Reflect.has(u,e);if(n!==void 0||U!==null&&(!a||(s=T(u,e))!=null&&s.writable)){n===void 0&&(n=P(a?O(u[e],w):d),f.set(e,n));var t=y(n);if(t===d)return!1}return a},set(u,e,n,a){var R;var t=f.get(e),s=e in u;if(c&&e==="length")for(var b=n;b<t.v;b+=1){var m=f.get(b+"");m!==void 0?g(m,d):b in u&&(m=P(d),f.set(b+"",m))}t===void 0?(!s||(R=T(u,e))!=null&&R.writable)&&(t=P(void 0),g(t,O(n,w)),f.set(e,t)):(s=t.v!==d,g(t,O(n,w)));var o=Reflect.getOwnPropertyDescriptor(u,e);if(o!=null&&o.set&&o.set.call(a,n),!s){if(c&&typeof e=="string"){var E=f.get("length"),h=Number(e);Number.isInteger(h)&&h>=E.v&&g(E,h+1)}K(I)}return!0},ownKeys(u){y(I);var e=Reflect.ownKeys(u).filter(t=>{var s=f.get(t);return s===void 0||s.v!==d});for(var[n,a]of f)a.v!==d&&!(n in u)&&e.push(n);return e},setPrototypeOf(){V()}})}function K(r,i=1){g(r,r.v+i)}let A=!1,B=Symbol();function ge(r,i,l){const v=l[i]??(l[i]={store:null,source:$(void 0),unsubscribe:F});if(v.store!==r&&!(B in l))if(v.unsubscribe(),v.store=r,r==null)v.source.v=void 0,v.unsubscribe=F;else{var f=!0;v.unsubscribe=_e(r,c=>{f?v.source.v=c:g(v.source,c)}),f=!1}return B in l?de(r):y(v.source)}function ye(){const r={};function i(){W(()=>{for(var l in r)r[l].unsubscribe();X(r,B,{enumerable:!1,value:!0})})}return[r,i]}function Pe(r,i,l){return r.set(l),i}function ce(r){var i=A;try{return A=!1,[r(),A]}finally{A=i}}function Z(r){for(var i=U,l=U;i!==null&&!(i.f&(ee|re));)i=i.parent;try{return Y(i),r()}finally{Y(l)}}function Ie(r,i,l,v){var M;var f=(l&se)!==0,c=!ne||(l&te)!==0,I=(l&le)!==0,w=(l&ve)!==0,u=!1,e;I?[e,u]=ce(()=>r[i]):e=r[i];var n=D in r||ae in r,a=I&&(((M=T(r,i))==null?void 0:M.set)??(n&&i in r&&(_=>r[i]=_)))||void 0,t=v,s=!0,b=!1,m=()=>(b=!0,s&&(s=!1,w?t=q(v):t=v),t);e===void 0&&v!==void 0&&(a&&c&&k(),e=m(),a&&a(e));var o;if(c)o=()=>{var _=r[i];return _===void 0?m():(s=!0,b=!1,_)};else{var E=Z(()=>(f?G:ie)(()=>r[i]));E.f|=p,o=()=>{var _=y(E);return _!==void 0&&(t=void 0),_===void 0?t:_}}if(!(l&fe))return o;if(a){var h=r.$$legacy;return function(_,S){return arguments.length>0?((!c||!S||h||u)&&a(S?o():_),_):o()}}var R=!1,C=!1,L=$(e),N=Z(()=>G(()=>{var _=o(),S=y(L);return R?(R=!1,C=!0,S):(C=!1,L.v=_)}));return f||(N.equals=ue),function(_,S){if(arguments.length>0){const x=S?y(N):c&&I?O(_):_;return N.equals(x)||(R=!0,g(L,x),b&&t!==void 0&&(t=x),q(()=>y(N))),_}return y(N)}}export{O as a,Pe as b,ge as c,Ie as p,ye as s};
