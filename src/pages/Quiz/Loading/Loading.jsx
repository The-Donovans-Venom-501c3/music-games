import React, { useEffect } from 'react'
import './Loading.scss'
import character from '../../../assets/svg/Loading_Character.svg'
import { useSetAtom } from 'jotai'
import { loadingStateAtom, quizStateAtom } from '../../../store/atoms'
export default function Loading() {

  const setLoadingState = useSetAtom(loadingStateAtom);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingState('quiz'); 
    }, 3000);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <div className='loadingContainer'>
    <div className='loading'>
      <img src={character} />
      <section>
        <h1>Get Ready for Awesomeness!</h1>
        <p>For each mission, you will be shown a music note.</p>
        <p>Choose one correct answer from options given.</p>
      </section>
      <section>
        <span>Directing you to the game in a minute...</span>
        <div className="loader">
          <div className="circle">
            <div className="shine"></div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}