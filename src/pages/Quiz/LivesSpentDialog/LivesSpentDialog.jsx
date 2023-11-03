import './LivesSpentDialog.scss'
import cat from '../../../assets/svg/BrokenCat.svg'
const LivesSpentDialog = () =>{
    return(
        <div className='livesSpentDialog'>
        <div className='cat'><img src={cat}/></div>
        <div className='textDialog'>
            <span>You ran out of lives!</span>
            <span id='text'>Let’s review your lessons and try again tomorrow.</span>
        </div>
        <div className='btnDialog'>
            <button id='btn-white'>SEE OTHER GAMES</button>
            <button id='btn-purple'>REVIEW LESSONS</button>
        </div>
    </div>
    );
}
export default LivesSpentDialog;