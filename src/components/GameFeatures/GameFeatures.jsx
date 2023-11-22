import './GameFeatures.scss'
import musicnote from '../../assets/svg/MusicNote.svg'
import { useAtomValue, useSetAtom } from 'jotai';
import { volumeAtom } from '../../store/atoms';  
const GameFeatures = () =>{
    const volume = useAtomValue(volumeAtom)
    const setVolume = useSetAtom(volumeAtom)

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
                        <div id="musicBtn"></div>
                        <div value="off">OFF</div>
                    </div>
                </div>
                <div>
                    <span>Volume</span>
                    <div id='volume'>
                        <input className="slider" type="range" min="0" max="100" step="10" value={volume} onChange={(e)=>setVolume(e.target.value)}/>
                    </div>
                </div>
            </div >
        </div>
    );
}
export default GameFeatures