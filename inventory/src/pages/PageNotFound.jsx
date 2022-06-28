/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../styles/pagenotfound.css";

function PageNotFound({ text = " Head Back ? !" }) {
  const navigateTo = useNavigate();
  const [loading, setloading] = useState(true);
  
  useEffect(()=>{
    setloading(true);
    // console.log(loading);
    // const getData =async()=>{
    //   const c = collection(db , "items");
    //   const res = query(c, where("price",">=",9.00));
    //   const snapshot = await getDocs(res);
    //   snapshot.forEach(d=>{
    //     console.log(d.id , '=>' , d.data().itemname);
    //   })
    // }
    // getData();
    // addItem('Salt','kg',21,120);
    // deleteItemByName('Salt')

  },[loading]);

  return (
    <div className="permission_denied">
      <div id="particles-js"></div>
      <div className="denied__wrapper">
        <h1>404</h1>
        <h3>
          LOST IN <span>SPACE</span> <br />
          Hmm, looks like that page doesn't exist.
        </h3>
        <img id="astronaut" src="astronaut.svg" alt="astro" />
        <div className="stars"></div>
        <img id="planet" src="planet.svg" alt="not-pluto" />

        <h3
          style={{ cursor: "pointer", zIndex: 999 }}
          onClick={() => {
            navigateTo("/home");
          }}
        >
          {" "}
          <i className="bi bi-arrow-left"></i> {"  "}
          {text}
        </h3>
      </div>
      
      <script></script>
    </div>
  );
}

export default PageNotFound;
