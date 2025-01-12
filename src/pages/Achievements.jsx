import React from "react";
import "./achievements.css";
import { useNavigate } from "react-router-dom";

import ach1 from "../assets/ach1.svg";
import ach2 from "../assets/ach2.svg";
import ach3 from "../assets/ach3.svg";
import ach4 from "../assets/ach4.svg";
import ach5 from "../assets/ach5.svg";
import ach6 from "../assets/ach6.svg";
import ach7 from "../assets/ach7.svg";
import ach8 from "../assets/ach8.svg";
import ach9 from "../assets/ach9.svg";
import back from "../assets/back.svg";

function Achievements() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div className="Achievements">
      <div className="Achievement1">
        <img src={ach1} alt="Achievement Image" />
      </div>
      <div className="Achievement2">
        <img src={ach2} alt="Achievement Image" />
      </div>
      <div className="Achievement3">
        <img src={ach3} alt="Achievement Image" />
      </div>
      <div className="Achievement4">
        <img src={ach4} alt="Achievement Image" />
      </div>
      <div className="Achievement5">
        <img src={ach5} alt="Achievement Image" />
      </div>
      <div className="Achievement6">
        <img src={ach6} alt="Achievement Image" />
      </div>
      <div className="Achievement7">
        <img src={ach7} alt="Achievement Image" />
      </div>
      <div className="Achievement8">
        <img src={ach8} alt="Achievement Image" />
      </div>
      <div className="Achievement9">
        <img src={ach9} alt="Achievement Image" />
      </div>
      <div className="back">
        <img src={back} alt="Back Image" onClick={goBack} />
      </div>
    </div>
  );
}

export default Achievements;
