import React, { useEffect, useState } from "react";
import "./Help.css";
import { Sound_btn } from "../Sound_btn/Sound_btn";
import { Link } from "react-router-dom";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Help = () => {
  // State variables
  const [text, changeText] = useState("");
  const [response, setResponse] = useState(""); // For storing API response
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(null);
  const [voice, setVoice] = useState(null); // For storing selected voice

  // Desired voice name
  const desiredVoiceName = "Google UK English Male"; // Change this to the exact name of the voice you want

  // Populate voice options on component mount
  useEffect(() => {
    const populateVoice = () => {
      const availableVoices = speechSynthesis.getVoices();
      const selectedVoice = availableVoices.find(
        (v) => v.name === desiredVoiceName
      );
      setVoice(selectedVoice);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
      populateVoice();
    } else {
      // If voices are not loaded, wait for the voiceschanged event
      window.speechSynthesis.onvoiceschanged = populateVoice;
    }
  }, []);

  // Speak function outside to handle text speaking
  const speak = (textToSpeak) => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);
  };

  // Form submission handler
  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `You are a snarky computer with dry humor from the cartoon Courage the Cowardly Dog and please don't be much harsh as we have to stay inside the policy. Reply with playful jabs like 'Nice try' or 'Well, that was bold... and wrong.the response generated should be very small and consie and not more than 10 lines, small within one paragraph. prompt is ${text}`,
          },
        ],
        model: "llama3-8b-8192",
      });

      // Update the state with the response
      // In handelSubmit
      const responseText =
        chatCompletion.choices[0]?.message?.content || "No response";
      setResponse(responseText);
      console.log(responseText);
      setTimeout(() => speak(responseText), 1000); // Delay to ensure text is set

      setResponse(responseText);
    } catch (err) {
      setError("Failed to fetch the response. Please try again later.");
    }
    setLoading(false);
    changeText("");
  };

  // Function to handle keyboard noise
  const keyboard_press = () => {
    const audio_keyboard = new Audio("./src/assets/audio/keyboard.m4a");
    audio_keyboard.currentTime = 0.5;
    audio_keyboard.play();
    audio_keyboard.volume = 1;
    setTimeout(() => {
      audio_keyboard.pause();
      audio_keyboard.currentTime = 0; // Reset to the beginning for the next play
    }, 300);
  };

  // Function to reset response
  const reset = () => {
    setResponse("");
    changeText("");
    setVoice("");
    speak("");
  };

  // Function to convert text to uppercase
  const changeToCapital = (e) => {
    changeText(e.target.value.toUpperCase());
  };

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
              <form onSubmit={handelSubmit}>
                <input
                  type="text"
                  value={text}
                  onKeyDown={keyboard_press}
                  onChange={changeToCapital}
                  className="box"
                />
              </form>
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
