import React from "react";
import "./achievementNote.css";

function AchievementNote(props) {
  return (
    <div
      className={`achievement-note ${props.id % 2 === 0 ? "evenId" : "oddId"}`}
    >
      <h3>{props.id}</h3>
      <p>{props.title}</p>
    </div>
  );
}

export default AchievementNote;
