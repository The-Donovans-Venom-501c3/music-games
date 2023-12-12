import './GameFinished.scss'
import PlayAgainDialog from './Dialogs/PlayAgainDialog';
import ScoreDialog from './Dialogs/ScoreDialog';
import { useAtomValue } from 'jotai';
import { gameFinishedAtom } from '../../store/atoms';
// import NextLevel from './Dialogs/NextLevelDialog';
// import SteakDialog from './Dialogs/StreakDialog';  

export default function GameFinished() {

  const gameFinished = useAtomValue(gameFinishedAtom);

  return (
    <div className='game-finished'>
      {gameFinished === 'score' ? <ScoreDialog />  : <PlayAgainDialog />}      
    </div>
  )
}
