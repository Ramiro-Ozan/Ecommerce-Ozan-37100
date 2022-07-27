import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../Productos/getFetch'
import ItemCount from '../ItemCount/itemCount'
import ItemList from './ItemList'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]) /*Hook de estado, guardando la informacion de los productos.*/
  const [loading, setLoading] = useState(true) /*Proyectando el loading en pantalla.*/

  const {categoriaId} = useParams() /*Hook llamando al objeto*/

  useEffect( ()=> { 
    if (categoriaId) { 
      getFetch() /*Simulando el mock*/
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
    /*Todavia indeciso en que es lo que quiero con esto*/
  };

  return (
    <div>
      {
        loading ? 
          <h1>Loading...</h1> /*Utilizando intercambiabilidad*/
          :
          <ItemList productos={productos} />
      }
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer