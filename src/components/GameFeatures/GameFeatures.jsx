import "./GameFeatures.scss";
// import { MusicToggle } from "./Music/MusicToggle";
import musicnote from '../../assets/svg/MusicNote.svg'
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Timer from "./Timer/Timer";
import { useRef } from "react";
import { useAtomValue, useAtom } from "jotai";
import { livesAtom, scoreAtom, musicStateAtom, levelStateAtom } from "../../store/atoms";

const GameFeatures = () => {
  const score = useAtomValue(scoreAtom);
  const lives = useAtomValue(livesAtom);
  const level = useAtomValue(levelStateAtom);
  const [musicOn, setMusicOn] = useAtom(musicStateAtom)
  const MAX = 100;

  const audioRef = useRef(null);

  let src = level === 'easy' ? '/easy.mp3' : level === 'medium' ? '/medium.mp3' : 'hard.mp3';

  const handleChangeSwitch = (event) => {
    setMusicOn(event.target.checked);
    if(musicOn){
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };

  const handleChangeVolume = (e) => {
    const { value } = e.target;
    const volume = Number(value) / MAX;
    audioRef.current.volume = volume;
  };

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
            <div className='gameSetting'>
                <div>
                    <span>Music</span>
                    <div id='music'>
                        <Switch color='success' className="switch"
                        checked={musicOn}
                        onChange={handleChangeSwitch}
                        />
                    </div>
                </div>
                <div>
                    <span>Volume</span>
                    <div id='volume'>
                        <Slider
                        defaultValue={30}
                        onChange={(e) => handleChangeVolume(e)}                        
                        valueLabelDisplay="auto"
                        sx={{
                            width: "5vw",
                            '.css-eg0mwd-MuiSlider-thumb':{
                                color:'#F0EEEE',
                            },
                            '& .css-2bajgq-MuiSlider-root':{
                                color:'#F0EEEE',
                            },
                            '.css-1gv0vcd-MuiSlider-track':{
                                color:'#BFBABB',
                                height:'1vh',
                            }
                        }}
                        />
                    </div>
                </div>
            </div>
            <audio ref={audioRef} loop src={src} />
        </div>
  );
};
export default GameFeatures;