import React from 'react'
import ItemCount from '../ItemCount/itemCount'
import Item from './item'


const ItemListContainer = () => {
  const onAdd = () => {
    alert("Gracias por su compra")
  };

  return (
    <div>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <Item />
    </div>
  )
}

export default ItemListContainer