(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1210:function(t,e,n){"use strict";n.r(e);var l=n(550),r=n(598),o={layout:"kasir/dashboard",components:{MiniStatistic:l.a},data:function(){return{search:"",complex:{headers:[{text:"No"},{text:"No. Rekam Medis",value:"no_rm"},{text:"Nama",value:"nama"},{text:"Alamat",value:"alamat"},{text:"Jenis Kelamin",value:"jenis_kelamin"},{text:"Usia",value:"usia"},{text:"Aksi"}],items:r.a}}}},c=n(10),d=n(13),m=n.n(d),v=n(164),_=n(183),x=n(116),k=n(165),f=n(1088),h=n(536),C=n(178),T=n(166),y=n(86),w=n(185),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pageTable"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg4:"",sm6:"",xs12:""}},[n("mini-statistic",{attrs:{icon:"people_alt",title:"3","sub-title":"Pasien Menunggu Pembayaran",color:"red darken-2"}})],1),t._v(" "),n("v-flex",{attrs:{lg4:"",sm6:"",xs12:""}},[n("mini-statistic",{attrs:{icon:"people_alt",title:"2","sub-title":"Pasien Menunggu Konfirmasi Obat",color:"yellow darken-2"}})],1),t._v(" "),n("v-flex",{attrs:{lg4:"",sm6:"",xs12:""}},[n("mini-statistic",{attrs:{icon:"people_alt",title:"7","sub-title":"Pasoen Selesai Pembayaran",color:"blue darken-1"}})],1),t._v(" "),n("v-flex",{attrs:{sm12:""}},[n("h3",[t._v("Antrian Pembayaran")])]),t._v(" "),n("v-flex",{attrs:{sm12:""}},[n("v-card",[n("v-toolbar",{attrs:{card:"",color:"white"}},[n("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"",solo:"","prepend-icon":"search",placeholder:"Tuliskan Nama Pasien","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pa-0"},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.complex.headers,search:t.search,items:t.complex.items,"rows-per-page-items":[10,25,50,{text:"All",value:-1}],"item-key":"name"},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.index))]),t._v(" "),n("td",[t._v(t._s(e.item.no_rm))]),t._v(" "),n("td",[t._v(t._s(e.item.name))]),t._v(" "),n("td",[t._v(t._s(e.item.alamat))]),t._v(" "),n("td",[t._v(t._s(e.item.jenis_kelamin))]),t._v(" "),n("td",[t._v(t._s(e.item.usia))]),t._v(" "),n("td",[n("v-btn",{attrs:{color:"info",depressed:"",outline:"",small:"",round:"",to:"/kasir/data_pasien/detail_pembayaran"}},[t._v("Bayar")])],1)]}}])})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:v.a,VCard:_.a,VCardText:x.b,VContainer:k.a,VDataTable:f.a,VDivider:h.a,VFlex:C.a,VLayout:T.a,VTextField:y.a,VToolbar:w.a})},550:function(t,e,n){"use strict";var l={props:{icon:String,title:String,subTitle:String,color:String}},r=n(10),o=n(13),c=n.n(o),d=n(183),m=n(116),v=n(165),_=n(184),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",{staticClass:"pa-0"},[n("v-container",{staticClass:"pa-0"},[n("div",{staticClass:"layout row ma-0"},[n("div",{staticClass:"sm6 xs6 flex"},[n("div",{staticClass:"layout column ma-0 justify-center align-center"},[n("v-icon",{attrs:{size:"56px",color:t.color}},[t._v(t._s(t.icon))])],1)]),t._v(" "),n("div",{staticClass:"sm6 xs6 flex text-sm-center py-3 white--text",class:t.color},[n("div",{staticClass:"headline"},[t._v(t._s(t.title))]),t._v(" "),n("span",{staticClass:"caption"},[t._v(t._s(t.subTitle))])])])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:m.b,VContainer:v.a,VIcon:_.a})},598:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(60),n(20);var l=[{uuid:"899d0e31-b71e-4d95-a8a0-6a8bceb314bd",no_rm:"RM-21091108-157",name:"Santiago",nik:"9834195157",phone:"1-489-921-2159 x8655",usia:"20",tanggal_periksa:"2021-09-11",dokter:"Maejuki",jenis_kelamin:"Laki-laki",alamat:"Jalan Banyar No. 78 Desa Kupu Kec. Dukuh Turi Kab. Tegal"},{uuid:"a41c6c4a-9cb1-45d1-8c6f-091044ba51ff",no_rm:"RM-21091108-158",name:"Leonardo",nik:"9834195158",phone:"445-761-1519",usia:"21",tanggal_periksa:"2021-09-11",dokter:"Jepri",jenis_kelamin:"Laki-laki",alamat:"Jalan Merpati No. 71 Kelurahan Mintaragen Kec. Tegal Timur Kota Tegal"},{uuid:"3782c174-1f2c-4dc4-b75d-0bedf400e023",no_rm:"RM-21091108-159",name:"Lora",nik:"9834195159",phone:"315-215-2852 x69280",usia:"23",tanggal_periksa:"2021-09-11",dokter:"Adi",jenis_kelamin:"Perempuan",alamat:"Jalan Kutilang No 29 Kelurahan Tegalsari Kec. Tegal Barat Kota Tegal"}]}}]);