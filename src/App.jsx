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

  
 }, []);


  return (
    <>
      <div className="main-container">
        <div className="icon-sound">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M1.75 5.75v4.5h2.5l4 3V2.75l-4 3zm9 .5s1 .5 1 1.75s-1 1.75-1 1.75m1-6.5c2 1 3 2.5 3 4.75s-1 3.75-3 4.75"
            />
          </svg>
        </div>
        <div className="response-container">
          <div className="response-left">
            <img
              src="./src/assets/courage-dog.gif"
              alt=""
              className="dog-image"
            />
            <h3 className="courage-text">COURAGE-GPR</h3>
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
