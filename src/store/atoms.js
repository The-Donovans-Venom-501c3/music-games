import { atom } from 'jotai'

export const appStateAtom = atom("welcome");
export const loadingStateAtom = atom("loading");
export const quizStateAtom = atom("quiz");
/*
Possible Quiz states:
1) quiz
2) affirmation
3) overlay
4) popup
*/
