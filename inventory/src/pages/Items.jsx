import React from 'react';
import CustomButton from '../components/CustomButton';
import { Search, ListCheck , App } from 'react-bootstrap-icons';
import '../styles/items.css';
import ItemCard from './ItemCard';

function Items() {
  return (
    <div className='items container'>
        <div className="row items-body mt-3 d-flex justify-content-center">
            <div className="col-11 py-2 col-md-11 d-flex justify-content-between ">
                <button className='btn secondary-color '>Add Item</button>
                <div className='d-flex '>
                    
                    <div className="square">
                        <Search />
                    </div>
                    <div className="square">
                        <ListCheck />
                    </div>
                </div>
            </div>
            <div className="col-11 col-md-11">
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    </div>
  )
}

export default Items;