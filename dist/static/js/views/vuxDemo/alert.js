webpackJsonp([3],{106:function(t,e,n){n(248);var i=n(0)(n(177),n(300),null,null);t.exports=i.exports},142:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),l=n(106),a=n.n(l);new i.a({render:function(t){return t(a.a)}}).$mount("#app")},162:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(20),l=n.n(i),a=n(26),s=n.n(a);e.default={name:"x-switch",components:{InlineDesc:l.a},computed:{labelStyle:function(){var t=/<\/?[^>]*>/.test(this.title),e=Math.min(t?5:this.title.length+1,14)+"em";return s()({display:"block",width:this.$parent.labelWidth||e,textAlign:this.$parent.labelAlign})},labelClass:function(){return{"vux-cell-justify":this.$parent&&"justify"===this.$parent.labelAlign}}},methods:{onClick:function(){this.$emit("on-click",!this.currentValue,this.currentValue)},toBoolean:function(t){if(this.valueMap){return 1===this.valueMap.indexOf(t)}return t},toRaw:function(t){return this.valueMap?this.valueMap[t?1:0]:t}},props:{title:{type:String,required:!0},disabled:Boolean,value:{type:[Boolean,String,Number],default:!1},inlineDesc:[String,Boolean,Number],preventDefault:Boolean,valueMap:{type:Array,default:function(){return[!1,!0]}}},data:function(){return{currentValue:this.toBoolean(this.value)}},watch:{currentValue:function(t){var e=this.toRaw(t);this.$emit("input",e),this.$emit("on-change",e)},value:function(t){this.currentValue=this.toBoolean(t)}}}},177:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(3),n(88)),l=n.n(i),a=n(36),s=n.n(a),r=n(335),o=n.n(r),u=n(19),c=n.n(u),d=n(5),h=n.n(d);e.default={components:{Alert:l.a,Group:s.a,XSwitch:o.a,Cell:c.a,HbHead:h.a},data:function(){return{show:!1,show1:!1,show2:!1}},methods:{onHide:function(){console.log("on hide")},onShow:function(){console.log("on show")},showPlugin:function(){this.$vux.alert.show({title:"VUX is Cool",content:"哈哈哈",onShow:function(){console.log("Plugin: I'm showing")},onHide:function(){console.log("Plugin: I'm hiding now")}})},showPluginAuto:function(){var t=this;this.showPlugin(),setTimeout(function(){t.$vux.alert.hide()},3e3)}}}},19:function(t,e,n){n(31);var i=n(0)(n(22),n(34),null,null);t.exports=i.exports},20:function(t,e,n){n(32);var i=n(0)(n(23),n(35),null,null);t.exports=i.exports},22:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(20),l=n.n(i),a=n(6),s=n(25),r=n(26),o=n.n(r),u=n(27);e.default={name:"cell",components:{InlineDesc:l.a},props:n.i(s.a)(),created:function(){},beforeMount:function(){this.hasTitleSlot=!!this.$slots.title,this.$slots.value},computed:{labelStyles:function(){return o()({width:n.i(u.a)(this,"labelWidth"),textAlign:n.i(u.a)(this,"labelAlign"),marginRight:n.i(u.a)(this,"labelMarginRight")})},valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===n.i(u.a)(this,"justify")}},style:function(){if(this.alignItems)return{alignItems:this.alignItems}}},methods:{onClick:function(){!this.disabled&&n.i(a.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!0,hasMounted:!1}}}},23:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"inline-desc"}},248:function(t,e){},25:function(t,e,n){"use strict";e.a=function(){return{title:[String,Number],value:[String,Number,Array],isLink:Boolean,isLoading:Boolean,inlineDesc:[String,Number],primary:{type:String,default:"title"},link:[String,Object],valueAlign:[String,Boolean,Number],borderIntent:{type:Boolean,default:!0},disabled:Boolean,arrowDirection:String,alignItems:String}}},250:function(t,e){},27:function(t,e,n){"use strict";e.a=function(t,e){return t.$parent&&t.$parent[e]?t.$parent[e]:t.$parent&&t.$parent.$parent&&t.$parent.$parent[e]?t.$parent.$parent[e]:void 0}},300:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainWarp"},[n("hb-head",{attrs:{headfont:"alert弹窗"}}),t._v(" "),n("group",{attrs:{title:"prop:content"}},[n("x-switch",{attrs:{title:"显示"},model:{value:t.show2,callback:function(e){t.show2=e},expression:"show2"}})],1),t._v(" "),n("div",[n("alert",{attrs:{title:"温馨提示",content:"这里是内容了"},model:{value:t.show2,callback:function(e){t.show2=e},expression:"show2"}})],1),t._v(" "),n("group",{attrs:{title:"插件"}},[n("cell",{attrs:{title:"显示","is-link":""},nativeOn:{click:function(e){t.showPlugin(e)}}}),t._v(" "),n("cell",{attrs:{title:"3S后关闭","is-link":""},nativeOn:{click:function(e){t.showPluginAuto(e)}}})],1)],1)},staticRenderFns:[]}},302:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-switch weui-cell weui-cell_switch"},[n("div",{staticClass:"weui-cell__bd"},[n("label",{staticClass:"weui-label",class:t.labelClass,style:t.labelStyle,domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.inlineDesc?n("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()],1),t._v(" "),n("div",{staticClass:"weui-cell__ft"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-switch",attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.currentValue)?t._i(t.currentValue,null)>-1:t.currentValue},on:{change:function(e){var n=t.currentValue,i=e.target,l=!!i.checked;if(Array.isArray(n)){var a=t._i(n,null);i.checked?a<0&&(t.currentValue=n.concat([null])):a>-1&&(t.currentValue=n.slice(0,a).concat(n.slice(a+1)))}else t.currentValue=l}}}),t._v(" "),t.preventDefault?n("div",{staticClass:"vux-x-switch-overlay",on:{click:t.onClick}}):t._e()])])},staticRenderFns:[]}},31:function(t,e){},32:function(t,e){},335:function(t,e,n){n(250);var i=n(0)(n(162),n(302),null,null);t.exports=i.exports},34:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},style:t.style,on:{click:t.onClick}},[n("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),n("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[n("p",[t.title||t.hasTitleSlot?n("label",{staticClass:"vux-label",class:t.labelClass,style:t.labelStyles},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),n("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),n("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?n("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},35:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}}},[142]);