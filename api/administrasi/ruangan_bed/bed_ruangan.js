const Items =  [
    {
      'nama_ruangan': 'Paviliun',
      'bed': '8',
    },
    {
        'nama_ruangan': 'Melati',
        'bed': '18',
      },
      {
        'nama_ruangan': 'Anggrek',
        'bed': '10',
      },
      {
        'nama_ruangan': 'Kamboja',
        'bed': '5',
      },
      {
        'nama_ruangan': 'Jatayu',
        'bed': '7',
      },
  ];
  
  const getUserById = (nama_ruangan) => {
    return (nama_ruangan === undefined) ? Items[0] : Items.find(x => x.nama_ruangan === nama_ruangan);
  };
  
  const getUser = (limit) => {
    return (limit) ? Items.slice(0, limit) : Items;
  };
  
  export {
    Items,
    getUser,
    getUserById
  };
  