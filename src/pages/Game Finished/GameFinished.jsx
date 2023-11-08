import React from 'react'
import './GameFinished.scss'

import PlayAgainDialog from './Dialogs/PlayAgainDialog'
import ScoreDialog from './Dialogs/ScoreDialog'

export default function GameFinished() {
  return (
    <div className='game-finished'>
      <PlayAgainDialog />
      {/* <ScoreDialog /> */}
    </div>
  )
}
