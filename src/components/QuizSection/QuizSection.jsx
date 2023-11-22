import "./QuizSection.scss";
import questionmark from "../../assets/svg/QuestionMark.svg";
import noteQuestionGraph from "../../assets/svg/NoteQuestionGraph.svg";
import sharp from "../../assets/svg/SharpSymbol.svg";
import bimol from "../../assets/svg/BimolSymbol.svg";
import { useMemo, useState } from 'react';
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { affirmationAtom, gameStateAtom, levelStateAtom, questionAtom, quizStateAtom } from "../../store/atoms";
import { getQuestions } from '../../utils/questions'


const notes = ["C", "D", "E", "F", "G", "A", "B"];

const symbols = [
  {
    name: ""
  },
  {
    name: "#",
    img: sharp,
  },
  {
    name: "♭",
    img: bimol,
  },
];

const QuizSection = () => {

  const game = useAtomValue(gameStateAtom);
  const level = useAtomValue(levelStateAtom);
  const [questionNum, setQuestionNum] = useAtom(questionAtom);

  const questions = useMemo(() => getQuestions(game, level), []);
  const currQuestion = questions[questionNum - 1];

  const setQuizState = useSetAtom(quizStateAtom);
  const setAffirmation = useSetAtom(affirmationAtom);
  const [attempts, setAttempts] = useState(1);

  const handleOptionClick = (option) => {
    if(option === currQuestion.correctOption){
      setAffirmation('success');
    } else if (attempts) {
      setAffirmation('tryAgain');
      setAttempts(attempts - 1);
    } else{
      setAffirmation('fail');
      setAttempts(1);
    }
    setQuizState('affirmation');
  };

  return (
    <div className="quizSection">
      <div className="quizNumber">
        <img src={questionmark} />
        <span>{questionNum}</span>
        <span>of</span>
        <span>{questions.length}</span>
      </div>
      <div className="noteQuestionnGraph">
        <img src={currQuestion.questionImage} />
      </div>
      <div className="questionText">
        <p>What note is shown?</p>
      </div>
      <div className="answerBtnFram">
        {symbols.map((symbol, index) =>
          notes.map((note, idx) => (
            <button key={idx} onClick={() => handleOptionClick(note + symbol.name)}>
              <span>{note}</span>
              {index != 0 ? (
                <img src={symbol.img} />
              ) : null}
            </button>
          ))
        )}
      </div>
    </div>
  );
};
export default QuizSection;
