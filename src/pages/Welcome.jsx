import './Welcome.scss'
import cat from '../assets/SVGs/Cat_Intro.svg'
// import tickIcon from '../assets/SVGs/Icon_Tick.svg'
import tickIcon2 from '../assets/SVGs/Icon_Tick2.svg'
import goldLock from '../assets/SVGs/Icon_GoldLock.svg'
import grayLock from '../assets/SVGs/Icon_GrayLock.svg'
import polygon from '../assets/SVGs/Polygon_ChatBubble.svg'


export default function Welcome() {
  return (
    <div className='welcome'>
      <h1>Welcome to the <span>Note Identification Game</span></h1>
      <main>
        <div className="intro">
            <div className="bubble">
              <div className="chat">
                <p>Hey Superstars! Get ready for musical fun. Identify the note on the staff and move to the next level, with less than three mistakes. Learn note basics and become a pro!</p>
                <p>Choose the level you want to play!</p>
              </div>
              <img src={polygon} />
            </div>
            <img src={cat} className='cat' alt="Crescendo" />
        </div>
        <div className="levels">
            <button className='easy'><p>Easy</p>
            <img src={tickIcon2}/>
            </button>
            <button className='medium'><p>Medium</p>
            <img src={goldLock}/></button>
            <button className='hard'><p>Hard</p>
            <img src={grayLock}/></button>
        </div>
      </main>
    </div>
  )
}
