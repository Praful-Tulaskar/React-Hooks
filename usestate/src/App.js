import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

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
      <input type= 'text' value={count}/>
      <button onClick={handleDownClick}>-</button>
    </div>
    </>
  );
}

export default App;
