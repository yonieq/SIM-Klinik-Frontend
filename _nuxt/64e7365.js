(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1071:function(t,e,l){"use strict";l.r(e);var o=l(550),n=[{nama:"Solon",poli:"Poli Umum",hari:"Senin",mulai:"08:30",selesai:"11:30"},{nama:"Solon",poli:"Poli Umum",hari:"Selasa",mulai:"08:30",selesai:"11:30"},{nama:"Solon",poli:"Poli Umum",hari:"Rabu",mulai:"13:00",selesai:"16.00"},{nama:"Solon",poli:"Poli Umum",hari:"Kamis",mulai:"13:00",selesai:"16.00"},{nama:"Solon",poli:"Poli Umum",hari:"Jumat",mulai:"08:30",selesai:"11:30"},{nama:"Solon",poli:"Poli Umum",hari:"Sabtu",mulai:"13:00",selesai:"16.00"}],r={layout:"administrator/dashboard",components:{MiniStatistic:o.a},data:function(){return{search:"",complex:{selected:[],headers:[{text:"No. ",value:"no"},{text:"Nama Dokter",value:"nama"},{text:"Nama poli",value:"poli"},{text:"Hari",value:"hari"},{text:"Mulai",value:"mulai"},{text:"Selesai",value:"selesai"},{text:"Action",value:""}],items:n}}}},c=l(10),m=l(13),v=l.n(m),d=l(164),_=l(183),x=l(165),h=l(1088),f=l(536),w=l(178),C=l(184),k=l(166),S=l(86),V=l(185),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"page-statistic"}},[l("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{attrs:{sm12:""}},[l("h3",[t._v("Data Jadwal Dokter")])]),t._v(" "),l("v-flex",{attrs:{sm12:""}},[l("v-btn",{staticClass:"primary",attrs:{"nuxt-link":"",to:"jadwal_dokter/tambah"}},[t._v(" Tambah Data")])],1),t._v(" "),l("v-flex",{attrs:{lg12:""}},[l("v-toolbar",{attrs:{card:"",color:"white"}},[l("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"",solo:"","prepend-icon":"search",placeholder:"Tuliskan Nama Dokter ","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),l("v-divider"),t._v(" "),l("v-card",{staticClass:"pa-0"},[l("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.complex.headers,search:t.search,items:t.complex.items,"rows-per-page-items":[5,10,25,50,{text:"All",value:-1}],"item-key":"name"},scopedSlots:t._u([{key:"items",fn:function(e){return[l("td",[t._v(t._s(e.index+1))]),t._v(" "),l("td",[t._v(t._s(e.item.nama))]),t._v(" "),l("td",[t._v(t._s(e.item.poli))]),t._v(" "),l("td",[t._v(t._s(e.item.hari))]),t._v(" "),l("td",[t._v(t._s(e.item.mulai))]),t._v(" "),l("td",[t._v(t._s(e.item.selesai))]),t._v(" "),l("td",[l("v-btn",{attrs:{depressed:"",outline:"",icon:"",fab:"",dark:"","nuxt-link":"",to:"jadwal_dokter/edit",color:"warning",small:""}},[l("v-icon",[t._v("edit")])],1),t._v(" "),l("v-btn",{attrs:{depressed:"",outline:"",icon:"",fab:"",dark:"",color:"pink",small:""}},[l("v-icon",[t._v("delete")])],1)],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"e4280c4e",null);e.default=component.exports;v()(component,{VBtn:d.a,VCard:_.a,VContainer:x.a,VDataTable:h.a,VDivider:f.a,VFlex:w.a,VIcon:C.a,VLayout:k.a,VTextField:S.a,VToolbar:V.a})},550:function(t,e,l){"use strict";var o={props:{icon:String,title:String,subTitle:String,color:String}},n=l(10),r=l(13),c=l.n(r),m=l(183),v=l(116),d=l(165),_=l(184),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-card",[l("v-card-text",{staticClass:"pa-0"},[l("v-container",{staticClass:"pa-0"},[l("div",{staticClass:"layout row ma-0"},[l("div",{staticClass:"sm6 xs6 flex"},[l("div",{staticClass:"layout column ma-0 justify-center align-center"},[l("v-icon",{attrs:{size:"56px",color:t.color}},[t._v(t._s(t.icon))])],1)]),t._v(" "),l("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 white--text",class:t.color},[l("div",{staticClass:"headline"},[t._v(t._s(t.title))]),t._v(" "),l("span",{staticClass:"caption"},[t._v(t._s(t.subTitle))])])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:m.a,VCardText:v.b,VContainer:d.a,VIcon:_.a})}}]);