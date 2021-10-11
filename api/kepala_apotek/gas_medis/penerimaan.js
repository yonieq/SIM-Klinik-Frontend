const Items = [
    {
        'nama': 'Dono',
        'jumlah': '10',
    },
    {
        'nama': 'Indro',
        'jumlah': '19',
    },
    {
        'nama': 'Kasino',
        'jumlah': '12',
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