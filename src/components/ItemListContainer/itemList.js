let productos = [
    {id: 1, category:'shirt', name:'white cotton shirt', price: 200, pic:'import from images'},
    {id: 2, category:'shirt', name:'blue denim shirt', price: 200, pic:'import from images'},
    {id: 3, category:'shirt', name:'shirt', price: 200, pic:'import from images'},
    {id: 4, category:'shirt', name:'pink cotton hat', price: 200, pic:'import from images'},
    {id: 5, category:'shirt', name:'white hat', price: 200, pic:'import from images'},
    {id: 6, category:'shirt', name:'trak sole leatherboots', price: 200, pic:'import from images'},
    {id: 7, category:'shirt', name:'sporty ankle boot', price: 200, pic:'import from images'},
]

export const getFetch = ()=> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve(productos)
        },1500)
    })
};
