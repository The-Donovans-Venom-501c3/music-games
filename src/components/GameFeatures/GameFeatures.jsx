import "./GameFeatures.scss";
import musicnote from "../../assets/svg/MusicNote.svg";
import { MusicToggle } from "./Music/MusicToggle";
import Timer from './Timer';
import { useAtomValue } from "jotai";
import { livesAtom, scoreAtom } from "../../store/atoms";

const GameFeatures = () => {
  const score = useAtomValue(scoreAtom);
  const lives = useAtomValue(livesAtom);

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
          <MusicToggle />
//         <div>
//           <span>Music</span>
//           <div id="music">
//             <div id="musicBtn"></div>
//             <div value="off">OFF</div>
//           </div>
//         </div>
        <div>
          <span>Volume</span>
          <div id="volume">
            <input
              type="range"
              className="slider"
              min="1"
              max="100"
              value="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameFeatures;
