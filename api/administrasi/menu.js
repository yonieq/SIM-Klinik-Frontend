const Menu = [
    {header: 'Administrasi'},
    {
      title: 'Dashboard',
      group: 'dashboard',
      icon: 'dashboard',
      name: 'Dashboard',
      href: '/administrasi/dashboard'
    },
    {
      title: 'Rujukan',
      group: 'rujukan',
      name: 'rujukan',
      icon: 'fa fa-envelope-open-o',
      href: '/administrasi/rujukan'

    },
    {
      title: 'Rawat Inap',
      group: 'ri',
      name: 'ri',
      icon: 'fa fa-heartbeat',
      href: '/administrasi/datapasien_ri',
    },
    {header: 'Kelola Ruangan'},
    {
      title: 'Ruangan & Bed',
      group: 'ruangan',
      name: 'Data Ruangan',
      icon: 'room_preferences',
      href: '/administrasi/ruangan_bed',
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
  