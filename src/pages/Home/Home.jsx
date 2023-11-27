import React from 'react';
import { Button } from './button';
import ScaleIdentification from '../../assets/svg/HomeScaleIdentification.svg';
import IntervalIdentification from '../../assets/svg/HomeIntervalIdentification.svg';
import ChordIdentification from '../../assets/svg/HomeChordIdentification.svg';
import VirtualPiano from '../../assets/svg/HomeVirtualPiano.svg';
import yellowGuy from '../../assets/svg/yellowGuy.svg'

export default function Home() {
  return (<div className='homeContainer'>
    <div className='contentContainer'>
        <div>
          <img src={yellowGuy} alt="little yelow creature" id = "yellowGuy"/>
        </div>
        <div className='text'>
          <h1 className='white'>Let's take </h1>
          <h1 className='orange'>a</h1>
          <br></br>
          <h1 className='orange'>game break!</h1>
          <p>
            <br></br>
            Test your skills with engaging games that
            <br></br>challenge your memory and rhythm recognition
            <br></br>while having some musical fun.
            <br></br>
            <br></br>Choose a game you want to play!</p>
        </div>
         </div>
         <div className='buttonContainer'>
          <Button icon={ScaleIdentification} title='Scale identification' tips = 'Identify the scale'></Button>
                <Button icon={IntervalIdentification} title ='Interval identification' tips = 'Identify the Interval on the staff'></Button>
                 <Button icon={ChordIdentification} title = 'Chrod identificaiton' tips = 'Identify the chord'></Button>
                <Button icon={VirtualPiano} title = 'Virtual piano' tips = 'Lorem ipsum dolor sit ammet'></Button>
                </div>
      </div>
      
          
  

  
 
  )
}
