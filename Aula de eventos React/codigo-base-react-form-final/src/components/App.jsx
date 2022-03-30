import React, {useState} from "react";

function App() {
  
  const [name, setName] = useState('')
  const [headingText, setHeadingText] = useState('')

  function handleChange(event) {
    console.log(event.target.value)
    setName(event.target.value)
  }

  function handleClick(event) {
    setHeadingText(name)
    
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Olá {headingText}</h1>
      <form onSubmit={handleClick}>
        <input 
            onChange={handleChange} 
            type="text" 
            placeholder="Qual seu nome?" 
            value={name} />
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
