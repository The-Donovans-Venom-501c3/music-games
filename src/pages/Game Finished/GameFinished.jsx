import React from 'react'
import './GameFinished.scss'

import NextLevelDialog from '../../components/Dialogs/NextLevelDialog'
import PlayAgainDialog from '../../components/Dialogs/PlayAgainDialog'
import ScoreDialog from '../../components/Dialogs/ScoreDialog'
import StreakDialog from '../../components/Dialogs/StreakDialog'

export default function GameFinished() {
  return (
    <div>
      {/* <NextLevelDialog /> */}
      {/* <PlayAgainDialog /> */}
      {/* <ScoreDialog /> */}
      <StreakDialog />
    </div>
  )
}
