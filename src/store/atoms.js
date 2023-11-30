import { atom } from 'jotai'

export const gameStateAtom = atom('major-minor');
/*
Possible Game states:
1) Initial State: none
2) note : Note Identification Game
3) key : Key Signature Identification Game
4) major-minor : major-minor Identification Game
5) scale : Scale Identification Game
*/

export const appStateAtom = atom("welcome");
/*
Possible App states:
1) home : Home Page
2) welcome : Welcome Page
3) quiz : Quiz Page
4) game-finished : Game Finished State
*/

export const levelStateAtom = atom('');
/*
Possible Level states:
1) Initial State: none
2) easy : Easy level
3) medium : Medium level
4) hard : Hard Level
*/

export const loadingStateAtom = atom("loading");
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

export const correctOptionAtom = atom(''); // contains correct option for a question

export const overlayAtom = atom('');
/*
Possible Overlay states:
1) lives : Lives Over overlay
2) exit : Exit Game overlay
*/

export const timerOnAtom = atom(true);  // true when time is running, false when not

export const livesAtom = atom(3); // starts from 3, decrements till 0

export const questionAtom = atom(1); // goes till the last question

export const totalQuestionsAtom = atom(0); // total number of questions

export const scoreAtom = atom(0); // min = 0, max = no. of questions

export const musicStateAtom = atom(false); // true when music is playing, false when not

export const gameFinishedAtom = atom('score');
/*
Possible Game Finished states:
1) score : Score Dialog
2) end-game : Play Again Dialog
*/