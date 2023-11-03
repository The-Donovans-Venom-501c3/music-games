import './ExitDialog.scss'
import cat from '../../../assets/svg/cryingCat.svg'
const ExitDialog = () => {
    return(
<div className='exitDialog'>
        <div className='cat'><img src={cat}/></div>
        <div className='textDialog'>
            <span>Are you sure you want to exit?</span>
            <span id='text'>Exiting the game before you finish will reset your progress.</span>
        </div>
        <div className='btnDialog'>
            <button id='btn-white'>KEEP PLAYING</button>
            <button id='btn-red'>EXIT</button>
        </div>
    </div>
    );
    
}
export default ExitDialog;