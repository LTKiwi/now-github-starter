(function(e){function t(t){for(var a,l,s=t[0],u=t[1],i=t[2],p=0,d=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},r=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("form",{staticClass:"hero-body container",on:{submit:function(t){return t.preventDefault(),e.submitAction()}}},[n("div",{staticClass:"box columns is-multiline is-centered"},[n("div",{staticClass:"column is-two-thirds"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-size-2 has-text-centered"},[e._v(" Calculate CBR ")]),n("div",{staticClass:"columns is-multiline"},[n("b-field",{staticClass:"column",attrs:{label:"Number of Blows:"}},[n("b-numberinput",{attrs:{min:"1"},model:{value:e.b_num,callback:function(t){e.b_num=t},expression:"b_num"}})],1),n("b-field",{staticClass:"column",attrs:{label:"Total Depth(mm)"}},[n("b-input",{attrs:{compact:"",required:"",placeholder:"Depth in mm"},model:{value:e.measure,callback:function(t){e.measure=t},expression:"measure"}})],1),n("b-field",{staticClass:"column",attrs:{label:"Calculated CBR"}},[n("b-input",{attrs:{compact:"",disabled:"",placeholder:"%"},model:{value:e.calcCBR,callback:function(t){e.calcCBR=t},expression:"calcCBR"}})],1)],1),n("b-loading",{attrs:{"is-full-page":!1,active:e.isLoading}})],1)])])])])},s=[],u={name:"HelloWorld",data(){return{b_num:1,measure:null,isLoading:!1}},computed:{calcCBR:function(){return Math.floor(10*Math.random()*this.measure*this.b_num)%100}},methods:{addMeasurement(){console.log("NEW"),this.measureList.push(null)},removeMeasurement(){console.log("DELETE"),this.measureList.pop()},updateList(){console.log(this.b_num),console.log(this.measureList.length),this.b_num>this.measureList.length?this.addMeasurement():this.removeMeasurement()}},created(){}},i=u,c=n("2877"),p=Object(c["a"])(i,l,s,!1,null,null,null),d=p.exports,m={name:"app",components:{HelloWorld:d}},f=m,b=Object(c["a"])(f,o,r,!1,null,null,null),h=b.exports,v=n("289d"),g=(n("5abe"),n("ecee")),y=n("c074"),C=n("ad3d");g["c"].add(y["d"],y["e"],y["h"],y["g"],y["f"],y["c"],y["b"],y["a"],y["j"],y["k"],y["i"]),a["a"].component("vue-fontawesome",C["a"]),a["a"].use(v["a"],{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.6f2ce951.js.map