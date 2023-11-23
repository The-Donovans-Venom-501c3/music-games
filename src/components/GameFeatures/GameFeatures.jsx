import "./GameFeatures.scss";
import musicnote from "../../assets/svg/MusicNote.svg";
import dot from "../../assets/svg/Dot.svg"
//import { MusicToggle } from "./Music/MusicToggle";
import Timer from "./Timer/Timer";
import { useRef, useState } from "react";
import { useAtomValue } from "jotai";
import { livesAtom, scoreAtom } from "../../store/atoms";

const GameFeatures = () => {
  const score = useAtomValue(scoreAtom);
  const lives = useAtomValue(livesAtom);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);
  const MAX = 20;

  const toggleMusic = () => {
    if(musicOn){
      audioRef.current?.pause();
      setMusicOn(!musicOn)
    } else {
      audioRef.current?.play();
      setMusicOn(!musicOn)
    }
  };

  function handleVolume(e) {
    const { value } = e.target;
    const volume = Number(value) / MAX;
    audioRef.current.volume = volume;
  }

  return (
    <div className="gameFeatureContainer">
      <div className="gameLives">
        <div>
          <span>Timer</span>
          <Timer />
        </div>
        <div>
          <span>Score</span>
          <span id="score">{score}</span>
        </div>
        <div>
          <span>Lives</span>
          <span id="lives">
            {Array.from({ length: lives }, (_, index) => (
              <img key={index} src={musicnote} />
            ))}
          </span>
        </div>
      </div>
      <div className="gameSetting">
        {/* <MusicToggle audioRef={audioRef}/> */}
        <div>
            <span>Music</span>
    
            <div id="music" className= {musicOn ? "on" : "" }>
            <button
                onClick={() => {
                toggleMusic()
                }}
            >
                <img src={dot} alt="play music toggle" />
            </button>
            <span>{musicOn? "ON" : "OFF"}</span>
            </div>
        </div>
        <div>
          <span>Volume</span>
          <div id="volume">
            <input className="slider" type="range" min="0" max={MAX} onChange={(e) => handleVolume(e)}/>
          </div>
        </div>
      </div>
      <audio ref={audioRef} loop src={"/discord-notification.mp3"} />
    </div>
  );
};
export default GameFeatures;
