const Menu = [
    {header: 'Admin'},
    {
      title: 'Dashboard',
      group: 'dashboard',
      icon: 'dashboard',
      name: 'Dashboard',
      href: '/keuangan/dashboard'
    },
    {header: 'Laporan Pengeluaran'},
    {
      title: 'Penggajian Karyawan',
      group: 'karyawan',
      name: 'Penggajian',
      icon: 'person_pin',
      href: '/keuangan/pengeluaran/karyawan'
    },
    {
      title: 'Pembayaran Dokter',
      group: 'dokter',
      name: 'Pembayaran Dokter',
      icon: 'fa fa-user-md',
      href: '/keuangan/pengeluaran/dokter'
    },
    {
      title: 'Pembelian Farmasi',
      group: 'farmasi',
      name: 'Pembelian Farmasi',
      icon: 'fa fa-medkit',
      items: [
        {name: 'Alkes', title: 'Alkes', href: '/keuangan/pengeluaran/farmasi/alkes'},
        {name: 'Obat', title: 'Obat', href: '/keuangan/pengeluaran/farmasi/obat'},
        {name: 'Tabung Gas Medis', title: 'Tabung Gas Medis', href: '/keuangan/pengeluaran/farmasi/tabung_gas'},
      ]
    },
    {
      title: 'Pembelian Lainnya',
      group: 'lainnya',
      name: 'Pembelian Lainnya',
      icon: 'fa fa-money',
      href: '/keuangan/pengeluaran/transaksi_lain'
    },
    {header: 'Laporan Pemasukan'},
    {
      title: 'Rawat Jalan',
      group: 'Rawat Jalan',
      name: 'Rawat Jalan',
      icon: 'fa fa-heartbeat',
      href: '/keuangan/pemasukan/rawat_jalan'
    },
    {
      title: 'Rawat Inap',
      group: 'Rawat Inap',
      name: 'Rawat Inap',
      icon: 'fa fa-heartbeat',
      href: '/keuangan/pemasukan/rawat_inap'
    },
    {
      title: 'Transaksi Klinik',
      group: 'Absensi karyawan',
      name: 'Absensi Karyawan',
      icon: 'fa fa-hospital-o',
      href: '/keuangan/pemasukan/transaksi'
    },
    {
      title: 'Transaksi Penjualan Luar',
      group: 'medis',
      name: 'Medis',
      icon: 'fa fa-medkit',
      href: '/keuangan/pemasukan/farmasi_penjualan_luar'
    },
    {
      title: 'Transaksi Penjualan Lainnya',
      group: 'lainnya',
      name: 'Transaksi Lainnya',
      icon: 'fa fa-money',
      href: '/keuangan/pemasukan/transaksi_lain'
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
  