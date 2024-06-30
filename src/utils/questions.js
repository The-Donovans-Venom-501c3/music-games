// import data from "../data/data.json";
import chord from "../data/chord-game.json"
import intervalIdentification from "../data/interval-identification.json"
import keySignatureIdentification from "../data/key-signature-identification.json"
import ledgerLineAddition from "../data/ledger-line-addition.json"
import majorMinorIdentification from "../data/major-minor-identification.json"
import noteIdentification from "../data/note-identification.json"
import scaleIdentification from "../data/scale-identification.json"

// const gameIdx = {
//   note: 0,
//   key: 1,
//   "major-minor": 2,
//   scale: 3,
//   interval: 4,
//   chord: 5,
//   ledger: 7,
// };
const games={
  "note": noteIdentification,
  "key": keySignatureIdentification,
  "major-minor":majorMinorIdentification,
  "scale": scaleIdentification,
  "interval": intervalIdentification,
  "chord": chord,
  "legder":ledgerLineAddition

}
const levelIdx = { easy: 0, medium: 1, hard: 2 };

function getRandomQuestions(questions, number, game) {
  let ques = [];
  let listOfQuestions = [...questions];

  if (game === "key") {
    for (let i = number; i > 0; i--) {
      let randomNumber = Math.floor(Math.random() * questions.length);
      ques.push(questions[randomNumber]);
    }
    return ques;
  } else {
    while (ques.length < number) {
      if (listOfQuestions.length === 0) {

        listOfQuestions = [...questions];
        listOfQuestions.sort(() => Math.random() - 0.5);
      }

      let questionIndex = Math.floor(Math.random() * listOfQuestions.length);
      let question = listOfQuestions[questionIndex];
      ques.push({ ...question })
      listOfQuestions.splice(questionIndex, 1); 
    }
    return ques;
  }
}
export function getQuestions(game, level) {
  console.log(game)
  const gameData = games[game]
  console.log(gameData);
  const gameLevel = gameData.levels
  console.log(gameLevel)
  const numOfQuestionsPerLevel =gameLevel[levelIdx[level]].numberOfQuestions;
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

  // console.log(questions);
  return questions;
}

// export function getQuestions(game, level) {
//   console.log(game);
//   const gameData = data.musicGames[gameIdx[game]].levels;
//   const numOfQuestionsPerLevel = gameData[levelIdx[level]].numberOfQuestions;
//   const questions = [];

//   for (const [level, numQuestions] of Object.entries(numOfQuestionsPerLevel)) {
//     questions.push(
//       ...getRandomQuestions(
//         gameData[levelIdx[level]].questions,
//         numQuestions,
//         game
//       )
//     );
//   }

//   // console.log(questions);
//   return questions;
// }
