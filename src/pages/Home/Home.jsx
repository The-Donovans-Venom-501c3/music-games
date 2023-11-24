import React from 'react';
import { Button } from './button';
import ScaleIdentification from '../../assets/svg/HomeScaleIdentification.svg';
import IntervalIdentification from '../../assets/svg/HomeIntervalIdentification.svg';
import ChordIdentification from '../../assets/svg/HomeChordIdentification.svg';
import VirtualPiano from '../../assets/svg/HomeVirtualPiano.svg';

export default function Home() {
  return (<div>
          <Button icon={ScaleIdentification} title='Scale identification' tips = 'Identify the scale'></Button>
          <Button icon={IntervalIdentification} title ='Interval identification' tips = 'Identify the Interval on the staff'></Button>
          <Button icon={ChordIdentification} title = 'Chrod identificaiton' tips = 'Identify the chord'></Button>
          <Button icon={VirtualPiano} title = 'Virtual piano' tips = 'Lorem ipsum dolor sit ammet'></Button>
        </div>
 
  )
}
