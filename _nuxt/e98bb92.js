(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1251:function(t,r,e){"use strict";e.r(r);var l={components:{VWidget:e(548).a},data:function(){return{interval:{},value:0}},computed:{},beforeDestroy:function(){clearInterval(this.interval)},mounted:function(){var t=this;this.interval=setInterval((function(){if(100===t.value)return 0===t.value;t.value+=10}),1e3)},methods:{}},o=e(10),n=e(13),v=e.n(n),c=e(165),d=e(178),_=e(166),w=e(148),m=e(180),component=Object(o.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"page-progress"}},[e("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{lg6:""}},[e("v-widget",{attrs:{title:"Circular"}},[e("div",{staticClass:"text-xs-center",attrs:{slot:"widget-content"},slot:"widget-content"},[e("v-progress-circular",{attrs:{value:100,color:"blue-grey"}}),t._v(" "),e("v-progress-circular",{attrs:{value:80,color:"deep-orange lighten-2"}}),t._v(" "),e("v-progress-circular",{attrs:{value:60,color:"brown"}}),t._v(" "),e("v-progress-circular",{attrs:{value:40,color:"lime"}}),t._v(" "),e("v-progress-circular",{attrs:{value:20,color:"indigo darken-2"}})],1)]),t._v(" "),e("v-widget",{staticClass:"mt-3",attrs:{title:"Interminate"}},[e("div",{staticClass:"text-xs-center",attrs:{slot:"widget-content"},slot:"widget-content"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}),t._v(" "),e("v-progress-circular",{attrs:{indeterminate:"",color:"red"}}),t._v(" "),e("v-progress-circular",{attrs:{indeterminate:"",color:"purple"}}),t._v(" "),e("v-progress-circular",{attrs:{indeterminate:"",color:"green"}}),t._v(" "),e("v-progress-circular",{attrs:{indeterminate:"",color:"amber"}})],1)]),t._v(" "),e("v-widget",{staticClass:"mt-3",attrs:{title:"Sizing"}},[e("div",{staticClass:"text-xs-center",attrs:{slot:"widget-content"},slot:"widget-content"},[e("v-progress-circular",{attrs:{indeterminate:"",size:50,color:"primary"}}),t._v(" "),e("v-progress-circular",{attrs:{indeterminate:"",width:3,color:"red"}}),t._v(" "),e("v-progress-circular",{attrs:{indeterminate:"",size:70,width:7,color:"purple"}}),t._v(" "),e("v-progress-circular",{attrs:{indeterminate:"",width:3,color:"green"}}),t._v(" "),e("v-progress-circular",{attrs:{indeterminate:"",size:50,color:"amber"}})],1)]),t._v(" "),e("v-widget",{staticClass:"mt-3",attrs:{title:"Rotate"}},[e("div",{staticClass:"text-xs-center",attrs:{slot:"widget-content"},slot:"widget-content"},[e("v-progress-circular",{attrs:{size:100,width:15,rotate:360,value:t.value,color:"teal"}},[t._v("\n              "+t._s(t.value)+"\n            ")]),t._v(" "),e("v-progress-circular",{attrs:{size:100,width:15,rotate:-90,value:t.value,color:"primary"}},[t._v("\n              "+t._s(t.value)+"\n            ")]),t._v(" "),e("v-progress-circular",{attrs:{size:100,width:15,rotate:90,value:t.value,color:"red"}},[t._v("\n              "+t._s(t.value)+"\n            ")]),t._v(" "),e("v-progress-circular",{attrs:{size:100,width:15,rotate:180,value:t.value,color:"pink"}},[t._v("\n              "+t._s(t.value)+"\n            ")])],1)])],1),t._v(" "),e("v-flex",{attrs:{lg6:""}},[e("v-widget",{attrs:{title:"Linear"}},[e("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[e("v-progress-linear",{attrs:{value:"15",color:"primary"}}),t._v(" "),e("v-progress-linear",{attrs:{value:"30",color:"red"}}),t._v(" "),e("v-progress-linear",{attrs:{value:"50",color:"purple"}}),t._v(" "),e("v-progress-linear",{attrs:{value:"70",color:"green"}}),t._v(" "),e("v-progress-linear",{attrs:{value:"90",color:"amber"}})],1)]),t._v(" "),e("v-widget",{staticClass:"mt-3",attrs:{title:"Linear indeterminate"}},[e("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[e("v-progress-linear",{attrs:{indeterminate:"",value:"15",color:"primary"}}),t._v(" "),e("v-progress-linear",{attrs:{indeterminate:"",value:"15",color:"pink"}})],1)]),t._v(" "),e("v-widget",{staticClass:"mt-3",attrs:{title:"Linear custom"}},[e("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[e("v-progress-linear",{attrs:{value:"15",height:"2",color:"secondary"}}),t._v(" "),e("v-progress-linear",{attrs:{value:"30",height:"5",color:"success"}}),t._v(" "),e("v-progress-linear",{attrs:{value:"45",height:"10",color:"info"}}),t._v(" "),e("v-progress-linear",{attrs:{value:"60",height:"15",color:"warning"}}),t._v(" "),e("v-progress-linear",{attrs:{value:"75",height:"20",color:"error"}})],1)])],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;v()(component,{VContainer:c.a,VFlex:d.a,VLayout:_.a,VProgressCircular:w.a,VProgressLinear:m.a})},548:function(t,r,e){"use strict";var l={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},o=e(10),n=e(13),v=e.n(n),c=e(183),d=e(116),_=e(536),w=e(14),m=e(185),h=e(16),component=Object(o.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"v-widget"}},[e("v-card",[t.enableHeader?e("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[e("v-toolbar-title",[e("h4",[t._v(t._s(t.title))])]),t._v(" "),e("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?e("v-divider"):t._e(),t._v(" "),e("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);r.a=component.exports;v()(component,{VCard:c.a,VCardText:d.b,VDivider:_.a,VSpacer:w.a,VToolbar:m.a,VToolbarTitle:h.b})}}]);