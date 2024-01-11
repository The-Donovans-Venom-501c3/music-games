import data from '../data/data.json';
const gameIdx = { note: 0, key: 1, 'major-minor': 2, scale: 3 };
const levelIdx = { easy: 0, medium: 1, hard: 2 };

function getRandomQuestions(questions, number, game) {
  let ques = [];
  let listOfQuestions = [...questions];
  if (game == 'key') {
    for (let i = number; i > 0; i--) {
      let randomNumber = Math.floor(Math.random() * questions.length);
      ques.push(questions[randomNumber]);
    }
    return ques;
  } else {
    return randomlist(questions, number);
  }
}

function randomlist(list, number) {
  let newList = [];
  let num = number;
  if(number === undefined){
    num = list.length;
  }
  for(let i = num; i > 0 ; i--){
    let item = list.splice(Math.floor((Math.random()*list.length-1)), 1);
    let result = Object.assign({},...item);
    newList.push(result);
  }
  return newList;
}

export function getQuestions(game, level) {
  const gameData = data.musicGames[gameIdx[game]].levels;
  const numOfQuestionsPerLevel = gameData[levelIdx[level]].numberOfQuestions;
  const questions = [];

  for (const [level, numQuestions] of Object.entries(numOfQuestionsPerLevel)) {
    questions.push(
      ...getRandomQuestions(
        gameData[levelIdx[level]].questions,
        numQuestions,
        game
      )
    );
  }

  return randomlist(questions);
}