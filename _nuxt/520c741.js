(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1288:function(t,e,o){"use strict";o.r(e);var n=o(693),r={layout:"administrator/dashboard",data:function(){return{form:{bagian_kerja:"",nama:"",no_hp:"",nip:"",tmp_lahir:"",tgl_lahir:"",umur:"",goldar:"",kp:""},title:null,valid:!0,date:null,startDateMenu:!1,startDate:null,startTimeMenu:!1,startTime:null,endDateMenu:!1,endDate:null,endTimeMenu:!1,endTime:null,modal:!1,show:!0,bagian_kerja:n.a}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(t){var e=this;t.preventDefault(),this.form.photo="",this.form.no_hp="",this.form.nip="",this.form.tmp_lahir="",this.form.tgl_lahir="",this.form.umur="",this.form.goldar="",this.form.kp="",this.show=!1,this.$nextTick((function(){e.show=!0}))}}},l=o(10),d=o(13),c=o.n(d),v=o(164),h=o(183),f=o(165),m=o(1068),_=o(536),x=o(178),w=o(580),k=o(166),y=o(539),D=o(591),j=o(592),V=o(551),S=o(14),$=o(537),B=o(86),C=o(185),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"page-selects"}},[o("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{sm12:""}},[o("v-btn",{attrs:{color:"warning","nuxt-link":"",to:".",outline:"",depressed:""}},[t._v("Kembali")])],1),t._v(" "),o("v-flex",{attrs:{sm12:""}},[o("v-card",[o("v-toolbar",{attrs:{card:"",color:"white"}},[o("h3",[t._v("Tambah Data Karyawan & Dokter")])]),t._v(" "),o("v-divider"),t._v(" "),o("v-flex",{attrs:{sm12:""}},[t.show?o("v-form",{on:{submit:t.onSubmit,reset:t.onReset}},[o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{lg4:"",sm4:""}},[o("b-form-group",{attrs:{id:"input-group-1",label:"Photo Karyawan & Dokter","label-for":"input-1"}},[o("b-form-file",{attrs:{state:Boolean(t.photo),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here...",accept:"image/jpeg, image/png, image/gif, image/jpg"},model:{value:t.form.photo,callback:function(e){t.$set(t.form,"photo",e)},expression:"form.photo"}})],1)],1),t._v(" "),o("v-flex",{attrs:{xs4:""}},[o("v-text-field",{attrs:{name:"input-1",label:"No. Identitas",color:"primary",id:"testing",type:"number"}})],1)],1),t._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{xs8:""}},[o("v-text-field",{attrs:{name:"input-1",label:"Nama Karyawan & Dokter",color:"primary",id:"testing",type:"text"}})],1)],1),t._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{xs4:""}},[o("v-text-field",{attrs:{name:"input-1",label:"Tempat Lahir",color:"primary",id:"testing",type:"text"}})],1),t._v(" "),o("v-flex",{attrs:{xs4:""}},[o("v-text-field",{attrs:{name:"input-1",label:"Tanggal Lahir",color:"primary",id:"testing",type:"date"}})],1)],1),t._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{xs4:""}},[o("v-text-field",{attrs:{name:"input-5",label:"Alamat Lengkap",value:"",color:"teal","multi-line":""}})],1),t._v(" "),o("v-flex",{attrs:{xs4:""}},[o("v-select",{staticClass:"input-group--focused",attrs:{items:t.agama,label:"Agama","item-text":"agama","item-value":"abbr"},model:{value:t.e2,callback:function(e){t.e2=e},expression:"e2"}})],1)],1),t._v(" "),o("v-subheader",{staticClass:"pa-0"},[t._v("Jenis Kelamin")]),t._v(" "),o("v-radio-group",{attrs:{mandatory:!1,row:""},model:{value:t.radio2,callback:function(e){t.radio2=e},expression:"radio2"}},[o("v-radio",{attrs:{label:"Laki-laki",value:"laki-laki",color:"secondary"}}),t._v(" "),o("v-radio",{attrs:{label:"Perermpuan",value:"perempuan",color:"secondary"}})],1),t._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{xs4:""}},[o("v-select",{attrs:{label:"Bagian Kerja",items:t.bagian_kerja,autocomplete:"","item-text":"bagian_kerja","item-value":"bagian_kerja",required:""},model:{value:t.form.bagian_kerja,callback:function(e){t.$set(t.form,"bagian_kerja",e)},expression:"form.bagian_kerja"}})],1),t._v(" "),o("v-flex",{attrs:{xs4:""}},["dokter"!=t.form.bagian_kerja?o("v-select",{staticClass:"input-group--focused",attrs:{disabled:"",items:t.poli,label:"Poli (diisi untuk dokter)","item-text":"poli","item-value":"abbr"},model:{value:t.e2,callback:function(e){t.e2=e},expression:"e2"}}):o("v-select",{staticClass:"input-group--focused",attrs:{items:t.poli,label:"Poli (diisi untuk dokter)","item-text":"poli","item-value":"abbr"},model:{value:t.e2,callback:function(e){t.e2=e},expression:"e2"}})],1)],1),t._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{xs4:""}},[o("v-text-field",{attrs:{name:"input-1",label:"Usia",color:"primary",id:"testing",type:"number"}})],1),t._v(" "),o("v-flex",{attrs:{xs4:""}},[o("v-select",{staticClass:"input-group--focused",attrs:{items:t.gol_darah,label:"Gol. Darah","item-text":"gol_darah","item-value":"abbr"},model:{value:t.e2,callback:function(e){t.e2=e},expression:"e2"}})],1)],1),t._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{xs4:""}},[o("v-text-field",{attrs:{name:"input-1",label:"No. Telp",color:"primary",id:"testing",type:"number"}})],1),t._v(" "),o("v-flex",{attrs:{xs4:""}},[o("v-text-field",{attrs:{name:"input-1",label:"Status Sidik Jari",color:"red",id:"testing",value:"Belum",readonly:""}})],1)],1),t._v(" "),o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{sm4:"",lg4:""}},[o("v-menu",{ref:"statDate",staticClass:"pr-2",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-bottom":-22,"max-width":"290px","return-value":t.startDate},on:{"update:returnValue":function(e){t.startDate=e},"update:return-value":function(e){t.startDate=e}},model:{value:t.startDateMenu,callback:function(e){t.startDateMenu=e},expression:"startDateMenu"}},[o("v-text-field",{attrs:{slot:"activator",label:"Mulai Kontrak/SIP","append-icon":"event",readonly:""},slot:"activator",model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),t._v(" "),o("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}},[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.startDateMenu=!1}}},[t._v("Cancel")]),t._v(" "),o("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.statDate.save(t.startDate)}}},[t._v("OK")])],1)],1)],1),t._v(" "),o("v-flex",{attrs:{sm4:"",lg4:""}},[o("v-menu",{ref:"endDate",staticClass:"pr-2",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-bottom":-22,"min-width":"290px","return-value":t.endDate},on:{"update:returnValue":function(e){t.endDate=e},"update:return-value":function(e){t.endDate=e}},model:{value:t.endDateMenu,callback:function(e){t.endDateMenu=e},expression:"endDateMenu"}},[o("v-text-field",{attrs:{slot:"activator",label:"Akhir Kontrak/SIP","append-icon":"event",readonly:""},slot:"activator",model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),t._v(" "),o("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}},[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.endDateMenu=!1}}},[t._v("Cancel")]),t._v(" "),o("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){return t.$refs.endDate.save(t.endDate)}}},[t._v("OK")])],1)],1)],1)],1),t._v(" "),o("v-btn",{attrs:{type:"submit",color:"success"}},[t._v("Simpan")]),t._v(" "),o("v-btn",{attrs:{type:"reset",color:"red"}},[t._v("Reset")])],1):t._e()],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:h.a,VContainer:f.a,VDatePicker:m.a,VDivider:_.a,VFlex:x.a,VForm:w.a,VLayout:k.a,VMenu:y.a,VRadio:D.a,VRadioGroup:j.a,VSelect:V.a,VSpacer:S.a,VSubheader:$.a,VTextField:B.a,VToolbar:C.a})},551:function(t,e,o){"use strict";o.d(e,"a",(function(){return _}));var n=o(553),r=(o(60),o(556),o(554).a),l=o(61),d=o(30),c=o(18),v=r.extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:n.a.options.props.transition},computed:{classes:function(){return Object.assign(r.options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||r.options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var t=r.options.computed.$_menuProps.call(this);return t.transition=t.transition||"v-menu-transition",t}},methods:{genSelections:function(){return this.editable?r.options.methods.genSelections.call(this):n.a.options.methods.genSelections.call(this)},genCommaSelection:function(t,e,o){return this.segmented?this.genSegmentedBtn(t):n.a.options.methods.genCommaSelection.call(this,t,e,o)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data.domProps.value=this.editable?this.internalSearch:"",input.data.attrs.readonly=!this.isAnyValueAllowed,input},genLabel:function(){if(this.editable&&this.isFocused)return null;var label=l.a.options.methods.genLabel.call(this);return label?(label.data.style={},label):label},genSegmentedBtn:function(t){var e=this,o=this.getValue(t),n=this.computedItems.find((function(i){return e.getValue(i)===o}))||t;return n.text&&n.callback?this.$createElement(d.a,{props:{flat:!0},on:{click:function(t){t.stopPropagation(),n.callback(t)}}},[n.text]):(Object(c.c)("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}}),h=o(552),f=o(191),m=o(190),_={functional:!0,$_wrapperFor:n.a,props:{autocomplete:Boolean,combobox:Boolean,multiple:Boolean,tags:Boolean,editable:Boolean,overflow:Boolean,segmented:Boolean},render:function(t,e){var o=e.props,data=e.data,l=e.slots,d=e.parent;Object(m.a)(data);var x=Object(f.a)(l(),t);return o.autocomplete&&Object(c.d)("<v-select autocomplete>","<v-autocomplete>",_,d),o.combobox&&Object(c.d)("<v-select combobox>","<v-combobox>",_,d),o.tags&&Object(c.d)("<v-select tags>","<v-combobox multiple>",_,d),o.overflow&&Object(c.d)("<v-select overflow>","<v-overflow-btn>",_,d),o.segmented&&Object(c.d)("<v-select segmented>","<v-overflow-btn segmented>",_,d),o.editable&&Object(c.d)("<v-select editable>","<v-overflow-btn editable>",_,d),data.attrs=data.attrs||{},o.combobox||o.tags?(data.attrs.multiple=o.tags,t(h.a,data,x)):o.autocomplete?(data.attrs.multiple=o.multiple,t(r,data,x)):o.overflow||o.segmented||o.editable?(data.attrs.segmented=o.segmented,data.attrs.editable=o.editable,t(v,data,x)):(data.attrs.multiple=o.multiple,t(n.a,data,x))}};e.b=_},552:function(t,e,o){"use strict";var n=o(555);e.a=n.a},556:function(t,e,o){var content=o(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("50fa3656",content,!0,{sourceMap:!1})},557:function(t,e,o){var n=o(11)(!1);n.push([t.i,'.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:"";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}',""]),t.exports=n},564:function(t,e,o){var content=o(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("26d73d9e",content,!0,{sourceMap:!1})},565:function(t,e,o){var n=o(11)(!1);n.push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""]),t.exports=n},567:function(t,e,o){var content=o(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("605ac091",content,!0,{sourceMap:!1})},568:function(t,e,o){var n=o(11)(!1);n.push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;margin-right:16px;outline:none}.v-radio--is-disabled{pointer-events:none}",""]),t.exports=n},569:function(t,e,o){var content=o(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("701cd39e",content,!0,{sourceMap:!1})},570:function(t,e,o){var n=o(11)(!1);n.push([t.i,".v-input--radio-group__input{display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),t.exports=n},580:function(t,e,o){"use strict";o(67),o(54),o(281),o(2),o(60),o(564);var n=o(66);e.a={name:"v-form",mixins:[Object(n.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},o={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?o.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(o.valid=e(input)))})):o.valid=e(input),o},validate:function(){return!this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},591:function(t,e,o){"use strict";o(3),o(52),o(33),o(21),o(34),o(22),o(567);var n=o(23),r=o(117),l=o(24),d=o(563),c=o(17),v=o(561),h=o(66),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};function m(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)}e.a={name:"v-radio",mixins:[l.a,d.a,Object(h.a)("radio","v-radio","v-radio-group"),c.a],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:f({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var t,e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];return(t=v.a.options.methods.genInput).call.apply(t,[this].concat(m(o)))},genLabel:function(){return this.$createElement(r.a,{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||"",dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",f({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(n.a,this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(t){return t("div",this.computedData,[this.genRadio(),this.genLabel()])}}},592:function(t,e,o){"use strict";o(27),o(192),o(560),o(569);var n=o(88),r=o(562),l=o(66);e.a=n.a.extend({name:"v-radio-group",mixins:[r.a,Object(l.b)("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},n.a.options.methods.genDefaultSlot.call(this))},onRadioChange:function(t){this.disabled||(this.hasInput=!0,this.internalValue=t,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(t){t.relatedTarget&&t.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",t))},register:function(t){t.isActive=this.valueComparator(this.internalValue,t.value),t.$on("change",this.onRadioChange),t.$on("blur",this.onRadioBlur),this.radios.push(t)},setErrorState:function(t){for(var e=this.radios.length;--e>=0;)this.radios[e].parentError=t},setActiveRadio:function(){for(var t=this.radios.length;--t>=0;){var e=this.radios[t];e.isActive=this.valueComparator(this.internalValue,e.value)}},unregister:function(t){t.$off("change",this.onRadioChange),t.$off("blur",this.onRadioBlur);var e=this.radios.findIndex((function(e){return e===t}));e>-1&&this.radios.splice(e,1)}}})},693:function(t,e,o){"use strict";e.a=[{bagian_kerja:"pendaftran",perhari:"1000000",cuti:"50000",izin:"45000",lembur:"100000",role:"2"},{bagian_kerja:"adminitrasi",perhari:"",cuti:"",izin:"",lembur:"",role:"3"},{bagian_kerja:"administator",perhari:"",cuti:"",izin:"",lembur:"",role:"4"},{bagian_kerja:"kepala apotek",perhari:"",cuti:"",izin:"",lembur:"",role:"5"},{bagian_kerja:"apotek",perhari:"",cuti:"",izin:"",lembur:"",role:"6"},{bagian_kerja:"kasir",perhari:"",cuti:"",izin:"",lembur:"",role:"7"},{bagian_kerja:"keuangan",perhari:"",cuti:"",izin:"",lembur:"",role:"8"},{bagian_kerja:"perawat",perhari:"",cuti:"",izin:"",lembur:"",role:"9"},{bagian_kerja:"dokter",perhari:"",cuti:"",izin:"",lembur:"",role:"10"},{bagian_kerja:"Satpam",perhari:"800000",cuti:"40000",izin:"35000",lembur:"80000",role:"11"}]}}]);