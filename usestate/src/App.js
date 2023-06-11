import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState('');

  const handleChange = (element) => {
    setCount(parseInt(element.target.value));
}

  const handleUpClick = () => {
    setCount(count+1)
  }
  
  const handleDownClick = () => {
    if(count === 0){ }
    else{
      setCount(count-1)
    }
  }

  return (
    <>
    <div className="container">
      <button onClick={handleUpClick}>+</button>
      <input type= 'text' value={count} onChange={handleChange}/>
      <button onClick={handleDownClick}>-</button>
    </div>
    </>
  );
}

export default App;
