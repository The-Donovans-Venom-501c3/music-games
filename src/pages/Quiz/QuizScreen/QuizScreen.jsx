import "./QuizScreen.scss";
import music from "../../../assets/svg/Music_stand.svg";
import cat from "../../../assets/svg/Cat.svg";
import x from "../../../assets/svg/X.svg";
import pause from "../../../assets/svg/Pause.svg";
import play from "../../../assets/svg/Icon_Play.svg";
import restart from "../../../assets/svg/Restart.svg";
import questionMark from "../../../assets/svg/QuestionMark.svg";
import GameFeatures from "../../../components/GameFeatures/GameFeatures";
import QuizSection from "../../../components/QuizSection/QuizSection";
import { useAtom, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import {
  overlayAtom,
  quizStateAtom,
  timerOnAtom,
  popupAtom,
  musicStateAtom,
} from "../../../store/atoms";

const cheerup_dialogs = [
  "Practice makes Perfect!",
  "Keep Going",
  "You've got this!",
];

const QuizScreen = () => {
  const [quizState, setQuizState] = useAtom(quizStateAtom);
  const [popup, setPopup] = useAtom(popupAtom);
  const setOverlay = useSetAtom(overlayAtom);
  const [timerOn, setTimerOn] = useAtom(timerOnAtom);
  const [musicOn, setMusicOn] = useAtom(musicStateAtom);
  const [currentDialogIndex, setCurrentDialogIndex] = useState(null);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = Math.floor(Math.random() * cheerup_dialogs.length);
      setCurrentDialogIndex(newIndex);
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 1000);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const handleExit = () => {
    setOverlay("exit");
    setQuizState("overlay");
  };

  const handlePause = () => {
    setTimerOn(!timerOn);
    setPopup("pause");
    setQuizState("popup");
    setMusicOn(false);
  };

  const handleRestart = () => {
    setOverlay("restart");
    setQuizState("overlay");
  };

  const handleRuleModal = () => {
    setTimerOn(false);
    setQuizState("rules");
  };

  useEffect(() => {
    if (quizState !== "quiz") {
      setTimerOn(false);
    } else {
      setTimerOn(true);
    }
  }, [quizState]);

  return (
    <div className="QuizScreenContainer">
      <div className="lights-backdrop">
        <div className="lights">
          <div
            className="light"
            style={{
              animation: "bubbleMovement1 2s ease-in-out infinite alternate",
            }}
          ></div>
          <div
            className="light"
            style={{
              animation: "bubbleMovement2 2s ease-in-out infinite alternate",
            }}
          ></div>
          <div
            className="light"
            style={{
              animation: "bubbleMovement3 2s ease-in-out infinite alternate",
            }}
          ></div>
          <div
            className="light"
            style={{
              animation: "bubbleMovement4 2s ease-in-out infinite alternate",
            }}
          ></div>
          <div
            className="light"
            style={{
              animation: "bubbleMovement5 2s ease-in-out infinite alternate",
            }}
          ></div>
          <div
            className="light"
            style={{
              animation: "bubbleMovement6 2s ease-in-out infinite alternate",
            }}
          ></div>
          <div
            className="light"
            style={{
              animation: "bubbleMovement7 2s ease-in-out infinite alternate",
            }}
          ></div>
          <div
            className="light"
            style={{
              animation: "bubbleMovement8 2s ease-in-out infinite alternate",
            }}
          />
          <div
            className="light"
            style={{
              animation: "bubbleMovement9 2s ease-in-out infinite alternate",
            }}
          />
          <div
            className="light"
            style={{
              animation: "bubbleMovement10 2s ease-in-out infinite alternate",
            }}
          />
          <div
            className="light"
            style={{
              animation: "bubbleMovement11 2s ease-in-out infinite alternate",
            }}
          />
          <div
            className="light"
            style={{
              animation: "bubbleMovement12 2s ease-in-out infinite alternate",
            }}
          />
          <div
            className="light"
            style={{
              animation: "bubbleMovement13 2s ease-in-out infinite alternate",
            }}
          />
          <div
            className="light"
            style={{
              animation: "bubbleMovement14 2s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>

      <div className="musicStand">
        <img id="music" src={music} width="100%" height="100%" />
      </div>

      <div className="GameScreen">
        <div className="catConatiner">
          {showBubble && (
            <div id="chat_bubble" className="fade-in">
              <h4 id="chat_bubble_text">
                {cheerup_dialogs[currentDialogIndex]}
              </h4>
            </div>
          )}
          <img id="cat" src={cat} />
        </div>
        <div className="setting">
          <button className="btnIcon" onClick={handleRuleModal}>
            <img className="icon-questionMark" src={questionMark} />
          </button>

          <button className="btnSetting btnRestart" onClick={handleRestart}>
            <img src={restart} />
            <span>RESTART</span>
          </button>
          <button className="btnSetting btnPause" onClick={handlePause}>
            <img src={timerOn ? pause : play} />
            <span>{timerOn ? "PAUSE" : "PLAY"}</span>
          </button>
          <button
            className=" 
          btnExit"
            onClick={handleExit}
          >
            <img className="icon-x" src={x} alt="x" />
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
