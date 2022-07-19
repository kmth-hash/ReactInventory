import React , {useEffect , useState, useRef } from 'react';
// import CustomButton from '../components/CustomButton';
import { getAllItems } from '../util/api_call';
import { Search, ListCheck ,Trash , App , Check } from 'react-bootstrap-icons';
import '../styles/items.css';
import ItemCard from './ItemCard';

function Items() {
    const [itemList, setitems] = useState([]);
    const [count , setcount] = useState(0);
    const allSelected = useRef(false);
    const selectAllfn = () =>{
        if(count===itemList.length)
        {
            setcount(0);
            allSelected.current = false;
        }
        else
        {
            setcount(itemList.length);
            allSelected.current = true;
        }
        // console.log(count);
    }

    useEffect(() => {
        const setData = async()=>{
            await getAllItems().then((res)=>{
                setitems(res);
            });
        }
        setData();
      
    
    }, [])
    useEffect(() => {
    //   console.log(itemList);
      console.log(count===itemList.length ? true : false);
  
    }, [itemList,count])
    
    
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
            <div className='itemcard d-flex flex-row m-0 col-11'>
                <div className='bg-dark text-light d-flex'>
                {
                    count===itemList.length ? <Trash className='text-center m-auto'/> : <ListCheck className='text-center m-auto'/>
                }
                </div>
                <div className='text-left pl-1 text-capitalize'>Item</div>
                <div className='text-left pl-1 text-capitalize'>Qty </div>
                <div>Price </div>
                <div>Count</div>
            </div>
            <div className="col-11 col-md-11">
                {
                    itemList.map((val,key)=>{
                        // console.log(val); 
                        return(
                            <ItemCard key={key} itemData={val} setcount={setcount} count={count} tick={true} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Items;