(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1273:function(t,e,r){"use strict";r.r(e);var n=r(548),l=r(593);var v={layout:"administrasi/dashboard",components:{VWidget:n.a},data:function(){return{headers:[{text:"Layanan",value:"layanan",align:"center",sortable:!1},{text:"Keterangan",value:"keterangan",align:"center",sortable:!1}],items:l.a,colors:{processing:"blue",sent:"red",delivered:"green"}}},computed:{},methods:{getColorByStatus:function(t){return this.colors[t]}}},d=r(10),o=r(13),c=r.n(o),x=r(164),m=r(183),_=r(116),f=r(538),k=r(165),h=r(536),w=r(178),y=r(166),C=r(14),V=r(537),T=r(86),j=r(185),S=r(16),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-text-fields"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("v-widget",{attrs:{title:"Detail Tagihan Pembayaran"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-container",[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs3:""}},[r("v-subheader",[t._v("Cetak Surat Rujukan")]),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"input-3",label:"No. Keram Medis",value:"RM-21091108-157",disabled:""}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"input-3",label:"Tanggal Periksa",value:"2021-09-11",disabled:""}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"input-3",label:"Nama Pasien",value:"Santiago",disabled:""}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"input-3",label:"Nama Dokter",value:"Jepri",disabled:""}})],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"input-5",label:"Alamat",value:"Jalan Banyar No. 78 Desa Kupu Kec. Dukuh Turi Kab. Tegal","multi-line":"",disabled:""}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[t._v("\n                      Status / Hasil Pemeriksaan :\n                      "),r("v-chip",{attrs:{color:"red accent-4","text-color":"white",small:""}},[t._v("Mendapat Rujukan")])],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs9:""}},[r("v-card",[r("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[r("v-toolbar-title",[r("h4",[t._v("Data Rujukan")])]),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{},[[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Nama Rumah Sakit Rujukan\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Rumah Sakit Mitra Anda")])])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Nama Dokter Rujukan\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Bambang")])])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Hasil Pemeriksaan\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Muntahber")])])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Pengobatan/Tindakan Sementara\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Infus")]),t._v(" "),r("div",{staticClass:"title"},[t._v(". Obat Anti Mutah")]),t._v(" "),r("div",{staticClass:"title"},[t._v(". Obat Penghenti BAB")])])],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs4:""}},[r("div",{staticClass:"title primary--text text--darken-1"},[t._v("\n                              Kondisi pasien waktu dirujuk\n                            ")])]),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("div",{staticClass:"title"},[t._v(": Pasien terbaring lemah,")]),t._v(" "),r("v-divider"),t._v(" "),r("v-btn",{attrs:{color:"info",outline:""}},[t._v("Cetak")]),t._v(" "),r("a",{attrs:{href:"/administrasi/rujukan"}},[r("v-btn",{attrs:{color:"red",outline:""}},[t._v("Kembali")])],1)],1)],1)],t._v(" "),r("v-divider")],2)],1)],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:x.a,VCard:m.a,VCardText:_.b,VChip:f.a,VContainer:k.a,VDivider:h.a,VFlex:w.a,VLayout:y.a,VSpacer:C.a,VSubheader:V.a,VTextField:T.a,VToolbar:j.a,VToolbarTitle:S.b})},548:function(t,e,r){"use strict";var n={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},l=r(10),v=r(13),d=r.n(v),o=r(183),c=r(116),x=r(536),m=r(14),_=r(185),f=r(16),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"v-widget"}},[r("v-card",[t.enableHeader?r("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[r("v-toolbar-title",[r("h4",[t._v(t._s(t.title))])]),t._v(" "),r("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?r("v-divider"):t._e(),t._v(" "),r("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{VCard:o.a,VCardText:c.b,VDivider:x.a,VSpacer:m.a,VToolbar:_.a,VToolbarTitle:f.b})},593:function(t,e,r){"use strict";e.a=[{id:"150",obat:"Obat kepala pusing",aturan_minum:"3 x 1",dosis:"1",jumlah:"9",status:"Tebus",catatan:"diminum sesudah makan , berhenti minum jika sudah tidak sakit kepala"},{id:"151",obat:"Obat penurun panas",aturan_minum:"3 x 1",dosis:"1",jumlah:"9",status:"Tebus",catatan:"diminum sesudah makan , berhenti minum jika sudah tidak sakit kepala"},{id:"300",obat:"Vitamin",aturan_minum:"2 x 1",dosis:"1",jumlah:"6",status:"Tebus",catatan:"diminum sesudah makan , habiskan"}]}}]);