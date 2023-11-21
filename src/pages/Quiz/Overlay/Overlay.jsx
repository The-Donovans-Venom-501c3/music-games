import './Overlay.scss'
import cryingCat from '../../../assets/svg/cryingCat.svg'
import BrokenCat from '../../../assets/svg/BrokenCat.svg'
import { useState, useEffect } from 'react'

export default function Overlay() {
  const [isDisable, setIsDisable] = useState(false);
  const [defaultValue, setDefaultValue] = useState('lives');

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

  return (
    <div>
      { 
      isDisable ? null : 
      <div className='dialog'>
               <div className='cat'><img src={component[defaultValue].cat}/></div>
               <div className='textDialog'>
                   <span>{component[defaultValue].question}</span>
                   <span id='text'>{component[defaultValue].sentence}</span>
               </div>
               <div className='btnDialog'>
                   <button id='btn-white' onClick={close}>{component[defaultValue].white_btn_txt}</button>
                  <button id={component[defaultValue].id_btn} onClick={close}>{component[defaultValue].colour_btn_txt}</button>
               </div>
      </div>
      }
    </div>
  )
}
