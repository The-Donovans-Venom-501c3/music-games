import "./QuizScreen.scss";
import music from "../../../assets/svg/Music_stand.svg";
import cat from "../../../assets/svg/Cat.svg";
import x from "../../../assets/svg/X.svg";
import pause from "../../../assets/svg/Pause.svg";
import play from '../../../assets/svg/Icon_Play.svg';
import restart from "../../../assets/svg/Restart.svg";
import GameFeatures from "../../../components/GameFeatures/GameFeatures";
import QuizSection from "../../../components/QuizSection/QuizSection";
import { useSetAtom } from "jotai";
import { overlayAtom, popupAtom, quizStateAtom, timerAtom } from "../../../store/atoms";
import { useState } from "react";

const QuizScreen = () => {
  const setQuizState = useSetAtom(quizStateAtom);
  const setOverlay = useSetAtom(overlayAtom);
  const setPopup = useSetAtom(popupAtom);

  const [isPaused, setIsPaused] = useState(false);
  const setTimer = useSetAtom(timerAtom);

  const handleExit = () => {
    setOverlay("exit");
    setQuizState("overlay");
  };

  const handlePause = () => {
    if(isPaused){
      setPopup('pause');
      setTimer(true);
    } else{
      setPopup('play');
      setTimer(false);
    }
    setIsPaused(!isPaused);
    setQuizState('popup');
  };

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
          <button className="btnSetting btnRestart">
            <img src={restart} />
            <span>RESTART</span>
          </button>
          <button className="btnSetting btnPause" onClick={handlePause}>
            <img src={!isPaused ? pause : play} />
            <span>{!isPaused ? "PAUSE" : "PLAY"}</span>
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
