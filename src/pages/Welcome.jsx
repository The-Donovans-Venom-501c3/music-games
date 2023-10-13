import './Welcome.scss'
import cat from '../assets/SVGs/Cat.svg'

export default function Welcome() {
  return (
    <div className='welcome'>
      <h1>Welcome to the <span>Note Identification Game</span></h1>
      <main>
        <div className="intro">
            <div className="bubble"></div>
            <img src={cat} alt="Crescendo" />
        </div>
        <div className="levels">
            <button><div></div></button>
            <button><div></div></button>
            <button><div></div></button>
        </div>
      </main>
    </div>
  )
}
