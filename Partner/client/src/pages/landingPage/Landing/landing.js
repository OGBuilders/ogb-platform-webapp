import React from "react";

import Register from "../Register/register";
import About from "../About/aboutus";
import construction from "../../../components/utils/svg/construction.svg";

import "./landing.css";

const landing = () => {
  return (
    <div>
      <div className="greenCircleSmall"></div>
      <div className="columns landing">
        <div className="column landing-column">
          <div className="landing-heading">
            Helping <span className="green">you </span>find new clients, and simplify<br></br>
            <span className="green"> civil construction.</span>
          </div>
          <div className="construction-img">
            <img src={construction} alt="construction"></img>
          </div>
        </div>
        <div className="column">
          <Register></Register>
        </div>
      </div>
      <About></About>
    </div>
  );
};

export default landing;
