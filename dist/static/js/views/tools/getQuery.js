webpackJsonp([6],{104:function(t,e,n){n(239);var r=n(0)(n(174),n(290),null,null);t.exports=r.exports},140:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(104),o=n.n(i);new r.a({render:function(t){return t(o.a)}}).$mount("#app")},174:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(37),i=n.n(r),o=(n(3),n(5)),a=n.n(o),s=n(190),u=n.n(s),l=n(20),c=n.n(l);e.default={components:{HbHead:a.a,XButton:c.a},data:function(){return{urlQueryString:"",urlQuery:{}}},mounted:function(){var t=u.a.parse();this.urlQueryString=i()(t),this.urlQuery=t},methods:{}}},190:function(t,e){function n(t){return t&&"[object Object]"===o.call(t)&&"isPrototypeOf"in t}function r(t){return t!==Object(t)}var i=e;i.escape=encodeURIComponent,i.unescape=function(t){return decodeURIComponent(t.replace(/\+/g," "))},i.stringify=function(t,e,o,u){if(!n(t))return"";e=e||"&",o=o||"=",u=u||!1;var l,c,p=[],f=i.escape;for(l in t)if(a.call(t,l))if(c=t[l],l=i.escape(l),r(c))p.push(l,o,f(c+""),e);else if(s(c)&&c.length)for(var d=0;d<c.length;d++)r(c[d])&&p.push(l,(u?f("[]"):"")+o,f(c[d]+""),e);else p.push(l,o,e);return p.pop(),p.join("")},i.parse=function(t,e,n){void 0===t&&(t=document.location.search);var r={};if("string"!=typeof t||0===u(t).length)return r;t=t.replace(/^\?/,"");var o=t.split(e||"&");n=n||"=";for(var l=i.unescape,c=0;c<o.length;c++){var p=o[c].split(n),f=l(u(p[0])),d=l(u(p.slice(1).join(n))),v=f.match(/^(\w+)\[\]$/);v&&v[1]&&(f=v[1]),a.call(r,f)?(s(r[f])||(r[f]=[r[f]]),r[f].push(d)):r[f]=v?[d]:d}return r};var o=Object.prototype.toString,a=Object.prototype.hasOwnProperty,s=Array.isArray||function(t){return"[object Array]"===o.call(t)},u=String.prototype.trim?function(t){return null==t?"":String.prototype.trim.call(t)}:function(t){return null==t?"":t.toString().replace(/^\s+/,"").replace(/\s+$/,"")}},20:function(t,e,n){n(30);var r=n(0)(n(24),n(33),null,null);t.exports=r.exports},239:function(t,e){},24:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(6);e.default={name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object]},methods:{onClick:function(){!this.disabled&&n.i(r.a)(this.link,this.$router)}},computed:{classes:function(){return[{"weui-btn_disabled":this.disabled,"weui-btn_mini":this.mini},"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},290:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainWarp"},[n("hb-head",{attrs:{headfont:"图片"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"martop10 bgfff pad10"},[t._v("\n    \t"+t._s(t.urlQueryString)+"\n    ")]),t._v(" "),n("div",{staticClass:"martop10 bgfff pad10"},[t._v("\n    \tgoodsid："+t._s(t.urlQuery.goodsid)+"\n    ")]),t._v(" "),n("div",{staticClass:"martop10 bgfff pad10"},[t._v("\n    \tshopid："+t._s(t.urlQuery.shopid)+"\n    ")]),t._v(" "),n("div",{staticClass:"martop10 pad20"},[n("a",{attrs:{href:"?goodsid=154897898&shopid=87878978891"}},[n("x-button",{attrs:{type:"primary"}},[t._v("切换个参数试试")])],1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bgfff martop10 pad10 font14 color666"},[n("p",[t._v("\n    \t\t这里展示获取多页面的url参数\n    \t")])])}]}},30:function(t,e){},33:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"weui-btn",class:t.classes,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?n("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]}},37:function(t,e,n){t.exports={default:n(47),__esModule:!0}},47:function(t,e,n){var r=n(4),i=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}}},[140]);