import "./QuizScreen.scss";
import music from "../../../assets/svg/Music_stand.svg";
import cat from "../../../assets/svg/Cat.svg";
import x from "../../../assets/svg/X.svg";
import pause from "../../../assets/svg/Pause.svg";
import play from '../../../assets/svg/Icon_Play.svg';
import restart from "../../../assets/svg/Restart.svg";
import GameFeatures from "../../../components/GameFeatures/GameFeatures";
import QuizSection from "../../../components/QuizSection/QuizSection";
import { useAtom, useSetAtom } from "jotai";
import { appStateAtom, overlayAtom, quizStateAtom, timerOnAtom } from "../../../store/atoms";
import { useEffect } from "react";

const QuizScreen = () => {
  const [quizState, setQuizState] = useAtom(quizStateAtom);
  const setOverlay = useSetAtom(overlayAtom);
  const [timerOn, setTimerOn] = useAtom(timerOnAtom);
  const setAppState = useSetAtom(appStateAtom);

  const handleExit = () => {
    setOverlay("exit");
    setQuizState("overlay");
  };

  const handlePause = () => {
    setTimerOn(!timerOn);
    setQuizState('popup');
  };

  const handleRestart = () => {
    setAppState('home');
  };

  useEffect(() => {
    if (quizState !== 'popup' && quizState !== 'overlay') {
      if (quizState === 'affirmation') {
        setTimerOn(false);
      } else {
        setTimerOn(true);
      }
    }

  }, [quizState])

  useEffect(()=>{

  })

  return (
    <div className="QuizScreenContainer">
      <div className="musicStand">
        <img id="music" src={music} width="100%" height="100%" />
      </div>

      <div className="catConatiner">
        <img id="cat" src={cat} />
      </div>

      <div className="GameScreen">
        <div className="setting">
          <button className="btnSetting btnRestart" onClick={handleRestart}>
            <img src={restart} />
            <span>RESTART</span>
          </button>
          <button className="btnSetting btnPause" onClick={handlePause}>
            <img src={timerOn ? pause : play} />
            <span>{timerOn ? "PAUSE" : "PLAY"}</span>
          </button>
          <button className="btnSetting btnexit" onClick={handleExit}>
            <img src={x} alt="x" />
          </button>
        </div>
        <div className="gameMain">
          <div className="left">
            <GameFeatures />
            <div className="line"></div>
          </div>
          <div className="right">
            <QuizSection />
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuizScreen;
