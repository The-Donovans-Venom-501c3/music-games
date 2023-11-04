import React from "react";
import "./Cards.scss";

export default function ScoreCard() {
  return (
    <div className="wrapper">
      <div className="content">
        <img src="" alt="music-symbol" className="" />
        <p>
          Congrats! You got <strong>1 Day</strong> Streak
        </p>
        <div className="streak-content">
          <section className="streak">
            <span>
              1 <img src="" className="filled" alt="streak symbol" />{" "}
            </span>
            <span>
              2 <img src="" className="not-filled" alt="not filled hole" />{" "}
            </span>
            <span>
              3 <img src="" className="not-filled" alt="not filled hole" />{" "}
            </span>
            <span>
              4 <img src="" className="not-filled" alt="not filled hole" />{" "}
            </span>
            <span>
              5 <img src="" className="not-filled" alt="not filled hole" />{" "}
            </span>
            <span>
              6 <img src="" className="not-filled" alt="not filled hole" />{" "}
            </span>
            <span>
              7 <img src="" className="not-filled" alt="not filled hole" />{" "}
            </span>
          </section>
          <hr />
          <p>
            Successfully complete a game every day to grow your streak. Skipping
            even for a day will reset your streak. You’ll get a reward after
            7-day streak!
          </p>
        </div>
        <div className="button-container">
          <button className="primary"> CONTINUE </button>
        </div>
      </div>
    </div>
  );
}
