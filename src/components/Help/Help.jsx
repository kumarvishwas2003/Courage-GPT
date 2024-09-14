import React from "react";
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
import "./Help.css";
import { Sound_btn } from "../Sound_btn/Sound_btn";
import { Link } from "react-router-dom";
import { useState } from "react";

const Help = () => {

    const [response, setResponse] = useState(
      "LOREM, IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELECTUS ALIQUAM QUIBUSDAM EAEQUE MAIORES ACCUSANTIUM EUM MOLESTIAE, REPELLAT IUSTO MAGNAM ET, DICTA ILLO NUMQUAM ACCUSAMUS DELENITI ADIPISCI, QUI LAUDANTIUM MOLITIA. PERFERENDIS CUMQUE EXPLICABO NIHIL EUM QUAS.LOREM, IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELECTUS ALIQUAM QUIBUSDAM EAEQUE MAIORES ACCUSANTIUM EUM MOLESTIAE, REPELLAT IUSTO MAGNAM ET, DICTA ILLO NUMQUAM ACCUSAMUS DELENITI ADIPISCI, QUI LAUDANTIUM MOLITIA. PERFERENDIS CUMQUE EXPLICABO NIHIL EUM QUAS.LOREM, IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DELECTUS ALIQUAM QUIBUSDAM EAEQUE MAIORES ACCUSANTIUM EUM MOLESTIAE, REPELLAT IUSTO MAGNAM ET, DICTA ILLO NUMQUAM ACCUSAMUS DELENITI ADIPISCI, QUI LAUDANTIUM MOLITIA. PERFERENDIS CUMQUE EXPLICABO NIHIL EUM QUAS. VISHWASLAUDANTIUM MOLITIA. PERFERENDIS CUMQUE EXPLICABO NIHIL EUM QUAS.LOREM, IPSUM "
  );
  

    
  
  const [text, changeText] = useState("");
  const changeToCapital = (e) => {
    changeText(e.target.value.toUpperCase());
  };
  function keyboard_press() {
    const audio_keyboard = new Audio("./src/assets/audio/keyboard.m4a");
    audio_keyboard.currentTime = 0.5;
    audio_keyboard.play();
    audio_keyboard.volume = 1;
    setTimeout(() => {
      audio_keyboard.pause();
      audio_keyboard.currentTime = 0; // Reset to the beginning for the next play
    }, 300);
    console.log("pressed");
  }

  function reset() {
    console.log("reset");
    setResponse("");
  }
  return (
    <div>
      <div className="computer">
        <div className="screen">
          <div className="first-row">
            <div className="right">
              <Link to="/" className="back-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"
                  />
                  <path
                    fill="currentColor"
                    d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
                  />
                </svg>
              </Link>
              <div className="sound">
                <Sound_btn music={`panic-theme`} />
              </div>
            </div>
            <div className="reset-div">
              <img
                src="./src/assets/tv.png"
                alt=""
                width={"140px"}
                onClick={reset}
              />
            </div>
          </div>

          <div className="second-row">
            <div className="input-box">
              <input
                type="text"
                value={text}
                onKeyDown={keyboard_press}
                onChange={changeToCapital}
                className="box"
              />
            </div>
          </div>
          <div className="third-row">
            <div className="response-box">{response}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
