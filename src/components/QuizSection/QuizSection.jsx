import "./QuizSection.scss";
import Options from "./Options/Options";
import { useMemo, useState } from "react";
import { useAtomValue, useSetAtom, useAtom } from "jotai";
import {
  affirmationAtom,
  correctOptionAtom,
  gameStateAtom,
  levelStateAtom,
  livesAtom,
  questionAtom,
  quizStateAtom,
  totalQuestionsAtom,
  scoreAtom,
  appStateAtom,
  currentCorrectOtionAtom,
  resetTimerAtom,
  hasAnsweredWrongAtom,
} from "../../store/atoms";
import { getQuestions } from "../../utils/questions";

const QuizSection = () => {
  const game = useAtomValue(gameStateAtom);
  const level = useAtomValue(levelStateAtom);
  const resetTimer = useAtomValue(resetTimerAtom);
  const [questionNum, setQuestionNum] = useAtom(questionAtom);
  const questions = useMemo(() => getQuestions(game, level), [resetTimer]);

  const currQuestion = questions[questionNum - 1];

  const setTotalQuestions = useSetAtom(totalQuestionsAtom);
  const totalQuestions = useMemo(() => {
    return questions.length;
  }, [questions]);
  setTotalQuestions(totalQuestions);

  const setCorrectOption = useSetAtom(correctOptionAtom);
  setCorrectOption(currQuestion.correctOption);

  const setcurrentCorrectOption = useSetAtom(currentCorrectOtionAtom);

  const setQuizState = useSetAtom(quizStateAtom);
  const setAffirmation = useSetAtom(affirmationAtom);
  const setScore = useSetAtom(scoreAtom);
  const setAppState = useSetAtom(appStateAtom);
  const [hasAnsweredWrong, setHasAnsweredWrong] = useAtom(hasAnsweredWrongAtom);

  const lives = useAtomValue(livesAtom);

  const handleOptionClick = (option) => {
    setcurrentCorrectOption(currQuestion.correctOption);
    if (option === currQuestion.correctOption) {
      if (!hasAnsweredWrong) {
        setScore(prevScore => prevScore + Math.floor((1 / totalQuestions) * 100));
      }
      setHasAnsweredWrong(false);
      if (level !== "hard") {
        setAffirmation("success");
        setQuizState("affirmation");
      } else {
        // setScore((prev) => prev + calculatedScore);
        if (questionNum === totalQuestions) {
          setAppState("game-finished");
          setQuestionNum(1);
        } else {
          setQuestionNum(questionNum + 1);
        }
      }
    } else if (option && lives > 1) {
      setAffirmation("tryAgain");
      setQuizState("affirmation");
      setHasAnsweredWrong(true);
    } else {
      setAffirmation("fail");
      setQuizState("affirmation");
    }
  };

  const displayTextIdx = {
    note: 0,
    key: 1,
    "major-minor": 2,
    scale: 3,
    interval: 4,
    chord: 5,
    ledger: 7,
  };
  const displayTextArr = [
    "What note is shown?",
    "What key signature is shown?",
    "What  major/minor is shown?",
    "What scale is shown?",
    "what interval is shown?",
    "What chord is shown?",
    '',
    "What ledger line is shown?",
  ];

  const displayText = displayTextArr[displayTextIdx[game]];

  return (
    <div className="quizSection">
      <div className="quizNumber">
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