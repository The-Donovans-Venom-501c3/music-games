import React from 'react'
import './GameFinished.scss'

import NextLevelCard from '../../components/Cards/NextLevelCard'
import PlayAgainCard from '../../components/Cards/PlayAgainCard'
import ScoreCard from '../../components/Cards/ScoreCard'

export default function GameFinished() {
  return (
    <div>
      {/* <NextLevelCard /> */}
      {/* <PlayAgainCard /> */}
      <ScoreCard />
    </div>
  )
}
