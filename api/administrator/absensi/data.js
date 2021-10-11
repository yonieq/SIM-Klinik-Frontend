const Items =  [
  {
    'uuid': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
    'no': '1',
    'name': 'Dessie purwono',
    'bagian_kerja':'apotek',
    'status':'hadir',
    'hadir':'23',
    'izin':'2',
    'cuti':'0',
    'alpa':'0'
    },
  {
    'uuid': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
    'no': '2',
    'name': 'Jakayla',
    'bagian_kerja':'apotek',
    'status':'hadir',
    'hadir':'23',
    'izin':'2',
    'cuti':'0',
    'alpa':'0'
  },
  {
    'uuid': '14ddae1e-986d-42f4-8d17-46a02d469b2b',
    'no': '3',
    'name': 'Hobart',
    'status':'hadir',
    'bagian_kerja':'apotek',
    'hadir':'23',
    'izin':'2',
    'cuti':'0',
    'alpa':'0'
  },
  {
    'uuid': '6a03248b-1752-4332-a3a9-7108528cc9d3',
    'no': '4',
    'name': 'Celestine',
    'status':'hadir',
    'bagian_kerja':'kasir',
    'hadir':'23',
    'izin':'2',
    'cuti':'0',
    'alpa':'0'
  },
  {
    'uuid': 'ee272550-36e8-4fe2-889d-c1ee701c5863',
    'no': '5',
    'name': 'Hortense',
    'status':'hadir',
    'bagian_kerja':'keuangan',
    'hadir':'23',
    'izin':'2',
    'cuti':'0',
    'alpa':'0'
  },
  {
    'uuid': '77f4b102-9df5-43ba-966a-6f816806c5e2',
    'no': '6',
    'name': 'Pat',
    'status':'hadir',
    'bagian_kerja':'kepala apotek',
    'hadir':'23',
    'izin':'2',
    'cuti':'0',
    'alpa':'0'
  },
  // {
  //   'uuid': '36a1ead7-57a0-4275-8a21-956194ab7cdf',
  //   'no': '7',
  //   'name': 'Solon',
  //   'status':'hadir',
  //   'bagian_kerja':'dokter',
  // },
  {
    'uuid': 'b5899bef-d01e-42d8-af2d-edfb16b6b21e',
    'no': '8',
    'name': 'Calista',
    'status':'hadir',
    'bagian_kerja':'pendaftaran',
    'hadir':'23',
    'izin':'2',
    'cuti':'0',
    'alpa':'0'
  },
  {
    'uuid': '7d910620-84e1-49fc-951e-d375587b8189',
    'no': '9',
    'name': 'Jackeline',
    'status':'hadir',
    'bagian_kerja':'administrasi',
    'hadir':'23',
    'izin':'2',
    'cuti':'0',
    'alpa':'0'
  },
  // {
  //   'uuid': 'afdb5033-5bcc-4cec-b932-353a83410b44',
  //   'no': '10',
  //   'name': 'Jamey',
  //   'status':'hadir',
  //   'bagian_kerja':'dokter',
  // }
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
