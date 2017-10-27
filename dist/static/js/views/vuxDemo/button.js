webpackJsonp([1],{115:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),r=i(83),a=i.n(r);new n.a({render:function(t){return t(a.a)}}).$mount("#app")},118:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"box",props:{gap:String}}},122:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];e.default={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var i=0;i<n.length;i++)t[n[i]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}}},123:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},125:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group-title"}},148:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=(i(2),i(16)),r=i.n(n),a=i(284),s=i.n(a),o=i(289),u=i.n(o),l=i(24),d=i.n(l),p=i(287),c=i.n(p),v=i(286),b=i.n(v),_=i(23),f=i.n(_),x=i(4),m=i.n(x);e.default={components:{XButton:r.a,Box:s.a,GroupTitle:u.a,Group:d.a,Flexbox:c.a,FlexboxItem:b.a,Divider:f.a,HbHead:m.a},data:function(){return{submit001:"click me",disable001:!1}},methods:{change:function(t){console.log("change:",t)},processButton001:function(){this.submit001="processing",this.disable001=!0}}}},16:function(t,e,i){i(20);var n=i(0)(i(17),i(21),null,null);t.exports=n.exports},17:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(10);e.default={name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object]},methods:{onClick:function(){!this.disabled&&i.i(n.a)(this.link,this.$router)}},computed:{classes:function(){return[{"weui-btn_disabled":this.disabled,"weui-btn_mini":this.mini},"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},20:function(t,e){},205:function(t,e){},21:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]}},217:function(t,e){},230:function(t,e){},251:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===t.orient,"vux-flex-row":"horizontal"===t.orient},style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},263:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-cells__title"},[t._t("default")],2)},staticRenderFns:[]}},276:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mainWarp"},[i("hb-head",{attrs:{headfont:"button按钮"}}),t._v(" "),i("divider",[t._v("default")]),t._v(" "),i("box",{attrs:{gap:"10px 10px"}},[i("x-button",[t._v("submit")]),t._v(" "),i("x-button",{attrs:{type:"primary"}},[t._v("primary")]),t._v(" "),i("x-button",{attrs:{type:"warn"}},[t._v("Delete")]),t._v(" "),i("divider",[t._v("action type")]),t._v(" "),i("x-button",{attrs:{type:"primary","action-type":"button"}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{type:"warn","action-type":"reset"}},[t._v("reset")]),t._v(" "),i("divider",[t._v("loading")]),t._v(" "),i("x-button",{attrs:{type:"default","show-loading":""}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{type:"primary","show-loading":""}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{type:"warn","show-loading":""}},[t._v("submit")]),t._v(" "),i("divider",[t._v("mini")]),t._v(" "),i("x-button",{attrs:{mini:""}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{mini:"",type:"primary"}},[t._v("primary")]),t._v(" "),i("x-button",{attrs:{mini:"",type:"warn"}},[t._v("Delete")]),t._v(" "),i("br"),t._v(" "),i("x-button",{attrs:{mini:"",plain:""}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{mini:"",plain:"",type:"primary"}},[t._v("primary")]),t._v(" "),i("divider",[t._v("plain")]),t._v(" "),i("x-button",{attrs:{plain:""}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{plain:"",type:"primary"}},[t._v("primary")]),t._v(" "),i("divider",[t._v("you can custom styles")]),t._v(" "),i("x-button",{staticStyle:{"border-radius":"99px"},attrs:{plain:"",type:"primary"}},[t._v("primary")]),t._v(" "),i("x-button",{staticClass:"custom-primary-red",attrs:{plain:"",type:"primary"}},[t._v("primary")]),t._v(" "),i("divider",[t._v("disabled")]),t._v(" "),i("x-button",{attrs:{disabled:""}},[t._v("disable submit")]),t._v(" "),i("x-button",{attrs:{type:"primary",disabled:""}},[t._v("disable primary")]),t._v(" "),i("x-button",{attrs:{type:"warn",disabled:""}},[t._v("disable Delete")]),t._v(" "),i("divider",[t._v("use :text and :disabled")]),t._v(" "),i("x-button",{attrs:{text:t.submit001,disabled:t.disable001,type:"primary"},nativeOn:{click:function(e){t.processButton001(e)}}}),t._v(" "),i("divider",[t._v("combined with flexbox")]),t._v(" "),i("flexbox",[i("flexbox-item",[i("x-button",{attrs:{type:"primary"}},[t._v("primary")])],1),t._v(" "),i("flexbox-item",[i("x-button",{attrs:{type:"warn"}},[t._v("Delete")])],1)],1),t._v(" "),i("divider",[t._v("combined with flexbox")]),t._v(" "),i("flexbox",[i("flexbox-item",[i("x-button",{attrs:{type:"default"}},[t._v("default")])],1),t._v(" "),i("flexbox-item",[i("x-button",{attrs:{type:"primary"}},[t._v("primary")])],1),t._v(" "),i("flexbox-item",[i("x-button",{attrs:{type:"warn"}},[t._v("Delete")])],1)],1)],1)],1)},staticRenderFns:[]}},278:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{margin:t.gap}},[t._t("default")],2)},staticRenderFns:[]}},280:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox-item",style:t.style},[t._t("default")],2)},staticRenderFns:[]}},284:function(t,e,i){var n=i(0)(i(118),i(278),null,null);t.exports=n.exports},286:function(t,e,i){var n=i(0)(i(122),i(280),null,null);t.exports=n.exports},287:function(t,e,i){i(205);var n=i(0)(i(123),i(251),null,null);t.exports=n.exports},289:function(t,e,i){i(217);var n=i(0)(i(125),i(263),null,null);t.exports=n.exports},83:function(t,e,i){i(230);var n=i(0)(i(148),i(276),null,null);t.exports=n.exports}},[115]);