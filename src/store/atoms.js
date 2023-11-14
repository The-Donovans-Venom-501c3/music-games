import { atom } from 'jotai'

export const appStateAtom = atom("welcome");
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
export const timerAtom = atom(0);  // starts from 0 and keeps incrementing
export const livesAtom = atom(3); // starts from 3, decrements till 0
export const questionAtom = atom(1); // goes till the last question
export const scoreAtom = atom(0); // min = 0, max = no. of questions