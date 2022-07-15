import React, { useState } from 'react'
import './app.css'
import { Economy } from "./Components/Economy";

export function App() {
  const [display, setDisplay] = useState(true); // title

  let text = document.querySelector(".economy"); // text
  let isShown = true;
  function showText(){            
    if(isShown){
      text.style.display = "none"; 
      isShown = false;
    }else{
      text.style.display = "block";
      isShown = true;
    }
  }

  return (
    <>
      <div className='title'>
        <button 
          className="button-title" 
          onClick={()=>setDisplay(!display)}>
        Show the title
        </button>
        <h2>Amare</h2>
        {
          display && <h2 className="text-title"> vita et proximi</h2>
        }        
      </div> 
             
      <div className='economy'>
        { isShown && 
          <Economy/>
        }
      </div>      
      <button 
        className="button-text" 
        onClick={showText}
        >
        Read more
      </button> 
    </>
  )
}
