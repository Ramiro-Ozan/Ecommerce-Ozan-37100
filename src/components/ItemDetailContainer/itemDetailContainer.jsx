import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFetch } from '../../Productos/getFetch'
import ItemDetail from '../ItemDetailContainer/itemDetail'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const {detalledId} = useParams()
  console.log(detalledId)

  useEffect( () => {
    getFetch(detalledId)
    .then(resp => setProducto(resp))
  }, [])

  return (
    <div>
      ItemDetailContainer
      <ItemDetail prod={producto} />
    </div>
  )
}

export default ItemDetailContainer