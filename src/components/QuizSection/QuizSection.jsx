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
  currentCorrectOptionAtom,
  resetTimerAtom,
  hasAnsweredWrongAtom,
} from "../../store/atoms";
import { getQuestions } from "../../utils/questions";
import { DndContext } from '@dnd-kit/core';
import { Draggable } from './Options/ReadingOptions/Draggable';
import { Droppable } from './Options/ReadingOptions/Droppable';
import React from 'react';


const QuizSectionReading = () => {
  const level = useAtomValue(levelStateAtom);
  const resetTimer = useAtomValue(resetTimerAtom);
  const [questionNum, setQuestionNum] = useAtom(questionAtom);
  const questions = useMemo(() => getQuestions("reading", level), [resetTimer]);

  const currQuestion = questions[questionNum - 1];

  const setTotalQuestions = useSetAtom(totalQuestionsAtom);
  const totalQuestions = useMemo(() => {
    return questions.length;
  }, [questions]);
  setTotalQuestions(totalQuestions);

  const setCorrectOptions = useSetAtom(correctOptionAtom);
  setCorrectOptions(currQuestion.correctOption);
  
  const setQuizState = useSetAtom(quizStateAtom);
  const setAffirmation = useSetAtom(affirmationAtom);

  const setScore = useSetAtom(scoreAtom);
  const setAppState = useSetAtom(appStateAtom);
  const [hasAnsweredWrong, setHasAnsweredWrong] = useAtom(hasAnsweredWrongAtom);

  const lives = useAtomValue(livesAtom);

  const sentence = currQuestion.sentence.replace(' ', '  ')
  const sentenceParts = sentence.split('_');
  const numBlanks = sentenceParts.length - 1;
  const [parents, setParents] = useState(Array(numBlanks).fill(null));
  const [droppedNotes, setDroppedNotes] = useState(Array(numBlanks).fill(null));
  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (!over) {
        return;
    }
    if (!over.id.startsWith('droppable')) {
        return;
    }


    const droppableIndex = parseInt(over.id.replace('droppable-', ''), 10);
    const updatedDroppedNotes = [...droppedNotes];
    updatedDroppedNotes[droppableIndex] = active.id.replace('draggable-', '');
    const updatedParents = [...parents];
    updatedParents[droppableIndex] = over.id;
    setParents(updatedParents);
    setDroppedNotes(updatedDroppedNotes);


    if (updatedDroppedNotes.filter(note => note !== null).length === numBlanks) {
      const correct = updatedDroppedNotes.join(',').toLowerCase() === currQuestion.correctOption;
      if (correct) {
        if (!hasAnsweredWrong) {
          setScore(prevScore => prevScore + Math.floor((1 / totalQuestions) * 100));
        }
        setHasAnsweredWrong(false);
        if (level !== "hard") {
          setAffirmation("success");
          setQuizState("affirmation");
        } else {
          if (questionNum === totalQuestions) {
            setAppState("game-finished");
            setQuestionNum(1);
          } else {
            setQuestionNum(questionNum + 1);
          }
        }
      } else if (lives > 1) {
        setAffirmation("tryAgain");
        setQuizState("affirmation");
        setHasAnsweredWrong(true);
      } else {
        setAffirmation("fail");
        setQuizState("affirmation");
      }
      setParents(Array(numBlanks).fill(null));
      setDroppedNotes(Array(numBlanks).fill(null));
    }
  }

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
        <p>Can you find the missing letters?</p>
        <DndContext onDragEnd={handleDragEnd}>
          <div id="sentence">
            {sentenceParts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < sentenceParts.length - 1 && (
                  <Droppable id={`droppable-${index}`}>
                    {parents[index] === `droppable-${index}` ? droppedNotes[index] : "__"}
                  </Droppable>
                )}
              </React.Fragment>
            ))}
          </div>
          <Options displayText="Can you find the missing letters?" currQuestion={currQuestion} />
        </DndContext>
      </div>
    </div>
  );
}

const QuizSection = () => {
  const game = useAtomValue(gameStateAtom);
  if (game === "reading") {
    return <QuizSectionReading />;
  }

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

  const setcurrentCorrectOption = useSetAtom(currentCorrectOptionAtom);

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
    reading: 8,
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
    "Can you find the missing letters?",
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