import { useState ,useEffect} from 'react';
import './Popup.scss'
import start from '../../../assets/svg/Start.svg'
import pause from '../../../assets/svg/Pause.svg'
export default function Popup(props) {
  const [isDisable, setIsDisable] = useState(false);

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

  useEffect(() => {
    setIsDisable(props.disable)
  }, [props.disable])

  return (
    <div>
      { 
      isDisable ? null : 
      <div className='toast'>
            <div className={data[props.type].state}><img src={data[props.type].pic}/></div>
            <div className='textDialog'>
                <span>Game is {data[props.type].state}</span>
                <span>{data[props.type].sentence}</span>
            </div>
      </div>
      }
    </div>
  )
}
