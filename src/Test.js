import { useState } from "react";
import "./App.css";
import sports from "./sports.jpg";
import music from "./music.jpg";
import tech from "./tech.jpg";
function Test() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          SPORTS
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          MUSIC
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          TECH
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          CONTACT-US
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2><img src = {sports} height = "60" width ="auto"/></h2>
          <hr />
          <p> 
             sports Racquets,nets,cleats,jerseys,sneakers,goals and posts
           
          </p>
        </div>
      

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2><img src = {music} height = "60" width ="auto"/></h2>
          <hr />
          <p>
            keyboards,guitars,voilins,flutes,tabla,drums,veena
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2><img src = {tech} height = "60" width ="auto"/></h2>
          <hr />
          <p>
            desktop,laptop,mobile,tablet,smartwatch,smarttv
            
          </p>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>contact-us</h2>
          <hr />
          <p>
            mobile number:********<br/>
            address:**************
            
          </p>
        </div>
    
      </div>
    </div>
  );
}

export default Test;
