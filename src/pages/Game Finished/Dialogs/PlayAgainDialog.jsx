import React from "react";
import "./Dialogs.scss";
import character from "../../../assets/svg/PlayAgain_Character.svg";
import { useSetAtom } from "jotai";
import { appStateAtom } from "../../../store/atoms";

export default function PlayAgainDialog() {
  const setAppState = useSetAtom(appStateAtom);

  return (
    <div className="wrapper">
      <div className="content play-again centralized">
        <img src={character} alt="Character" className="character" />
        <div className="quote centralized">
          <p>
            “Musicians <strong>don't retire</strong> they stop when there's no
            more music in them.”
          </p>
          <span>- Louis Armstrong</span>
        </div>
        <div className="button-container centralized">
          <button onClick={() => setAppState("welcome")} className="primary">
            PLAY AGAIN
          </button>
          <button onClick={() => setAppState("home")} className="secondary">
            SEE OTHER GAMES
          </button>
          <button
            onClick={() => {
              window.location.href =
                "https://thedonovanspianoroom.com/bookshelf/";
            }}
            className="secondary"
          >
            SEE MY LESSONS
          </button>
        </div>
      </div>
    </div>
  );
}
