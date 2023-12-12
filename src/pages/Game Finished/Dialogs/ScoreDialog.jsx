import "./Dialogs.scss";
import character from "../../../assets/svg/Score_Character.svg";
import { useAtomValue, useSetAtom } from "jotai";
import {
  gameFinishedAtom,
  scoreAtom,
  totalQuestionsAtom,
  seconds,
} from "../../../store/atoms";

const scoreState = {
  perfect: {
    heading: "Amazing!",
    msg1: "You have successfully finished this game.",
    msg2: "Keep it up, SuperStar!",
  },
  high: {
    heading: "Amazing!",
    msg1: "You have successfully finished this game.",
    msg2: "Keep practicing to get the highest score!",
  },
  low: {
    heading: "Thank you for finishing this game.",
    msg1: "Let’s keep practicing!",
    msg2: "You might want to review the lessons, then try again next time. Let’s get minimum 80 to pass!",
  },
};

export default function ScoreDialog() {
  const setGameFinished = useSetAtom(gameFinishedAtom);
  const score = useAtomValue(scoreAtom);
  const totalQuestions = useAtomValue(totalQuestionsAtom);
  const timer = useAtomValue(seconds);

  const result = Math.floor((score / totalQuestions) * 100);
  const scoreData =
    scoreState[result == 100 ? "perfect" : result > 80 ? "high" : "low"];

  return (
    <div className="wrapper">
      <div className="content score-dialog centralized">
        <img src={character} alt="cat" className="cat" />
        <p className="centralized">
          <strong>{scoreData.heading}</strong>
          <span className="message">{scoreData.msg1}</span>
        </p>
        <section className="score-section centralized">
          <span className="score"> SCORE: {result}</span>
          <span className="score-message">{scoreData.msg2}</span>
          <span className="score-message">TIME ELAPSED : {timer} SECONDS</span>
        </section>
        <div className="button-container centralized">
          <button
            className="primary"
            onClick={() => setGameFinished("end-game")}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}
