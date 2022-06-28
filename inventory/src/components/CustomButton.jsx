import React, { useState } from "react";
import '../styles/customButton.css';

function CustomButton({name='SUBMIT' , fnCall='' , color="#4caf50"}) {
  //   const [fn, setfn] = useState("");

  return (
  <button className="customButton" style={{backgroundColor : color}} onClick={()=>{fnCall()}} >
      {name}
  </button>
  );
}

export default CustomButton;
