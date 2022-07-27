let productos = [
    {id: '1', category:'shirts', name:'White cotton shirt', stock: 5, price: 200, pic:'import from images'},
    {id: '2', category:'shirts', name:'Blue denim shirt', stock: 5, price: 200, pic:'import from images'},
    {id: '3', category:'shirts', name:'Hooded check overshirt', price: 200, pic:'import from images'},
    {id: '4', category:'perfume', name:'London perfume', stock: 5, price: 200, pic:'import from images'},
    {id: '5', category:'perfume', name:'Lisboa perfume', stock: 5, price: 200, pic:'import from images'},
    {id: '6', category:'boots', name:'Trak sole leatherboots', stock: 5, price: 200, pic:'import from images'},
    {id: '7', category:'boots', name:'Sporty ankle boot', stock: 5, price: 200, pic:'import from images'},
]

export const getFetch = (data) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{ /*Simulacion de un mock*/
            if (data) {
                resolve(productos.find(producto => producto.id === data))
            } else {
                resolve(productos)
            }
        }, 1000)
    })
}