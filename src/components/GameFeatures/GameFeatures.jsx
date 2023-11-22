import './GameFeatures.scss'
import musicnote from '../../assets/svg/MusicNote.svg'
import { useRef, useState } from 'react';
const GameFeatures = () =>{
    const [play, setPlay] = useState(false);
    const audioRef = useRef(null);
    const MAX = 20;

    function toggleAudio() {
        if (play) {
            audioRef.current?.pause();
          setPlay(false);
        } else {
          audioRef.current?.play();
          setPlay(true);
        }
      }

    function handleVolume(e) {
        const { value } = e.target;
        const volume = Number(value) / MAX;
        audioRef.current.volume = volume;
    } 

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
                            <div id="musicBtn">
                                <button 
                                    onClick={toggleAudio}
                                    type="button">
                                </button>
                            </div>
                            {!play ? (
                                <div value="off">OFF</div>
                                ) : (
                                <div value="off">ON</div>
                            )}
                    </div>
                </div>
                <div>
                    <span>Volume</span>
                    <div id='volume'>
                        <input className="slider" type="range" min="0" max={MAX} onChange={(e) => handleVolume(e)}/>
                    </div>
                </div>
            </div>
            <audio ref={audioRef} loop src={"/discord-notification.mp3"} />
        </div>
    );
}
export default GameFeatures