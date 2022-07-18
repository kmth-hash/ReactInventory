import React, { useState, useEffect } from "react";
import "../styles/itemadd.css";
// import CustomButton from "../components/CustomButton";
import Select from "react-select";
import { addItem } from "../util/api_call";

function ItemAdd() {
  const [item, setitem] = useState({
    itemname: "",
    status: "",
    qty: "",
    count: "",
    price: "",
  });

  const qtyList = [
    { label: "Kg", value: "kg" },
    { label: "Pounds", value: "lbs" },
    { label: "Grams", value: "gms" },
    { label: "Lt", value: "lts" },
    { label: "ML", value: "ml" },
    { label: "Pieces", value: "pcs" },
    { label: "Tons", value: "tons" },
  ];
  const colourStyles = {
    control: (base) => ({
      ...base,
      background: "#ffffff",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#000000",
    }),
    input: (base) => ({
      ...base,
      color: "#000000",
    }),
  };

  useEffect(() => {
    console.log(item);

    return () => {};
  }, [item]);

  const submitItemfn = ()=>{
    if (item.itemname==='' || item.qty === '' || item.count ==='' || item.count === '')
    {
      alert('Please enter item details');
    }
    else 
    {
      addItem(item.itemname, item.qty , item.price , item.count , item.status);
      console.log('Item added');
      alert('Item Added');
      clearItemfn();

    }
  }

  const clearItemfn = ()=>{
    setitem({itemname: "",
    status: "",
    qty: "",
    count: "",
    price: ""})
  }

  return (
    <div className="container primary-color-2 font-weight-bold text-light p-2 mt-3">
      <h2 className="header">NEW ITEM</h2>

      <div className="container d-flex mx-auto row py-3">
        <div className="col-md-6 bg-dark item-add-img p-2 d-flex justify-content-center ">
          {/* <img src="logo512.png" alt="missing" className="fluid col-6" /> */}
        </div>

        <div className="col-md-6 col-12 d-flex flex-column align-items-start">
          <label htmlFor="itemName">Item Name </label>
          <input
            type="text"
            id="itemName"
            className="form-control"
            required
            placeholder="Marble Cake"
            onChange={(e) => {
              setitem({ ...item, itemname: e.target.value });
            }}
          />
          <label htmlFor="itemStatus">Status </label>
          <input
            type="text"
            id="itemStatus"
            className="form-control"
            placeholder="Available"
            onChange={(e) => {
              setitem({ ...item, status: e.target.value });
            }}
          />

          <div htmlFor="itemQty" className=" ">
            Quantity
          </div>
          <div className="d-flex justify-content-around w-100">
            <div className="mr-1 col-6 p-0">
              <input
                type="text"
                id="itemQty"
                className="form-control"
                required
                placeholder="56"
                onChange={(e) => {
                  setitem({ ...item, count: e.target.value });
                }}
              />
            </div>
            <div className="ml-1 col-6 p-0">
              {/* <input type="text" id="qty" className="form-control" /> */}
              <Select
                defaultValue={item.qy}
                options={qtyList}
                onChange={(e) => {
                  setitem({ ...item, qty: e.value });
                }}
                styles={colourStyles}
              />
            </div>
          </div>
          <label htmlFor="itemPrice">Price </label>
          <input
            type="text"
            id="itemPrice"
            className="form-control"
            required
            placeholder="49.99"
            onChange={(e) => {
              setitem({ ...item, price: e.target.value });
            }}
          />
          <div className="d-flex justify-content-around my-2 w-100">
            <button className="btn btn-primary exp-btn" onClick={submitItemfn}>
              Add
            </button>
            <button className="btn btn-warning exp-btn" onClick={clearItemfn}>Clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemAdd;
