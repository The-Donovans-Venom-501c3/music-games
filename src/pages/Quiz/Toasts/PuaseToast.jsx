import './Toast.scss'
import pause from '../../../assets/svg/Pause.svg'
const PuaseToast = () =>{
    return(
        <div className='toast'>
            <div className='pause'><img src={pause}/></div>
            <div className='textDialog'>
                <span>Game is paused</span>
                <span>Click the Play button to resume the game</span>
            </div>
        </div>
    );
}
export default PuaseToast;