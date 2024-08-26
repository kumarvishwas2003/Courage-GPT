import React from 'react'
import { useEffect } from 'react';
import './Help.css'
const Help = () => {
  useEffect(() => {
    const audio_theme_panic = new Audio("./src/assets/audio/panic-theme.m4a");
      audio_theme_panic.loop = true;
      audio_theme_panic.volume = 0.8; 
    // audio_theme_panic.play();

    // Cleanup function to stop the audio when the component unmounts
    return () => {
      audio_theme_panic.pause();
      audio_theme_panic.currentTime = 0; // Reset the audio_theme_panic to the beginning
    };
  }, []);

  //for keyboard noises
    function keyboard_press() {
        const audio_keyboard = new Audio(
          "./src/assets/audio/keyboard.m4a"
        );
        audio_keyboard.currentTime = 0.5;
        audio_keyboard.play()
        audio_keyboard.volume = 1
        setTimeout(() => {
          audio_keyboard.pause();
          audio_keyboard.currentTime = 0; // Reset to the beginning for the next play
        }, 300); 
      console.log("pressed")
  }
  return (
    <>
      <div className="help-container">
        <input
          type="text"
          onKeyDown={keyboard_press}
          placeholder="Press here..."
        />
      </div>
    </>
  );
}

export default Help