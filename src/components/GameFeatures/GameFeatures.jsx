import './GameFeatures.scss'
import musicnote from '../../assets/svg/MusicNote.svg'
import { MusicToggle } from './Music/MusicToggle';
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
                        <MusicToggle />
                    </div>
                </div>
                <div>
                    <span>Volume</span>
                    <div id='volume'>
                          <input type="range" className="slider" min="1" max="100" value="1"/>
                    </div>
                </div>
            </div >
        </div>
    );
}
export default GameFeatures