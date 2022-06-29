import React from 'react';
import {App} from 'react-bootstrap-icons';

function ItemCard() {
  return (
    <div className='itemcard d-flex flex-row m-0 w-100'>
        <div className='bg-dark text-light d-flex'>
            <App className='card-center' />
        </div>
        <div>Name</div>
        <div>Qty </div>
        <div>Price </div>
        <div>Count</div>
    </div>
  )
}

export default ItemCard