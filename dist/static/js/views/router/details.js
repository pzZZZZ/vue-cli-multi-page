webpackJsonp([5],{113:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(92),i=n(95),a=n.n(i),s=n(97),u=n.n(s),c=n(96),p=n.n(c),f=[{path:"/",component:a.a},{path:"/list",component:u.a},{path:"/app",component:p.a}];r.a.use(o.a);var h=new o.a({routes:f});new r.a({router:h}).$mount("#app")},136:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);e.default={name:"msg",props:["icon","title","description","buttons"],methods:{onClick:function(t,e){"function"==typeof t&&t(),e&&n.i(r.a)(e,this.$router)}}}},144:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n(2),n(283)),o=n.n(r),i=n(43),a=n.n(i),s=n(19),u=n.n(s),c=n(3),p=n.n(c);e.default={name:"add",components:{HbHead:p.a,Msg:o.a,Divider:a.a,XButton:u.a},data:function(){return{}},methods:{}}},145:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n(2),n(19)),o=n.n(r),i=n(3),a=n.n(i);e.default={components:{HbHead:a.a,XButton:o.a},data:function(){return{}},methods:{}}},19:function(t,e,n){n(30);var r=n(0)(n(21),n(34),null,null);t.exports=r.exports},21:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);e.default={name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object]},methods:{onClick:function(){!this.disabled&&n.i(r.a)(this.link,this.$router)}},computed:{classes:function(){return[{"weui-btn_disabled":this.disabled,"weui-btn_mini":this.mini},"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},210:function(t,e){},214:function(t,e){},222:function(t,e){},248:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hb-head",{attrs:{headfont:"有变化！！"}}),t._v(" "),n("div",{staticStyle:{padding:"25px 10px",color:"red","text-align":"center"}},[t._v("\n  \t注意看浏览器地址的变化！！\n  \t")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[n("x-button",{attrs:{type:"warn"}},[t._v("点我再切换回来度试呗")])],1)],1)},staticRenderFns:[]}},252:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-msg"},[n("div",{staticClass:"weui-msg__icon-area"},[n("i",{staticClass:"weui-icon_msg",class:"weui-icon-"+(t.icon||"success")})]),t._v(" "),n("div",{staticClass:"weui-msg__text-area"},[n("h2",{staticClass:"weui-msg__title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{staticClass:"weui-msg__desc"},[t._t("description")],2),t._v(" "),t.description?n("p",{staticClass:"weui-msg__desc",domProps:{innerHTML:t._s(t.description)}}):t._e()]),t._v(" "),n("div",{staticClass:"weui-msg__opr-area"},[n("p",{staticClass:"weui-btn-area"},[t._t("buttons"),t._v(" "),t._l(t.buttons,function(e){return n("a",{staticClass:"weui-btn",class:"weui-btn_"+e.type,attrs:{href:"javascript:;"},on:{click:function(n){t.onClick(e.onClick,e.link)}}},[t._v(t._s(e.text))])})],2)])])},staticRenderFns:[]}},261:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hb-head",{attrs:{headfont:"首页首页"}}),t._v(" "),n("div",{staticStyle:{padding:"25px 10px",color:"red","text-align":"center"}},[t._v("\n    注意看浏览器地址的变化！！\n  ")]),t._v(" "),n("msg",{attrs:{title:"路由切换demo",description:"内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现",icon:"success"}},[n("div",{attrs:{slot:"buttons"},slot:"buttons"},[n("router-link",{attrs:{to:"/list"}},[n("x-button",{attrs:{type:"primary"}},[t._v("路由切换")])],1),t._v(" "),n("div",{staticStyle:{"margin-top":"15px"}},[n("a",{attrs:{href:"../home/list.html"}},[n("x-button",[t._v("返回demo列表页")])],1)])],1)])],1)},staticRenderFns:[]}},271:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n    hell router\n")])},staticRenderFns:[]}},283:function(t,e,n){n(214);var r=n(0)(n(136),n(252),null,null);t.exports=r.exports},30:function(t,e){},34:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"weui-btn",class:t.classes,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?n("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]}},92:function(t,e,n){"use strict";function r(t,e){}function o(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function i(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function a(t,e){for(var n in e)t[n]=e[n];return t}function s(t,e,n){void 0===e&&(e={});var r,o=n||u;try{r=o(t||"")}catch(t){r={}}for(var i in e)r[i]=e[i];return r}function u(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var n=t.replace(/\+/g," ").split("="),r=Ft(n.shift()),o=n.length>0?Ft(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]}),e):e}function c(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return Bt(e);if(Array.isArray(n)){var r=[];return n.forEach(function(t){void 0!==t&&(null===t?r.push(Bt(e)):r.push(Bt(e)+"="+Bt(t)))}),r.join("&")}return Bt(e)+"="+Bt(n)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}function p(t,e,n,r){var o=r&&r.options.stringifyQuery,i=e.query||{};try{i=f(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:l(e,o),matched:t?h(t):[]};return n&&(a.redirectedFrom=l(n,o)),Object.freeze(a)}function f(t){if(Array.isArray(t))return t.map(f);if(t&&"object"==typeof t){var e={};for(var n in t)e[n]=f(t[n]);return e}return t}function h(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function l(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash;void 0===o&&(o="");var i=e||c;return(n||"/")+i(r)+o}function d(t,e){return e===zt?t===e:!!e&&(t.path&&e.path?t.path.replace(It,"")===e.path.replace(It,"")&&t.hash===e.hash&&v(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&v(t.query,e.query)&&v(t.params,e.params)))}function v(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&n.every(function(n){var r=t[n],o=e[n];return"object"==typeof r&&"object"==typeof o?v(r,o):String(r)===String(o)})}function y(t,e){return 0===t.path.replace(It,"/").indexOf(e.path.replace(It,"/"))&&(!e.hash||t.hash===e.hash)&&m(t.query,e.query)}function m(t,e){for(var n in e)if(!(n in t))return!1;return!0}function g(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){if(/\b_blank\b/i.test(t.currentTarget.getAttribute("target")))return}return t.preventDefault&&t.preventDefault(),!0}}function b(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=b(e.children)))return e}}function w(t){if(!w.installed||Pt!==t){w.installed=!0,Pt=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",qt),t.component("router-link",Kt);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}function _(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var s=i[a];".."===s?o.pop():"."!==s&&o.push(s)}return""!==o[0]&&o.unshift(""),o.join("/")}function x(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function k(t){return t.replace(/\/\//g,"/")}function C(t,e){for(var n,r=[],o=0,i=0,a="",s=e&&e.delimiter||"/";null!=(n=Zt.exec(t));){var u=n[0],c=n[1],p=n.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var f=t[i],h=n[2],l=n[3],d=n[4],v=n[5],y=n[6],m=n[7];a&&(r.push(a),a="");var g=null!=h&&null!=f&&f!==h,b="+"===y||"*"===y,w="?"===y||"*"===y,_=n[2]||s,x=d||v;r.push({name:l||o++,prefix:h||"",delimiter:_,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:x?S(x):m?".*":"[^"+A(_)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function E(t,e){return j(C(t,e))}function R(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function O(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function j(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},a=r||{},s=a.pretty?R:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p,f=i[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Jt(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=s(f[h]),!e[u].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?O(f):s(f),!e[u].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}function A(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function T(t,e){return t.keys=e,t}function $(t){return t.sensitive?"":"i"}function L(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return T(t,e)}function P(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(U(t[o],e,n).source);return T(new RegExp("(?:"+r.join("|")+")",$(n)),e)}function q(t,e,n){return M(C(t,n),e,n)}function M(t,e,n){Jt(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var s=t[a];if("string"==typeof s)i+=A(s);else{var u=A(s.prefix),c="(?:"+s.pattern+")";e.push(s),s.repeat&&(c+="(?:"+u+c+")*"),c=s.optional?s.partial?u+"("+c+")?":"(?:"+u+"("+c+"))?":u+"("+c+")",i+=c}}var p=A(n.delimiter||"/"),f=i.slice(-p.length)===p;return r||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":r&&f?"":"(?="+p+"|$)",T(new RegExp("^"+i,$(n)),e)}function U(t,e,n){return Jt(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?L(t,e):Jt(t)?P(t,e,n):q(t,e,n)}function H(t,e,n){try{return(te[t]||(te[t]=Nt.compile(t)))(e||{},{pretty:!0})}catch(t){return""}}function B(t,e,n,r){var o=e||[],i=n||Object.create(null),a=r||Object.create(null);t.forEach(function(t){F(o,i,a,t)});for(var s=0,u=o.length;s<u;s++)"*"===o[s]&&(o.push(o.splice(s,1)[0]),u--,s--);return{pathList:o,pathMap:i,nameMap:a}}function F(t,e,n,r,o,i){var a=r.path,s=r.name,u=r.pathToRegexpOptions||{},c=z(a,o,u.strict);"boolean"==typeof r.caseSensitive&&(u.sensitive=r.caseSensitive);var p={path:c,regex:I(c,u),components:r.components||{default:r.component},instances:{},name:s,parent:o,matchAs:i,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach(function(r){var o=i?k(i+"/"+r.path):void 0;F(t,e,n,r,p,o)}),void 0!==r.alias){(Array.isArray(r.alias)?r.alias:[r.alias]).forEach(function(i){var a={path:i,children:r.children};F(t,e,n,a,o,p.path||"/")})}e[p.path]||(t.push(p.path),e[p.path]=p),s&&(n[s]||(n[s]=p))}function I(t,e){var n=Nt(t,[],e);return n}function z(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]?t:null==e?t:k(e.path+"/"+t)}function V(t,e,n,r){var o="string"==typeof t?{path:t}:t;if(o.name||o._normalized)return o;if(!o.path&&o.params&&e){o=D({},o),o._normalized=!0;var i=D(D({},e.params),o.params);if(e.name)o.name=e.name,o.params=i;else if(e.matched.length){var a=e.matched[e.matched.length-1].path;o.path=H(a,i,"path "+e.path)}return o}var u=x(o.path||""),c=e&&e.path||"/",p=u.path?_(u.path,c,n||o.append):c,f=s(u.query,o.query,r&&r.options.parseQuery),h=o.hash||u.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:p,query:f,hash:h}}function D(t,e){for(var n in e)t[n]=e[n];return t}function K(t,e){function n(t){B(t,u,c,f)}function r(t,n,r){var o=V(t,n,!1,e),i=o.name;if(i){var s=f[i];if(!s)return a(null,o);var p=s.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof o.params&&(o.params={}),n&&"object"==typeof n.params)for(var h in n.params)!(h in o.params)&&p.indexOf(h)>-1&&(o.params[h]=n.params[h]);if(s)return o.path=H(s.path,o.params,'named route "'+i+'"'),a(s,o,r)}else if(o.path){o.params={};for(var l=0;l<u.length;l++){var d=u[l],v=c[d];if(X(v.regex,o.path,o.params))return a(v,o,r)}}return a(null,o)}function o(t,n){var o=t.redirect,i="function"==typeof o?o(p(t,n,null,e)):o;if("string"==typeof i&&(i={path:i}),!i||"object"!=typeof i)return a(null,n);var s=i,u=s.name,c=s.path,h=n.query,l=n.hash,d=n.params;if(h=s.hasOwnProperty("query")?s.query:h,l=s.hasOwnProperty("hash")?s.hash:l,d=s.hasOwnProperty("params")?s.params:d,u){f[u];return r({_normalized:!0,name:u,query:h,hash:l,params:d},void 0,n)}if(c){var v=J(c,t);return r({_normalized:!0,path:H(v,d,'redirect route with path "'+v+'"'),query:h,hash:l},void 0,n)}return a(null,n)}function i(t,e,n){var o=H(n,e.params,'aliased route with path "'+n+'"'),i=r({_normalized:!0,path:o});if(i){var s=i.matched,u=s[s.length-1];return e.params=i.params,a(u,e)}return a(null,e)}function a(t,n,r){return t&&t.redirect?o(t,r||n):t&&t.matchAs?i(t,n,t.matchAs):p(t,n,r,e)}var s=B(t),u=s.pathList,c=s.pathMap,f=s.nameMap;return{match:r,addRoutes:n}}function X(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1],s="string"==typeof r[o]?decodeURIComponent(r[o]):r[o];a&&(n[a.name]=s)}return!0}function J(t,e){return _(t,e.parent?e.parent.path:"/",!0)}function N(){window.history.replaceState({key:it()},""),window.addEventListener("popstate",function(t){Y(),t.state&&t.state.key&&at(t.state.key)})}function Q(t,e,n,r){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick(function(){var t=W(),i=o(e,n,r?t:null);i&&("function"==typeof i.then?i.then(function(e){rt(e,t)}).catch(function(t){}):rt(i,t))})}}function Y(){var t=it();t&&(ee[t]={x:window.pageXOffset,y:window.pageYOffset})}function W(){var t=it();if(t)return ee[t]}function G(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-r.left-e.x,y:o.top-r.top-e.y}}function Z(t){return nt(t.x)||nt(t.y)}function tt(t){return{x:nt(t.x)?t.x:window.pageXOffset,y:nt(t.y)?t.y:window.pageYOffset}}function et(t){return{x:nt(t.x)?t.x:0,y:nt(t.y)?t.y:0}}function nt(t){return"number"==typeof t}function rt(t,e){var n="object"==typeof t;if(n&&"string"==typeof t.selector){var r=document.querySelector(t.selector);if(r){var o=t.offset&&"object"==typeof t.offset?t.offset:{};o=et(o),e=G(r,o)}else Z(t)&&(e=tt(t))}else n&&Z(t)&&(e=tt(t));e&&window.scrollTo(e.x,e.y)}function ot(){return re.now().toFixed(3)}function it(){return oe}function at(t){oe=t}function st(t,e){Y();var n=window.history;try{e?n.replaceState({key:oe},"",t):(oe=ot(),n.pushState({key:oe},"",t))}catch(n){window.location[e?"replace":"assign"](t)}}function ut(t){st(t,!0)}function ct(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],function(){r(o+1)}):r(o+1)};r(0)}function pt(t){return function(e,n,r){var i=!1,a=0,s=null;ft(t,function(t,e,n,u){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var c,p=dt(function(e){lt(e)&&(e=e.default),t.resolved="function"==typeof e?e:Pt.extend(e),n.components[u]=e,--a<=0&&r()}),f=dt(function(t){var e="Failed to resolve async component "+u+": "+t;s||(s=o(t)?t:new Error(e),r(s))});try{c=t(p,f)}catch(t){f(t)}if(c)if("function"==typeof c.then)c.then(p,f);else{var h=c.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),i||r()}}function ft(t,e){return ht(t.map(function(t){return Object.keys(t.components).map(function(n){return e(t.components[n],t.instances[n],t,n)})}))}function ht(t){return Array.prototype.concat.apply([],t)}function lt(t){return t.__esModule||ie&&"Module"===t[Symbol.toStringTag]}function dt(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}function vt(t){if(!t)if(Xt){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function yt(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function mt(t,e,n,r){var o=ft(t,function(t,r,o,i){var a=gt(t,e);if(a)return Array.isArray(a)?a.map(function(t){return n(t,r,o,i)}):n(a,r,o,i)});return ht(r?o.reverse():o)}function gt(t,e){return"function"!=typeof t&&(t=Pt.extend(t)),t.options[e]}function bt(t){return mt(t,"beforeRouteLeave",_t,!0)}function wt(t){return mt(t,"beforeRouteUpdate",_t)}function _t(t,e){if(e)return function(){return t.apply(e,arguments)}}function xt(t,e,n){return mt(t,"beforeRouteEnter",function(t,r,o,i){return kt(t,o,i,e,n)})}function kt(t,e,n,r,o){return function(i,a,s){return t(i,a,function(t){s(t),"function"==typeof t&&r.push(function(){Ct(t,e.instances,n,o)})})}}function Ct(t,e,n,r){e[n]?t(e[n]):r()&&setTimeout(function(){Ct(t,e,n,r)},16)}function Et(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function Rt(t){var e=Et(t);if(!/^\/#/.test(e))return window.location.replace(k(t+"/#"+e)),!0}function Ot(){var t=jt();return"/"===t.charAt(0)||(Tt("/"+t),!1)}function jt(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function At(t){var e=window.location.href,n=e.indexOf("#");return(n>=0?e.slice(0,n):e)+"#"+t}function St(t){ne?st(At(t)):window.location.hash=t}function Tt(t){ne?ut(At(t)):window.location.replace(At(t))}function $t(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Lt(t,e,n){var r="hash"===n?"#"+e:e;return t?k(t+"/"+r):r}var Pt,qt={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,o=e.parent,s=e.data;s.routerView=!0;for(var u=o.$createElement,c=n.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;o&&o._routerRoot!==o;)o.$vnode&&o.$vnode.data.routerView&&h++,o._inactive&&(l=!0),o=o.$parent;if(s.routerViewDepth=h,l)return u(f[c],s,r);var d=p.matched[h];if(!d)return f[c]=null,u();var v=f[c]=d.components[c];s.registerRouteInstance=function(t,e){var n=d.instances[c];(e&&n!==t||!e&&n===t)&&(d.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){d.instances[c]=e.componentInstance};var y=s.props=i(p,d.props&&d.props[c]);if(y){y=s.props=a({},y);var m=s.attrs=s.attrs||{};for(var g in y)v.props&&g in v.props||(m[g]=y[g],delete y[g])}return u(v,s,r)}},Mt=/[!'()*]/g,Ut=function(t){return"%"+t.charCodeAt(0).toString(16)},Ht=/%2C/g,Bt=function(t){return encodeURIComponent(t).replace(Mt,Ut).replace(Ht,",")},Ft=decodeURIComponent,It=/\/?$/,zt=p(null,{path:"/"}),Vt=[String,Object],Dt=[String,Array],Kt={name:"router-link",props:{to:{type:Vt,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:Dt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,o=n.resolve(this.to,r,this.append),i=o.location,a=o.route,s=o.href,u={},c=n.options.linkActiveClass,f=n.options.linkExactActiveClass,h=null==c?"router-link-active":c,l=null==f?"router-link-exact-active":f,v=null==this.activeClass?h:this.activeClass,m=null==this.exactActiveClass?l:this.exactActiveClass,w=i.path?p(null,i,null,n):a;u[m]=d(r,w),u[v]=this.exact?u[m]:y(r,w);var _=function(t){g(t)&&(e.replace?n.replace(i):n.push(i))},x={click:g};Array.isArray(this.event)?this.event.forEach(function(t){x[t]=_}):x[this.event]=_;var k={class:u};if("a"===this.tag)k.on=x,k.attrs={href:s};else{var C=b(this.$slots.default);if(C){C.isStatic=!1;var E=Pt.util.extend;(C.data=E({},C.data)).on=x;(C.data.attrs=E({},C.data.attrs)).href=s}else k.on=x}return t(this.tag,k,this.$slots.default)}},Xt="undefined"!=typeof window,Jt=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},Nt=U,Qt=C,Yt=E,Wt=j,Gt=M,Zt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");Nt.parse=Qt,Nt.compile=Yt,Nt.tokensToFunction=Wt,Nt.tokensToRegExp=Gt;var te=Object.create(null),ee=Object.create(null),ne=Xt&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),re=Xt&&window.performance&&window.performance.now?window.performance:Date,oe=ot(),ie="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,ae=function(t,e){this.router=t,this.base=vt(e),this.current=zt,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};ae.prototype.listen=function(t){this.cb=t},ae.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ae.prototype.onError=function(t){this.errorCbs.push(t)},ae.prototype.transitionTo=function(t,e,n){var r=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){r.updateRoute(o),e&&e(o),r.ensureURL(),r.ready||(r.ready=!0,r.readyCbs.forEach(function(t){t(o)}))},function(t){n&&n(t),t&&!r.ready&&(r.ready=!0,r.readyErrorCbs.forEach(function(e){e(t)}))})},ae.prototype.confirmTransition=function(t,e,n){var i=this,a=this.current,s=function(t){o(t)&&(i.errorCbs.length?i.errorCbs.forEach(function(e){e(t)}):(r(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)};if(d(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),s();var u=yt(this.current.matched,t.matched),c=u.updated,p=u.deactivated,f=u.activated,h=[].concat(bt(p),this.router.beforeHooks,wt(c),f.map(function(t){return t.beforeEnter}),pt(f));this.pending=t;var l=function(e,n){if(i.pending!==t)return s();try{e(t,a,function(t){!1===t||o(t)?(i.ensureURL(!0),s(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(s(),"object"==typeof t&&t.replace?i.replace(t):i.push(t)):n(t)})}catch(t){s(t)}};ct(h,l,function(){var n=[];ct(xt(f,n,function(){return i.current===t}).concat(i.router.resolveHooks),l,function(){if(i.pending!==t)return s();i.pending=null,e(t),i.router.app&&i.router.app.$nextTick(function(){n.forEach(function(t){t()})})})})},ae.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(n){n&&n(t,e)})};var se=function(t){function e(e,n){var r=this;t.call(this,e,n);var o=e.options.scrollBehavior;o&&N();var i=Et(this.base);window.addEventListener("popstate",function(t){var n=r.current,a=Et(r.base);r.current===zt&&a===i||r.transitionTo(a,function(t){o&&Q(e,t,n,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){st(k(r.base+t.fullPath)),Q(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){ut(k(r.base+t.fullPath)),Q(r.router,t,i,!1),e&&e(t)},n)},e.prototype.ensureURL=function(t){if(Et(this.base)!==this.current.fullPath){var e=k(this.base+this.current.fullPath);t?st(e):ut(e)}},e.prototype.getCurrentLocation=function(){return Et(this.base)},e}(ae),ue=function(t){function e(e,n,r){t.call(this,e,n),r&&Rt(this.base)||Ot()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router,n=e.options.scrollBehavior,r=ne&&n;r&&N(),window.addEventListener(ne?"popstate":"hashchange",function(){var e=t.current;Ot()&&t.transitionTo(jt(),function(n){r&&Q(t.router,n,e,!0),ne||Tt(n.fullPath)})})},e.prototype.push=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){St(t.fullPath),Q(r.router,t,i,!1),e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this,o=this,i=o.current;this.transitionTo(t,function(t){Tt(t.fullPath),Q(r.router,t,i,!1),e&&e(t)},n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;jt()!==e&&(t?St(e):Tt(e))},e.prototype.getCurrentLocation=function(){return jt()},e}(ae),ce=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)},n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)},n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,function(){e.index=n,e.updateRoute(r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ae),pe=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=K(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!ne&&!1!==t.fallback,this.fallback&&(e="hash"),Xt||(e="abstract"),this.mode=e,e){case"history":this.history=new se(this,t.base);break;case"hash":this.history=new ue(this,t.base,this.fallback);break;case"abstract":this.history=new ce(this,t.base)}},fe={currentRoute:{configurable:!0}};pe.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},fe.currentRoute.get=function(){return this.history&&this.history.current},pe.prototype.init=function(t){var e=this;if(this.apps.push(t),!this.app){this.app=t;var n=this.history;if(n instanceof se)n.transitionTo(n.getCurrentLocation());else if(n instanceof ue){var r=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen(function(t){e.apps.forEach(function(e){e._route=t})})}},pe.prototype.beforeEach=function(t){return $t(this.beforeHooks,t)},pe.prototype.beforeResolve=function(t){return $t(this.resolveHooks,t)},pe.prototype.afterEach=function(t){return $t(this.afterHooks,t)},pe.prototype.onReady=function(t,e){this.history.onReady(t,e)},pe.prototype.onError=function(t){this.history.onError(t)},pe.prototype.push=function(t,e,n){this.history.push(t,e,n)},pe.prototype.replace=function(t,e,n){this.history.replace(t,e,n)},pe.prototype.go=function(t){this.history.go(t)},pe.prototype.back=function(){this.go(-1)},pe.prototype.forward=function(){this.go(1)},pe.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},pe.prototype.resolve=function(t,e,n){var r=V(t,e||this.history.current,n,this),o=this.match(r,e),i=o.redirectedFrom||o.fullPath;return{location:r,route:o,href:Lt(this.history.base,i,this.mode),normalizedTo:r,resolved:o}},pe.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==zt&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(pe.prototype,fe),pe.install=w,pe.version="2.8.1",Xt&&window.Vue&&window.Vue.use(pe),e.a=pe},95:function(t,e,n){n(222);var r=n(0)(n(144),n(261),null,null);t.exports=r.exports},96:function(t,e,n){var r=n(0)(null,n(271),null,null);t.exports=r.exports},97:function(t,e,n){n(210);var r=n(0)(n(145),n(248),null,null);t.exports=r.exports}},[113]);