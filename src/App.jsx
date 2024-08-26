import { useEffect, useState } from 'react'

import './App.css'
import normal_theme from "./assets/audio/normal-theme.m4a";

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const audio = new Audio("./src/assets/audio/normal-theme.m4a");
    // src\assets\audio\normal-theme.m4a
    audio.loop = true
    // audio.play()
  },[])


  return (
    <>
      <div className="main-container">
        <div className="response-container">
          <div className="response-left">
            <img src="./src/assets/courage-dog.gif" alt="" className='dog-image'/>
            <h3 className='courage-text'>COURAGE-GPT</h3>
          </div>
          <div className="response-right">
            <button>Help</button>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
