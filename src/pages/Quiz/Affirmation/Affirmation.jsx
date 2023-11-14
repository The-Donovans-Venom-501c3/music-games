import React from 'react'
import { useAtomValue } from "jotai";
import { affirmationAtom } from "../../../store/atoms";
import successCharacter from '../../../assets/svg/Affirmation_Success_Character.svg'
import failCharacter from '../../../assets/svg/Affirmation_Fail_Character.svg'
import "./Affirmation.scss";
import { useState } from 'react';


export default function Affirmation() {
  const affirmation = useAtomValue(affirmationAtom)
  const [disable, setDisable] = useState(false)
  let sentence = ''
  let buttonText = ''
  let bgColor = ''
  let pic = ''

  if (affirmation === "success") {
    sentence = "Correct. Good job!"
    buttonText = 'CONTINUE'
    bgColor = '#CDE6CC'
    pic = successCharacter
  } else if (affirmation === "tryAgain") {
    sentence = "Oops, that's not the right answer. Sorry, we need to take one of your lives."
    buttonText = 'TRY AGAIN'
    bgColor = '#F6E892'
    pic = failCharacter
    document.documentElement.style.setProperty('--font-size', '10%')
  } else if (affirmation === "fail") {
    sentence = "The correct answer is"
    buttonText = 'CONTINUE'
    bgColor = '#FED2AA'
    pic = failCharacter
  } else {
    console.log(error)
  }

  return (
    disable ?
      <div /> :
      <html lang="en">
        <head>
          <meta charset="UTF-8" />

          <style>
            @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Noto+Sans:wght@100&display=swap');
          </style>

        </head>

        <body>
          <div className='container'>
            <div className='overlay'></div>
            < img src={pic} className="beater" />
            <div className='background-rectangle' style={{ backgroundColor: bgColor }}>

              {buttonText === "TRY AGAIN" ?
                <section className='tip-try-again'>{sentence}</section> :
                <section className='tip'>{sentence}</section>}

              <button className="ButtonResponse" id="ButtonResponse" onClick={() => { setDisable(true) }}>{buttonText}</button>
            </div>
            {/* <div className='affirmation-container'>
        
        </div> */}
          </div>
        </body>
      </html>


  )
}
