import React , {useEffect , useState } from 'react';
import { useNavigate } from 'react-router';
import '../styles/pagenotfound.css';


export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }

function PageNotFound({text=" Head Back ? !"}) {
    const navigateTo = useNavigate();
         

  return (
    <div className='permission_denied'>
        <div id="particles-js"></div>
        <div className="denied__wrapper">
            <h1>404</h1>
            <h3>LOST IN <span>SPACE</span> <br/>Hmm, looks like that page doesn't exist.</h3>
            <img id="astronaut" src="astronaut.svg" alt='astro'/>
            <img id="planet" src="planet.svg" alt='not-pluto'/>
            <h3 style={{cursor : 'pointer'}} onClick={()=>{navigateTo('/home')}}> <i className="bi bi-arrow-left"></i> {"  "}{text}</h3>
            
        </div>
        {AddLibrary(
        'src/styles/loadMin.js')}
        <script>
            
        </script>
                    
    </div>
  )
}

export default PageNotFound;