import { useState } from "react";

import "./MusicToggle.scss";

import dot from "../../../assets/svg/Dot.svg";

export function MusicToggle() {
  const [musicOn, setMusicOn] = useState(true);

  const toggleMusic = () => {
    setMusicOn(!musicOn);

    console.log("oi")
  };
  return (
    <div>
      <span>Music</span>

      {musicOn ? (
        <div className="music">
          <button
            onClick={() => {
              toggleMusic()
            }}
          >
            <img src={dot} alt="play music toggle" />
          </button>
          <div className="off">OFF</div>
        </div>
      ) : (
        <div className="music on">
          {" "}
          <div>ON</div>{" "}
          <button
            onClick={() => {
              toggleMusic()
            }}
          >
            <img src={dot} alt="play music toggle" />
          </button>{" "}
        </div>
      )}
    </div>
  );
}
