const Menu = [

    {header: 'Administrator'},

    {
      title: 'Dashboard',
      group: 'dashboard',
      icon: 'dashboard',
      name: 'Dashboard',
      href: '/administrator/dashboard'
    },

    {header: 'Master Data'},
    
    {
      title: 'Ruangan',
      group: 'ruangan',
      name: 'Data Ruangan',
      icon: 'room_preferences',
      items: [
        {name: 'Tipe Ruangan', title: 'Tipe Ruangan', href: '/administrator/ruangan/tipe'},
        {name: 'Data Ruangan', title: 'Data Ruangan', href: '/administrator/ruangan/data'},
      ]
    },
    {
      title: 'Bagian Kerja & Gaji',
      group: 'bagian_kerja',
      name: 'Bagian Kerja & Gaji',
      icon: 'people',
      href: '/administrator/bagian_kerja'
    },
    {
      title: 'Profil Klinik',
      group: 'profil_klinik',
      name: 'Profil Klinik',
      icon: 'location_city',
      href: '/administrator/profil_klinik'
    },
    {
      title: 'Jam Kerja',
      group: 'jam_kerja',
      name: 'Jam Kerja ',
      icon: 'schedule',
      href: '/administrator/jam_kerja'
    },

    {header: 'Menejemen Data'},
    {
      title: 'Data Karyawan & Dokter',
      group: 'karyawan',
      name: 'Data Karyawan dan Dokter',
      icon: 'person_pin',
      href: '/administrator/karyawan'
    },
    {
      title: 'Akun Karyawan & Dokter',
      group: 'akun',
      name: 'Data Akun Karyawan & Dokter',
      icon: 'manage_accounts',
      href: '/administrator/akun'
    },
    {
      title: 'Jadwal Dokter',
      group: 'jadwal_dokter',
      name: 'Jadwal Dokter',
      icon: 'date_range',
      href: '/administrator/jadwal_dokter'
    },
    {
      title: 'Jadwal Kerja Karyawan',
      group: 'jadwal_karyawan',
      name: 'Jadwal Kerja Karyawan',
      icon: 'date_range',
      href: '/administrator/jadwal_karyawan'
    },
    {
      title: 'Absensi',
      group: 'absensi',
      name: 'Absensi',
      icon: 'date_range',
      href: '/administrator/absensi'
    },
    {
      title: 'Lembur',
      group: 'lembur',
      name: 'Lembur',
      icon: 'timelapse',
      href: '/administrator/lembur'
    },
    // {
    //   title: 'Penggajian',
    //   group: 'penggajian',
    //   name: 'Penggajian',
    //   icon: 'request_quote',
    //   href: '/administrator/penggajian'
    // },

    {header: 'Laporan'},
    {
      title: 'Rekpak Absensi',
      group: 'laporan_absensi',
      name: 'Rekap Absensi',
      icon: 'fact_check',
      href: '/administrator/laporan_absensi'
    },
    {
      title: 'Daftar Pegawai',
      group: 'daftar_pegawai',
      name: 'Daftar Pegawai',
      icon: 'summarize',
      href: '/administrator/daftar_pegawai'
    },
    // {
    //   title: 'Daftar Riwayat ',
    //   group: 'daftar_riwayat',
    //   name: 'Daftar Riwayat ',
    //   icon: 'summarize',
    //   href: '/administrator/daftar_riwayat'
    // }, 
    {
      title: 'Masa Kerja Pegawai ',
      group: 'masa_kerja',
      name: 'Masa Kerja Pegawai ',
      icon: 'summarize',
      href: '/administrator/masa_kerja'
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
  