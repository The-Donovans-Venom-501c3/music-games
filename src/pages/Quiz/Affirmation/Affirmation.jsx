import React from 'react'
import './Affirmation.scss'
import successCharacter from '../../../assets/svg/Affirmation_Success_Character.svg'
import failCharacter from '../../../assets/svg/Affirmation_Fail_Character.svg'
import Button from '../../../components/Button/Button'

export default function Affirmation(props) {
  let sentence = ''
  let buttonText = ''
  let bgColor = ''
  let pic = ''
  if (props.status === 'success') {
    sentence = "Correct, Good job!"
    buttonText = 'CONTINUE'
    bgColor = '#CDE6CC'
    pic = successCharacter
  } else if (props.status === 'tryAgain') {
    sentence = "Oops, that's not the right answer. Sorry, we need to take one of your lives."
    buttonText = 'TRY AGAIN'
    bgColor = '#F6E892'
    pic = failCharacter
  } else if (props.status === 'fail') {
    sentence = "The correct answer is G"
    buttonText = 'CONTINUE'
    bgColor = '#FED2AA'
    pic = failCharacter
  } else {
    console.log('error')
  }


  return (
    <div className='container'>
      <div className='overlay'></div>
      <div className='background-rectangle' style={{ backgroundColor: bgColor }}></div>
      <div className='affirmation-container'>
        < img src={pic} />
        <section className='tip'>{sentence}</section>

        <Button text={buttonText} />
      </div>
    </div>

  )
}