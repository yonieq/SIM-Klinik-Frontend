const Items = [
    {
        'nama': 'Poli Gigi',
        'jumlah': '10',
    },
    {
        'nama': 'Melati',
        'jumlah': '10',
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