(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{1131:function(t,e,n){"use strict";n.r(e);var l=n(39),r=n(37),o=(n(19),n(28),{components:{VWidget:n(548).a},data:function(){return{picker:null,picker2:null,arrayEvents:null,date1:null,date2:null,date:null,menu:!1,modal:!1}},mounted:function(){this.arrayEvents=Object(r.a)(Array(6)).map((function(){var t=Math.floor(30*Math.random()),e=new Date;return e.setDate(t),e.toISOString().substr(0,10)}))},methods:{functionEvents:function(t){var e=t.split("-"),n=Object(l.a)(e,3)[2];return parseInt(n,10)%3==0}}}),c=n(10),d=n(13),v=n.n(d),f=n(164),m=n(165),k=n(1068),w=n(546),x=n(178),_=n(166),h=n(539),y=n(14),V=n(86),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-datepickers"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg6:"",sm12:""}},[n("v-widget",{attrs:{title:"Basic Usage"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("div",{staticClass:"flexbox-centering"},[n("v-date-picker",{attrs:{color:"green lighten-1"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)])]),t._v(" "),n("v-widget",{staticClass:"mt-3",attrs:{title:"Full Width"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("v-date-picker",{attrs:{landscape:"","full-width":"",color:"green lighten-1"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}}),t._v(" "),n("v-date-picker",{staticClass:"mt-3",attrs:{"full-width":"",color:"primary lighten-1"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)])],1),t._v(" "),n("v-flex",{attrs:{lg6:"",sm12:""}},[n("v-widget",{attrs:{title:"Month Picker"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("div",{staticClass:"flexbox-centering"},[n("v-date-picker",{attrs:{type:"month",color:"teal lighten-1"},model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)])]),t._v(" "),n("v-widget",{staticClass:"mt-3",attrs:{title:"In dialog and menu"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs11:"",sm5:""}},[n("v-menu",{ref:"menu",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-right":40,"min-width":"290px","return-value":t.date},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-text-field",{attrs:{slot:"activator",label:"Picker in menu","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-flex",{attrs:{xs11:"",sm5:""}},[n("v-dialog",{ref:"dialog",attrs:{persistent:"",lazy:"","full-width":"",width:"290px","return-value":t.date},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[n("v-text-field",{attrs:{slot:"activator",label:"Picker in dialog","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),n("v-date-picker",{attrs:{scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.date)}}},[t._v("OK")])],1)],1)],1)],1)],1)],1)]),t._v(" "),n("v-widget",{staticClass:"mt-3",attrs:{title:"Events"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("v-container",[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm12:""}},[n("v-date-picker",{attrs:{"full-width":"","event-color":"green lighten-1",events:t.arrayEvents},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}})],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:f.a,VContainer:m.a,VDatePicker:k.a,VDialog:w.a,VFlex:x.a,VLayout:_.a,VMenu:h.a,VSpacer:y.a,VTextField:V.a})},548:function(t,e,n){"use strict";var l={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},r=n(10),o=n(13),c=n.n(o),d=n(183),v=n(116),f=n(536),m=n(14),k=n(185),w=n(16),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"v-widget"}},[n("v-card",[t.enableHeader?n("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[n("v-toolbar-title",[n("h4",[t._v(t._s(t.title))])]),t._v(" "),n("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?n("v-divider"):t._e(),t._v(" "),n("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VDivider:f.a,VSpacer:m.a,VToolbar:k.a,VToolbarTitle:w.b})}}]);