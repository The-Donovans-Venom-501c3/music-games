import React from "react";
import "./Cards.scss";

export default function NextLevelCard() {
  return (
    <div className="wrapper">
      <div className="content">
        <img src="" alt="padlock" className="padlock" />
        <span className="message">{"You've unlocked the next level"}</span>
        <div className="button-container">

        <button className="primary" > NEXT LEVEL </button>
        <button className="secondary" > PLAY AGAIN </button>
        <button className="secondary" > SEE OTHER GAMES </button>
        </div>
      </div>
    </div>
  );
}
