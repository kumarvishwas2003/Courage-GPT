import React from 'react'
import { useEffect } from 'react';
import './Help.css'
const Help = () => {
       useEffect(() => {
         const audio_theme_panic = new Audio("./src/assets/audio/panic-theme.m4a");
         audio_theme_panic.loop = true;
        //  audio_theme_panic.play();

         // Cleanup function to stop the audio when the component unmounts
         return () => {
           audio_theme_panic.pause();
           audio_theme_panic.currentTime = 0; // Reset the audio_theme_panic to the beginning
         };
       }, []);
  return (
      <>
          <div className="help-container">
              
          </div>
      </>
  )
}

export default Help