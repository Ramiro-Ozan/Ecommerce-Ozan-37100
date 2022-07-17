import React from 'react'
import { useState } from 'react'
import './itemCount.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({initial = 1, stock =  5, onAdd}) => {
  const [count, setCount] = useState(1);

  const handleClickPlus = () => {
    if (count<stock){
      setCount(count + 1);
    }
  };

  const handleClickMinor = () => {
    if (count>0){
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count)
  }

  return (
    <div className='box'>
      <div className='card w-25'>
        <button onClick={handleClickMinor} className="btn btn-primary">-</button>
        <br />
        <label>Quantity: {count}</label>
        <br />
        <button onClick={handleClickPlus} className="btn btn-primary">+</button>
        <br />
        <button onClick={handleAddToCart} className="btn btn-success">Add to Cart</button>
      </div>
    </div>
  )
}

export default ItemCount