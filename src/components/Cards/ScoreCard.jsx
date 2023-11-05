import React from "react";
import "./Cards.scss";
import character from "../../assets/svg/Score_Character.svg";

export default function ScoreCard() {
  return (
    <div className="wrapper">
      <div className="content score-card centralized">
        <img src={character } alt="cat" className="cat" />
        <p className="centralized"><strong> Thank you for finishing this game.</strong>
          <span className="message">{"Let's keep practicing!"}</span>
        </p>
        <section className="score-section centralized" >
<span className="score"> SCORE: 75</span>
        <span className="score-message">{"You might want to review the lessons, then try again next time. Let’s get minimum 80 to pass!"}</span>
        </section>
        <div className="button-container centralized">
          <button className="primary"> CONTINUE </button>
        </div>
      </div>
    </div>
  );
}
