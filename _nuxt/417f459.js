(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{1255:function(t,o,e){"use strict";e.r(o);var n={components:{VWidget:e(548).a},data:function(){return{show:!1}},computed:{},methods:{}},r=e(10),l=e(13),c=e.n(l),v=e(164),d=e(165),h=e(178),f=e(184),m=e(166),_=e(655),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"page-tooltip"}},[e("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{lg6:""}},[e("v-widget",{attrs:{title:"Basic Usage"}},[e("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[e("div",{staticClass:"text-xs-center d-flex align-center"},[e("v-tooltip",{attrs:{bottom:""}},[e("v-btn",{attrs:{slot:"activator",dark:"",color:"primary"},slot:"activator"},[t._v("Button")]),t._v(" "),e("span",[t._v("Tooltip")])],1),t._v(" "),e("v-tooltip",{attrs:{bottom:""}},[e("v-icon",{attrs:{slot:"activator",dark:"",color:"primary"},slot:"activator"},[t._v("home")]),t._v(" "),e("span",[t._v("Tooltip")])],1),t._v(" "),e("v-tooltip",{attrs:{bottom:""}},[e("span",{attrs:{slot:"activator"},slot:"activator"},[t._v("This text has a tooltip")]),t._v(" "),e("span",[t._v("Tooltip")])])],1)])])],1),t._v(" "),e("v-flex",{attrs:{lg6:""}},[e("v-widget",{attrs:{title:"Alignment"}},[e("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[e("div",{staticClass:"text-xs-center"},[e("v-tooltip",{attrs:{left:""}},[e("v-btn",{attrs:{slot:"activator",dark:"",color:"primary"},slot:"activator"},[t._v("Left")]),t._v(" "),e("span",[t._v("Left tooltip")])],1),t._v(" "),e("v-tooltip",{attrs:{top:""}},[e("v-btn",{attrs:{slot:"activator",dark:"",color:"primary"},slot:"activator"},[t._v("Top")]),t._v(" "),e("span",[t._v("Top tooltip")])],1),t._v(" "),e("v-tooltip",{attrs:{bottom:""}},[e("v-btn",{attrs:{slot:"activator",dark:"",color:"primary"},slot:"activator"},[t._v("Bottom")]),t._v(" "),e("span",[t._v("Bottom tooltip")])],1),t._v(" "),e("v-tooltip",{attrs:{right:""}},[e("v-btn",{attrs:{slot:"activator",dark:"",color:"primary"},slot:"activator"},[t._v("Right")]),t._v(" "),e("span",[t._v("Right tooltip")])],1)],1)])])],1),t._v(" "),e("v-flex",{attrs:{lg6:""}},[e("v-widget",{attrs:{title:"Icon Badge"}},[e("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[e("v-container",{staticClass:"text-xs-center",attrs:{fluid:""}},[e("v-layout",{attrs:{flex:"",wrap:"",row:"","justify-space-between":""}},[e("v-flex",{attrs:{xs12:""}},[e("v-btn",{nativeOn:{click:function(o){t.show=!t.show}}},[t._v("toggle")])],1),t._v(" "),e("v-flex",{staticClass:"mt-5",attrs:{xs12:""}},[e("v-tooltip",{attrs:{top:""},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[e("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[e("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("shopping_cart")])],1),t._v(" "),e("span",[t._v("Programmatic tooltip")])],1)],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports;c()(component,{VBtn:v.a,VContainer:d.a,VFlex:h.a,VIcon:f.a,VLayout:m.a,VTooltip:_.a})},548:function(t,o,e){"use strict";var n={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},r=e(10),l=e(13),c=e.n(l),v=e(183),d=e(116),h=e(536),f=e(14),m=e(185),_=e(16),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"v-widget"}},[e("v-card",[t.enableHeader?e("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[e("v-toolbar-title",[e("h4",[t._v(t._s(t.title))])]),t._v(" "),e("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?e("v-divider"):t._e(),t._v(" "),e("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);o.a=component.exports;c()(component,{VCard:v.a,VCardText:d.b,VDivider:h.a,VSpacer:f.a,VToolbar:m.a,VToolbarTitle:_.b})},595:function(t,o,e){var content=e(596);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("c0e04dbe",content,!0,{sourceMap:!1})},596:function(t,o,e){var n=e(11)(!1);n.push([t.i,".v-tooltip__content{background:#616161;border-radius:2px;color:#fff;font-size:12px;display:inline-block;padding:5px 8px;position:absolute;text-transform:none;width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-tooltip__content[class*=-active]{transition:.15s cubic-bezier(.25,.8,.5,1);pointer-events:none}.v-tooltip__content--fixed{position:fixed}@media only screen and (max-width:959px){.v-tooltip .v-tooltip__content{padding:10px 16px}}",""]),t.exports=n},655:function(t,o,e){"use strict";e(27),e(595);var n=e(24),r=e(199),l=e(91),c=e(119),v=e(200),d=e(42),h=e(6),f=e(18);function m(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}o.a={name:"v-tooltip",mixins:[n.a,r.a,l.a,c.a,v.a,d.a],props:{closeDelay:{type:[Number,String],default:200},debounce:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:200},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,o=t.activator,content=t.content,e=!(this.bottom||this.left||this.top||this.right),n=this.isAttached?o.offsetLeft:o.left,r=0;return this.top||this.bottom||e?r=n+o.width/2-content.width/2:(this.left||this.right)&&(r=n+(this.right?o.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),this.calcXOverflow(r,this.dimensions.content.width)+"px"},calculatedTop:function(){var t=this.dimensions,o=t.activator,content=t.content,e=this.isAttached?o.offsetTop:o.top,n=0;return this.top||this.bottom?n=e+(this.bottom?o.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=e+o.height/2-content.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),this.calcYOverflow(n+this.pageYOffset)+"px"},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left}},computedTransition:function(){return this.transition?this.transition:this.top?"slide-y-reverse-transition":this.right?"slide-x-transition":this.bottom?"slide-y-transition":this.left?"slide-x-reverse-transition":""},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(h.d)(this.maxWidth),minWidth:Object(h.d)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(h.n)(this,"activator",!0)&&Object(f.a)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},genActivator:function(){var t=this,o=this.disabled?{}:{mouseenter:function(o){t.getActivator(o),t.runDelay("open")},mouseleave:function(o){t.getActivator(o),t.runDelay("close")}};if("scoped"===Object(h.n)(this,"activator")){var e=this.$scopedSlots.activator({on:o});return this.activatorNode=e,e}return this.$createElement("span",{on:o,ref:"activator"},this.$slots.activator)}},render:function(t){var o,e=t("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(o={},m(o,this.contentClass,!0),m(o,"menuable__content__active",this.isActive),m(o,"v-tooltip__content--fixed",this.activatorFixed),o),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.showLazyContent(this.$slots.default));return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[t("transition",{props:{name:this.computedTransition}},[e]),this.genActivator()])}}}}]);