import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Sound_btn } from "./components/Sound_btn/Sound_btn";
import courage_house from "/src/assets/courage-house.jpg";
import courage_dog from "/src/assets/courage-dog.gif";
import courage_computer from "/src/assets/computer.png";
import footImage from "/src/assets/villians/foot.webp";
import fredImage from "/src/assets/villians/fred.webp";
import katzeImage from "/src/assets/villians/katze.webp";
import catImage from "/src/assets/villians/cat.webp";
import duckImage from "/src/assets/villians/duck.webp";
import ramsImage from "/src/assets/villians/rams.webp";


const Home = () => {
  // let root = `./src/assets/villians/`;
  const villainImages = {
    foot: footImage,
    fred: fredImage,
    katze: katzeImage,
    cat: catImage,
    duck: duckImage,
    rams: ramsImage,
  };

  const villians = ["foot", "fred", "katze", "cat", "duck", "rams"];

  const [currentVillian, nextVillian] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      nextVillian((prev) => (prev + 1) % villians.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentVillian]);

  return (
    <>
      <div
        className="main-container"
        style={{ backgroundImage: `url(${courage_house})` }}
      >
        <div className="icon-sound">
          <Sound_btn music={`normal-theme`} />
        </div>
        <div className="interact-div">
          <div className="courage-div">
            <img src={courage_dog} alt="" width={`230px`} />
            <div className="courage-text">CourageGPT</div>
          </div>
          <div className="computer-div">
            <img src={courage_computer} alt="" />
            <Link to="/help" className="div-help">
              Help
            </Link>
          </div>
        </div>
        <div>
          {villians.map((villian, index) => (
            <div
              key={villian}
              className={`${villian}-div villian`}
              style={{ display: currentVillian === index ? "flex" : "none" }}
            >
              <img src={villainImages[villian]} alt={villian} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
