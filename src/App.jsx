import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Sound_btn } from "./components/Sound_btn/Sound_btn";

const App = () => {
  // let root = `./src/assets/villians/`;
  const villians = ["foot", "fred", "katze", "cat", "duck", "rams"];

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
            <div className="courage-text">COURAGE-GPT</div>
          </div>
          <div className="computer-div">
            {/* <img src="" alt="" width={`270px`}/> */}
            <Link to={`/help`} className="div-help">
              Help
            </Link>
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
          {/* //villians */}
          {/* <div className="foot-div villian">
            <img src="./src/assets/villians/foot.webp" alt="" />
          </div>
          <div className="fred-div villian">
            <img src="./src/assets/villians/fred.webp" alt="" />
          </div>
          <div className="katze-div villian">
            <img src="./src/assets/villians/katze.webp" alt="" />
          </div>
          <div className="cat-div villian">
            <img src="./src/assets/villians/cat.webp" alt="" />
          </div>
          <div className="duck-div villian">
            <img src="./src/assets/villians/duck.webp" alt="" />
          </div>
          <div className="rams-div villian">
            <img src="./src/assets/villians/ramse.webp" alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default App;
