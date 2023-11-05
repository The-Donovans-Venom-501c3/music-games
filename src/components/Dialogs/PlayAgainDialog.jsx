import React from "react";
import "./Dialogs.scss";
import character from "../../assets/svg/PlayAgain_Character.svg";

export default function PlayAgainDialog() {
  return (
    <div className="wrapper">
      <div className="content play-again centralized">
        <img src={character} alt="Character" className="" />
        <div className="quote centralized">
          <p >
            “Musicians <strong>don’t retire</strong> they stop when there’s no
            more music in them.”
          </p>
          <span>- Louis Armstrong</span>
        </div>
        <div className="button-container centralized">
          <button className="primary"> NEXT LEVEL </button>
          <button className="secondary"> SEE OTHER GAMES </button>
          <button className="secondary"> SEE MY LESSONS </button>
        </div>
      </div>
    </div>
  );
}
