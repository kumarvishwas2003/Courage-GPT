import React, { useEffect, useState } from "react";
// import normal_theme from "./assets/audio/normal-theme.m4a";
import { useRef } from "react";
export const Sound_btn = ({ music }) => {
  const [enable, setEnable] = useState(false);
  const [on,seton] = useState(true)
  const audioRef = useRef(new Audio(`./src/assets/audio/${music}.m4a`));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.4;
    if (enable) {
      audio.play();
    } else {
      audio.pause();
    }

    // Cleanup on component unmount
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio to start
    };
  }, [enable]);

  function toggle() {
    setEnable((prevEnable) => !prevEnable);
    console.log(enable);
  }
  return (
    <div onClick={toggle}>
      {enable ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1.75 5.75v4.5h2.5l4 3V2.75l-4 3zm9 .5s1 .5 1 1.75s-1 1.75-1 1.75m1-6.5c2 1 3 2.5 3 4.75s-1 3.75-3 4.75"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          >
            <path d="m22 15l-6-6m6 0l-6 6" />
            <path
              strokeLinejoin="round"
              d="M2 14.959V9.04C2 8.466 2.448 8 3 8h3.586a.98.98 0 0 0 .707-.305l3-3.388c.63-.656 1.707-.191 1.707.736v13.914c0 .934-1.09 1.395-1.716.726l-2.99-3.369A.98.98 0 0 0 6.578 16H3c-.552 0-1-.466-1-1.041"
            />
          </g>
        </svg>
      )}
    </div>
  );
};
