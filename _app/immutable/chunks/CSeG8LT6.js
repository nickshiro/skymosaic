var Mn=Array.isArray,rn=Array.prototype.indexOf,jn=Array.from,Un=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,en=Object.getOwnPropertyDescriptors,Bn=Object.prototype,Hn=Array.prototype,ln=Object.getPrototypeOf;const Vn=()=>{};function Gn(t){return t()}function Tt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,gt=4,H=8,ft=16,x=32,V=64,Z=128,b=256,W=512,p=1024,R=2048,F=4096,P=8192,L=16384,sn=32768,kt=65536,Kn=1<<17,an=1<<19,At=1<<20,yt=Symbol("$state"),$n=Symbol("legacy props"),Zn=Symbol("");function xt(t){return t===this.v}function un(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!un(t,this.v)}function on(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function fn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function _n(t){throw new Error("https://svelte.dev/e/effect_orphan")}function cn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Wn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Qn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function pn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function Xn(){nt=!0}const tr=1,nr=2,rr=4,er=8,lr=16,sr=1,ar=2,hn="[",dn="[!",yn="]",St={},ur=Symbol();function _t(t,n){var r={f:0,v:t,reactions:null,equals:xt,rv:0,wv:0};return r}function or(t){return Dt(_t(t))}function wn(t,n=!1){var e;const r=_t(t);return n||(r.equals=Rt),nt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function ir(t,n=!1){return Dt(wn(t,n))}function Dt(t){return u!==null&&!A&&u.f&w&&(g===null?In([t]):g.push(t)),t}function fr(t,n){return u!==null&&!A&&rt()&&u.f&(w|ft)&&(g===null||!g.includes(t))&&pn(),En(t,n)}function En(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Wt(),Ot(t,R),rt()&&i!==null&&i.f&p&&!(i.f&(x|V))&&(k===null?bn([t]):k.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&R||!e&&a===i||(m(a,n),o&(p|b)&&(o&w?Ot(a,F):lt(a)))}}function It(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function _r(t){O=t}let E;function M(t){if(t===null)throw It(),St;return E=t}function cr(){return M(N(E))}function vr(t){if(O){if(N(E)!==null)throw It(),St;E=t}}function pr(t=1){if(O){for(var n=t,r=E;n--;)r=N(r);E=r}}function hr(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===yn){if(t===0)return n;t-=1}else(r===hn||r===dn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var wt,bt,Nt;function dr(){if(wt===void 0){wt=window;var t=Element.prototype,n=Node.prototype;bt=dt(n,"firstChild").get,Nt=dt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function at(t){return bt.call(t)}function N(t){return Nt.call(t)}function yr(t,n){if(!O)return at(t);var r=at(E);if(r===null)r=E.appendChild(st());else if(n&&r.nodeType!==3){var e=st();return r==null||r.before(e),M(e),e}return M(r),r}function wr(t,n){if(!O){var r=at(t);return r instanceof Comment&&r.data===""?N(r):r}return E}function Er(t,n=1,r=!1){let e=O?E:t;for(var l;n--;)l=e,e=N(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=st();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function mr(t){t.textContent=""}function qt(t){var n=w|R;i===null?n|=b:i.f|=At;var r=u!==null&&u.f&w?u:null;const e={children:null,ctx:f,deps:null,equals:xt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??i};return r!==null&&(r.children??(r.children=[])).push(e),e}function Tr(t){const n=qt(t);return n.equals=Rt,n}function Ct(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?ct(e):I(e)}}}function mn(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function Pt(t){var n,r=i;X(mn(t));try{Ct(t),n=Jt(t)}finally{X(r)}return n}function Ft(t){var n=Pt(t),r=(D||t.f&b)&&t.deps!==null?F:p;m(t,r),t.equals(n)||(t.v=n,t.wv=Wt())}function ct(t){Ct(t),B(t,0),m(t,L),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Lt(t){i===null&&u===null&&_n(),u!==null&&u.f&b&&fn(),vt&&on()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var l=(t&V)!==0,s=i,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=q;try{Et(!0),pt(a),a.f|=sn}catch(T){throw I(a),T}finally{Et(o)}}else n!==null&&lt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(At|Z))===0;if(!_&&!l&&e&&(s!==null&&Tn(a,s),u!==null&&u.f&w)){var c=u;(c.children??(c.children=[])).push(a)}return a}function gr(t){const n=Y(H,null,!1);return m(n,p),n.teardown=t,n}function kr(t){Lt();var n=i!==null&&(i.f&x)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:i,reaction:u})}else{var e=Yt(t);return e}}function Ar(t){return Lt(),gn(t)}function xr(t){const n=Y(V,t,!0);return(r={})=>new Promise(e=>{r.outro?xn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Yt(t){return Y(gt,t,!1)}function gn(t){return Y(H,t,!0)}function Rr(t,n=[],r=qt){const e=n.map(r);return kn(()=>t(...e.map(Ln)))}function kn(t,n=0){return Y(H|ft|n,t,!0)}function Sr(t,n=!0){return Y(H|x,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=vt,e=u;mt(!0),Q(null);try{n.call(null)}finally{mt(r),Q(e)}}}function jt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ct(n[r])}}function Ut(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;n.f&x||I(n),n=r}}function I(t,n=!0){var r=!1;if((n||t.f&an)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:N(e);e.remove(),e=s}r=!0}Ut(t,n&&!r),jt(t),B(t,0),m(t,L);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Mt(t);var o=t.parent;o!==null&&o.first!==null&&Bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function xn(t,n){var r=[];Ht(t,r,!0),Rn(r,()=>{I(t),n&&n()})}function Rn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ht(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&kt)!==0||(e.f&x)!==0;Ht(e,n,s?r:!1),e=l}}}function Dr(t){Vt(t,!0)}function Vt(t,n){if(t.f&P){t.f^=P,t.f&p||(t.f^=p),G(t)&&(m(t,R),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&kt)!==0||(r.f&x)!==0;Vt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const Sn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let z=!1,J=!1,ut=[],ot=[];function Gt(){z=!1;const t=ut.slice();ut=[],Tt(t)}function Kt(){J=!1;const t=ot.slice();ot=[],Tt(t)}function Or(t){z||(z=!0,queueMicrotask(Gt)),ut.push(t)}function Ir(t){J||(J=!0,Sn(Kt)),ot.push(t)}function Dn(){z&&Gt(),J&&Kt()}const $t=0,On=1;let K=!1,$=$t,j=!1,U=null,q=!1,vt=!1;function Et(t){q=t}function mt(t){vt=t}let S=[],C=0;let u=null,A=!1;function Q(t){u=t}let i=null;function X(t){i=t}let g=null;function In(t){g=t}let h=null,y=0,k=null;function bn(t){k=t}let Zt=1,tt=0,D=!1,f=null;function Wt(){return++Zt}function rt(){return!nt||f!==null&&f.l===null}function G(t){var c;var n=t.f;if(n&R)return!0;if(n&F){var r=t.deps,e=(n&b)!==0;if(r!==null){var l,s,a=(n&W)!==0,o=e&&i!==null&&!D,_=r.length;if(a||o){for(l=0;l<_;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=W)}for(l=0;l<_;l++)if(s=r[l],G(s)&&Ft(s),s.wv>t.wv)return!0}(!e||i!==null&&!D)&&m(t,p)}return!1}function Nn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw K=!1,t}function qn(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&Z)===0)}function et(t,n,r,e){if(K){if(r===null&&(K=!1),qn(n))throw t;return}r!==null&&(K=!0);{Nn(t,n);return}}function zt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&w?zt(s,n,r+1):n===s&&(r===0?m(s,R):s.f&p&&m(s,F),lt(s))}}function Jt(t){var ht;var n=h,r=y,e=k,l=u,s=D,a=g,o=f,_=A,c=t.f;h=null,y=0,k=null,u=c&(x|V)?null:t,D=!q&&(c&b)!==0,g=null,f=t.ctx,A=!1,tt++;try{var T=(0,t.fn)(),v=t.deps;if(h!==null){var d;if(B(t,y),v!==null&&y>0)for(v.length=y+h.length,d=0;d<h.length;d++)v[y+d]=h[d];else t.deps=v=h;if(!D)for(d=y;d<v.length;d++)((ht=v[d]).reactions??(ht.reactions=[])).push(t)}else v!==null&&y<v.length&&(B(t,y),v.length=y);if(rt()&&k!==null&&!(t.f&(w|F|R)))for(d=0;d<k.length;d++)zt(k[d],t);return l!==null&&tt++,T}finally{h=n,y=r,k=e,u=l,D=s,g=a,f=o,A=_}}function Cn(t,n){let r=n.reactions;if(r!==null){var e=rn.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(h===null||!h.includes(n))&&(m(n,F),n.f&(b|W)||(n.f^=W),B(n,0))}function B(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Cn(t,r[e])}function pt(t){var n=t.f;if(!(n&L)){m(t,p);var r=i,e=f;i=t;try{n&ft?An(t):Ut(t),jt(t),Mt(t);var l=Jt(t);t.teardown=typeof l=="function"?l:null,t.wv=Zt;var s=t.deps,a}catch(o){et(o,t,r,e||t.ctx)}finally{i=r}}}function Qt(){if(C>1e3){C=0;try{cn()}catch(t){if(U!==null)et(t,U,null);else throw t}}C++}function Xt(t){var n=t.length;if(n!==0){Qt();var r=q;q=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var s=[];tn(l,s),Pn(s)}}finally{q=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|P)))try{G(e)&&(pt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Bt(e):e.fn=null))}catch(l){et(l,e,null,e.ctx)}}}function Fn(){if(j=!1,C>1001)return;const t=S;S=[],Xt(t),j||(C=0,U=null)}function lt(t){$===$t&&(j||(j=!0,queueMicrotask(Fn))),U=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(V|x)){if(!(r&p))return;n.f^=p}}S.push(n)}function tn(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&x)!==0,a=s&&(l&p)!==0,o=r.next;if(!a&&!(l&P))if(l&H){if(s)r.f^=p;else try{G(r)&&pt(r)}catch(v){et(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&gt&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var T=0;T<e.length;T++)_=e[T],n.push(_),tn(_,n)}function nn(t){var n=$,r=S;try{Qt();const l=[];$=On,S=l,j=!1,Xt(r);var e=t==null?void 0:t();return Dn(),(S.length>0||l.length>0)&&nn(),C=0,U=null,e}finally{$=n,S=r}}async function br(){await Promise.resolve(),nn()}function Ln(t){var T;var n=t.f,r=(n&w)!==0;if(r&&n&L){var e=Pt(t);return ct(t),e}if(u!==null&&!A){g!==null&&g.includes(t)&&vn();var l=u.deps;t.rv<tt&&(t.rv=tt,h===null&&l!==null&&l[y]===t?y++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&w){var _=a;o=_,a=_.parent}else{var c=a;(T=c.deriveds)!=null&&T.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(s=t,G(s)&&Ft(s)),t.v}function Nr(t){var n=A;try{return A=!0,t()}finally{A=n}}const Yn=-7169;function m(t,n){t.f=t.f&Yn|n}function qr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(f.l={s:null,u:null,r1:[],r2:_t(!1)})}function Cr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=i,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];X(s.effect),Q(s.reaction),Yt(s.fn)}}finally{X(r),Q(e)}}f=n.p,n.m=!0}return{}}function Pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(yt in t)it(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&yt in r&&it(r)}}}function it(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{it(t[e],n)}catch{}const r=ln(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=en(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{un as $,Jn as A,fr as B,dt as C,i as D,kt as E,Qn as F,ln as G,Mn as H,wn as I,gr as J,Un as K,zn as L,Kn as M,x as N,X as O,nt as P,nr as Q,V as R,yt as S,$n as T,ur as U,Tr as V,rr as W,Rt as X,tr as Y,er as Z,lr as _,kr as a,st as a0,at as a1,sr as a2,ar as a3,M as a4,cr as a5,Q as a6,u as a7,Or as a8,dr as a9,hn as aa,N as ab,St as ac,_r as ad,yn as ae,It as af,Wn as ag,mr as ah,jn as ai,xr as aj,dn as ak,hr as al,Dr as am,xn as an,Yt as ao,gn as ap,nn as aq,br as ar,or as as,Ir as at,Zn as au,en as av,rt as aw,pr as ax,ir as ay,Nr as b,f as c,Tt as d,Pr as e,qt as f,Ln as g,Xn as h,kn as i,Sr as j,I as k,O as l,E as m,Vn as n,wr as o,qr as p,Cr as q,Gn as r,yr as s,Rr as t,Ar as u,vr as v,Er as w,Bn as x,Hn as y,_t as z};
