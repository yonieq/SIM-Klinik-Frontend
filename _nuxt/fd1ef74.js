(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1289:function(e,t,o){"use strict";o.r(t);var n=o(578),r={layout:"administrator/dashboard",data:function(){return{form:{karyawan:"",tanggal:"12-10-2021",jam:"2"},title:null,valid:!0,date:null,startDateMenu:!1,startDate:null,startTimeMenu:!1,startTime:null,endDateMenu:!1,endDate:null,endTimeMenu:!1,endTime:null,modal:!1,show:!0,karyawan:n.a}},methods:{onSubmit:function(e){},onReset:function(e){var t=this;e.preventDefault(),this.form.tipe="",this.show=!1,this.$nextTick((function(){t.show=!0}))}}},l=o(10),c=o(13),v=o.n(c),d=o(164),m=o(183),f=o(116),h=o(165),_=o(1068),w=o(178),k=o(166),x=o(539),y=o(551),j=o(14),S=o(86),C=o(185),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[o("v-btn",{attrs:{color:"warning","nuxt-link":"",to:".",outline:"",depressed:""}},[e._v("Kembali")]),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("v-card",[o("v-toolbar",{attrs:{card:""}},[o("h3",[e._v("Edit Data Lembur")])]),e._v(" "),o("v-card-text",[e.show?o("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{lg12:"",sm12:""}},[o("v-select",{attrs:{label:"Karyawan",items:e.karyawan,autocomplete:"","item-text":"name","item-value":"name",required:""},model:{value:e.form.karyawan,callback:function(t){e.$set(e.form,"karyawan",t)},expression:"form.karyawan"}})],1),e._v(" "),o("v-flex",{attrs:{sm6:"",lg6:""}},[o("v-menu",{ref:"statDate",staticClass:"pr-2",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-bottom":-22,"max-width":"290px","return-value":e.startDate},on:{"update:returnValue":function(t){e.startDate=t},"update:return-value":function(t){e.startDate=t}},model:{value:e.startDateMenu,callback:function(t){e.startDateMenu=t},expression:"startDateMenu"}},[o("v-text-field",{attrs:{slot:"activator",label:"Pada Tanggal","append-icon":"event",readonly:""},slot:"activator",model:{value:e.form.tanggal,callback:function(t){e.$set(e.form,"tanggal",t)},expression:"form.tanggal"}}),e._v(" "),o("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.form.tanggal,callback:function(t){e.$set(e.form,"tanggal",t)},expression:"form.tanggal"}},[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.startDateMenu=!1}}},[e._v("Cancel")]),e._v(" "),o("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){return e.$refs.statDate.save(e.startDate)}}},[e._v("OK")])],1)],1)],1),e._v(" "),o("v-flex",{attrs:{lg6:"",sm6:""}},[o("v-text-field",{attrs:{label:"Jumlah Jam Lembur",name:"tipe",placeholder:"Masukan Jumlah Jam",required:"",type:"number"},model:{value:e.form.jam,callback:function(t){e.$set(e.form,"jam",t)},expression:"form.jam"}})],1),e._v(" "),o("v-spacer"),e._v(" "),o("v-card-actions",{staticClass:"pb-4 pl-3"},[o("v-btn",{attrs:{type:"submit",color:"primary",depressed:""}},[e._v("Simpan")]),e._v(" "),o("v-btn",{attrs:{type:"reset",color:"pink",outline:"",depressed:""}},[e._v("Kosongkan")])],1)],1)],1):e._e()],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VContainer:h.a,VDatePicker:_.a,VFlex:w.a,VLayout:k.a,VMenu:x.a,VSelect:y.a,VSpacer:j.a,VTextField:S.a,VToolbar:C.a})},551:function(e,t,o){"use strict";o.d(t,"a",(function(){return _}));var n=o(553),r=(o(60),o(556),o(554).a),l=o(61),c=o(30),v=o(18),d=r.extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:n.a.options.props.transition},computed:{classes:function(){return Object.assign(r.options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||r.options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var e=r.options.computed.$_menuProps.call(this);return e.transition=e.transition||"v-menu-transition",e}},methods:{genSelections:function(){return this.editable?r.options.methods.genSelections.call(this):n.a.options.methods.genSelections.call(this)},genCommaSelection:function(e,t,o){return this.segmented?this.genSegmentedBtn(e):n.a.options.methods.genCommaSelection.call(this,e,t,o)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data.domProps.value=this.editable?this.internalSearch:"",input.data.attrs.readonly=!this.isAnyValueAllowed,input},genLabel:function(){if(this.editable&&this.isFocused)return null;var label=l.a.options.methods.genLabel.call(this);return label?(label.data.style={},label):label},genSegmentedBtn:function(e){var t=this,o=this.getValue(e),n=this.computedItems.find((function(i){return t.getValue(i)===o}))||e;return n.text&&n.callback?this.$createElement(c.a,{props:{flat:!0},on:{click:function(e){e.stopPropagation(),n.callback(e)}}},[n.text]):(Object(v.c)("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}}),m=o(552),f=o(191),h=o(190),_={functional:!0,$_wrapperFor:n.a,props:{autocomplete:Boolean,combobox:Boolean,multiple:Boolean,tags:Boolean,editable:Boolean,overflow:Boolean,segmented:Boolean},render:function(e,t){var o=t.props,data=t.data,l=t.slots,c=t.parent;Object(h.a)(data);var w=Object(f.a)(l(),e);return o.autocomplete&&Object(v.d)("<v-select autocomplete>","<v-autocomplete>",_,c),o.combobox&&Object(v.d)("<v-select combobox>","<v-combobox>",_,c),o.tags&&Object(v.d)("<v-select tags>","<v-combobox multiple>",_,c),o.overflow&&Object(v.d)("<v-select overflow>","<v-overflow-btn>",_,c),o.segmented&&Object(v.d)("<v-select segmented>","<v-overflow-btn segmented>",_,c),o.editable&&Object(v.d)("<v-select editable>","<v-overflow-btn editable>",_,c),data.attrs=data.attrs||{},o.combobox||o.tags?(data.attrs.multiple=o.tags,e(m.a,data,w)):o.autocomplete?(data.attrs.multiple=o.multiple,e(r,data,w)):o.overflow||o.segmented||o.editable?(data.attrs.segmented=o.segmented,data.attrs.editable=o.editable,e(d,data,w)):(data.attrs.multiple=o.multiple,e(n.a,data,w))}};t.b=_},552:function(e,t,o){"use strict";var n=o(555);t.a=n.a},556:function(e,t,o){var content=o(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("50fa3656",content,!0,{sourceMap:!1})},557:function(e,t,o){var n=o(11)(!1);n.push([e.i,'.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:"";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}',""]),e.exports=n},578:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));o(60),o(20);var n=[{uuid:"65a6eb21-67b5-45c3-9af7-faca2d9b60d4",no:"1",name:"Dessie purwono",email:"Dessie7937@gmail.com",username:"Dessie79",jobTitle:"Web Developer",phone:"1-360-812-9380 x511",avatar:o(277),bagian_kerja:"apotek",address:{street:"655 Archibald Groves",suite:"Apt. 818",city:"Carlosshire",state:"Arkansas",country:"Somalia",zipcode:"10406",geo:{lat:"-44.6063",lng:"-169.7706"}}},{uuid:"28d9f265-74d7-4f85-83d4-6a21fca57dcf",no:"2",name:"Jakayla",jobTitle:"Web Designer",bagian_kerja:"apotek",email:"Jakayla_Crooks867@yahoo.com",username:"Jakayla_Crooks86",phone:"610.499.1240",avatar:o(278),address:{street:"281 Tillman Forge",suite:"Apt. 381",city:"New Sandrinemouth",state:"North Dakota",country:"Reunion",zipcode:"19540-8186",geo:{lat:"-12.3375",lng:"-117.9067"}}},{uuid:"14ddae1e-986d-42f4-8d17-46a02d469b2b",no:"3",name:"Hobart",jobTitle:"Sales",bagian_kerja:"apotek",email:"Hobart_Mueller.Thiel@hotmail.com",username:"Hobart_Mueller",phone:"1-590-385-3349",avatar:o(279),address:{street:"706 Padberg Knoll",suite:"Suite 818",city:"Port Mablefurt",state:"Arkansas",country:"Netherlands Antilles",zipcode:"89975-6584",geo:{lat:"-42.9187",lng:"8.5866"}}},{uuid:"6a03248b-1752-4332-a3a9-7108528cc9d3",no:"4",name:"Celestine",jobTitle:"Marketing",bagian_kerja:"kasir",email:"Celestine.Casper59@hotmail.com",username:"Celestine.Casper",phone:"1-830-046-3289",avatar:o(280),address:{street:"9528 Schroeder Track",suite:"Apt. 443",city:"Godfreyburgh",state:"Montana",country:"Slovenia",zipcode:"10220",geo:{lat:"36.8638",lng:"20.0047"}}},{uuid:"ee272550-36e8-4fe2-889d-c1ee701c5863",no:"5",name:"Hortense",bagian_kerja:"keuangan",email:"Hortense99.Jakubowski@yahoo.com",jobTitle:"Project Manager",username:"Hortense99",phone:"712.916.2569 x0663",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg",address:{street:"9046 Allen Ferry",suite:"Suite 429",city:"Angushaven",state:"Michigan",country:"Costa Rica",zipcode:"92378-7065",geo:{lat:"78.1292",lng:"-134.6632"}}},{uuid:"77f4b102-9df5-43ba-966a-6f816806c5e2",no:"6",name:"Pat",jobTitle:"Product Manager",bagian_kerja:"kepala apotek",email:"Pat_Zulauf81.Bartell86@gmail.com",username:"Pat_Zulauf81",phone:"(058) 200-7342",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rehatkathuria/128.jpg",address:{street:"62268 Favian Coves",suite:"Suite 993",city:"Baumbachstad",state:"New Mexico",country:"Montserrat",zipcode:"44440",geo:{lat:"-34.7835",lng:"148.8907"}}},{uuid:"36a1ead7-57a0-4275-8a21-956194ab7cdf",no:"7",name:"Solon",bagian_kerja:"dokter",jobTitle:"Web Developer",email:"Solon.Bauch4_Rath@hotmail.com",username:"Solon.Bauch4",phone:"789-914-4904 x173",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/spacewood_/128.jpg",spesialis:"Poli Umum",praktek:"Sabtu",address:{street:"8153 Favian Walk",suite:"Apt. 495",city:"East Preston",state:"Idaho",country:"Iceland",zipcode:"24555",geo:{lat:"-42.5691",lng:"-2.5791"}}},{uuid:"b5899bef-d01e-42d8-af2d-edfb16b6b21e",no:"8",name:"Calista",bagian_kerja:"pendaftaran",jobTitle:"Programmer",email:"Calista_Mertz1757@hotmail.com",username:"Calista_Mertz17",phone:"961-703-4134",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg",address:{street:"886 Wendy Circles",suite:"Apt. 933",city:"Lake Loy",state:"Rhode Island",country:"South Africa",zipcode:"65261",geo:{lat:"-58.9245",lng:"-43.6330"}}},{uuid:"7d910620-84e1-49fc-951e-d375587b8189",no:"9",name:"Jackeline",bagian_kerja:"administrasi",jobTitle:"Sales Executive",email:"Jackeline.Abshire_Dach@yahoo.com",username:"Jackeline.Abshire",phone:"(326) 903-5706 x6854",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/larrybolt/128.jpg",address:{street:"416 Cathy Spur",suite:"Apt. 431",city:"North Camila",state:"Pennsylvania",country:"Libyan Arab Jamahiriya",zipcode:"31751",geo:{lat:"64.0673",lng:"154.7671"}}},{uuid:"afdb5033-5bcc-4cec-b932-353a83410b44",no:"10",name:"Jamey",bagian_kerja:"dokter",jobTitle:"PHP Developer",email:"Jamey_Grant_Cruickshank73@gmail.com",username:"Jamey_Grant",phone:"545-939-2404 x32373",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/mikebeecham/128.jpg",spesialis:"Poli Umum",praktek:"Kamis",address:{street:"38372 Mante Glen",suite:"Suite 090",city:"Robertsside",state:"Texas",country:"Equatorial Guinea",zipcode:"86558-7214",geo:{lat:"-55.0222",lng:"-100.5977"}}}]}}]);