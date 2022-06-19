(function(i,s){typeof exports=="object"&&typeof module!="undefined"?s(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],s):(i=typeof globalThis!="undefined"?globalThis:i||self,s(i.WeiDesign={},i.Vue))})(this,function(i,s){"use strict";const f=Array.isArray,c=e=>typeof e=="string",r=e=>e!==null&&typeof e=="object";function l(...e){const t=[];for(let a=0;a<e.length;a++){const n=e[a];if(!!n){if(c(n))t.push(n);else if(f(n))for(let o=0;o<n.length;o++){const d=l(n[o]);d&&t.push(d)}else if(r(n))for(const o in n)n[o]&&t.push(o)}}return t.join(" ")}var g="";const b={type:{type:String,default:"default"},status:{type:String,default:"default"},size:{type:String,default:"md"},shape:{type:String,default:"square"},icon:{type:String,default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},u=s.defineComponent({name:"WeiButton",props:b,setup(e,{slots:t}){const a=l(["wei-button",`wei-button-type-${e.type}`,`wei-button-status-${e.status}`,`wei-button-shape-${e.shape}`,`wei-button-size-${e.size}`,e.disabled?"wei-button-disabled":""]);return()=>s.createVNode("button",{class:a,disabled:e.disabled||e.loading},[s.createVNode("div",{class:"wei-button-inner"},[s.createVNode("span",{class:"wei-button-slot"},[t.default&&t.default()])])])}});u.install=function(e){return e.component(u.name,u),e};const y=[u];var p={install:function(e){return y.forEach(t=>{e.use(t)}),e}};i.WeiButton=u,i.default=p,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});