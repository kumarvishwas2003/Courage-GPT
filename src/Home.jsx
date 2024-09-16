import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Sound_btn } from "./components/Sound_btn/Sound_btn";

const Home = () => {
  // let root = `./src/assets/villians/`;
  const villians =  [
    "foot",
    "fred",
    "katze",
    "cat",
    "duck",
    "rams",
  ];

  const [currentVillian, nextVillian] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      nextVillian((prev) => (prev + 1) % villians.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentVillian]);

  return (
    <>
      <div className="main-container">
        <div className="icon-sound">
          <Sound_btn music={`normal-theme`} />
        </div>
        <div className="interact-div">
          <div className="courage-div">
            <img src="./src/assets/courage-dog.gif" alt="" width={`230px`} />
            <div className="courage-text">CourageGPT</div>
          </div>
          <div className="computer-div">
            <Link to="/help" className="div-help">Help</Link>
          </div>
          <div>
            {villians.map((villian, index) => (
              <div
                key={villian}
                className={`${villian}-div villian`}
                style={{ display: currentVillian === index ? "flex" : "none" }}
              >
                <img src={`./src/assets/villians/${villian}.webp`} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
