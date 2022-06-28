import React from "react";
import '../styles/itemadd.css';
import CustomButton from "../components/CustomButton";

function ItemAdd() {

    const fnCall = ()=>{
        console.log('Button Pressed : ');
    }


  return (
    <div className="container font-weight-bold text-light border p-2 mt-3">
      <h2 className="header">NEW ITEM</h2>
      
      <div className="container  row py-3">
        <div className="col-md-6 bg-dark item-add-img p-2">
          <img src="logo512.png" alt="missing" />
        </div>

        <div className="col-md-6 col-12 d-flex flex-column align-items-start">
          <label htmlFor="itemName">Item Name  </label>
          <input type="text" id="itemName" className="form-control" />
          <label htmlFor="itemStatus">Status  </label>
          <input type="text" id="itemStatus" className="form-control" />
          <br />
          <div className="d-flex align-items-center">
            <div htmlFor="itemQty" className="mr-2">
              Quantity
            </div>
            <input type="text" id="itemQty" className="mx-2  form-control" />
            <input type="text" id="qty" className="mx-2 form-control" />
          </div>
          <label htmlFor="itemPrice">Price  </label>
          <input type="text" id="itemPrice" className="form-control" />
          <div className="d-flex justify-content-around my-2 w-100">
            <CustomButton name="ADD" color="#000000" fnCall={fnCall} />
            <CustomButton name="CLEAR" fnCall={fnCall}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemAdd;
