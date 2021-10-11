const Menu = [
  {header: 'Kepala Apotek'},
  {
    title: 'Dashboard',
    group: 'dashboard',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/kepala_apotek/dashboard'
  },
  {header: 'Data Master'},
  {
    title: 'Data Obat & Alkes',
    group: 'data obat & alkes',
    icon: 'medical_services',
    name: 'Data Obat & Alkes',
    // href: '/kepala_apotek/obat'
    items: [
      {name: 'Obat', title: 'Obat', href: '/kepala_apotek/obat'},
      {name: 'Alkes', title: 'Alkes', href: '/kepala_apotek/alkes'},
    ]
  },
  {
    title: 'Barang Rusak',
    group: 'data barang rusak',
    icon: 'medical_services',
    name: 'Barang Rusak',
    href: '/kepala_apotek/barang_rusak'
  },
  {header: 'Manajemen & Pengelolaan'},
  {
    title: 'Permintaan Penunjang',
    group: 'Permintaan Penunjang',
    icon: 'medical_services',
    name: 'Permintaan Penunjang',
    href: '/kepala_apotek/permintaan_penunjang'
  },
  {
    title: 'Pengembalian Pembelian',
    group: 'Pengembalian Pembelian',
    icon: 'medical_services',
    name: 'Pengembalian Pembelian',
    href: '/kepala_apotek/retur_barangpembelian'
  },
  {
    title: 'Tabung Gas Medis',
    group: 'Tabung Gas Medis',
    icon: 'medical_services',
    name: 'Tabung Gas Medis',
    items: [
      {name: 'Penerimaan', title: 'Penerimaan', href: '/kepala_apotek/gas_medis/penerimaan'},
      {name: 'Distribusi', title: 'Distribusi', href: '/kepala_apotek/gas_medis/distribusi'},
      {name: 'Pengembalian Ke Gudang', title: 'Pengembalian Ke Gudang', href: '/kepala_apotek/gas_medis/pengembalian'},
      {name: 'Penyerahan Ke Suplier', title: 'Penyerahan Ke Suplier', href: '/kepala_apotek/gas_medis/penyerahan'},
    ]
  },

  {header: 'Menu Laporan'},
  {
    title: 'Laporan',
    group: 'report',
    icon: 'fact_check',
    name: 'Report',
    items: [
      {name: 'Pembelian', title: 'Pembelian', href: '/kepala_apotek/report/pembelian'},
      {name: 'Retur Pembelian', title: 'Retur Pembelian', href: '/kepala_apotek/report/retur_pembelian'},
      {name: 'Penjualan', title: 'Penjualan', href: '/kepala_apotek/report/penjualan'},
      {name: 'Retur Penjualan', title: 'Retur Penjualan', href: '/kepala_apotek/report/retur_penjualan'},
      {name: 'Penjualan Obat Generik & Non Generik', title: 'Penjualan Obat Generik & Non Generik', href: '/kepala_apotek/report/obat_generik_dannon'},
      {name: 'Selisih Stok', title: 'Selisih Stok', href: '/kepala_apotek/report/seilisih_stok'},
      {name: 'HPP', title: 'HPP', href: '/kepala_apotek/report/hpp'},
      {name: 'Pembelian Per Supplier', title: 'Pembelian Per Supplier', href: '/kepala_apotek/report/pembelian'},
      {name: 'Mutasi & Distribusi', title: 'Mutasi & Distribusi', href: '/kepala_apotek/report/mutasi_distribusi'},
      {name: 'Minimum Stok', title: 'Minimum Stok', href: '/kepala_apotek/report/minimum_stok'},
      {name: 'Barang Rusak', title: 'Barang Rusak', href: '/kepala_apotek/report/barang_rusak'},
      {name: 'Obat Psikotropika & Narkotika', title: 'Obat Psikotropika & Narkotika', href: '/kepala_apotek/report/obat_narkotika'},

    ]
  },
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
