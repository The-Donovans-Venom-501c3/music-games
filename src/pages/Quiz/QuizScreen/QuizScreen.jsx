import './QuizScreen.scss'
import music from '../../../assets/svg/Music_stand.svg'
import cat from '../../../assets/svg/Cat.svg'
import x from '../../../assets/svg/X.svg'
import pause from '../../../assets/svg/Pause.svg'
import restart from '../../../assets/svg/Restart.svg'
import GameFeatures from '../../../components/GameFeatures/GameFeatures'
import QuizSection from '../../../components/QuizSection/QuizSection'

const props = {
    start:'start',
    pause:'pause'
}
const QuizScreen = () => {

    return(
        <div className='QuizScreenContainer'>
            
            <div className='musicStand'>
                <img id='music' src={music} width='100%' height='100%'/>
            </div>

            <div className='catConatiner'>
                <img id='cat' src={cat} />
            </div>

            <div className='GameScreen'>
                
                    <div className='setting'>
                        <button className='btnSetting btnRestart'><img src={restart}/><span>RESTART</span></button>
                        <button className='btnSetting btnPause'><img src={pause}/><span>PAUSE</span></button>
                        <button className='btnSetting btnexit'><img src={x} alt='x'/></button>
                    </div>
                    <div className='gameMain'>
                        <div className='left'>
                            <GameFeatures/>
                            <div className='line'></div>
                        </div>
                        <div className='right'>
                            <QuizSection/>
                        </div>
                    </div>
                    
                </div>

        </div>
    );
}
export default QuizScreen