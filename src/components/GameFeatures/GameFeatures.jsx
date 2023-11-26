import "./GameFeatures.scss";
// import { MusicToggle } from "./Music/MusicToggle";
import musicnote from '../../assets/svg/MusicNote.svg'
import Slider from '@mui/material/Slider';
import React, { useState } from 'react'
import Timer from "./Timer/Timer";
import { useAtomValue } from "jotai";
import { livesAtom, scoreAtom } from "../../store/atoms";
import { MusicToggle } from "./Music/MusicToggle";

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
            <div className='gameSetting'>
              <MusicToggle />
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