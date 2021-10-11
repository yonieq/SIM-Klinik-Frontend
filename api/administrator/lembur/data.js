const Items = [
  {
    'uuid': '65a6eb21-67b5-45c3-9af7-faca2d9b60d4',
    'no': '1',
    'name': 'Dessie purwono',
    'bagian_kerja': 'apotek',
    'tanggal': '12-10-2021',
    'jam': '2'
  },
  {
    'uuid': '28d9f265-74d7-4f85-83d4-6a21fca57dcf',
    'no': '2',
    'name': 'Jakayla',
    'bagian_kerja': 'apotek', 'tanggal': '12-10-2021',
    'jam': '2'
  },
  {
    'uuid': '6a03248b-1752-4332-a3a9-7108528cc9d3',
    'no': '4',
    'name': 'Celestine',
    'bagian_kerja': 'kasir', 'tanggal': '12-10-2021',
    'jam': '2'
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
    'bagian_kerja': 'pendaftaran', 'tanggal': '12-10-2021',
    'jam': '2'
  },
  {
    'uuid': '7d910620-84e1-49fc-951e-d375587b8189',
    'no': '9',
    'name': 'Jackeline',
    'bagian_kerja': 'administrasi', 'tanggal': '12-10-2021',
    'jam': '2'
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
