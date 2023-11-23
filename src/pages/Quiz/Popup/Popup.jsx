import "./Popup.scss";
import start from "../../../assets/svg/Start.svg";
import pause from "../../../assets/svg/Pause.svg";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { popupAtom, quizStateAtom } from "../../../store/atoms";
import { useEffect } from "react";

const popupData = {
  pause: {
    state: "start",
    sentence: "Enjoy and have fun!",
    pic: start,
  },
  play: {
    state: "pause",
    sentence: "Click the Play button to resume the game",
    pic: pause,
  },
};

export default function Popup() {

  const setQuizState = useSetAtom(quizStateAtom);
  const popup = useAtomValue(popupAtom);

  useEffect(() => {
    if(popup === 'pause'){
      const timeout = setTimeout(() => {
        setQuizState('quiz'); 
      }, 1500);
  
      return () => clearTimeout(timeout);  
    }
  }, [popup])

  return (
    <div className="toast">
      <div className={popupData[popup].state}>
        <img src={popupData[popup].pic} />
      </div>
      <div className="textDialog">
        <span>Game is {popupData[popup].state}</span>
        <span>{popupData[popup].sentence}</span>
      </div>
    </div>
  );
}
