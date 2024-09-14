import React, { useEffect } from "react";
// const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
import "./Help.css";
import { Sound_btn } from "../Sound_btn/Sound_btn";
import { Link } from "react-router-dom";
import { useState } from "react";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Help = () => {
  //groqapi
  const [response, setResponse] = useState(""); // For storing API response
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(null);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const fetchGroqResponse = async () => {
      setLoading(true);
      try {
        const chatCompletion = await groq.chat.completions.create({
          messages: [
            {
              role: "user",
              content: `You are the sarcastic, insulting computer from Courage the Cowardly Dog. Reply with remarks like 'You coward' or 'Pathetic' and provide detailed solutions.
              response is ${text}`,
            },
          ],
          model: "llama3-8b-8192",
        });

        // Update the state with the response
        setResponse(
          chatCompletion.choices[0]?.message?.content || "No response"
        );
      } catch (err) {
        setError("Failed to fetch the response. Please try again later.");
      }
      setLoading(false);
    };
    fetchGroqResponse();
    changeText("")
  };

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
