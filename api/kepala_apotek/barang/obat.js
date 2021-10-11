const Items = [
    {
        'nama_obat': 'Amoxcilin',
        'jenis_obat': 'Generik',
        'stok': '900 pcs',
    },
    {
        'nama_obat': 'Amoxcilin',
        'jenis_obat': 'Generik',
        'stok': '900 pcs',
    },
    {
        'nama_obat': 'Amoxcilin',
        'jenis_obat': 'Generik',
        'stok': '900 pcs',
    },
    {
        'nama_obat': 'Amoxcilin',
        'jenis_obat': 'Generik',
        'stok': '900 pcs',
    },
    {
        'nama_obat': 'Amoxcilin',
        'jenis_obat': 'Generik',
        'stok': '900 pcs',
    },
];

const getUserById = (nama_obat) => {
    return (nama_obat === undefined) ? Items[0] : Items.find(x => x.nama_obat === nama_obat);
};

const getUser = (limit) => {
    return (limit) ? Items.slice(0, limit) : Items;
};

export {
    Items,
    getUser,
    getUserById
};