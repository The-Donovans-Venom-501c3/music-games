import './Overlay.scss'
import cryingCat from '../../../assets/svg/cryingCat.svg'
import BrokenCat from '../../../assets/svg/BrokenCat.svg'
import { useState, useEffect } from 'react'
export default function Overlay(props) {
  const [isDisable, setIsDisable] = useState(false);

  const component = { 
    lives: {
      cat:             BrokenCat,
      question:        'Are you sure you want to exit?',
      sentence:        'Exiting the game before you finish will reset your progress.',
      id_btn:          'btn-red',
      white_btn_txt:   'KEEP PLAYING',
      colour_btn_txt:  'EXIT'
    },
    exit: {
      cat:             cryingCat,
      question:        'You ran out of lives!',
      sentence:        'Let\’s review your lessons and try again tomorrow.',
      id_btn:          'btn-purple',
      white_btn_txt:   'SEE OTHER GAMES',
      colour_btn_txt:  'REVIEW LESSONS'
    }
    
  }

  function close() {
    setIsDisable(true)
  }
  useEffect(() => {
    setIsDisable(props.disable)
  }, [props.disable])
  return (
    <div>
      { 
      isDisable ? null : 
      <div className='dialog'>
               <div className='cat'><img src={component[props.state].cat}/></div>
               <div className='textDialog'>
                   <span>{component[props.state].question}</span>
                   <span id='text'>{component[props.state].sentence}</span>
               </div>
               <div className='btnDialog'>
                   <button id='btn-white' onClick={close}>{component[props.state].white_btn_txt}</button>
                  <button id={component[props.state].id_btn} onClick={close}>{component[props.state].colour_btn_txt}</button>
               </div>
      </div>
      }
    </div>
  )
}
