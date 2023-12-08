import "./QuizSection.scss";
import questionmark from "../../assets/svg/QuestionMark.svg";
import Options from './Options/Options';
import { useMemo, useState } from 'react';
import { useAtomValue, useSetAtom } from "jotai";
import { affirmationAtom, correctOptionAtom, gameStateAtom, levelStateAtom, livesAtom, questionAtom, quizStateAtom, totalQuestionsAtom } from "../../store/atoms";
import { getQuestions } from '../../utils/questions'


const QuizSection = () => {

  const game = useAtomValue(gameStateAtom);
  const level = useAtomValue(levelStateAtom);
  const questionNum = useAtomValue(questionAtom);

  const questions = useMemo(() => getQuestions(game, level), []);
  const currQuestion = questions[questionNum - 1];

  const setTotalQuestions = useSetAtom(totalQuestionsAtom);
  const totalQuestions = useMemo(() => {
    return questions.length;
  }, [questions]);
  setTotalQuestions(totalQuestions);

  const setCorrectOption = useSetAtom(correctOptionAtom);
  setCorrectOption(currQuestion.correctOption);

  const setQuizState = useSetAtom(quizStateAtom);
  const setAffirmation = useSetAtom(affirmationAtom);
  const lives = useAtomValue(livesAtom);

  const handleOptionClick = (option) => {
    if (option === currQuestion.correctOption) {
      setAffirmation('success');
    } else if (lives > 1) {
      setAffirmation('tryAgain');
    } else {
      setAffirmation('fail');
    }
    setQuizState('affirmation');
  };

  const displayTextIdx = { 'note': 0, 'key': 1, 'major-minor': 2, 'scale': 3 };
  const displayTextArr = ['What note is shown?', 'What key signature is shown?', 'What  major/minor is shown?', 'What scale is shown?'];

  const displayText = displayTextArr[displayTextIdx[game]];

  return (
    <div className="quizSection">
      <div className="quizNumber">
        <img src={questionmark} />
        <span>{questionNum}</span>
        <span>of</span>
        <span>{totalQuestions}</span>
      </div>
      <div className="noteQuestionnGraph">
        <img src={currQuestion.questionImage} />
      </div>
      <div className="questionText">
        <p>{displayText}</p>
        <Options handleOptionClick={handleOptionClick} />
      </div>
    </div>
  );
};
export default QuizSection;
