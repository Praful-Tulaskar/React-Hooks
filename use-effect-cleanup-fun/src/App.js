import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {

    const [widthOfWindow, SetwidthOfWindow] = useState(window.screen.width);

    const currentScreenWidth = () => {
        SetwidthOfWindow(() => window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", currentScreenWidth);

        return () => {
            window.removeEventListener("resize", currentScreenWidth);
        }
    });


  return (
    <div className='container'>
      <h2>The size of window is <span>{widthOfWindow}</span></h2>
    </div>
  )
}
