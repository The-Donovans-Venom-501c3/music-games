import data from '../data/data.json';

const gameIdx = { 'note': 0, 'key': 1, 'major-minor': 2, 'scale': 3 };
const levelIdx = { 'easy': 0, 'medium': 1, 'hard': 2 };

function getRandomQuestions(questions, number) {
  let ques = []; 
  for (let i = number; i > 0; i--) {
    const j = Math.floor((Math.random()*questions.length));
    console.log(`the random number is ${j}`);
    ques.push(questions[j]);
  }
  return ques;
}

export function getQuestions(game, level) {
  const gameData = data.musicGames[gameIdx[game]].levels
  const numOfQuestionsPerLevel = gameData[levelIdx[level]].numberOfQuestions;
  const questions = [];

  for (const [level, numQuestions] of Object.entries(numOfQuestionsPerLevel)) {
    questions.push(...getRandomQuestions(gameData[levelIdx[level]].questions, numQuestions));
  }

  return getRandomQuestions(questions , questions.length);
}


