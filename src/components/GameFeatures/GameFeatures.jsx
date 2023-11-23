import './GameFeatures.scss'
import musicnote from '../../assets/svg/MusicNote.svg'
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import React, { useState } from 'react'

const GameFeatures = () =>{
    
    return(
        <div className='gameFeatureContainer'>
            <div className='gameLives'>
                <div>
                    <span>Timer</span>
                    <span id='timer'>00:00</span>
                </div>
                <div>
                    <span>Score</span>
                    <span id='score'>0</span>
                </div>
                <div>
                    <span>Lives</span>
                    <span id='lives'>
                        <img src={musicnote}/>
                        <img src={musicnote}/>
                        <img src={musicnote}/>
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
}
export default GameFeatures;