import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../Productos/getFetch'
import ItemCount from '../ItemCount/itemCount'
import ItemList from './ItemList'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

  useEffect( ()=> {
    if (categoriaId) {
      getFetch()
      .then(resp => setProductos(resp.filter(prod => prod.category === categoriaId)))
      .catch(err => console.log(err) )
      .finally(()=> setLoading(false) )
    } else {
      getFetch()
      .then(resp => setProductos(resp) )
      .catch(err => console.log(err) )
      .finally(()=> setLoading(false) )
    }
  },[categoriaId])

  const onAdd = () => {
    console.log("Gracias por su compra")
  };

  return (
    <div>
      {
        loading ? 
          <h1>Loading...</h1>
          :
          <ItemList productos={productos} />
      }
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer