import data from '../data/data.json';

const gameIdx = {'note':0, 'key':1, 'chord':2, 'scale':3};
const levelIdx = {'easy':0, 'medium':1, 'hard':2};

function getRandomQuestions(questions, number) {
  // Shuffle the questions using the Fisher-Yates algorithm
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  return questions.slice(0, number);
}

export function getQuestions(game, level) {
    const gameData = data.musicGames[gameIdx[game]].levels
    const numOfQuestionsPerLevel = gameData[levelIdx[level]].numberOfQuestions;
    const questions = [];

    for (const [level, numQuestions] of Object.entries(numOfQuestionsPerLevel)) {
      questions.push(...getRandomQuestions(gameData[levelIdx[level]].questions, numQuestions));
    }

    return getRandomQuestions(questions, questions.length);
}


