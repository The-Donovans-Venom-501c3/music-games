import React from "react";
import "./Cards.scss";

export default function PlayAgainCard() {
  return (
    <div className="wrapper">
      <div className="content">
        <img src="" alt="padlock" className="padlock" />
        <p className="message">“Musicians don’t retire; they stop when there’s no more music in them.” 
        <span>- Louis Armstrong</span>
        </p>
        <div className="button-container">

        <button className="primary" > NEXT LEVEL </button>
        <button className="secondary" > SEE OTHER GAMES </button>
        <button className="secondary" > SEE MY LESSONS </button>
        </div>
      </div>
    </div>
  );
}
