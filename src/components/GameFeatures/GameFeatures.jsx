import "./GameFeatures.scss";
// import { MusicToggle } from "./Music/MusicToggle";
import musicnote from '../../assets/svg/MusicNote.svg'
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import React, { useState } from 'react'
import Timer from "./Timer/Timer";
import { useRef } from "react";
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
            <div className='gameSetting'>
                <div>
                    <span>Music</span>
                    <div id='music'>
                        <Switch color='success'
                        sx={{ 
                            '& .MuiSwitch-thumb':{
                                borderRadius:'5px',
                                height:'5vh',
                                backgroundColor:'$grey-100',
                                border:'2px solid $grey-500',
                                width:'3.5vw',
                                transform: 'translateX(0px)',
                                boxShadow:'0px 5px 0px 0px #BFBABB',

                            },
                            '& .MuiSwitch-track':{
                                borderRadius:'5px',
                                width:'25vw'
                            },
                            '.css-1xvpzln-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked':{
                                '-webkit-transform': 'translateX(3.5vw)',
                                '-moz-transform': 'translateX(3.5vw)',
                               ' -ms-transform': 'translateX(3.5vw)',
                                transform: "translateX(3.5vw)",
                                color:'#F0EEEE'
                            },
                            width:'8vw',
                            height:'8.5vh',
                            
                        }}
                        />
                    </div>
                </div>
                <div>
                    <span>Volume</span>
                    <div id='volume'>
                        <Slider
                        defaultValue={30}
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
            </div >
        </div>
  );
};
export default GameFeatures;