(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1109:function(t,e,r){"use strict";r.r(e);var o=r(37),c={components:{VWidget:r(548).a},data:function(){return{chips:["Programming","Watching","Sleeping"],chip1:!0,chip2:!0}},methods:{remove:function(t){this.chips.splice(this.chips.indexOf(t),1),this.chips=Object(o.a)(this.chips)}}},n=r(10),l=r(13),v=r.n(l),d=r(172),h=r(538),_=r(555),x=r(165),w=r(178),m=r(184),C=r(166),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-chips"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{lg6:""}},[r("v-widget",{attrs:{title:"Icon Chip"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("div",{staticClass:"text-xs-center"},[r("v-chip",{attrs:{color:"indigo","text-color":"white"}},[r("v-avatar",[r("v-icon",[t._v("account_circle")])],1),t._v("\n                Ranee\n              ")],1),t._v(" "),r("v-chip",{attrs:{color:"orange","text-color":"white"}},[t._v("\n                Premium\n                "),r("v-icon",{attrs:{right:""}},[t._v("star")])],1),t._v(" "),r("v-chip",{attrs:{color:"primary","text-color":"white"}},[t._v("\n                1 Year\n                "),r("v-icon",{attrs:{right:""}},[t._v("cake")])],1),t._v(" "),r("v-chip",{attrs:{color:"green","text-color":"white"}},[r("v-avatar",{staticClass:"green darken-4"},[t._v("1")]),t._v("\n                Years\n              ")],1),t._v(" "),r("v-chip",{attrs:{close:"",color:"teal","text-color":"white"},model:{value:t.chip1,callback:function(e){t.chip1=e},expression:"chip1"}},[r("v-avatar",[r("v-icon",[t._v("check_circle")])],1),t._v("\n                Confirmed\n              ")],1)],1)])]),t._v(" "),r("v-widget",{staticClass:"mt-3",attrs:{title:"Colored Chip"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("div",{staticClass:"text-xs-center"},[r("v-chip",{attrs:{color:"primary","text-color":"white"}},[t._v("Primary")]),t._v(" "),r("v-chip",{attrs:{color:"secondary","text-color":"white"}},[t._v("Secondary")]),t._v(" "),r("v-chip",{attrs:{color:"red","text-color":"white"}},[t._v("Colored Chip")]),t._v(" "),r("v-chip",{attrs:{color:"green","text-color":"white"}},[t._v("Colored Chip")])],1)])]),t._v(" "),r("v-widget",{staticClass:"mt-3",attrs:{title:"Outline Chip"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("div",{staticClass:"text-xs-center"},[r("v-chip",{attrs:{color:"primary",outline:""}},[t._v("Primary")]),t._v(" "),r("v-chip",{attrs:{color:"secondary",outline:""}},[t._v("Secondary")]),t._v(" "),r("v-chip",{attrs:{color:"red",outline:""}},[t._v("Colored Chip")]),t._v(" "),r("v-chip",{attrs:{color:"green",outline:""}},[t._v("Colored Chip")])],1)])]),t._v(" "),r("v-widget",{staticClass:"mt-3",attrs:{title:"Lable Chip"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("div",{staticClass:"text-xs-center"},[r("v-chip",{attrs:{label:""}},[t._v("Label")]),t._v(" "),r("v-chip",{attrs:{label:"",color:"pink","text-color":"white"}},[r("v-icon",{attrs:{left:""}},[t._v("label")]),t._v("Tags\n              ")],1),t._v(" "),r("v-chip",{attrs:{label:"",outline:"",color:"red"}},[t._v("Outline")])],1)])])],1),t._v(" "),r("v-flex",{attrs:{lg6:""}},[r("v-widget",{attrs:{title:"Basic Usage"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{md6:"",sm12:""}},[r("div",{staticClass:"text-xs-center"},[r("v-chip",{attrs:{close:""},model:{value:t.chip2,callback:function(e){t.chip2=e},expression:"chip2"}},[t._v("Example Chip")])],1),t._v(" "),r("div",{staticClass:"text-xs-center"},[r("v-chip",[t._v("Example Chip")])],1)]),t._v(" "),r("v-flex",{attrs:{md6:"",sm12:"",xs12:""}},[r("div",{staticClass:"text-xs-center"},[r("v-chip",{attrs:{close:""}},[r("v-avatar",[r("img",{attrs:{src:"https://randomuser.me/api/portraits/men/35.jpg",alt:"trevor"}})]),t._v("\n                      Trevor Hansen\n                    ")],1)],1),t._v(" "),r("div",{staticClass:"text-xs-center"},[r("v-chip",[r("v-avatar",{staticClass:"teal"},[t._v("A")]),t._v("\n                      ANZ Bank\n                    ")],1)],1)])],1)],1)],1)]),t._v(" "),r("v-widget",{staticClass:"mt-3",attrs:{title:"Complex usage"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-combobox",{attrs:{multiple:"",label:"Your favorite hobbies",chips:"",tags:"",solo:"","prepend-icon":"filter_list","append-icon":"",clearable:""},scopedSlots:t._u([{key:"selection",fn:function(data){return[r("v-chip",{attrs:{close:"",selected:data.selected},on:{input:function(e){return t.remove(data.item)}}},[r("strong",[t._v(t._s(data.item))]),t._v(" \n                  "),r("span",[t._v("(interest)")])])]}}]),model:{value:t.chips,callback:function(e){t.chips=e},expression:"chips"}})],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAvatar:d.a,VChip:h.a,VCombobox:_.a,VContainer:x.a,VFlex:w.a,VIcon:m.a,VLayout:C.a})},548:function(t,e,r){"use strict";var o={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},c=r(10),n=r(13),l=r.n(n),v=r(183),d=r(116),h=r(536),_=r(14),x=r(185),w=r(16),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"v-widget"}},[r("v-card",[t.enableHeader?r("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[r("v-toolbar-title",[r("h4",[t._v(t._s(t.title))])]),t._v(" "),r("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?r("v-divider"):t._e(),t._v(" "),r("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCard:v.a,VCardText:d.b,VDivider:h.a,VSpacer:_.a,VToolbar:x.a,VToolbarTitle:w.b})}}]);