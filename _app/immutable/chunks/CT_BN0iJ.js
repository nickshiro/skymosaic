import{s as o,g as c}from"./BtnobKeV.js";import{m as b,n as f,g as l,t as d,s as p,d as _}from"./s5eNgrgx.js";let s=!1,t=Symbol();function m(e,u,r){const n=r[u]??(r[u]={store:null,source:b(void 0),unsubscribe:f});if(n.store!==e&&!(t in r))if(n.unsubscribe(),n.store=e,e==null)n.source.v=void 0,n.unsubscribe=f;else{var i=!0;n.unsubscribe=o(e,a=>{i?n.source.v=a:p(n.source,a)}),i=!1}return t in r?c(e):l(n.source)}function y(){const e={};function u(){d(()=>{for(var r in e)e[r].unsubscribe();_(e,t,{enumerable:!1,value:!0})})}return[e,u]}function N(e,u,r){return e.set(r),u}function S(e){var u=s;try{return s=!1,[e(),s]}finally{s=u}}export{N as a,m as b,S as c,y as s};
