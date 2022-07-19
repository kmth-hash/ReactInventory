import React , {useEffect , useState } from 'react';
// import CustomButton from '../components/CustomButton';
import { getAllItems } from '../util/api_call';
import { Search, ListCheck ,Trash  } from 'react-bootstrap-icons';
import '../styles/items.css';
import ItemCard from './ItemCard';

function Items() {
    const [itemList, setitems] = useState([]);
    const [count , setcount] = useState(0);

    useEffect(() => {
        const setData = async()=>{
            await getAllItems().then((res)=>{
                setitems(res);
            });
        }
        setData();
      
    
    }, [])
    useEffect(() => {
      console.log(itemList);
  
    }, [itemList])
    
    
  return (
    <div className='items container'>
        <div className="row items-body mt-3 d-flex justify-content-center">
            <div className="col-11 py-2 col-md-11 d-flex justify-content-between ">
                <button className='btn secondary-color '>Add Item</button>
                <div className='d-flex '>
                    {count===0 
                    ?
                    '':
                    <div className="square">
                        <Trash />
                    </div>
                    }
                    <div className="square">
                        <Search />
                    </div>
                    <div className="square">
                        <ListCheck />
                    </div>
                    
                </div>
            </div>
            <div className="col-11 col-md-11">
                {
                    itemList.map((val,key)=>{
                        console.log(val); 
                        return(
                            <ItemCard key={key} itemData={val} setcount={setcount} count={count} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Items;