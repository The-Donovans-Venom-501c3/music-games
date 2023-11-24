import React from 'react'
import yellowGuy from '../../assets/svg/yellowGuy.svg'
import "./Home.scss";

export default function Home() {
  return (

    <div className='homeContainer'>
      <div className='contentContainer'>
        <div>
          <img src={yellowGuy} alt="little yelow creature" />
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
    </div>
  )
}
