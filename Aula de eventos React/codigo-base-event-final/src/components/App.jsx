import React, {useState} from "react";
//import { useState } from "react/cjs/react.production.min";

function App() {

  const [headingText, setHeadingText] = useState('Olá')
  const [isMouseOver, setisMouseOver] = useState(false)

  function handleClick() {
    setHeadingText('Jesus te ama')
  }

  function handleMouseOver(){
    setisMouseOver(true)
  }

  function handleMouseOut() {
    setisMouseOver(false)
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="Qual seu nome?" />
      <button style={ {backgroundColor: isMouseOver ? 'black' : 'white'} } 
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >Submit</button>
    </div>
  );
}

export default App;
