(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1298:function(t,e,n){"use strict";n.r(e);var o=n(651),l={layout:"apotek/dashboard",data:function(){return{items:[],form:{nama:"",fasilitas:"",tipe:""},obat:o.a,keterangan:[{keterangan:"Barang Rusak"},{keterangan:"Kadaluarsa"}],title:null,valid:!0,date:null,startDateMenu:!1,startDate:null,startTimeMenu:!1,startTime:null,endDateMenu:!1,endDate:null,endTimeMenu:!1,endTime:null,modal:!1,show:!0}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.nama="",this.form.fasilitas="",this.show=!1,this.$nextTick((function(){e.show=!0}))}}},r=n(10),v=n(13),c=n.n(v),d=n(164),m=n(183),f=n(116),h=n(165),_=n(1068),w=n(178),k=n(166),x=n(539),D=n(551),y=n(14),O=n(86),V=n(185),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-btn",{attrs:{color:"warning","nuxt-link":"",to:".",outline:"",depressed:""}},[t._v("Kembali")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("v-card",[n("v-toolbar",{attrs:{card:""}},[n("h3",[t._v("Tambah Data Retur Barang")])]),t._v(" "),n("v-card-text",[t.show?n("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{lg10:"",sm10:""}},[n("v-select",{attrs:{label:"Obat / Alkes",items:t.obat,autocomplete:"","item-text":"nama","item-value":"nama",required:""},model:{value:t.form.obat,callback:function(e){t.$set(t.form,"obat",e)},expression:"form.obat"}})],1),t._v(" "),n("v-flex",{attrs:{lg5:"",sm5:""}},[n("v-text-field",{attrs:{label:"Jumlah",name:"jumlah",placeholder:"Masukan Nama Ruangan",required:"",type:"number"},model:{value:t.form.jumlah,callback:function(e){t.$set(t.form,"jumlah",e)},expression:"form.jumlah"}})],1),t._v(" "),n("v-flex",{attrs:{lg5:"",sm5:""}},[n("v-select",{attrs:{label:"Keterangan",items:t.keterangan,autocomplete:"","item-text":"keterangan","item-value":"keterangan",required:""},model:{value:t.form.keterangan,callback:function(e){t.$set(t.form,"keterangan",e)},expression:"form.keterangan"}})],1),t._v(" "),n("v-flex",{attrs:{lg5:"",sm5:""}},[n("v-menu",{ref:"statDate",staticClass:"pr-2",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-bottom":-22,"max-width":"290px","return-value":t.startDate},on:{"update:returnValue":function(e){t.startDate=e},"update:return-value":function(e){t.startDate=e}},model:{value:t.startDateMenu,callback:function(e){t.startDateMenu=e},expression:"startDateMenu"}},[n("v-text-field",{attrs:{slot:"activator",label:"Tanggal","append-icon":"event",readonly:""},slot:"activator",model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),t._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.startDateMenu=!1}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.statDate.save(t.startDate)}}},[t._v("OK")])],1)],1)],1),t._v(" "),n("v-card-actions",{staticClass:"pb-4 pl-3"},[n("v-btn",{attrs:{type:"submit",color:"primary",depressed:""}},[t._v("Simpan")]),t._v(" "),n("v-btn",{attrs:{type:"reset",color:"pink",outline:"",depressed:""}},[t._v("Kosongkan")])],1)],1)],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.b,VContainer:h.a,VDatePicker:_.a,VFlex:w.a,VLayout:k.a,VMenu:x.a,VSelect:D.a,VSpacer:y.a,VTextField:O.a,VToolbar:V.a})},551:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var o=n(553),l=(n(60),n(556),n(554).a),r=n(61),v=n(30),c=n(18),d=l.extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:o.a.options.props.transition},computed:{classes:function(){return Object.assign(l.options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||l.options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var t=l.options.computed.$_menuProps.call(this);return t.transition=t.transition||"v-menu-transition",t}},methods:{genSelections:function(){return this.editable?l.options.methods.genSelections.call(this):o.a.options.methods.genSelections.call(this)},genCommaSelection:function(t,e,n){return this.segmented?this.genSegmentedBtn(t):o.a.options.methods.genCommaSelection.call(this,t,e,n)},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.data.domProps.value=this.editable?this.internalSearch:"",input.data.attrs.readonly=!this.isAnyValueAllowed,input},genLabel:function(){if(this.editable&&this.isFocused)return null;var label=r.a.options.methods.genLabel.call(this);return label?(label.data.style={},label):label},genSegmentedBtn:function(t){var e=this,n=this.getValue(t),o=this.computedItems.find((function(i){return e.getValue(i)===n}))||t;return o.text&&o.callback?this.$createElement(v.a,{props:{flat:!0},on:{click:function(t){t.stopPropagation(),o.callback(t)}}},[o.text]):(Object(c.c)("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}}),m=n(552),f=n(191),h=n(190),_={functional:!0,$_wrapperFor:o.a,props:{autocomplete:Boolean,combobox:Boolean,multiple:Boolean,tags:Boolean,editable:Boolean,overflow:Boolean,segmented:Boolean},render:function(t,e){var n=e.props,data=e.data,r=e.slots,v=e.parent;Object(h.a)(data);var w=Object(f.a)(r(),t);return n.autocomplete&&Object(c.d)("<v-select autocomplete>","<v-autocomplete>",_,v),n.combobox&&Object(c.d)("<v-select combobox>","<v-combobox>",_,v),n.tags&&Object(c.d)("<v-select tags>","<v-combobox multiple>",_,v),n.overflow&&Object(c.d)("<v-select overflow>","<v-overflow-btn>",_,v),n.segmented&&Object(c.d)("<v-select segmented>","<v-overflow-btn segmented>",_,v),n.editable&&Object(c.d)("<v-select editable>","<v-overflow-btn editable>",_,v),data.attrs=data.attrs||{},n.combobox||n.tags?(data.attrs.multiple=n.tags,t(m.a,data,w)):n.autocomplete?(data.attrs.multiple=n.multiple,t(l,data,w)):n.overflow||n.segmented||n.editable?(data.attrs.segmented=n.segmented,data.attrs.editable=n.editable,t(d,data,w)):(data.attrs.multiple=n.multiple,t(o.a,data,w))}};e.b=_},552:function(t,e,n){"use strict";var o=n(555);e.a=o.a},556:function(t,e,n){var content=n(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("50fa3656",content,!0,{sourceMap:!1})},557:function(t,e,n){var o=n(11)(!1);o.push([t.i,'.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:"";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}',""]),t.exports=o},651:function(t,e,n){"use strict";e.a=[{kode:"OBT_001",nama:"Obat Sakit Kepala",kadaluarsa:"02-07-2025",harga:"1000",stok:"80"},{kode:"OBT_002",nama:"Obat Penurun Panas",kadaluarsa:"02-09-2025",harga:"900",stok:"90"},{kode:"OBT_003",nama:"Obat Antibiotik",kadaluarsa:"02-07-2025",harga:"1200",stok:"74"},{kode:"OBT_004",nama:"vitamin c",kadaluarsa:"11-07-2025",harga:"1500",stok:"55"}]}}]);