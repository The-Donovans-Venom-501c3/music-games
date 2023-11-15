import { useState ,useEffect} from 'react';
import './Popup.scss'
import start from '../../../assets/svg/Start.svg'
import pause from '../../../assets/svg/Pause.svg'
export default function Popup() {
  const [isDisable, setIsDisable] = useState(false);
  const [defaultValue, setDefaultValue] = useState('start');

  const data = {
    start: {
      state: 'start',
      sentence: 'Enjoy and have fun!',
      pic: start,
    },
    pause: {
      state: 'pause',
      sentence: 'Click the Play button to resume the game',
      pic: pause,
    }
  }

  return (
    <div>
      { 
      isDisable ? null : 
      <div className='toast'>
            <div className={data[defaultValue].state}><img src={data[defaultValue].pic}/></div>
            <div className='textDialog'>
                <span>Game is {data[defaultValue].state}</span>
                <span>{data[defaultValue].sentence}</span>
            </div>
      </div>
      } 
    </div>
  )
}
