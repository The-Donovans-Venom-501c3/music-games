import './Welcome.scss'
import cat from '../../assets/SVGs/Welcome_Character.svg'
import polygon from '../../assets/SVGs/Welcome_Polygon.svg'
import checkGreen from '../../assets/SVGs/Check_Green.svg'
import padlockGrey from '../../assets/SVGs/Padlock_Grey.svg'
import padlockOrange from '../../assets/SVGs/Padlock_Orange.svg'

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
          <button className='easy'>
            <p>Easy</p>
            <img src={checkGreen} />
          </button>
          <button className='medium'>
            <p>Medium</p>
            <img src={padlockOrange} />
          </button>
          <button className='hard'>
            <p>Hard</p>
            <img src={padlockGrey} />
          </button>
        </div>
      </main>
    </div>
  )
}
