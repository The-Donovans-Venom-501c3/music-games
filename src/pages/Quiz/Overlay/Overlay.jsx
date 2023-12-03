import "./Overlay.scss";
import cryingCat from "../../../assets/svg/cryingCat.svg";
import BrokenCat from "../../../assets/svg/BrokenCat.svg";
import { useAtomValue, useSetAtom } from "jotai";
import { appStateAtom, overlayAtom, quizStateAtom } from "../../../store/atoms";

const overlay = {
  exit: {
    cat: BrokenCat,
    question: "Are you sure you want to exit?",
    sentence: "Exiting the game before you finish will reset your progress.",
    id_btn: "btn-red",
    white_btn_txt: "KEEP PLAYING",
    colour_btn_txt: "EXIT",
  },
  lives: {
    cat: cryingCat,
    question: "You ran out of lives!",
    sentence: "Let’s review your lessons and try again tomorrow.",
    id_btn: "btn-purple",
    white_btn_txt: "SEE OTHER GAMES",
    colour_btn_txt: "REVIEW LESSONS",
  },
};

export default function Overlay() {

  const overlayState = useAtomValue(overlayAtom);
  const setAppState = useSetAtom(appStateAtom);
  const setQuizState = useSetAtom(quizStateAtom);

  const handleButton1 = () => {
    if(overlayState == 'lives'){
      setAppState('home');
    } else {
      setQuizState('quiz');
    }
  };

  const handleButton2 = () => {
    if(overlayState === 'lives'){
      window.location.href = 'https://thedonovanspianoroom.com/bookshelf/';
    } else {
      setAppState('home');
    }
  };

  return (
      <div className="dialog">
        <div className="cat">
          <img src={overlay[overlayState].cat} />
        </div>
        <div className="textDialog">
          <span>{overlay[overlayState].question}</span>
          <span id="text">{overlay[overlayState].sentence}</span>
        </div>
        <div className="btnDialog">
          <button id="btn-white" onClick={handleButton1}>
            {overlay[overlayState].white_btn_txt}
          </button>
          <button
            className="overlay-btn"
            id={overlay[overlayState].id_btn}
            onClick={handleButton2}
          >
            {overlay[overlayState].colour_btn_txt}
          </button>
        </div>
      </div>
  );
}
