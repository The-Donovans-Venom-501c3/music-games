import './Toast.scss'
import start from '../../../assets/svg/Start.svg'
const StartToast = () =>{
    return(
        <div className='toast'>
            <div className='start'><img src={start}/></div>
            <div className='textDialog'>
                <span>Game is resumed</span>
                <span>Enjoy and have fun!</span>
            </div>
        </div>
    );
}
export default StartToast;