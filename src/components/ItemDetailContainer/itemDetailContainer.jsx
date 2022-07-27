import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFetch } from '../../Productos/getFetch'
import ItemDetail from '../ItemDetailContainer/itemDetail'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]) /*Guardando la informacion*/
  const [loading, setLoading] = useState(true) /*Proyectando el loading en pantalla.*/

  const {detalledId} = useParams() /*Hook llamando al id*/

  useEffect( () => {
    getFetch(detalledId) /*Simulando un Mock, llamando al producto por id*/
    .then(resp => setProducto(resp))
    .finally(()=> setLoading(false) )
  }, [])

  return (
    <div>
      {
        loading ? 
          <h1>Loading...</h1> /*Utilizando intercambiabilidad*/
          :
          <ItemDetail prod={producto} /> /*Paso el producto al componente*/
      }
    </div>
  )
}

export default ItemDetailContainer