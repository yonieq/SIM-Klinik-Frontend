const Items = [
  {
    'uuid': '36a1ead7-57a0-4275-8a21-956194ab7cdf',
    'no': '7',
    'name': 'Solon',
    'bagian_kerja': 'dokter',
    'jobTitle': 'Web Developer',
    'email': 'Solon.Bauch4_Rath@hotmail.com',
    'username': 'Solon.Bauch4',
    'phone': '789-914-4904 x173',
    'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/spacewood_/128.jpg',
    'spesialis': 'Poli Umum',
    'praktek': 'Sabtu',
    'address': {
      'street': '8153 Favian Walk',
      'suite': 'Apt. 495',
      'city': 'East Preston',
      'state': 'Idaho',
      'country': 'Iceland',
      'zipcode': '24555',
      'geo': {
        'lat': '-42.5691',
        'lng': '-2.5791'
      }
    }
  },
  {
    'uuid': 'afdb5033-5bcc-4cec-b932-353a83410b44',
    'no': '10',
    'name': 'Jamey',
    'bagian_kerja': 'dokter',
    'jobTitle': 'PHP Developer',
    'email': 'Jamey_Grant_Cruickshank73@gmail.com',
    'username': 'Jamey_Grant',
    'phone': '545-939-2404 x32373',
    'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/mikebeecham/128.jpg',
    'spesialis': 'Poli Umum',
    'praktek': 'Kamis',
    'address': {
      'street': '38372 Mante Glen',
      'suite': 'Suite 090',
      'city': 'Robertsside',
      'state': 'Texas',
      'country': 'Equatorial Guinea',
      'zipcode': '86558-7214',
      'geo': {
        'lat': '-55.0222',
        'lng': '-100.5977'
      }
    }
  }
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
