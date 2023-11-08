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