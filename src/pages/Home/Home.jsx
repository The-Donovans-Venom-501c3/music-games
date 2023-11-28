import React from 'react';
import { Button } from './button';
import ScaleIdentification from '../../assets/svg/HomeScaleIdentification.svg';
import HoverScaleIdentification from '../../assets/svg/HoverScaleIdentification.svg';
import IntervalIdentification from '../../assets/svg/HomeIntervalIdentification.svg';
import HoverIntervalIdentification from '../../assets/svg/HoverIntervalIdentification.svg';
import ChordIdentification from '../../assets/svg/HomeChordIdentification.svg';
import HoverChordIdentification from '../../assets/svg/HoverChordIdentification.svg';
import VirtualPiano from '../../assets/svg/HomeVirtualPiano.svg';
import HoverVirtualPiano from '../../assets/svg/HoverVirtualPiano.svg';
import yellowGuy from '../../assets/svg/yellowGuy.svg'

export default function Home() {
  return (<div className='homeContainer'>
    <div className='contentContainer'>
      <div>
        <img src={yellowGuy} alt="little yelow creature" id="yellowGuy" />
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
      <Button
        icon={ScaleIdentification}
        hoverIcon={HoverScaleIdentification}
        title='Scale identification'
        tips='Identify the scale' 
        hoverColor="#D8BCFD"
        hoverBorderColor="#C986FA"/>
      <Button
        icon={IntervalIdentification}
        hoverIcon={HoverIntervalIdentification}
        title='Interval identification'
        tips='Identify the Interval on the staff'
        hoverColor="#F6AD69" 
        hoverBorderColor="#E98427"/>
      <Button
        icon={ChordIdentification}
        hoverIcon={HoverChordIdentification}
        title='Chrod identificaiton'
        tips='Identify the chord'
        hoverColor="#F8D867" 
        hoverBorderColor="#E9BB18"/>
      <Button
        icon={VirtualPiano}
        hoverIcon={HoverVirtualPiano}
        title='Virtual piano'
        tips='Lorem ipsum dolor sit ammet' 
        hoverColor="#75C973"
        hoverBorderColor="#519750
"/>
    </div>
  </div>






  )
}
