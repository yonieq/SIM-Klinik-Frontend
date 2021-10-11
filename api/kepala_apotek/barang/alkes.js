const Items = [
    {
        'nama': 'Suntik',
        'stok': '900 pcs',
    },
    {
        'nama': 'Masker',
        'stok': '900 pcs',
    }
];

const getUserById = (nama) => {
    return (nama === undefined) ? Items[0] : Items.find(x => x.nama === nama);
};

const getUser = (limit) => {
    return (limit) ? Items.slice(0, limit) : Items;
};

export {
    Items,
    getUser,
    getUserById
};