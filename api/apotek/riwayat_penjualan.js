const Items =  [
   {
     'no_transaksi':'TRS-001',
     'tanggal':'11-10-2021',
     'total':'35000',
   },{
    'no_transaksi':'TRS-002',
    'tanggal':'11-10-2021',
    'total':'45000',
  },{
    'no_transaksi':'TRS-003',
    'tanggal':'11-10-2021',
    'total':'30000',
  },
  ];
  
  const getUserById = (uuid) => {
    return (uuid === undefined) ? Items[0] : Items.find(x => x.uuid === uuid);
  };
  
  const getUser = (limit) => {
    return (limit) ? Items.slice(0, limit) : Items;
  };
  
  export {
    Items,
    getUser,
    getUserById
  };
  