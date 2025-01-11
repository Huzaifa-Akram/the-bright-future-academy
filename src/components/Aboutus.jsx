import React from "react";
import "./aboutus.css";

import { achievementsdata } from "../data/achievementsdata";
import AchievementCard from "./AchievementCard";
import AboutUsImage from "../assets/aboutus.svg";

function Aboutus() {
  return (
    <div className="aboutus">
      <div className="aboutus-container">
        <div className="aboutus-image">
          <img src={AboutUsImage} alt="" />
        </div>
        <div className="aboutus-note">
          <h2>About Us</h2>
          <p>
            Our IELTS institute officially opened its doors on February 2, 2019,
            marking the beginning of a dedicated journey to help students
            achieve their language goals.
          </p>
          <button>Achievements {">"}</button>
        </div>
      </div>

      <div className="impAchievements">
        {achievementsdata.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            id={achievement.id}
            title={achievement.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Aboutus;
