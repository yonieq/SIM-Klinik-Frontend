import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _732ab1ce = () => interopDefault(import('..\\pages\\administrasi\\index.vue' /* webpackChunkName: "pages/administrasi/index" */))
const _cd0dfce4 = () => interopDefault(import('..\\pages\\administrator\\index.vue' /* webpackChunkName: "pages/administrator/index" */))
const _5b2ab63f = () => interopDefault(import('..\\pages\\apotek\\index.vue' /* webpackChunkName: "pages/apotek/index" */))
const _4faca8fe = () => interopDefault(import('..\\pages\\chat.vue' /* webpackChunkName: "pages/chat" */))
const _3a044ef8 = () => interopDefault(import('..\\pages\\dokter\\index.vue' /* webpackChunkName: "pages/dokter/index" */))
const _7a7829f4 = () => interopDefault(import('..\\pages\\empty.vue' /* webpackChunkName: "pages/empty" */))
const _3c04efd6 = () => interopDefault(import('..\\pages\\forms.vue' /* webpackChunkName: "pages/forms" */))
const _2a02bf2c = () => interopDefault(import('..\\pages\\forms\\basic-forms.vue' /* webpackChunkName: "pages/forms/basic-forms" */))
const _3a498940 = () => interopDefault(import('..\\pages\\forms\\editors.vue' /* webpackChunkName: "pages/forms/editors" */))
const _c69a3aa6 = () => interopDefault(import('..\\pages\\forms\\selection-controls.vue' /* webpackChunkName: "pages/forms/selection-controls" */))
const _fb6151de = () => interopDefault(import('..\\pages\\forms\\selects.vue' /* webpackChunkName: "pages/forms/selects" */))
const _60d94898 = () => interopDefault(import('..\\pages\\forms\\steppers.vue' /* webpackChunkName: "pages/forms/steppers" */))
const _1e718173 = () => interopDefault(import('..\\pages\\forms\\text-fields.vue' /* webpackChunkName: "pages/forms/text-fields" */))
const _2c30ff62 = () => interopDefault(import('..\\pages\\general.vue' /* webpackChunkName: "pages/general" */))
const _c5d7f834 = () => interopDefault(import('..\\pages\\general\\alerts.vue' /* webpackChunkName: "pages/general/alerts" */))
const _23dbe47b = () => interopDefault(import('..\\pages\\general\\avatars.vue' /* webpackChunkName: "pages/general/avatars" */))
const _6b0e45ff = () => interopDefault(import('..\\pages\\general\\badges.vue' /* webpackChunkName: "pages/general/badges" */))
const _b961837c = () => interopDefault(import('..\\pages\\general\\buttons.vue' /* webpackChunkName: "pages/general/buttons" */))
const _3e09bb64 = () => interopDefault(import('..\\pages\\general\\cards.vue' /* webpackChunkName: "pages/general/cards" */))
const _77cdaa94 = () => interopDefault(import('..\\pages\\general\\carousels.vue' /* webpackChunkName: "pages/general/carousels" */))
const _4d9407a8 = () => interopDefault(import('..\\pages\\general\\chips.vue' /* webpackChunkName: "pages/general/chips" */))
const _77800a3f = () => interopDefault(import('..\\pages\\general\\colors.vue' /* webpackChunkName: "pages/general/colors" */))
const _0d97c5ec = () => interopDefault(import('..\\pages\\general\\dialogs.vue' /* webpackChunkName: "pages/general/dialogs" */))
const _0c7718ca = () => interopDefault(import('..\\pages\\general\\icons.vue' /* webpackChunkName: "pages/general/icons" */))
const _fd29282e = () => interopDefault(import('..\\pages\\general\\pagination.vue' /* webpackChunkName: "pages/general/pagination" */))
const _2ad545b4 = () => interopDefault(import('..\\pages\\general\\parallax.vue' /* webpackChunkName: "pages/general/parallax" */))
const _f4209288 = () => interopDefault(import('..\\pages\\general\\progress.vue' /* webpackChunkName: "pages/general/progress" */))
const _08bba1f3 = () => interopDefault(import('..\\pages\\general\\sliders.vue' /* webpackChunkName: "pages/general/sliders" */))
const _07bbb194 = () => interopDefault(import('..\\pages\\general\\snackbar.vue' /* webpackChunkName: "pages/general/snackbar" */))
const _5e15ee98 = () => interopDefault(import('..\\pages\\general\\tables.vue' /* webpackChunkName: "pages/general/tables" */))
const _699b1bdf = () => interopDefault(import('..\\pages\\general\\tooltips.vue' /* webpackChunkName: "pages/general/tooltips" */))
const _038dd6fe = () => interopDefault(import('..\\pages\\general\\typography.vue' /* webpackChunkName: "pages/general/typography" */))
const _b230d016 = () => interopDefault(import('..\\pages\\kasir\\index.vue' /* webpackChunkName: "pages/kasir/index" */))
const _1463bd7c = () => interopDefault(import('..\\pages\\kepala_apotek\\index.vue' /* webpackChunkName: "pages/kepala_apotek/index" */))
const _50fdb1a6 = () => interopDefault(import('..\\pages\\keuangan\\index.vue' /* webpackChunkName: "pages/keuangan/index" */))
const _fc405340 = () => interopDefault(import('..\\pages\\mail.vue' /* webpackChunkName: "pages/mail" */))
const _37a03dca = () => interopDefault(import('..\\pages\\mail\\0\\_uuid.vue' /* webpackChunkName: "pages/mail/0/_uuid" */))
const _47ed1540 = () => interopDefault(import('..\\pages\\mail\\_mailType.vue' /* webpackChunkName: "pages/mail/_mailType" */))
const _4eaff10b = () => interopDefault(import('..\\pages\\media.vue' /* webpackChunkName: "pages/media" */))
const _7aadb230 = () => interopDefault(import('..\\pages\\owner\\index.vue' /* webpackChunkName: "pages/owner/index" */))
const _ffd15e8e = () => interopDefault(import('..\\pages\\pendaftaran\\index.vue' /* webpackChunkName: "pages/pendaftaran/index" */))
const _7521da8c = () => interopDefault(import('..\\pages\\pickers.vue' /* webpackChunkName: "pages/pickers" */))
const _62eb37c8 = () => interopDefault(import('..\\pages\\pickers\\datepicker.vue' /* webpackChunkName: "pages/pickers/datepicker" */))
const _81f6ffb2 = () => interopDefault(import('..\\pages\\pickers\\timepicker.vue' /* webpackChunkName: "pages/pickers/timepicker" */))
const _7f8c2a96 = () => interopDefault(import('..\\pages\\widgets.vue' /* webpackChunkName: "pages/widgets" */))
const _ea150390 = () => interopDefault(import('..\\pages\\widgets\\chart.vue' /* webpackChunkName: "pages/widgets/chart" */))
const _38cf7134 = () => interopDefault(import('..\\pages\\widgets\\list.vue' /* webpackChunkName: "pages/widgets/list" */))
const _0690ddfa = () => interopDefault(import('..\\pages\\widgets\\social.vue' /* webpackChunkName: "pages/widgets/social" */))
const _4aa6e5aa = () => interopDefault(import('..\\pages\\widgets\\statistic.vue' /* webpackChunkName: "pages/widgets/statistic" */))
const _f7c06f4a = () => interopDefault(import('..\\pages\\administrasi\\dashboard.vue' /* webpackChunkName: "pages/administrasi/dashboard" */))
const _ba53cf54 = () => interopDefault(import('..\\pages\\administrasi\\data_pasien\\index.vue' /* webpackChunkName: "pages/administrasi/data_pasien/index" */))
const _c9bf5142 = () => interopDefault(import('..\\pages\\administrasi\\datapasien_ri\\index.vue' /* webpackChunkName: "pages/administrasi/datapasien_ri/index" */))
const _eec159d0 = () => interopDefault(import('..\\pages\\administrasi\\dokter\\index.vue' /* webpackChunkName: "pages/administrasi/dokter/index" */))
const _dfdb6ba0 = () => interopDefault(import('..\\pages\\administrasi\\login.vue' /* webpackChunkName: "pages/administrasi/login" */))
const _dedb9600 = () => interopDefault(import('..\\pages\\administrasi\\rekam_medis\\index.vue' /* webpackChunkName: "pages/administrasi/rekam_medis/index" */))
const _cac8d416 = () => interopDefault(import('..\\pages\\administrasi\\ruangan_bed\\index.vue' /* webpackChunkName: "pages/administrasi/ruangan_bed/index" */))
const _16e1b891 = () => interopDefault(import('..\\pages\\administrasi\\rujukan\\index.vue' /* webpackChunkName: "pages/administrasi/rujukan/index" */))
const _5540d916 = () => interopDefault(import('..\\pages\\administrator\\absensi\\index.vue' /* webpackChunkName: "pages/administrator/absensi/index" */))
const _7bd88aeb = () => interopDefault(import('..\\pages\\administrator\\akun\\index.vue' /* webpackChunkName: "pages/administrator/akun/index" */))
const _b421e620 = () => interopDefault(import('..\\pages\\administrator\\bagian_kerja\\index.vue' /* webpackChunkName: "pages/administrator/bagian_kerja/index" */))
const _eeaa727e = () => interopDefault(import('..\\pages\\administrator\\daftar_pegawai\\index.vue' /* webpackChunkName: "pages/administrator/daftar_pegawai/index" */))
const _1ae1e050 = () => interopDefault(import('..\\pages\\administrator\\dashboard.vue' /* webpackChunkName: "pages/administrator/dashboard" */))
const _2c71b7fe = () => interopDefault(import('..\\pages\\administrator\\data_pasien\\index.vue' /* webpackChunkName: "pages/administrator/data_pasien/index" */))
const _3ffa688d = () => interopDefault(import('..\\pages\\administrator\\dokter\\index.vue' /* webpackChunkName: "pages/administrator/dokter/index" */))
const _83992f0c = () => interopDefault(import('..\\pages\\administrator\\inventori\\index.vue' /* webpackChunkName: "pages/administrator/inventori/index" */))
const _45d901bb = () => interopDefault(import('..\\pages\\administrator\\jadwal_dokter\\index.vue' /* webpackChunkName: "pages/administrator/jadwal_dokter/index" */))
const _1fd7d788 = () => interopDefault(import('..\\pages\\administrator\\jadwal_karyawan\\index.vue' /* webpackChunkName: "pages/administrator/jadwal_karyawan/index" */))
const _72754b60 = () => interopDefault(import('..\\pages\\administrator\\jam_kerja\\index.vue' /* webpackChunkName: "pages/administrator/jam_kerja/index" */))
const _3111e2e4 = () => interopDefault(import('..\\pages\\administrator\\karyawan\\index.vue' /* webpackChunkName: "pages/administrator/karyawan/index" */))
const _f31da26e = () => interopDefault(import('..\\pages\\administrator\\laporan_absensi\\index.vue' /* webpackChunkName: "pages/administrator/laporan_absensi/index" */))
const _a034857a = () => interopDefault(import('..\\pages\\administrator\\lembur\\index.vue' /* webpackChunkName: "pages/administrator/lembur/index" */))
const _6320a4a5 = () => interopDefault(import('..\\pages\\administrator\\login.vue' /* webpackChunkName: "pages/administrator/login" */))
const _56cdd6dc = () => interopDefault(import('..\\pages\\administrator\\masa_kerja\\index.vue' /* webpackChunkName: "pages/administrator/masa_kerja/index" */))
const _7e4a8d84 = () => interopDefault(import('..\\pages\\administrator\\pelayanan_apotek\\index.vue' /* webpackChunkName: "pages/administrator/pelayanan_apotek/index" */))
const _69321558 = () => interopDefault(import('..\\pages\\administrator\\pendapatan\\index.vue' /* webpackChunkName: "pages/administrator/pendapatan/index" */))
const _5f09711b = () => interopDefault(import('..\\pages\\administrator\\profil_klinik\\index.vue' /* webpackChunkName: "pages/administrator/profil_klinik/index" */))
const _50f97eaa = () => interopDefault(import('..\\pages\\administrator\\rekam_medis\\index.vue' /* webpackChunkName: "pages/administrator/rekam_medis/index" */))
const _4ae951bc = () => interopDefault(import('..\\pages\\administrator\\rujukan\\index.vue' /* webpackChunkName: "pages/administrator/rujukan/index" */))
const _e35056fe = () => interopDefault(import('..\\pages\\apotek\\dashboard.vue' /* webpackChunkName: "pages/apotek/dashboard" */))
const _2406e9ae = () => interopDefault(import('..\\pages\\apotek\\inventori\\index.vue' /* webpackChunkName: "pages/apotek/inventori/index" */))
const _24d25956 = () => interopDefault(import('..\\pages\\apotek\\login.vue' /* webpackChunkName: "pages/apotek/login" */))
const _6ec34df9 = () => interopDefault(import('..\\pages\\apotek\\obat\\index.vue' /* webpackChunkName: "pages/apotek/obat/index" */))
const _bde44a8e = () => interopDefault(import('..\\pages\\apotek\\penjualan\\index.vue' /* webpackChunkName: "pages/apotek/penjualan/index" */))
const _5e8ac2f0 = () => interopDefault(import('..\\pages\\apotek\\permintaan\\index.vue' /* webpackChunkName: "pages/apotek/permintaan/index" */))
const _7f9f180b = () => interopDefault(import('..\\pages\\apotek\\report\\index.vue' /* webpackChunkName: "pages/apotek/report/index" */))
const _30f3c892 = () => interopDefault(import('..\\pages\\apotek\\retur\\index.vue' /* webpackChunkName: "pages/apotek/retur/index" */))
const _66b438bc = () => interopDefault(import('..\\pages\\dokter\\chat.vue' /* webpackChunkName: "pages/dokter/chat" */))
const _ba625cae = () => interopDefault(import('..\\pages\\dokter\\daftar_pasien\\index.vue' /* webpackChunkName: "pages/dokter/daftar_pasien/index" */))
const _7e572e8c = () => interopDefault(import('..\\pages\\dokter\\dashboard.vue' /* webpackChunkName: "pages/dokter/dashboard" */))
const _1582f5f3 = () => interopDefault(import('..\\pages\\dokter\\empty.vue' /* webpackChunkName: "pages/dokter/empty" */))
const _51e08856 = () => interopDefault(import('..\\pages\\dokter\\forms.vue' /* webpackChunkName: "pages/dokter/forms" */))
const _29fcea6a = () => interopDefault(import('..\\pages\\dokter\\forms\\basic-forms.vue' /* webpackChunkName: "pages/dokter/forms/basic-forms" */))
const _074a67be = () => interopDefault(import('..\\pages\\dokter\\forms\\editors.vue' /* webpackChunkName: "pages/dokter/forms/editors" */))
const _25c6b92c = () => interopDefault(import('..\\pages\\dokter\\forms\\selection-controls.vue' /* webpackChunkName: "pages/dokter/forms/selection-controls" */))
const _446099f2 = () => interopDefault(import('..\\pages\\dokter\\forms\\selects.vue' /* webpackChunkName: "pages/dokter/forms/selects" */))
const _3e1f3c52 = () => interopDefault(import('..\\pages\\dokter\\forms\\steppers.vue' /* webpackChunkName: "pages/dokter/forms/steppers" */))
const _1e746bd4 = () => interopDefault(import('..\\pages\\dokter\\forms\\text-fields.vue' /* webpackChunkName: "pages/dokter/forms/text-fields" */))
const _25216ee4 = () => interopDefault(import('..\\pages\\dokter\\general.vue' /* webpackChunkName: "pages/dokter/general" */))
const _1d2b1d25 = () => interopDefault(import('..\\pages\\dokter\\general\\alerts.vue' /* webpackChunkName: "pages/dokter/general/alerts" */))
const _b2b019c8 = () => interopDefault(import('..\\pages\\dokter\\general\\avatars.vue' /* webpackChunkName: "pages/dokter/general/avatars" */))
const _29b54184 = () => interopDefault(import('..\\pages\\dokter\\general\\badges.vue' /* webpackChunkName: "pages/dokter/general/badges" */))
const _261b4ce3 = () => interopDefault(import('..\\pages\\dokter\\general\\buttons.vue' /* webpackChunkName: "pages/dokter/general/buttons" */))
const _001afe45 = () => interopDefault(import('..\\pages\\dokter\\general\\cards.vue' /* webpackChunkName: "pages/dokter/general/cards" */))
const _77d094f5 = () => interopDefault(import('..\\pages\\dokter\\general\\carousels.vue' /* webpackChunkName: "pages/dokter/general/carousels" */))
const _0fa54a89 = () => interopDefault(import('..\\pages\\dokter\\general\\chips.vue' /* webpackChunkName: "pages/dokter/general/chips" */))
const _10d1b904 = () => interopDefault(import('..\\pages\\dokter\\general\\colors.vue' /* webpackChunkName: "pages/dokter/general/colors" */))
const _df3856e6 = () => interopDefault(import('..\\pages\\dokter\\general\\dialogs.vue' /* webpackChunkName: "pages/dokter/general/dialogs" */))
const _88549308 = () => interopDefault(import('..\\pages\\dokter\\general\\icons.vue' /* webpackChunkName: "pages/dokter/general/icons" */))
const _fc7464b0 = () => interopDefault(import('..\\pages\\dokter\\general\\pagination.vue' /* webpackChunkName: "pages/dokter/general/pagination" */))
const _7d69bab6 = () => interopDefault(import('..\\pages\\dokter\\general\\parallax.vue' /* webpackChunkName: "pages/dokter/general/parallax" */))
const _5ca57c3b = () => interopDefault(import('..\\pages\\dokter\\general\\progress.vue' /* webpackChunkName: "pages/dokter/general/progress" */))
const _e8f09ed8 = () => interopDefault(import('..\\pages\\dokter\\general\\sliders.vue' /* webpackChunkName: "pages/dokter/general/sliders" */))
const _431d11da = () => interopDefault(import('..\\pages\\dokter\\general\\snackbar.vue' /* webpackChunkName: "pages/dokter/general/snackbar" */))
const _510c21f3 = () => interopDefault(import('..\\pages\\dokter\\general\\tables.vue' /* webpackChunkName: "pages/dokter/general/tables" */))
const _4050e15e = () => interopDefault(import('..\\pages\\dokter\\general\\tooltips.vue' /* webpackChunkName: "pages/dokter/general/tooltips" */))
const _03e838bd = () => interopDefault(import('..\\pages\\dokter\\general\\typography.vue' /* webpackChunkName: "pages/dokter/general/typography" */))
const _03abf20f = () => interopDefault(import('..\\pages\\dokter\\login.vue' /* webpackChunkName: "pages/dokter/login" */))
const _765c0e81 = () => interopDefault(import('..\\pages\\dokter\\mail.vue' /* webpackChunkName: "pages/dokter/mail" */))
const _0c9cfeaa = () => interopDefault(import('..\\pages\\dokter\\mail\\0\\_uuid.vue' /* webpackChunkName: "pages/dokter/mail/0/_uuid" */))
const _6ff7a302 = () => interopDefault(import('..\\pages\\dokter\\mail\\_mailType.vue' /* webpackChunkName: "pages/dokter/mail/_mailType" */))
const _2c8a85ec = () => interopDefault(import('..\\pages\\dokter\\media.vue' /* webpackChunkName: "pages/dokter/media" */))
const _6d3aa68c = () => interopDefault(import('..\\pages\\dokter\\pemeriksaan\\index.vue' /* webpackChunkName: "pages/dokter/pemeriksaan/index" */))
const _3d1fc28c = () => interopDefault(import('..\\pages\\dokter\\penunjang\\index.vue' /* webpackChunkName: "pages/dokter/penunjang/index" */))
const _78a9a2cb = () => interopDefault(import('..\\pages\\dokter\\pickers.vue' /* webpackChunkName: "pages/dokter/pickers" */))
const _63459987 = () => interopDefault(import('..\\pages\\dokter\\pickers\\datepicker.vue' /* webpackChunkName: "pages/dokter/pickers/datepicker" */))
const _81423c34 = () => interopDefault(import('..\\pages\\dokter\\pickers\\timepicker.vue' /* webpackChunkName: "pages/dokter/pickers/timepicker" */))
const _ecaa68fe = () => interopDefault(import('..\\pages\\dokter\\report_pemeriksaan\\index.vue' /* webpackChunkName: "pages/dokter/report_pemeriksaan/index" */))
const _f9d81a56 = () => interopDefault(import('..\\pages\\dokter\\widgets.vue' /* webpackChunkName: "pages/dokter/widgets" */))
const _4d06c119 = () => interopDefault(import('..\\pages\\dokter\\widgets\\chart.vue' /* webpackChunkName: "pages/dokter/widgets/chart" */))
const _1e09ce33 = () => interopDefault(import('..\\pages\\dokter\\widgets\\list.vue' /* webpackChunkName: "pages/dokter/widgets/list" */))
const _7cceaa42 = () => interopDefault(import('..\\pages\\dokter\\widgets\\social.vue' /* webpackChunkName: "pages/dokter/widgets/social" */))
const _4aa9d00b = () => interopDefault(import('..\\pages\\dokter\\widgets\\statistic.vue' /* webpackChunkName: "pages/dokter/widgets/statistic" */))
const _08c0eb37 = () => interopDefault(import('..\\pages\\kasir\\dashboard.vue' /* webpackChunkName: "pages/kasir/dashboard" */))
const _73786cfa = () => interopDefault(import('..\\pages\\kasir\\data_pasien\\index.vue' /* webpackChunkName: "pages/kasir/data_pasien/index" */))
const _85f39dae = () => interopDefault(import('..\\pages\\kasir\\keuangan\\index.vue' /* webpackChunkName: "pages/kasir/keuangan/index" */))
const _708f3b0c = () => interopDefault(import('..\\pages\\kasir\\login.vue' /* webpackChunkName: "pages/kasir/login" */))
const _4573b506 = () => interopDefault(import('..\\pages\\kasir\\rawat_inap\\index.vue' /* webpackChunkName: "pages/kasir/rawat_inap/index" */))
const _44dc387e = () => interopDefault(import('..\\pages\\kasir\\report\\index.vue' /* webpackChunkName: "pages/kasir/report/index" */))
const _c425abf8 = () => interopDefault(import('..\\pages\\kepala_apotek\\alkes\\index.vue' /* webpackChunkName: "pages/kepala_apotek/alkes/index" */))
const _048605c0 = () => interopDefault(import('..\\pages\\kepala_apotek\\barang_rusak\\index.vue' /* webpackChunkName: "pages/kepala_apotek/barang_rusak/index" */))
const _03780604 = () => interopDefault(import('..\\pages\\kepala_apotek\\dashboard.vue' /* webpackChunkName: "pages/kepala_apotek/dashboard" */))
const _92a59f74 = () => interopDefault(import('..\\pages\\kepala_apotek\\inventori\\index.vue' /* webpackChunkName: "pages/kepala_apotek/inventori/index" */))
const _8114774e = () => interopDefault(import('..\\pages\\kepala_apotek\\login.vue' /* webpackChunkName: "pages/kepala_apotek/login" */))
const _1c9d2abc = () => interopDefault(import('..\\pages\\kepala_apotek\\obat\\index.vue' /* webpackChunkName: "pages/kepala_apotek/obat/index" */))
const _4ca40e30 = () => interopDefault(import('..\\pages\\kepala_apotek\\permintaan_penunjang\\index.vue' /* webpackChunkName: "pages/kepala_apotek/permintaan_penunjang/index" */))
const _41e9d4f5 = () => interopDefault(import('..\\pages\\kepala_apotek\\retur_barangpembelian\\index.vue' /* webpackChunkName: "pages/kepala_apotek/retur_barangpembelian/index" */))
const _27101e6f = () => interopDefault(import('..\\pages\\keuangan\\dashboard.vue' /* webpackChunkName: "pages/keuangan/dashboard" */))
const _bdae6b78 = () => interopDefault(import('..\\pages\\keuangan\\login.vue' /* webpackChunkName: "pages/keuangan/login" */))
const _3a6bc8aa = () => interopDefault(import('..\\pages\\owner\\dashboard.vue' /* webpackChunkName: "pages/owner/dashboard" */))
const _e75e6c02 = () => interopDefault(import('..\\pages\\owner\\login.vue' /* webpackChunkName: "pages/owner/login" */))
const _0d553faf = () => interopDefault(import('..\\pages\\pendaftaran\\cetak_antrian.vue' /* webpackChunkName: "pages/pendaftaran/cetak_antrian" */))
const _193b25c1 = () => interopDefault(import('..\\pages\\pendaftaran\\chat.vue' /* webpackChunkName: "pages/pendaftaran/chat" */))
const _959c1470 = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pasien\\index.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pasien/index" */))
const _27bd837a = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pemeriksaan\\index.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pemeriksaan/index" */))
const _43c2bc0a = () => interopDefault(import('..\\pages\\pendaftaran\\dashboard.vue' /* webpackChunkName: "pages/pendaftaran/dashboard" */))
const _42244c28 = () => interopDefault(import('..\\pages\\pendaftaran\\edit_pasien.vue' /* webpackChunkName: "pages/pendaftaran/edit_pasien" */))
const _5b95f7b4 = () => interopDefault(import('..\\pages\\pendaftaran\\empty.vue' /* webpackChunkName: "pages/pendaftaran/empty" */))
const _1d22bd96 = () => interopDefault(import('..\\pages\\pendaftaran\\forms.vue' /* webpackChunkName: "pages/pendaftaran/forms" */))
const _fc65aaac = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\basic-forms.vue' /* webpackChunkName: "pages/pendaftaran/forms/basic-forms" */))
const _50773380 = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\editors.vue' /* webpackChunkName: "pages/pendaftaran/forms/editors" */))
const _86bf5f26 = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\selection-controls.vue' /* webpackChunkName: "pages/pendaftaran/forms/selection-controls" */))
const _cf05fd5e = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\selects.vue' /* webpackChunkName: "pages/pendaftaran/forms/selects" */))
const _1060e658 = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\steppers.vue' /* webpackChunkName: "pages/pendaftaran/forms/steppers" */))
const _957fe89a = () => interopDefault(import('..\\pages\\pendaftaran\\forms\\text-fields.vue' /* webpackChunkName: "pages/pendaftaran/forms/text-fields" */))
const _0a6e43e2 = () => interopDefault(import('..\\pages\\pendaftaran\\general.vue' /* webpackChunkName: "pages/pendaftaran/general" */))
const _4c9ba1a6 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\alerts.vue' /* webpackChunkName: "pages/pendaftaran/general/alerts" */))
const _6547febb = () => interopDefault(import('..\\pages\\pendaftaran\\general\\avatars.vue' /* webpackChunkName: "pages/pendaftaran/general/avatars" */))
const _1a95e3bf = () => interopDefault(import('..\\pages\\pendaftaran\\general\\badges.vue' /* webpackChunkName: "pages/pendaftaran/general/badges" */))
const _36894efc = () => interopDefault(import('..\\pages\\pendaftaran\\general\\buttons.vue' /* webpackChunkName: "pages/pendaftaran/general/buttons" */))
const _543765a4 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\cards.vue' /* webpackChunkName: "pages/pendaftaran/general/cards" */))
const _0e9c34d4 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\carousels.vue' /* webpackChunkName: "pages/pendaftaran/general/carousels" */))
const _63c1b1e8 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\chips.vue' /* webpackChunkName: "pages/pendaftaran/general/chips" */))
const _2707a7ff = () => interopDefault(import('..\\pages\\pendaftaran\\general\\colors.vue' /* webpackChunkName: "pages/pendaftaran/general/colors" */))
const _4f03e02c = () => interopDefault(import('..\\pages\\pendaftaran\\general\\dialogs.vue' /* webpackChunkName: "pages/pendaftaran/general/dialogs" */))
const _0ff21ddb = () => interopDefault(import('..\\pages\\pendaftaran\\general\\icons.vue' /* webpackChunkName: "pages/pendaftaran/general/icons" */))
const _7723acae = () => interopDefault(import('..\\pages\\pendaftaran\\general\\pagination.vue' /* webpackChunkName: "pages/pendaftaran/general/pagination" */))
const _52a6ea34 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\parallax.vue' /* webpackChunkName: "pages/pendaftaran/general/parallax" */))
const _7206e47c = () => interopDefault(import('..\\pages\\pendaftaran\\general\\progress.vue' /* webpackChunkName: "pages/pendaftaran/general/progress" */))
const _4a27bc33 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\sliders.vue' /* webpackChunkName: "pages/pendaftaran/general/sliders" */))
const _185a4158 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\snackbar.vue' /* webpackChunkName: "pages/pendaftaran/general/snackbar" */))
const _ff06b318 = () => interopDefault(import('..\\pages\\pendaftaran\\general\\tables.vue' /* webpackChunkName: "pages/pendaftaran/general/tables" */))
const _55b2499f = () => interopDefault(import('..\\pages\\pendaftaran\\general\\tooltips.vue' /* webpackChunkName: "pages/pendaftaran/general/tooltips" */))
const _469094be = () => interopDefault(import('..\\pages\\pendaftaran\\general\\typography.vue' /* webpackChunkName: "pages/pendaftaran/general/typography" */))
const _49bef3d0 = () => interopDefault(import('..\\pages\\pendaftaran\\login.vue' /* webpackChunkName: "pages/pendaftaran/login" */))
const _7a1d5ec0 = () => interopDefault(import('..\\pages\\pendaftaran\\mail.vue' /* webpackChunkName: "pages/pendaftaran/mail" */))
const _4dcde80a = () => interopDefault(import('..\\pages\\pendaftaran\\mail\\0\\_uuid.vue' /* webpackChunkName: "pages/pendaftaran/mail/0/_uuid" */))
const _11169a00 = () => interopDefault(import('..\\pages\\pendaftaran\\mail\\_mailType.vue' /* webpackChunkName: "pages/pendaftaran/mail/_mailType" */))
const _2fcdbecb = () => interopDefault(import('..\\pages\\pendaftaran\\media.vue' /* webpackChunkName: "pages/pendaftaran/media" */))
const _f3f98f68 = () => interopDefault(import('..\\pages\\pendaftaran\\pickers.vue' /* webpackChunkName: "pages/pendaftaran/pickers" */))
const _b42414f0 = () => interopDefault(import('..\\pages\\pendaftaran\\pickers\\datepicker.vue' /* webpackChunkName: "pages/pendaftaran/pickers/datepicker" */))
const _02073de7 = () => interopDefault(import('..\\pages\\pendaftaran\\pickers\\timepicker.vue' /* webpackChunkName: "pages/pendaftaran/pickers/timepicker" */))
const _df24ef54 = () => interopDefault(import('..\\pages\\pendaftaran\\widgets.vue' /* webpackChunkName: "pages/pendaftaran/widgets" */))
const _bdb9af10 = () => interopDefault(import('..\\pages\\pendaftaran\\widgets\\chart.vue' /* webpackChunkName: "pages/pendaftaran/widgets/chart" */))
const _a5b90218 = () => interopDefault(import('..\\pages\\pendaftaran\\widgets\\list.vue' /* webpackChunkName: "pages/pendaftaran/widgets/list" */))
const _a781a27a = () => interopDefault(import('..\\pages\\pendaftaran\\widgets\\social.vue' /* webpackChunkName: "pages/pendaftaran/widgets/social" */))
const _3d15202c = () => interopDefault(import('..\\pages\\pendaftaran\\widgets\\statistic.vue' /* webpackChunkName: "pages/pendaftaran/widgets/statistic" */))
const _613da414 = () => interopDefault(import('..\\pages\\administrasi\\datapasien_ri\\detail.vue' /* webpackChunkName: "pages/administrasi/datapasien_ri/detail" */))
const _b6bc4fa8 = () => interopDefault(import('..\\pages\\administrasi\\datapasien_ri\\tambah.vue' /* webpackChunkName: "pages/administrasi/datapasien_ri/tambah" */))
const _445a0d34 = () => interopDefault(import('..\\pages\\administrasi\\dokter\\edit.vue' /* webpackChunkName: "pages/administrasi/dokter/edit" */))
const _67025393 = () => interopDefault(import('..\\pages\\administrasi\\dokter\\tambah.vue' /* webpackChunkName: "pages/administrasi/dokter/tambah" */))
const _512a383e = () => interopDefault(import('..\\pages\\administrasi\\ruangan_bed\\detail.vue' /* webpackChunkName: "pages/administrasi/ruangan_bed/detail" */))
const _5da86922 = () => interopDefault(import('..\\pages\\administrasi\\rujukan\\detail.vue' /* webpackChunkName: "pages/administrasi/rujukan/detail" */))
const _02ece5e5 = () => interopDefault(import('..\\pages\\administrasi\\rujukan\\proses.vue' /* webpackChunkName: "pages/administrasi/rujukan/proses" */))
const _7e87a82a = () => interopDefault(import('..\\pages\\administrator\\absensi\\cutiizin.vue' /* webpackChunkName: "pages/administrator/absensi/cutiizin" */))
const _f3fde1fe = () => interopDefault(import('..\\pages\\administrator\\akun\\edit.vue' /* webpackChunkName: "pages/administrator/akun/edit" */))
const _4a1fd3c0 = () => interopDefault(import('..\\pages\\administrator\\akun\\tambah.vue' /* webpackChunkName: "pages/administrator/akun/tambah" */))
const _13bfb85c = () => interopDefault(import('..\\pages\\administrator\\bagian_kerja\\edit.vue' /* webpackChunkName: "pages/administrator/bagian_kerja/edit" */))
const _18ac568a = () => interopDefault(import('..\\pages\\administrator\\bagian_kerja\\tambah.vue' /* webpackChunkName: "pages/administrator/bagian_kerja/tambah" */))
const _293bf51f = () => interopDefault(import('..\\pages\\administrator\\dokter\\edit.vue' /* webpackChunkName: "pages/administrator/dokter/edit" */))
const _c9ec2684 = () => interopDefault(import('..\\pages\\administrator\\dokter\\tambah.vue' /* webpackChunkName: "pages/administrator/dokter/tambah" */))
const _31ae7e31 = () => interopDefault(import('..\\pages\\administrator\\jadwal_dokter\\edit.vue' /* webpackChunkName: "pages/administrator/jadwal_dokter/edit" */))
const _50fe7950 = () => interopDefault(import('..\\pages\\administrator\\jadwal_dokter\\tambah.vue' /* webpackChunkName: "pages/administrator/jadwal_dokter/tambah" */))
const _60769790 = () => interopDefault(import('..\\pages\\administrator\\jadwal_karyawan\\edit.vue' /* webpackChunkName: "pages/administrator/jadwal_karyawan/edit" */))
const _23b49222 = () => interopDefault(import('..\\pages\\administrator\\jadwal_karyawan\\tambah.vue' /* webpackChunkName: "pages/administrator/jadwal_karyawan/tambah" */))
const _91802828 = () => interopDefault(import('..\\pages\\administrator\\jam_kerja\\edit.vue' /* webpackChunkName: "pages/administrator/jam_kerja/edit" */))
const _9029376a = () => interopDefault(import('..\\pages\\administrator\\jam_kerja\\tambah.vue' /* webpackChunkName: "pages/administrator/jam_kerja/tambah" */))
const _aafbea04 = () => interopDefault(import('..\\pages\\administrator\\karyawan\\edit.vue' /* webpackChunkName: "pages/administrator/karyawan/edit" */))
const _39bbf246 = () => interopDefault(import('..\\pages\\administrator\\karyawan\\tambah.vue' /* webpackChunkName: "pages/administrator/karyawan/tambah" */))
const _2cd831a9 = () => interopDefault(import('..\\pages\\administrator\\lembur\\edit.vue' /* webpackChunkName: "pages/administrator/lembur/edit" */))
const _28892ec8 = () => interopDefault(import('..\\pages\\administrator\\lembur\\tambah.vue' /* webpackChunkName: "pages/administrator/lembur/tambah" */))
const _0421d338 = () => interopDefault(import('..\\pages\\administrator\\ruangan\\data\\index.vue' /* webpackChunkName: "pages/administrator/ruangan/data/index" */))
const _15813fb8 = () => interopDefault(import('..\\pages\\administrator\\ruangan\\tipe\\index.vue' /* webpackChunkName: "pages/administrator/ruangan/tipe/index" */))
const _aad81552 = () => interopDefault(import('..\\pages\\administrator\\rujukan\\detail.vue' /* webpackChunkName: "pages/administrator/rujukan/detail" */))
const _4fd8721a = () => interopDefault(import('..\\pages\\administrator\\rujukan\\proses.vue' /* webpackChunkName: "pages/administrator/rujukan/proses" */))
const _455db4d2 = () => interopDefault(import('..\\pages\\apotek\\obat\\tambah.vue' /* webpackChunkName: "pages/apotek/obat/tambah" */))
const _54cd8efe = () => interopDefault(import('..\\pages\\apotek\\penjualan\\detail_penjualan_obat.vue' /* webpackChunkName: "pages/apotek/penjualan/detail_penjualan_obat" */))
const _5c64c012 = () => interopDefault(import('..\\pages\\apotek\\penjualan\\tambah.vue' /* webpackChunkName: "pages/apotek/penjualan/tambah" */))
const _570ddc3c = () => interopDefault(import('..\\pages\\apotek\\permintaan\\detail_tebus_obat.vue' /* webpackChunkName: "pages/apotek/permintaan/detail_tebus_obat" */))
const _9f35b134 = () => interopDefault(import('..\\pages\\apotek\\permintaan\\proses.vue' /* webpackChunkName: "pages/apotek/permintaan/proses" */))
const _fd8f9696 = () => interopDefault(import('..\\pages\\apotek\\retur\\edit.vue' /* webpackChunkName: "pages/apotek/retur/edit" */))
const _3616c258 = () => interopDefault(import('..\\pages\\apotek\\retur\\tambah.vue' /* webpackChunkName: "pages/apotek/retur/tambah" */))
const _069259e8 = () => interopDefault(import('..\\pages\\dokter\\rujukan\\rawat_inap.vue' /* webpackChunkName: "pages/dokter/rujukan/rawat_inap" */))
const _d5135b50 = () => interopDefault(import('..\\pages\\dokter\\rujukan\\rs_lain.vue' /* webpackChunkName: "pages/dokter/rujukan/rs_lain" */))
const _f9e09c14 = () => interopDefault(import('..\\pages\\kasir\\data_pasien\\detail_pembayaran.vue' /* webpackChunkName: "pages/kasir/data_pasien/detail_pembayaran" */))
const _70586c42 = () => interopDefault(import('..\\pages\\kasir\\data_pasien\\riwayat_detail_pembayaran.vue' /* webpackChunkName: "pages/kasir/data_pasien/riwayat_detail_pembayaran" */))
const _09214bb2 = () => interopDefault(import('..\\pages\\kepala_apotek\\alkes\\tambah.vue' /* webpackChunkName: "pages/kepala_apotek/alkes/tambah" */))
const _d4cc2aea = () => interopDefault(import('..\\pages\\kepala_apotek\\barang_rusak\\tambah.vue' /* webpackChunkName: "pages/kepala_apotek/barang_rusak/tambah" */))
const _6a3fe208 = () => interopDefault(import('..\\pages\\kepala_apotek\\gas_medis\\distribusi\\index.vue' /* webpackChunkName: "pages/kepala_apotek/gas_medis/distribusi/index" */))
const _5a00b5c4 = () => interopDefault(import('..\\pages\\kepala_apotek\\gas_medis\\penerimaan\\index.vue' /* webpackChunkName: "pages/kepala_apotek/gas_medis/penerimaan/index" */))
const _88887a3a = () => interopDefault(import('..\\pages\\kepala_apotek\\gas_medis\\pengembalian\\index.vue' /* webpackChunkName: "pages/kepala_apotek/gas_medis/pengembalian/index" */))
const _0aa542be = () => interopDefault(import('..\\pages\\kepala_apotek\\gas_medis\\penyerahan\\index.vue' /* webpackChunkName: "pages/kepala_apotek/gas_medis/penyerahan/index" */))
const _52bf706f = () => interopDefault(import('..\\pages\\kepala_apotek\\obat\\tambah.vue' /* webpackChunkName: "pages/kepala_apotek/obat/tambah" */))
const _f51577b4 = () => interopDefault(import('..\\pages\\kepala_apotek\\permintaan_penunjang\\proses.vue' /* webpackChunkName: "pages/kepala_apotek/permintaan_penunjang/proses" */))
const _6e185228 = () => interopDefault(import('..\\pages\\kepala_apotek\\report\\barang_rusak\\index.vue' /* webpackChunkName: "pages/kepala_apotek/report/barang_rusak/index" */))
const _b5034b44 = () => interopDefault(import('..\\pages\\kepala_apotek\\report\\hpp\\index.vue' /* webpackChunkName: "pages/kepala_apotek/report/hpp/index" */))
const _0f061740 = () => interopDefault(import('..\\pages\\kepala_apotek\\report\\minimum_stok\\index.vue' /* webpackChunkName: "pages/kepala_apotek/report/minimum_stok/index" */))
const _c28fc1a8 = () => interopDefault(import('..\\pages\\kepala_apotek\\report\\mutasi_distribusi\\index.vue' /* webpackChunkName: "pages/kepala_apotek/report/mutasi_distribusi/index" */))
const _469b04ec = () => interopDefault(import('..\\pages\\kepala_apotek\\report\\obat_generik__dannon\\index.vue' /* webpackChunkName: "pages/kepala_apotek/report/obat_generik__dannon/index" */))
const _934e654e = () => interopDefault(import('..\\pages\\kepala_apotek\\report\\obat_narkotika\\index.vue' /* webpackChunkName: "pages/kepala_apotek/report/obat_narkotika/index" */))
const _31245d61 = () => interopDefault(import('..\\pages\\kepala_apotek\\report\\pembelian\\index.vue' /* webpackChunkName: "pages/kepala_apotek/report/pembelian/index" */))
const _5d4ed98a = () => interopDefault(import('..\\pages\\kepala_apotek\\report\\penjualan\\index.vue' /* webpackChunkName: "pages/kepala_apotek/report/penjualan/index" */))
const _fac329fc = () => interopDefault(import('..\\pages\\kepala_apotek\\report\\retur_pembelian\\index.vue' /* webpackChunkName: "pages/kepala_apotek/report/retur_pembelian/index" */))
const _a26e31aa = () => interopDefault(import('..\\pages\\kepala_apotek\\report\\retur_penjualan\\index.vue' /* webpackChunkName: "pages/kepala_apotek/report/retur_penjualan/index" */))
const _be859756 = () => interopDefault(import('..\\pages\\kepala_apotek\\report\\selisih_stok\\index.vue' /* webpackChunkName: "pages/kepala_apotek/report/selisih_stok/index" */))
const _51efe554 = () => interopDefault(import('..\\pages\\kepala_apotek\\retur_barangpembelian\\tambah.vue' /* webpackChunkName: "pages/kepala_apotek/retur_barangpembelian/tambah" */))
const _52d5e29f = () => interopDefault(import('..\\pages\\keuangan\\pemasukan\\farmasi_penjualan_luar\\index.vue' /* webpackChunkName: "pages/keuangan/pemasukan/farmasi_penjualan_luar/index" */))
const _4fa6fea2 = () => interopDefault(import('..\\pages\\keuangan\\pemasukan\\rawat_inap\\index.vue' /* webpackChunkName: "pages/keuangan/pemasukan/rawat_inap/index" */))
const _a74e5448 = () => interopDefault(import('..\\pages\\keuangan\\pemasukan\\rawat_jalan\\index.vue' /* webpackChunkName: "pages/keuangan/pemasukan/rawat_jalan/index" */))
const _08dcdb12 = () => interopDefault(import('..\\pages\\keuangan\\pemasukan\\transaksi\\index.vue' /* webpackChunkName: "pages/keuangan/pemasukan/transaksi/index" */))
const _489bd3e9 = () => interopDefault(import('..\\pages\\keuangan\\pemasukan\\transaksi_lain\\index.vue' /* webpackChunkName: "pages/keuangan/pemasukan/transaksi_lain/index" */))
const _b13606b0 = () => interopDefault(import('..\\pages\\keuangan\\pengeluaran\\dokter\\index.vue' /* webpackChunkName: "pages/keuangan/pengeluaran/dokter/index" */))
const _1e8d07e9 = () => interopDefault(import('..\\pages\\keuangan\\pengeluaran\\karyawan\\index.vue' /* webpackChunkName: "pages/keuangan/pengeluaran/karyawan/index" */))
const _353975f8 = () => interopDefault(import('..\\pages\\keuangan\\pengeluaran\\transaksi_lain\\index.vue' /* webpackChunkName: "pages/keuangan/pengeluaran/transaksi_lain/index" */))
const _1f1b63a8 = () => interopDefault(import('..\\pages\\owner\\farmasi\\obat_alkes.vue' /* webpackChunkName: "pages/owner/farmasi/obat_alkes" */))
const _b666b54a = () => interopDefault(import('..\\pages\\owner\\keuangan\\dokter\\index.vue' /* webpackChunkName: "pages/owner/keuangan/dokter/index" */))
const _23b7f7e4 = () => interopDefault(import('..\\pages\\owner\\keuangan\\farmasi_luar\\index.vue' /* webpackChunkName: "pages/owner/keuangan/farmasi_luar/index" */))
const _60ad4fdc = () => interopDefault(import('..\\pages\\owner\\keuangan\\karyawan\\index.vue' /* webpackChunkName: "pages/owner/keuangan/karyawan/index" */))
const _515e3eb2 = () => interopDefault(import('..\\pages\\owner\\keuangan\\obat_alkes\\index.vue' /* webpackChunkName: "pages/owner/keuangan/obat_alkes/index" */))
const _7000a210 = () => interopDefault(import('..\\pages\\owner\\keuangan\\transaksi\\index.vue' /* webpackChunkName: "pages/owner/keuangan/transaksi/index" */))
const _72c4c550 = () => interopDefault(import('..\\pages\\owner\\rm\\rm.vue' /* webpackChunkName: "pages/owner/rm/rm" */))
const _58106b94 = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pasien\\detail_pasien.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pasien/detail_pasien" */))
const _5e905484 = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pasien\\edit.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pasien/edit" */))
const _33396edc = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pemeriksaan\\edit.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pemeriksaan/edit" */))
const _a8aba11e = () => interopDefault(import('..\\pages\\pendaftaran\\daftar_pemeriksaan\\tambah.vue' /* webpackChunkName: "pages/pendaftaran/daftar_pemeriksaan/tambah" */))
const _242b356b = () => interopDefault(import('..\\pages\\pendaftaran\\pendaftaran_pasien\\pasien_baru.vue' /* webpackChunkName: "pages/pendaftaran/pendaftaran_pasien/pasien_baru" */))
const _2954e4f2 = () => interopDefault(import('..\\pages\\pendaftaran\\pendaftaran_pasien\\pasien_lama.vue' /* webpackChunkName: "pages/pendaftaran/pendaftaran_pasien/pasien_lama" */))
const _6711edd8 = () => interopDefault(import('..\\pages\\administrator\\ruangan\\data\\edit.vue' /* webpackChunkName: "pages/administrator/ruangan/data/edit" */))
const _5bcfd773 = () => interopDefault(import('..\\pages\\administrator\\ruangan\\data\\tambah.vue' /* webpackChunkName: "pages/administrator/ruangan/data/tambah" */))
const _d98fe6d8 = () => interopDefault(import('..\\pages\\administrator\\ruangan\\tipe\\edit.vue' /* webpackChunkName: "pages/administrator/ruangan/tipe/edit" */))
const _765dfaf3 = () => interopDefault(import('..\\pages\\administrator\\ruangan\\tipe\\tambah.vue' /* webpackChunkName: "pages/administrator/ruangan/tipe/tambah" */))
const _6cd9142f = () => interopDefault(import('..\\pages\\kepala_apotek\\gas_medis\\distribusi\\tambah.vue' /* webpackChunkName: "pages/kepala_apotek/gas_medis/distribusi/tambah" */))
const _68ac424d = () => interopDefault(import('..\\pages\\kepala_apotek\\gas_medis\\penerimaan\\tambah.vue' /* webpackChunkName: "pages/kepala_apotek/gas_medis/penerimaan/tambah" */))
const _d11845b0 = () => interopDefault(import('..\\pages\\kepala_apotek\\gas_medis\\pengembalian\\tambah.vue' /* webpackChunkName: "pages/kepala_apotek/gas_medis/pengembalian/tambah" */))
const _36b5b92a = () => interopDefault(import('..\\pages\\kepala_apotek\\gas_medis\\penyerahan\\tambah.vue' /* webpackChunkName: "pages/kepala_apotek/gas_medis/penyerahan/tambah" */))
const _9ded3048 = () => interopDefault(import('..\\pages\\keuangan\\pengeluaran\\farmasi\\alkes\\index.vue' /* webpackChunkName: "pages/keuangan/pengeluaran/farmasi/alkes/index" */))
const _eed45c38 = () => interopDefault(import('..\\pages\\keuangan\\pengeluaran\\farmasi\\obat\\index.vue' /* webpackChunkName: "pages/keuangan/pengeluaran/farmasi/obat/index" */))
const _0b4c5e37 = () => interopDefault(import('..\\pages\\keuangan\\pengeluaran\\farmasi\\tabung_gas\\index.vue' /* webpackChunkName: "pages/keuangan/pengeluaran/farmasi/tabung_gas/index" */))
const _c20cfa0e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/administrasi",
    component: _732ab1ce,
    name: "administrasi"
  }, {
    path: "/administrator",
    component: _cd0dfce4,
    name: "administrator"
  }, {
    path: "/apotek",
    component: _5b2ab63f,
    name: "apotek"
  }, {
    path: "/chat",
    component: _4faca8fe,
    name: "chat"
  }, {
    path: "/dokter",
    component: _3a044ef8,
    name: "dokter"
  }, {
    path: "/empty",
    component: _7a7829f4,
    name: "empty"
  }, {
    path: "/forms",
    component: _3c04efd6,
    name: "forms",
    children: [{
      path: "basic-forms",
      component: _2a02bf2c,
      name: "forms-basic-forms"
    }, {
      path: "editors",
      component: _3a498940,
      name: "forms-editors"
    }, {
      path: "selection-controls",
      component: _c69a3aa6,
      name: "forms-selection-controls"
    }, {
      path: "selects",
      component: _fb6151de,
      name: "forms-selects"
    }, {
      path: "steppers",
      component: _60d94898,
      name: "forms-steppers"
    }, {
      path: "text-fields",
      component: _1e718173,
      name: "forms-text-fields"
    }]
  }, {
    path: "/general",
    component: _2c30ff62,
    name: "general",
    children: [{
      path: "alerts",
      component: _c5d7f834,
      name: "general-alerts"
    }, {
      path: "avatars",
      component: _23dbe47b,
      name: "general-avatars"
    }, {
      path: "badges",
      component: _6b0e45ff,
      name: "general-badges"
    }, {
      path: "buttons",
      component: _b961837c,
      name: "general-buttons"
    }, {
      path: "cards",
      component: _3e09bb64,
      name: "general-cards"
    }, {
      path: "carousels",
      component: _77cdaa94,
      name: "general-carousels"
    }, {
      path: "chips",
      component: _4d9407a8,
      name: "general-chips"
    }, {
      path: "colors",
      component: _77800a3f,
      name: "general-colors"
    }, {
      path: "dialogs",
      component: _0d97c5ec,
      name: "general-dialogs"
    }, {
      path: "icons",
      component: _0c7718ca,
      name: "general-icons"
    }, {
      path: "pagination",
      component: _fd29282e,
      name: "general-pagination"
    }, {
      path: "parallax",
      component: _2ad545b4,
      name: "general-parallax"
    }, {
      path: "progress",
      component: _f4209288,
      name: "general-progress"
    }, {
      path: "sliders",
      component: _08bba1f3,
      name: "general-sliders"
    }, {
      path: "snackbar",
      component: _07bbb194,
      name: "general-snackbar"
    }, {
      path: "tables",
      component: _5e15ee98,
      name: "general-tables"
    }, {
      path: "tooltips",
      component: _699b1bdf,
      name: "general-tooltips"
    }, {
      path: "typography",
      component: _038dd6fe,
      name: "general-typography"
    }]
  }, {
    path: "/kasir",
    component: _b230d016,
    name: "kasir"
  }, {
    path: "/kepala_apotek",
    component: _1463bd7c,
    name: "kepala_apotek"
  }, {
    path: "/keuangan",
    component: _50fdb1a6,
    name: "keuangan"
  }, {
    path: "/mail",
    component: _fc405340,
    name: "mail",
    children: [{
      path: "0/:uuid?",
      component: _37a03dca,
      name: "mail-0-uuid"
    }, {
      path: ":mailType?",
      component: _47ed1540,
      name: "mail-mailType"
    }]
  }, {
    path: "/media",
    component: _4eaff10b,
    name: "media"
  }, {
    path: "/owner",
    component: _7aadb230,
    name: "owner"
  }, {
    path: "/pendaftaran",
    component: _ffd15e8e,
    name: "pendaftaran"
  }, {
    path: "/pickers",
    component: _7521da8c,
    name: "pickers",
    children: [{
      path: "datepicker",
      component: _62eb37c8,
      name: "pickers-datepicker"
    }, {
      path: "timepicker",
      component: _81f6ffb2,
      name: "pickers-timepicker"
    }]
  }, {
    path: "/widgets",
    component: _7f8c2a96,
    name: "widgets",
    children: [{
      path: "chart",
      component: _ea150390,
      name: "widgets-chart"
    }, {
      path: "list",
      component: _38cf7134,
      name: "widgets-list"
    }, {
      path: "social",
      component: _0690ddfa,
      name: "widgets-social"
    }, {
      path: "statistic",
      component: _4aa6e5aa,
      name: "widgets-statistic"
    }]
  }, {
    path: "/administrasi/dashboard",
    component: _f7c06f4a,
    name: "administrasi-dashboard"
  }, {
    path: "/administrasi/data_pasien",
    component: _ba53cf54,
    name: "administrasi-data_pasien"
  }, {
    path: "/administrasi/datapasien_ri",
    component: _c9bf5142,
    name: "administrasi-datapasien_ri"
  }, {
    path: "/administrasi/dokter",
    component: _eec159d0,
    name: "administrasi-dokter"
  }, {
    path: "/administrasi/login",
    component: _dfdb6ba0,
    name: "administrasi-login"
  }, {
    path: "/administrasi/rekam_medis",
    component: _dedb9600,
    name: "administrasi-rekam_medis"
  }, {
    path: "/administrasi/ruangan_bed",
    component: _cac8d416,
    name: "administrasi-ruangan_bed"
  }, {
    path: "/administrasi/rujukan",
    component: _16e1b891,
    name: "administrasi-rujukan"
  }, {
    path: "/administrator/absensi",
    component: _5540d916,
    name: "administrator-absensi"
  }, {
    path: "/administrator/akun",
    component: _7bd88aeb,
    name: "administrator-akun"
  }, {
    path: "/administrator/bagian_kerja",
    component: _b421e620,
    name: "administrator-bagian_kerja"
  }, {
    path: "/administrator/daftar_pegawai",
    component: _eeaa727e,
    name: "administrator-daftar_pegawai"
  }, {
    path: "/administrator/dashboard",
    component: _1ae1e050,
    name: "administrator-dashboard"
  }, {
    path: "/administrator/data_pasien",
    component: _2c71b7fe,
    name: "administrator-data_pasien"
  }, {
    path: "/administrator/dokter",
    component: _3ffa688d,
    name: "administrator-dokter"
  }, {
    path: "/administrator/inventori",
    component: _83992f0c,
    name: "administrator-inventori"
  }, {
    path: "/administrator/jadwal_dokter",
    component: _45d901bb,
    name: "administrator-jadwal_dokter"
  }, {
    path: "/administrator/jadwal_karyawan",
    component: _1fd7d788,
    name: "administrator-jadwal_karyawan"
  }, {
    path: "/administrator/jam_kerja",
    component: _72754b60,
    name: "administrator-jam_kerja"
  }, {
    path: "/administrator/karyawan",
    component: _3111e2e4,
    name: "administrator-karyawan"
  }, {
    path: "/administrator/laporan_absensi",
    component: _f31da26e,
    name: "administrator-laporan_absensi"
  }, {
    path: "/administrator/lembur",
    component: _a034857a,
    name: "administrator-lembur"
  }, {
    path: "/administrator/login",
    component: _6320a4a5,
    name: "administrator-login"
  }, {
    path: "/administrator/masa_kerja",
    component: _56cdd6dc,
    name: "administrator-masa_kerja"
  }, {
    path: "/administrator/pelayanan_apotek",
    component: _7e4a8d84,
    name: "administrator-pelayanan_apotek"
  }, {
    path: "/administrator/pendapatan",
    component: _69321558,
    name: "administrator-pendapatan"
  }, {
    path: "/administrator/profil_klinik",
    component: _5f09711b,
    name: "administrator-profil_klinik"
  }, {
    path: "/administrator/rekam_medis",
    component: _50f97eaa,
    name: "administrator-rekam_medis"
  }, {
    path: "/administrator/rujukan",
    component: _4ae951bc,
    name: "administrator-rujukan"
  }, {
    path: "/apotek/dashboard",
    component: _e35056fe,
    name: "apotek-dashboard"
  }, {
    path: "/apotek/inventori",
    component: _2406e9ae,
    name: "apotek-inventori"
  }, {
    path: "/apotek/login",
    component: _24d25956,
    name: "apotek-login"
  }, {
    path: "/apotek/obat",
    component: _6ec34df9,
    name: "apotek-obat"
  }, {
    path: "/apotek/penjualan",
    component: _bde44a8e,
    name: "apotek-penjualan"
  }, {
    path: "/apotek/permintaan",
    component: _5e8ac2f0,
    name: "apotek-permintaan"
  }, {
    path: "/apotek/report",
    component: _7f9f180b,
    name: "apotek-report"
  }, {
    path: "/apotek/retur",
    component: _30f3c892,
    name: "apotek-retur"
  }, {
    path: "/dokter/chat",
    component: _66b438bc,
    name: "dokter-chat"
  }, {
    path: "/dokter/daftar_pasien",
    component: _ba625cae,
    name: "dokter-daftar_pasien"
  }, {
    path: "/dokter/dashboard",
    component: _7e572e8c,
    name: "dokter-dashboard"
  }, {
    path: "/dokter/empty",
    component: _1582f5f3,
    name: "dokter-empty"
  }, {
    path: "/dokter/forms",
    component: _51e08856,
    name: "dokter-forms",
    children: [{
      path: "basic-forms",
      component: _29fcea6a,
      name: "dokter-forms-basic-forms"
    }, {
      path: "editors",
      component: _074a67be,
      name: "dokter-forms-editors"
    }, {
      path: "selection-controls",
      component: _25c6b92c,
      name: "dokter-forms-selection-controls"
    }, {
      path: "selects",
      component: _446099f2,
      name: "dokter-forms-selects"
    }, {
      path: "steppers",
      component: _3e1f3c52,
      name: "dokter-forms-steppers"
    }, {
      path: "text-fields",
      component: _1e746bd4,
      name: "dokter-forms-text-fields"
    }]
  }, {
    path: "/dokter/general",
    component: _25216ee4,
    name: "dokter-general",
    children: [{
      path: "alerts",
      component: _1d2b1d25,
      name: "dokter-general-alerts"
    }, {
      path: "avatars",
      component: _b2b019c8,
      name: "dokter-general-avatars"
    }, {
      path: "badges",
      component: _29b54184,
      name: "dokter-general-badges"
    }, {
      path: "buttons",
      component: _261b4ce3,
      name: "dokter-general-buttons"
    }, {
      path: "cards",
      component: _001afe45,
      name: "dokter-general-cards"
    }, {
      path: "carousels",
      component: _77d094f5,
      name: "dokter-general-carousels"
    }, {
      path: "chips",
      component: _0fa54a89,
      name: "dokter-general-chips"
    }, {
      path: "colors",
      component: _10d1b904,
      name: "dokter-general-colors"
    }, {
      path: "dialogs",
      component: _df3856e6,
      name: "dokter-general-dialogs"
    }, {
      path: "icons",
      component: _88549308,
      name: "dokter-general-icons"
    }, {
      path: "pagination",
      component: _fc7464b0,
      name: "dokter-general-pagination"
    }, {
      path: "parallax",
      component: _7d69bab6,
      name: "dokter-general-parallax"
    }, {
      path: "progress",
      component: _5ca57c3b,
      name: "dokter-general-progress"
    }, {
      path: "sliders",
      component: _e8f09ed8,
      name: "dokter-general-sliders"
    }, {
      path: "snackbar",
      component: _431d11da,
      name: "dokter-general-snackbar"
    }, {
      path: "tables",
      component: _510c21f3,
      name: "dokter-general-tables"
    }, {
      path: "tooltips",
      component: _4050e15e,
      name: "dokter-general-tooltips"
    }, {
      path: "typography",
      component: _03e838bd,
      name: "dokter-general-typography"
    }]
  }, {
    path: "/dokter/login",
    component: _03abf20f,
    name: "dokter-login"
  }, {
    path: "/dokter/mail",
    component: _765c0e81,
    name: "dokter-mail",
    children: [{
      path: "0/:uuid?",
      component: _0c9cfeaa,
      name: "dokter-mail-0-uuid"
    }, {
      path: ":mailType?",
      component: _6ff7a302,
      name: "dokter-mail-mailType"
    }]
  }, {
    path: "/dokter/media",
    component: _2c8a85ec,
    name: "dokter-media"
  }, {
    path: "/dokter/pemeriksaan",
    component: _6d3aa68c,
    name: "dokter-pemeriksaan"
  }, {
    path: "/dokter/penunjang",
    component: _3d1fc28c,
    name: "dokter-penunjang"
  }, {
    path: "/dokter/pickers",
    component: _78a9a2cb,
    name: "dokter-pickers",
    children: [{
      path: "datepicker",
      component: _63459987,
      name: "dokter-pickers-datepicker"
    }, {
      path: "timepicker",
      component: _81423c34,
      name: "dokter-pickers-timepicker"
    }]
  }, {
    path: "/dokter/report_pemeriksaan",
    component: _ecaa68fe,
    name: "dokter-report_pemeriksaan"
  }, {
    path: "/dokter/widgets",
    component: _f9d81a56,
    name: "dokter-widgets",
    children: [{
      path: "chart",
      component: _4d06c119,
      name: "dokter-widgets-chart"
    }, {
      path: "list",
      component: _1e09ce33,
      name: "dokter-widgets-list"
    }, {
      path: "social",
      component: _7cceaa42,
      name: "dokter-widgets-social"
    }, {
      path: "statistic",
      component: _4aa9d00b,
      name: "dokter-widgets-statistic"
    }]
  }, {
    path: "/kasir/dashboard",
    component: _08c0eb37,
    name: "kasir-dashboard"
  }, {
    path: "/kasir/data_pasien",
    component: _73786cfa,
    name: "kasir-data_pasien"
  }, {
    path: "/kasir/keuangan",
    component: _85f39dae,
    name: "kasir-keuangan"
  }, {
    path: "/kasir/login",
    component: _708f3b0c,
    name: "kasir-login"
  }, {
    path: "/kasir/rawat_inap",
    component: _4573b506,
    name: "kasir-rawat_inap"
  }, {
    path: "/kasir/report",
    component: _44dc387e,
    name: "kasir-report"
  }, {
    path: "/kepala_apotek/alkes",
    component: _c425abf8,
    name: "kepala_apotek-alkes"
  }, {
    path: "/kepala_apotek/barang_rusak",
    component: _048605c0,
    name: "kepala_apotek-barang_rusak"
  }, {
    path: "/kepala_apotek/dashboard",
    component: _03780604,
    name: "kepala_apotek-dashboard"
  }, {
    path: "/kepala_apotek/inventori",
    component: _92a59f74,
    name: "kepala_apotek-inventori"
  }, {
    path: "/kepala_apotek/login",
    component: _8114774e,
    name: "kepala_apotek-login"
  }, {
    path: "/kepala_apotek/obat",
    component: _1c9d2abc,
    name: "kepala_apotek-obat"
  }, {
    path: "/kepala_apotek/permintaan_penunjang",
    component: _4ca40e30,
    name: "kepala_apotek-permintaan_penunjang"
  }, {
    path: "/kepala_apotek/retur_barangpembelian",
    component: _41e9d4f5,
    name: "kepala_apotek-retur_barangpembelian"
  }, {
    path: "/keuangan/dashboard",
    component: _27101e6f,
    name: "keuangan-dashboard"
  }, {
    path: "/keuangan/login",
    component: _bdae6b78,
    name: "keuangan-login"
  }, {
    path: "/owner/dashboard",
    component: _3a6bc8aa,
    name: "owner-dashboard"
  }, {
    path: "/owner/login",
    component: _e75e6c02,
    name: "owner-login"
  }, {
    path: "/pendaftaran/cetak_antrian",
    component: _0d553faf,
    name: "pendaftaran-cetak_antrian"
  }, {
    path: "/pendaftaran/chat",
    component: _193b25c1,
    name: "pendaftaran-chat"
  }, {
    path: "/pendaftaran/daftar_pasien",
    component: _959c1470,
    name: "pendaftaran-daftar_pasien"
  }, {
    path: "/pendaftaran/daftar_pemeriksaan",
    component: _27bd837a,
    name: "pendaftaran-daftar_pemeriksaan"
  }, {
    path: "/pendaftaran/dashboard",
    component: _43c2bc0a,
    name: "pendaftaran-dashboard"
  }, {
    path: "/pendaftaran/edit_pasien",
    component: _42244c28,
    name: "pendaftaran-edit_pasien"
  }, {
    path: "/pendaftaran/empty",
    component: _5b95f7b4,
    name: "pendaftaran-empty"
  }, {
    path: "/pendaftaran/forms",
    component: _1d22bd96,
    name: "pendaftaran-forms",
    children: [{
      path: "basic-forms",
      component: _fc65aaac,
      name: "pendaftaran-forms-basic-forms"
    }, {
      path: "editors",
      component: _50773380,
      name: "pendaftaran-forms-editors"
    }, {
      path: "selection-controls",
      component: _86bf5f26,
      name: "pendaftaran-forms-selection-controls"
    }, {
      path: "selects",
      component: _cf05fd5e,
      name: "pendaftaran-forms-selects"
    }, {
      path: "steppers",
      component: _1060e658,
      name: "pendaftaran-forms-steppers"
    }, {
      path: "text-fields",
      component: _957fe89a,
      name: "pendaftaran-forms-text-fields"
    }]
  }, {
    path: "/pendaftaran/general",
    component: _0a6e43e2,
    name: "pendaftaran-general",
    children: [{
      path: "alerts",
      component: _4c9ba1a6,
      name: "pendaftaran-general-alerts"
    }, {
      path: "avatars",
      component: _6547febb,
      name: "pendaftaran-general-avatars"
    }, {
      path: "badges",
      component: _1a95e3bf,
      name: "pendaftaran-general-badges"
    }, {
      path: "buttons",
      component: _36894efc,
      name: "pendaftaran-general-buttons"
    }, {
      path: "cards",
      component: _543765a4,
      name: "pendaftaran-general-cards"
    }, {
      path: "carousels",
      component: _0e9c34d4,
      name: "pendaftaran-general-carousels"
    }, {
      path: "chips",
      component: _63c1b1e8,
      name: "pendaftaran-general-chips"
    }, {
      path: "colors",
      component: _2707a7ff,
      name: "pendaftaran-general-colors"
    }, {
      path: "dialogs",
      component: _4f03e02c,
      name: "pendaftaran-general-dialogs"
    }, {
      path: "icons",
      component: _0ff21ddb,
      name: "pendaftaran-general-icons"
    }, {
      path: "pagination",
      component: _7723acae,
      name: "pendaftaran-general-pagination"
    }, {
      path: "parallax",
      component: _52a6ea34,
      name: "pendaftaran-general-parallax"
    }, {
      path: "progress",
      component: _7206e47c,
      name: "pendaftaran-general-progress"
    }, {
      path: "sliders",
      component: _4a27bc33,
      name: "pendaftaran-general-sliders"
    }, {
      path: "snackbar",
      component: _185a4158,
      name: "pendaftaran-general-snackbar"
    }, {
      path: "tables",
      component: _ff06b318,
      name: "pendaftaran-general-tables"
    }, {
      path: "tooltips",
      component: _55b2499f,
      name: "pendaftaran-general-tooltips"
    }, {
      path: "typography",
      component: _469094be,
      name: "pendaftaran-general-typography"
    }]
  }, {
    path: "/pendaftaran/login",
    component: _49bef3d0,
    name: "pendaftaran-login"
  }, {
    path: "/pendaftaran/mail",
    component: _7a1d5ec0,
    name: "pendaftaran-mail",
    children: [{
      path: "0/:uuid?",
      component: _4dcde80a,
      name: "pendaftaran-mail-0-uuid"
    }, {
      path: ":mailType?",
      component: _11169a00,
      name: "pendaftaran-mail-mailType"
    }]
  }, {
    path: "/pendaftaran/media",
    component: _2fcdbecb,
    name: "pendaftaran-media"
  }, {
    path: "/pendaftaran/pickers",
    component: _f3f98f68,
    name: "pendaftaran-pickers",
    children: [{
      path: "datepicker",
      component: _b42414f0,
      name: "pendaftaran-pickers-datepicker"
    }, {
      path: "timepicker",
      component: _02073de7,
      name: "pendaftaran-pickers-timepicker"
    }]
  }, {
    path: "/pendaftaran/widgets",
    component: _df24ef54,
    name: "pendaftaran-widgets",
    children: [{
      path: "chart",
      component: _bdb9af10,
      name: "pendaftaran-widgets-chart"
    }, {
      path: "list",
      component: _a5b90218,
      name: "pendaftaran-widgets-list"
    }, {
      path: "social",
      component: _a781a27a,
      name: "pendaftaran-widgets-social"
    }, {
      path: "statistic",
      component: _3d15202c,
      name: "pendaftaran-widgets-statistic"
    }]
  }, {
    path: "/administrasi/datapasien_ri/detail",
    component: _613da414,
    name: "administrasi-datapasien_ri-detail"
  }, {
    path: "/administrasi/datapasien_ri/tambah",
    component: _b6bc4fa8,
    name: "administrasi-datapasien_ri-tambah"
  }, {
    path: "/administrasi/dokter/edit",
    component: _445a0d34,
    name: "administrasi-dokter-edit"
  }, {
    path: "/administrasi/dokter/tambah",
    component: _67025393,
    name: "administrasi-dokter-tambah"
  }, {
    path: "/administrasi/ruangan_bed/detail",
    component: _512a383e,
    name: "administrasi-ruangan_bed-detail"
  }, {
    path: "/administrasi/rujukan/detail",
    component: _5da86922,
    name: "administrasi-rujukan-detail"
  }, {
    path: "/administrasi/rujukan/proses",
    component: _02ece5e5,
    name: "administrasi-rujukan-proses"
  }, {
    path: "/administrator/absensi/cutiizin",
    component: _7e87a82a,
    name: "administrator-absensi-cutiizin"
  }, {
    path: "/administrator/akun/edit",
    component: _f3fde1fe,
    name: "administrator-akun-edit"
  }, {
    path: "/administrator/akun/tambah",
    component: _4a1fd3c0,
    name: "administrator-akun-tambah"
  }, {
    path: "/administrator/bagian_kerja/edit",
    component: _13bfb85c,
    name: "administrator-bagian_kerja-edit"
  }, {
    path: "/administrator/bagian_kerja/tambah",
    component: _18ac568a,
    name: "administrator-bagian_kerja-tambah"
  }, {
    path: "/administrator/dokter/edit",
    component: _293bf51f,
    name: "administrator-dokter-edit"
  }, {
    path: "/administrator/dokter/tambah",
    component: _c9ec2684,
    name: "administrator-dokter-tambah"
  }, {
    path: "/administrator/jadwal_dokter/edit",
    component: _31ae7e31,
    name: "administrator-jadwal_dokter-edit"
  }, {
    path: "/administrator/jadwal_dokter/tambah",
    component: _50fe7950,
    name: "administrator-jadwal_dokter-tambah"
  }, {
    path: "/administrator/jadwal_karyawan/edit",
    component: _60769790,
    name: "administrator-jadwal_karyawan-edit"
  }, {
    path: "/administrator/jadwal_karyawan/tambah",
    component: _23b49222,
    name: "administrator-jadwal_karyawan-tambah"
  }, {
    path: "/administrator/jam_kerja/edit",
    component: _91802828,
    name: "administrator-jam_kerja-edit"
  }, {
    path: "/administrator/jam_kerja/tambah",
    component: _9029376a,
    name: "administrator-jam_kerja-tambah"
  }, {
    path: "/administrator/karyawan/edit",
    component: _aafbea04,
    name: "administrator-karyawan-edit"
  }, {
    path: "/administrator/karyawan/tambah",
    component: _39bbf246,
    name: "administrator-karyawan-tambah"
  }, {
    path: "/administrator/lembur/edit",
    component: _2cd831a9,
    name: "administrator-lembur-edit"
  }, {
    path: "/administrator/lembur/tambah",
    component: _28892ec8,
    name: "administrator-lembur-tambah"
  }, {
    path: "/administrator/ruangan/data",
    component: _0421d338,
    name: "administrator-ruangan-data"
  }, {
    path: "/administrator/ruangan/tipe",
    component: _15813fb8,
    name: "administrator-ruangan-tipe"
  }, {
    path: "/administrator/rujukan/detail",
    component: _aad81552,
    name: "administrator-rujukan-detail"
  }, {
    path: "/administrator/rujukan/proses",
    component: _4fd8721a,
    name: "administrator-rujukan-proses"
  }, {
    path: "/apotek/obat/tambah",
    component: _455db4d2,
    name: "apotek-obat-tambah"
  }, {
    path: "/apotek/penjualan/detail_penjualan_obat",
    component: _54cd8efe,
    name: "apotek-penjualan-detail_penjualan_obat"
  }, {
    path: "/apotek/penjualan/tambah",
    component: _5c64c012,
    name: "apotek-penjualan-tambah"
  }, {
    path: "/apotek/permintaan/detail_tebus_obat",
    component: _570ddc3c,
    name: "apotek-permintaan-detail_tebus_obat"
  }, {
    path: "/apotek/permintaan/proses",
    component: _9f35b134,
    name: "apotek-permintaan-proses"
  }, {
    path: "/apotek/retur/edit",
    component: _fd8f9696,
    name: "apotek-retur-edit"
  }, {
    path: "/apotek/retur/tambah",
    component: _3616c258,
    name: "apotek-retur-tambah"
  }, {
    path: "/dokter/rujukan/rawat_inap",
    component: _069259e8,
    name: "dokter-rujukan-rawat_inap"
  }, {
    path: "/dokter/rujukan/rs_lain",
    component: _d5135b50,
    name: "dokter-rujukan-rs_lain"
  }, {
    path: "/kasir/data_pasien/detail_pembayaran",
    component: _f9e09c14,
    name: "kasir-data_pasien-detail_pembayaran"
  }, {
    path: "/kasir/data_pasien/riwayat_detail_pembayaran",
    component: _70586c42,
    name: "kasir-data_pasien-riwayat_detail_pembayaran"
  }, {
    path: "/kepala_apotek/alkes/tambah",
    component: _09214bb2,
    name: "kepala_apotek-alkes-tambah"
  }, {
    path: "/kepala_apotek/barang_rusak/tambah",
    component: _d4cc2aea,
    name: "kepala_apotek-barang_rusak-tambah"
  }, {
    path: "/kepala_apotek/gas_medis/distribusi",
    component: _6a3fe208,
    name: "kepala_apotek-gas_medis-distribusi"
  }, {
    path: "/kepala_apotek/gas_medis/penerimaan",
    component: _5a00b5c4,
    name: "kepala_apotek-gas_medis-penerimaan"
  }, {
    path: "/kepala_apotek/gas_medis/pengembalian",
    component: _88887a3a,
    name: "kepala_apotek-gas_medis-pengembalian"
  }, {
    path: "/kepala_apotek/gas_medis/penyerahan",
    component: _0aa542be,
    name: "kepala_apotek-gas_medis-penyerahan"
  }, {
    path: "/kepala_apotek/obat/tambah",
    component: _52bf706f,
    name: "kepala_apotek-obat-tambah"
  }, {
    path: "/kepala_apotek/permintaan_penunjang/proses",
    component: _f51577b4,
    name: "kepala_apotek-permintaan_penunjang-proses"
  }, {
    path: "/kepala_apotek/report/barang_rusak",
    component: _6e185228,
    name: "kepala_apotek-report-barang_rusak"
  }, {
    path: "/kepala_apotek/report/hpp",
    component: _b5034b44,
    name: "kepala_apotek-report-hpp"
  }, {
    path: "/kepala_apotek/report/minimum_stok",
    component: _0f061740,
    name: "kepala_apotek-report-minimum_stok"
  }, {
    path: "/kepala_apotek/report/mutasi_distribusi",
    component: _c28fc1a8,
    name: "kepala_apotek-report-mutasi_distribusi"
  }, {
    path: "/kepala_apotek/report/obat_generik__dannon",
    component: _469b04ec,
    name: "kepala_apotek-report-obat_generik__dannon"
  }, {
    path: "/kepala_apotek/report/obat_narkotika",
    component: _934e654e,
    name: "kepala_apotek-report-obat_narkotika"
  }, {
    path: "/kepala_apotek/report/pembelian",
    component: _31245d61,
    name: "kepala_apotek-report-pembelian"
  }, {
    path: "/kepala_apotek/report/penjualan",
    component: _5d4ed98a,
    name: "kepala_apotek-report-penjualan"
  }, {
    path: "/kepala_apotek/report/retur_pembelian",
    component: _fac329fc,
    name: "kepala_apotek-report-retur_pembelian"
  }, {
    path: "/kepala_apotek/report/retur_penjualan",
    component: _a26e31aa,
    name: "kepala_apotek-report-retur_penjualan"
  }, {
    path: "/kepala_apotek/report/selisih_stok",
    component: _be859756,
    name: "kepala_apotek-report-selisih_stok"
  }, {
    path: "/kepala_apotek/retur_barangpembelian/tambah",
    component: _51efe554,
    name: "kepala_apotek-retur_barangpembelian-tambah"
  }, {
    path: "/keuangan/pemasukan/farmasi_penjualan_luar",
    component: _52d5e29f,
    name: "keuangan-pemasukan-farmasi_penjualan_luar"
  }, {
    path: "/keuangan/pemasukan/rawat_inap",
    component: _4fa6fea2,
    name: "keuangan-pemasukan-rawat_inap"
  }, {
    path: "/keuangan/pemasukan/rawat_jalan",
    component: _a74e5448,
    name: "keuangan-pemasukan-rawat_jalan"
  }, {
    path: "/keuangan/pemasukan/transaksi",
    component: _08dcdb12,
    name: "keuangan-pemasukan-transaksi"
  }, {
    path: "/keuangan/pemasukan/transaksi_lain",
    component: _489bd3e9,
    name: "keuangan-pemasukan-transaksi_lain"
  }, {
    path: "/keuangan/pengeluaran/dokter",
    component: _b13606b0,
    name: "keuangan-pengeluaran-dokter"
  }, {
    path: "/keuangan/pengeluaran/karyawan",
    component: _1e8d07e9,
    name: "keuangan-pengeluaran-karyawan"
  }, {
    path: "/keuangan/pengeluaran/transaksi_lain",
    component: _353975f8,
    name: "keuangan-pengeluaran-transaksi_lain"
  }, {
    path: "/owner/farmasi/obat_alkes",
    component: _1f1b63a8,
    name: "owner-farmasi-obat_alkes"
  }, {
    path: "/owner/keuangan/dokter",
    component: _b666b54a,
    name: "owner-keuangan-dokter"
  }, {
    path: "/owner/keuangan/farmasi_luar",
    component: _23b7f7e4,
    name: "owner-keuangan-farmasi_luar"
  }, {
    path: "/owner/keuangan/karyawan",
    component: _60ad4fdc,
    name: "owner-keuangan-karyawan"
  }, {
    path: "/owner/keuangan/obat_alkes",
    component: _515e3eb2,
    name: "owner-keuangan-obat_alkes"
  }, {
    path: "/owner/keuangan/transaksi",
    component: _7000a210,
    name: "owner-keuangan-transaksi"
  }, {
    path: "/owner/rm/rm",
    component: _72c4c550,
    name: "owner-rm-rm"
  }, {
    path: "/pendaftaran/daftar_pasien/detail_pasien",
    component: _58106b94,
    name: "pendaftaran-daftar_pasien-detail_pasien"
  }, {
    path: "/pendaftaran/daftar_pasien/edit",
    component: _5e905484,
    name: "pendaftaran-daftar_pasien-edit"
  }, {
    path: "/pendaftaran/daftar_pemeriksaan/edit",
    component: _33396edc,
    name: "pendaftaran-daftar_pemeriksaan-edit"
  }, {
    path: "/pendaftaran/daftar_pemeriksaan/tambah",
    component: _a8aba11e,
    name: "pendaftaran-daftar_pemeriksaan-tambah"
  }, {
    path: "/pendaftaran/pendaftaran_pasien/pasien_baru",
    component: _242b356b,
    name: "pendaftaran-pendaftaran_pasien-pasien_baru"
  }, {
    path: "/pendaftaran/pendaftaran_pasien/pasien_lama",
    component: _2954e4f2,
    name: "pendaftaran-pendaftaran_pasien-pasien_lama"
  }, {
    path: "/administrator/ruangan/data/edit",
    component: _6711edd8,
    name: "administrator-ruangan-data-edit"
  }, {
    path: "/administrator/ruangan/data/tambah",
    component: _5bcfd773,
    name: "administrator-ruangan-data-tambah"
  }, {
    path: "/administrator/ruangan/tipe/edit",
    component: _d98fe6d8,
    name: "administrator-ruangan-tipe-edit"
  }, {
    path: "/administrator/ruangan/tipe/tambah",
    component: _765dfaf3,
    name: "administrator-ruangan-tipe-tambah"
  }, {
    path: "/kepala_apotek/gas_medis/distribusi/tambah",
    component: _6cd9142f,
    name: "kepala_apotek-gas_medis-distribusi-tambah"
  }, {
    path: "/kepala_apotek/gas_medis/penerimaan/tambah",
    component: _68ac424d,
    name: "kepala_apotek-gas_medis-penerimaan-tambah"
  }, {
    path: "/kepala_apotek/gas_medis/pengembalian/tambah",
    component: _d11845b0,
    name: "kepala_apotek-gas_medis-pengembalian-tambah"
  }, {
    path: "/kepala_apotek/gas_medis/penyerahan/tambah",
    component: _36b5b92a,
    name: "kepala_apotek-gas_medis-penyerahan-tambah"
  }, {
    path: "/keuangan/pengeluaran/farmasi/alkes",
    component: _9ded3048,
    name: "keuangan-pengeluaran-farmasi-alkes"
  }, {
    path: "/keuangan/pengeluaran/farmasi/obat",
    component: _eed45c38,
    name: "keuangan-pengeluaran-farmasi-obat"
  }, {
    path: "/keuangan/pengeluaran/farmasi/tabung_gas",
    component: _0b4c5e37,
    name: "keuangan-pengeluaran-farmasi-tabung_gas"
  }, {
    path: "/",
    component: _c20cfa0e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
