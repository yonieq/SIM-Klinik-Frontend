(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1072:function(t,e,n){"use strict";n.r(e);var r=n(550),l=[{nama:"Dessie purwono",bagian_kerja:"apotek",hari:"Senin",shift:"Senin | 07:15"},{nama:"Dessie purwono",bagian_kerja:"apotek",hari:"Selasa",shift:"Selasa | 15:15"},{nama:"Dessie purwono",bagian_kerja:"apotek",hari:"Rabu",shift:"Rabu | 07:15"},{nama:"Dessie purwono",bagian_kerja:"apotek",hari:"Kamis",shift:"Kamis | 07:15"},{nama:"Dessie purwono",bagian_kerja:"apotek",hari:"Jumat",shift:"Jumat | 07:15"},{nama:"Dessie purwono",bagian_kerja:"apotek",hari:"Sabtu",shift:"Sabtu | 07:15"}],o={layout:"administrator/dashboard",components:{MiniStatistic:r.a},data:function(){return{search:"",complex:{selected:[],headers:[{text:"No. ",value:"no"},{text:"Nama",value:"nama"},{text:"Bagian Kerja",value:"bagian_kerja"},{text:"Hari",value:"hari"},{text:"Shif",value:"shift"},{text:"Action",value:""}],items:l}}}},c=n(10),v=n(13),d=n.n(v),m=n(164),_=n(183),h=n(165),x=n(1088),f=n(536),k=n(178),w=n(184),C=n(166),j=n(86),y=n(185),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-statistic"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm12:""}},[n("h3",[t._v("Data Jadwal Karyawan")])]),t._v(" "),n("v-flex",{attrs:{sm12:""}},[n("v-btn",{staticClass:"primary",attrs:{"nuxt-link":"",to:"jadwal_karyawan/tambah"}},[t._v(" Tambah Data")])],1),t._v(" "),n("v-flex",{attrs:{lg12:""}},[n("v-toolbar",{attrs:{card:"",color:"white"}},[n("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"",solo:"","prepend-icon":"search",placeholder:"Tuliskan Nama Karyawan ","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card",{staticClass:"pa-0"},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.complex.headers,search:t.search,items:t.complex.items,"rows-per-page-items":[5,10,25,50,{text:"All",value:-1}],"item-key":"name"},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.index+1))]),t._v(" "),n("td",[t._v(t._s(e.item.nama))]),t._v(" "),n("td",[t._v(t._s(e.item.bagian_kerja))]),t._v(" "),n("td",[t._v(t._s(e.item.hari))]),t._v(" "),n("td",[t._v(t._s(e.item.shift))]),t._v(" "),n("td",[n("v-btn",{attrs:{depressed:"",outline:"",icon:"",fab:"",dark:"","nuxt-link":"",to:"jadwal_karyawan/edit",color:"warning",small:""}},[n("v-icon",[t._v("edit")])],1),t._v(" "),n("v-btn",{attrs:{depressed:"",outline:"",icon:"",fab:"",dark:"",color:"pink",small:""}},[n("v-icon",[t._v("delete")])],1)],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,"7e948410",null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:_.a,VContainer:h.a,VDataTable:x.a,VDivider:f.a,VFlex:k.a,VIcon:w.a,VLayout:C.a,VTextField:j.a,VToolbar:y.a})},550:function(t,e,n){"use strict";var r={props:{icon:String,title:String,subTitle:String,color:String}},l=n(10),o=n(13),c=n.n(o),v=n(183),d=n(116),m=n(165),_=n(184),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",{staticClass:"pa-0"},[n("v-container",{staticClass:"pa-0"},[n("div",{staticClass:"layout row ma-0"},[n("div",{staticClass:"sm6 xs6 flex"},[n("div",{staticClass:"layout column ma-0 justify-center align-center"},[n("v-icon",{attrs:{size:"56px",color:t.color}},[t._v(t._s(t.icon))])],1)]),t._v(" "),n("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 white--text",class:t.color},[n("div",{staticClass:"headline"},[t._v(t._s(t.title))]),t._v(" "),n("span",{staticClass:"caption"},[t._v(t._s(t.subTitle))])])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:v.a,VCardText:d.b,VContainer:m.a,VIcon:_.a})}}]);