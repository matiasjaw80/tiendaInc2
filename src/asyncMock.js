const products = [
    {
        id: '1',
        name: 'Abrigo 01',
        description:'Campera Tubo Azul Invierno',
        img: '/img/abrigos/01.jpg',
        category: 'abrigos',
        price: 1000,
        stock: 10,
    },
    {
        id: '2',
        name: 'Abrigo 02',
        description:'Campera Tela Azul',
        img: '/img/abrigos/02.jpg',
        category: 'abrigos',
        price: 1000,
        stock: 4,
    },
    {
        id: '3',
        name: 'Abrigo 03',
        description:'Campera Formal Gris Invierno',
        img: '/img/abrigos/03.jpg',
        category: 'abrigos',
        price: 1000,
        stock: 5,
    },
    {
        id: '4',
        name: 'Abrigo 04',
        description:'Campera Tubo Negra Invierno',
        img: '/img/abrigos/04.jpg',
        category: 'abrigos',
        price: 1000,
        stock: 8,
    },
    {
        id: '5',
        name: 'Abrigo 05',
        description:'Buzo Con Capucha',
        img: '/img/abrigos/05.jpg',
        category: 'abrigos',
        price: 1000,
        stock: 6,
    },
    {
        id: '6',
        name: 'Camiseta 01',
        description:'Remera Basica Lisa Azul',
        img: '/img/remeras/01.jpg',
        category: 'remeras',
        price: 1000,
        stock: 4,
    },
    {
        id: '7',
        name: 'Camiseta 02',
        description:'Remera Blanca Estampada',
        img: '/img/remeras/02.jpg',
        category: 'remeras',
        price: 1000,
        stock: 12,
    },
    {
        id: '8',
        name: 'Camiseta 03',
        description:'Remera Blanca Estampada 2',
        img: '/img/remeras/03.jpg',
        category: 'remeras',
        price: 1000,
        stock: 3,
    },
    {
        id: '9',
        name: 'Camiseta 04',
        description:'Remera Basica Roja',
        img: '/img/remeras/04.jpg',
        category: 'remeras',
        price: 1000,
        stock: 2,
    },
    {
        id: '10',
        name: 'Camiseta 05',
        description:'Remera Basica Gris',
        img: '/img/remeras/05.jpg',
        category: 'remeras',
        price: 1000,
        stock: 3,
    },
    {
        id: '11',
        name: 'Camiseta 06',
        description:'Remera Basica Roja 2',
        img: '/img/remeras/06.jpg',
        category: 'remeras',
        price: 1000,
        stock: 13,
    },
    {
        id: '12',
        name: 'Camiseta 07',
        description:'Remera Basica Verde',
        img: '/img/remeras/07.jpg',
        category: 'remeras',
        price: 1000,
        stock: 4,
    },
    {
        id: '13',
        name: 'Camiseta 08',
        description:'Remera Basica Celeste',
        img: '/img/remeras/08.jpg',
        category: 'remeras',
        price: 1000,
        stock: 1,
    },
    {
        id: '14',
        name: 'Pantalón 01',
        description:'Pantalon Vestir Beige',
        img: '/img/pantalones/01.jpg',
        category: 'pantalones',
        price: 1000,
        stock: 8,
    },
    {
        id: '15',
        name: 'Pantalón 02',
        description:'Pantalon Vestir Blanca',
        img: '/img/pantalones/02.jpg',
        category: 'pantalones',
        price: 1000,
        stock: 6,
    },
    {
        id: '16',
        name: 'Pantalón 03',
        description:'Pantalon Vestir Negro',
        img: '/img/pantalones/03.jpg',
        category: 'pantalones',
        price: 1000,
        stock: 11,
    },
    {
        id: '17',
        name: 'Pantalón 04',
        description:'Pantalon Jean Negro',
        img: '/img/pantalones/04.jpg',
        category: 'pantalones',
        price: 1000,
        stock: 6,
    },
    {
        id: '18',
        name: 'Pantalón 05',
        description:'Pantalon Vestir Gris',
        img: '/img/pantalones/05.jpg',
        category: 'pantalones',
        price: 1000,
        stock: 8,
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}