webpackJsonp([5],{131:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i(1),n=i(93),a=i.n(n);new l.a({render:function(t){return t(a.a)}}).$mount("#app")},166:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=(i(3),i(19)),n=i.n(l),a=i(36),r=i.n(a),s=i(44),u=i.n(s);e.default={data:function(){return{webname:5464,list:[{id:0,name:"alert弹窗",url:"../vuxDemo/alert.html"},{id:1,name:"Calendar时间选择",url:"../vuxDemo/calendar.html"},{id:2,name:"button按钮",url:"../vuxDemo/button.html"}]}},components:{Cell:n.a,Group:r.a,Divider:u.a},beforeCreate:function(){},beforeMount:function(){},mounted:function(){},methods:{}}},19:function(t,e,i){i(31);var l=i(0)(i(22),i(34),null,null);t.exports=l.exports},20:function(t,e,i){i(32);var l=i(0)(i(23),i(35),null,null);t.exports=l.exports},22:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i(20),n=i.n(l),a=i(6),r=i(25),s=i(26),u=i.n(s),o=i(27);e.default={name:"cell",components:{InlineDesc:n.a},props:i.i(r.a)(),created:function(){},beforeMount:function(){this.hasTitleSlot=!!this.$slots.title,this.$slots.value},computed:{labelStyles:function(){return u()({width:i.i(o.a)(this,"labelWidth"),textAlign:i.i(o.a)(this,"labelAlign"),marginRight:i.i(o.a)(this,"labelMarginRight")})},valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===i.i(o.a)(this,"justify")}},style:function(){if(this.alignItems)return{alignItems:this.alignItems}}},methods:{onClick:function(){!this.disabled&&i.i(a.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!0,hasMounted:!1}}}},23:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"inline-desc"}},236:function(t,e){},25:function(t,e,i){"use strict";e.a=function(){return{title:[String,Number],value:[String,Number,Array],isLink:Boolean,isLoading:Boolean,inlineDesc:[String,Number],primary:{type:String,default:"title"},link:[String,Object],valueAlign:[String,Boolean,Number],borderIntent:{type:Boolean,default:!0},disabled:Boolean,arrowDirection:String,alignItems:String}}},27:function(t,e,i){"use strict";e.a=function(t,e){return t.$parent&&t.$parent[e]?t.$parent[e]:t.$parent&&t.$parent.$parent&&t.$parent.$parent[e]?t.$parent.$parent[e]:void 0}},288:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("divider",[t._v("github 地址 ")]),t._v(" "),t._m(0),t._v(" "),i("div",[i("divider",[t._v("vux UI 展示")]),t._v(" "),i("group",{attrs:{title:"vux UI demo"}},t._l(t.list,function(t){return i("cell",{key:t.id,attrs:{title:t.name,value:"","is-link":"",link:t.url}})})),t._v(" "),t._m(1)],1),t._v(" "),i("div",[i("divider",[t._v("多页面 vue-router 2")]),t._v(" "),i("group",[i("cell",{attrs:{title:"多页面路由",value:"","is-link":"",link:"../router/details.html"}})],1)],1),t._v(" "),i("div",{staticClass:"martop15"},[i("divider",[t._v("iconfont 字体")]),t._v(" "),i("group",[i("cell",{attrs:{title:"iconfont图标展示",value:"","is-link":"",link:"../iconfont/list.html"}})],1)],1),t._v(" "),i("div",{staticClass:"martop15"},[i("divider",[t._v("其他")]),t._v(" "),i("group",[i("cell",{attrs:{title:"自定义vue全局过滤器",value:"","is-link":"",link:"../tools/vuefilter.html"}}),t._v(" "),i("cell",{attrs:{title:"模块下放静态文件",value:"","is-link":"",link:"../tools/bigimage.html"}}),t._v(" "),i("cell",{attrs:{title:"ajax",value:"","is-link":"",link:"../tools/ajax.html"}}),t._v(" "),i("cell",{attrs:{title:"获取url参数",value:"","is-link":"",link:"../tools/getQuery.html?goodsid=1688&shopid=25"}})],1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"font12 pad10"},[i("a",{staticClass:"color888",attrs:{href:"https://github.com/bluefox1688/vue-cli-multi-page",target:"_blank"}},[t._v("https://github.com/bluefox1688/vue-cli-multi-page")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"note"},[i("p",[t._v("这里仅展示几个VUE UI的demo，更多组件demo请访问vux UI官网，官网地址："),i("a",{attrs:{href:"https://vux.li",target:"_blank"}},[t._v("https://vux.li")])])])}]}},31:function(t,e){},32:function(t,e){},34:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},style:t.style,on:{click:t.onClick}},[i("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[i("p",[t.title||t.hasTitleSlot?i("label",{staticClass:"vux-label",class:t.labelClass,style:t.labelStyles},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),i("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),i("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?i("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},35:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}},93:function(t,e,i){i(236);var l=i(0)(i(166),i(288),null,null);t.exports=l.exports}},[131]);