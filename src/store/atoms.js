import { atom } from 'jotai'

export const appStateAtom = atom("home");
/*
Possible App states:
1) home : Home Page
2) welcome : Welcome Page
3) quiz : Quiz Page
4) game-finished : Game Finished State
*/

export const gameStateAtom = atom('');
/*
Possible Game states:
1) Initial State: none
2) note : Note Identification Game
3) key : Key Signature Identification Game
4) chord : Chord Identification Game
5) scale : Scale Identification Game
*/

export const levelStateAtom = atom('easy');
/*
Possible Level states:
1) Initial State: none
2) easy : Easy level
3) medium : Medium level
4) hard : Hard Level
*/

export const loadingStateAtom = atom("quiz");
/*
Possible Loading states:
1) loading
2) quiz
*/

export const quizStateAtom = atom("quiz");
/*
Possible Quiz states:
1) quiz
2) affirmation
3) overlay
4) popup
*/

export const affirmationAtom = atom('');
/*
Possible Affirmation states:
1) success
2) fail
3) tryAgain
*/

export const overlayAtom = atom('');
/*
Possible Overlay states:
1) lives : Lives Over overlay
2) exit : Exit Game overlay
*/

export const popupAtom = atom('');
/*
Possible Overlay states:
1) play : Game resumes
2) pause : Game Paused
*/

export const timerAtom = atom(true);  // true when time is running, false when not

export const livesAtom = atom(3); // starts from 3, decrements till 0

export const questionAtom = atom(1); // goes till the last question

export const totalQuestionsAtom = atom(0); // total number of questions

export const scoreAtom = atom(0); // min = 0, max = no. of questions