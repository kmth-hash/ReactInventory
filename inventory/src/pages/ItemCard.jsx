import React,{useState, useEffect} from 'react';
import {App , XDiamondFill} from 'react-bootstrap-icons';
import '../styles/itemcard.css';

function ItemCard({itemData , setcount, tick ,count}) {
  const [enabled, setenabled] = useState(tick);
  
  const updateCount =()=>{    
    enabled ? setcount(count-1) : setcount(count+1);
    setenabled(!enabled);
  }

  useEffect(() => {
    console.log(count , enabled);
  
    return () => {
      
    }
  }, [enabled])
  

  return (
    <div className='itemcard d-flex flex-row m-0 w-100'>
        <div className='bg-dark text-light d-flex'>
            {
              !enabled 
              ? 
              <App className='card-center itemcard-icon' onClick={updateCount} /> 
              : 
              <XDiamondFill className='card-center itemcard-icon' onClick={updateCount} /> 
            }
        </div>
        <div className='text-left pl-1 text-capitalize'>{itemData.itemname}</div>
        <div className='text-left pl-1 text-capitalize'>{itemData.qty} </div>
        <div>{itemData.price} </div>
        <div>{itemData.count}</div>
    </div>
  )
}

export default ItemCard