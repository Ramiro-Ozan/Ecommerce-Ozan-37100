import React from 'react'
import { useState } from 'react'
import './itemCount.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickMinor = () => {
    setCount(count - 1);
  };

  return (
    <div className='box'>
      <h1>Bienvenido</h1>

      <div className='card w-25'>
        <button onClick={handleClickMinor} class="btn btn-primary">-</button>
        <br />
        <label>Quantity: {count}</label>
        <br />
        <button onClick={handleClickPlus} class="btn btn-primary">+</button>
      </div>
    </div>
  )
}

export default ItemCount