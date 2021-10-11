const Menu = [
  { header: 'Owner' },
  {
    title: 'Dashboard',
    group: 'dashboard',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/owner/dashboard'
  },
  { header: 'Laporan Keuangan & Kasir' },
  {
    title: 'Penggajian Karyawan',
    group: 'Penggajian Karyawan',
    icon: 'fa fa-user-circle-o',
    name: 'Penggajian Karyawan',
    href: '/owner/keuangan/karyawan'
  },
  {
    title: 'Pembayaran Dokter',
    group: 'Pembayaran Dokter',
    icon: 'fa fa-user-md',
    name: 'Pembayaran Dokter',
    href: '/owner/keuangan/dokter'
  },
  {
    title: 'Pembelian Obat & Alkes',
    group: 'Pembelian Obat & Alkes',
    icon: 'fa fa-medkit',
    name: 'Pembelian Obat & Alkes',
    href: '/owner/keuangan/obat_alkes'
  },
  {
    title: 'Transaksi Klinik',
    group: 'Transaksi Klinik',
    icon: 'fa fa-hospital-o',
    name: 'Transaksi Klinik',
    href: '/owner/keuangan/transaksi'
  },
  {
    title: 'Penjualan Luar Farmasi',
    group: 'Penjualan Luar Farmasi',
    icon: 'fa fa-medkit',
    name: 'Penjualan Luar Farmasi',
    href: '/owner/keuangan/farmasi_luar'
  },
  { header: 'Laporan Rekam Medik' },
  {
    title: 'Rekamedik',
    group: 'Rekamedik',
    icon: 'fa fa-heartbeat',
    name: 'Rekamedik',
    href: '/owner/rm/rm'
  },
  { header: 'Laporan Farmasi & Alkes' },
  {
    title: 'Stok Obat & Alkes',
    group: 'Stok Obat & Alkes',
    icon: 'fa fa-medkit',
    name: 'Stok Obat & Alkes',
    href: '/owner/farmasi/obat_alkes'
  }
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
