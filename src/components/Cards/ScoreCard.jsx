import React from "react";
import "./Cards.scss";

export default function ScoreCard() {
  return (
    <div className="wrapper">
      <div className="content">
        <img src="" alt="cat" className="cat" />
        <p><span className="strong-message"> Thank you for finishing this game.</span>
          <span className="message">{"Let's keep practicing!"}</span>
        </p>
        <section className="score-section" >
<span className="score"> SCORE:{"score"}</span>
        <span className="score-message">{"You might want to review the lessons, then try again next time. Let’s get minimum 80 to pass!"}</span>
        </section>
        <div className="button-container">
          <button className="primary"> CONTINUE </button>
        </div>
      </div>
    </div>
  );
}
