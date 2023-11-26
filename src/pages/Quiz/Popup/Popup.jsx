import "./Popup.scss";
import start from "../../../assets/svg/Start.svg";
import pause from "../../../assets/svg/Pause.svg";
import { useAtomValue, useSetAtom } from "jotai";
import { quizStateAtom, timerOnAtom } from "../../../store/atoms";
import { useEffect } from "react";

const popupData = {
  play: {
    class: "start",
    state: "resumed",
    sentence: "Enjoy and have fun!",
    pic: start,
  },
  pause: {
    class: "pause",
    state: "paused",
    sentence: "Click the Play button to resume the game",
    pic: pause,
  },
};

export default function Popup() {

  const setQuizState = useSetAtom(quizStateAtom);
  const timerOn = useAtomValue(timerOnAtom);
  let popup = timerOn ? "play" : "pause";

  useEffect(() => {
    if(timerOn){
      const timeout = setTimeout(() => {
        setQuizState('quiz'); 
      }, 1500);
  
      return () => clearTimeout(timeout);  
    }
  }, [timerOn])

  return (
    <div className="toast">
      <div className={popupData[popup].class}>
        <img src={popupData[popup].pic} />
      </div>
      <div className="textDialog">
        <span>Game is {popupData[popup].state}</span>
        <span>{popupData[popup].sentence}</span>
      </div>
    </div>
  );
}
