(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1167:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n(548),o=n(743),m={layout:"dokter/dashboard",components:{VWidget:l.a},data:function(){var e;return e={search:"",picker:null,picker2:null,arrayEvents:null,date1:null,date2:null,date:null,menu:!1,modal:!1,title:null,valid:!0},Object(r.a)(e,"date",null),Object(r.a)(e,"startDateMenu",!1),Object(r.a)(e,"startDate",null),Object(r.a)(e,"startTimeMenu",!1),Object(r.a)(e,"startTime",null),Object(r.a)(e,"endDateMenu",!1),Object(r.a)(e,"endDate",null),Object(r.a)(e,"endTimeMenu",!1),Object(r.a)(e,"endTime",null),Object(r.a)(e,"modal",!1),Object(r.a)(e,"complex",{headers:[{text:"No"},{text:"No. RM",value:"no_rekam_medis"},{text:"Name",value:"name"},{text:"Alamat",value:"alamat"},{text:"Usia",value:"usia"},{text:"Jenis Kelamin",value:"jenis_kelamin"},{text:"Asuransi",value:"asuransi"},{text:"Poli",value:"poli"},{text:"Aksi",value:""}],items:o.a}),e}},d=n(10),c=n(13),v=n.n(c),_=n(164),k=n(183),f=n(116),h=n(165),x=n(1088),D=n(1068),j=n(536),O=n(178),w=n(166),V=n(539),y=n(14),P=n(86),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"pageTable"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-widget",{staticClass:"mt-3",attrs:{title:"Daftar Pasien"}},[n("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{sm6:"",lg6:""}},[n("v-menu",{ref:"statDate",staticClass:"pr-2",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-bottom":-22,"max-width":"290px","return-value":e.startDate},on:{"update:returnValue":function(t){e.startDate=t},"update:return-value":function(t){e.startDate=t}},model:{value:e.startDateMenu,callback:function(t){e.startDateMenu=t},expression:"startDateMenu"}},[n("v-text-field",{attrs:{slot:"activator",label:"Start Date","append-icon":"event",readonly:""},slot:"activator",model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}}),e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.startDateMenu=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){return e.$refs.statDate.save(e.startDate)}}},[e._v("OK")])],1)],1)],1),e._v(" "),n("v-flex",{attrs:{sm6:"",lg6:""}},[n("v-menu",{ref:"endDate",staticClass:"pr-2",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-bottom":-22,"min-width":"290px","return-value":e.endDate},on:{"update:returnValue":function(t){e.endDate=t},"update:return-value":function(t){e.endDate=t}},model:{value:e.endDateMenu,callback:function(t){e.endDateMenu=t},expression:"endDateMenu"}},[n("v-text-field",{attrs:{slot:"activator",label:"End Date","append-icon":"event",readonly:""},slot:"activator",model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}}),e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.endDateMenu=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){return e.$refs.endDate.save(e.endDate)}}},[e._v("OK")])],1)],1)],1)],1)],1)],1)]),e._v(" "),n("v-flex",{attrs:{lg12:""}},[n("v-card",[n("v-divider"),e._v(" "),n("v-card-text",{staticClass:"pa-0"},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.complex.headers,search:e.search,items:e.complex.items,"rows-per-page-items":[10,25,50,{text:"All",value:-1}],"item-key":"name"},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.index))]),e._v(" "),n("td",[e._v(e._s(t.item.no_rekam_medis))]),e._v(" "),n("td",[e._v(e._s(t.item.name))]),e._v(" "),n("td",[e._v(e._s(t.item.alamat))]),e._v(" "),n("td",[e._v(e._s(t.item.usia))]),e._v(" "),n("td",[e._v(e._s(t.item.jenis_kelamin))]),e._v(" "),n("td",[e._v(e._s(t.item.asuransi))]),e._v(" "),n("td",[e._v(e._s(t.item.poli))]),e._v(" "),n("td",[n("v-btn",{attrs:{color:"info",outline:"",to:"/dokter/pemeriksaan"}},[e._v("Periksa")])],1)]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:_.a,VCard:k.a,VCardText:f.b,VContainer:h.a,VDataTable:x.a,VDatePicker:D.a,VDivider:j.a,VFlex:O.a,VLayout:w.a,VMenu:V.a,VSpacer:y.a,VTextField:P.a})},548:function(e,t,n){"use strict";var r={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},l=n(10),o=n(13),m=n.n(o),d=n(183),c=n(116),v=n(536),_=n(14),k=n(185),f=n(16),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"v-widget"}},[n("v-card",[e.enableHeader?n("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[n("v-toolbar-title",[n("h4",[e._v(e._s(e.title))])]),e._v(" "),n("v-spacer"),e._v(" "),e._t("widget-header-action")],2):e._e(),e._v(" "),e.enableHeader?n("v-divider"):e._e(),e._v(" "),n("v-card-text",{class:e.contentBg},[e._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);t.a=component.exports;m()(component,{VCard:d.a,VCardText:c.b,VDivider:v.a,VSpacer:_.a,VToolbar:k.a,VToolbarTitle:f.b})},743:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r,l,o=n(0),m=(n(60),n(20),[{no:"1",no_rekam_medis:"001",name:"Dessie",tgl_lahir:"12 Juni 1996",usia:"25",jenis_kelamin:"Laki-laki",alamat:"street 655 Archibald Groves",poli:"Umum",keluhan:"demam, batuk",tindakan:"pengecekan umum",resep_obat:"paracetamol, dextomethorphan",asuransi:"Pribadi"},{no:"2",no_rekam_medis:"002",name:"Jamal",tgl_lahir:"12 Juni 1996",usia:"25",jenis_kelamin:"Laki-laki",alamat:"street 655 Archibald Groves",poli:"Umum",keluhan:"pusing, pilek",tindakan:"pengecekan umum",asuransi:"Pribadi",resep_obat:"pnilephine, inza"},{no:"3",no_rekam_medis:"003",name:"kodir",tgl_lahir:"12 Juni 1996",usia:"25",jenis_kelamin:"Laki-laki",alamat:"street 655 Archibald Groves",poli:"Umum",keluhan:"pusing, demam, nafsu makan berkurang",tindakan:"pengecekan umum",asuransi:"Pribadi",resep_obat:"bodrex, paracetamol, vit C"},{no:"4",no_rekam_medis:"004",name:"Yadi",tgl_lahir:"12 Juni 1996",usia:"25",jenis_kelamin:"Laki-laki",alamat:"street 655 Archibald Groves",poli:"Umum",keluhan:"Luka Kulit",tindakan:"pengecekan, perban",asuransi:"Pribadi",resep_obat:"etanol, betadine"},{no:"5",no_rekam_medis:"005",name:"Rukhan",tgl_lahir:"12 Juni 1996",usia:"25",jenis_kelamin:"Laki-laki",alamat:"street 655 Archibald Groves",poli:"Umum",keluhan:"pusing, demam, batuk",tindakan:"pengecekan umum",asuransi:"Pribadi",resep_obat:"bodrex, "},{no:"6",no_rekam_medis:"006",name:"Susi",tgl_lahir:"12 Juni 1996",usia:"25",jenis_kelamin:"Perempuan",alamat:"street 655 Archibald Groves",poli:"Umum",keluhan:"pusing, demam, batuk",tindakan:"pengecekan umum",asuransi:"Pribadi",resep_obat:"bodrex, "},{no:"7",no_rekam_medis:"007",name:"Yanti",tgl_lahir:"12 Juni 1996",usia:"25",jenis_kelamin:"Perempuan",alamat:"street 655 Archibald Groves",poli:"Umum",keluhan:"pusing, demam, batuk",tindakan:"pengecekan umum",asuransi:"Pribadi",resep_obat:"bodrex, "},{no:"8",no_rekam_medis:"008",name:"Wati",tgl_lahir:"12 Juni 1996",usia:"25",jenis_kelamin:"Perempuan",alamat:"street 655 Archibald Groves",poli:"Umum",keluhan:"pusing, demam, batuk",tindakan:"pengecekan umum",resep_obat:"bodrex, "},(r={no:"9",no_rekam_medis:"009",name:"Caroline",alamat:"Brebes RT 01/03",tgl_lahir:"12 Juni 1996",usia:"25",jenis_kelamin:"Perempuan"},Object(o.a)(r,"alamat","street 655 Archibald Groves"),Object(o.a)(r,"poli","Umum"),Object(o.a)(r,"keluhan","pusing, demam, batuk"),Object(o.a)(r,"tindakan","pengecekan umum"),Object(o.a)(r,"asuransi","Pribadi"),Object(o.a)(r,"resep_obat","bodrex, "),r),(l={no:"10",no_rekam_medis:"010",name:"Brenda",alamat:"Brebes RT 01/03",tgl_lahir:"12 Juni 1996",usia:"25",jenis_kelamin:"Perempuan"},Object(o.a)(l,"alamat","street 655 Archibald Groves"),Object(o.a)(l,"poli","Umum"),Object(o.a)(l,"keluhan","pusing, demam, batuk"),Object(o.a)(l,"tindakan","pengecekan umum"),Object(o.a)(l,"asuransi","Pribadi"),Object(o.a)(l,"resep_obat","bodrex, "),l)])}}]);