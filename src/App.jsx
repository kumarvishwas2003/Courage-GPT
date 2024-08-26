import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css'
import normal_theme from "./assets/audio/normal-theme.m4a";

function App() {
  const [count, setCount] = useState(0)
 useEffect(() => {
   const audio_theme = new Audio("./src/assets/audio/normal-theme.m4a");
   audio_theme.loop = true;
  //  audio_theme.play();

   // Cleanup function to stop the audio when the component unmounts
   return () => {
     audio_theme.pause();
     audio_theme.currentTime = 0; // Reset the audio to the beginning
   };

   //for keyboard noises
   function keyboard_press() {
     
   }
 }, []);


  return (
    <>
      <div className="main-container">
        <div className="response-container">
          <div className="response-left">
            <img
              src="./src/assets/courage-dog.gif"
              alt=""
              className="dog-image"
            />
            <h3 className="courage-text">COURAGE-GPT</h3>
          </div>
          <div className="response-right">
            <div className="help-box">
              <Link to={`/help`} className="help">
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
