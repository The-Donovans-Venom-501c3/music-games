// // from each game 
// // make a map indicating the number of question added to the question bank for the game
// // select random question make sure it should not be in sequence make sure no duplicate selection
import data from "../data/data.json";
const gameIdx = {
  note: 0,
  key: 1,
  "major-minor": 2,
  scale: 3,
  interval: 4,
  chord: 5,
  ledger: 7,
};
const levelIdx = { easy: 0, medium: 1, hard: 2 };

// function getRandomQuestions(questions, number, level) {
//   let selectedQues = [];
//   let listOfQuestions = [...questions];

//   // if (game === "key") {
//   //   for (let i = number; i > 0; i--) {
//   //     let randomNumber = Math.floor(Math.random() * questions.length);
//   //     selectedQues.push(questions[randomNumber]);
//   //   }
//   //   return selectedQues;
//   // } else {
//     while (selectedQues.length < number) {
//       if (listOfQuestions.length === 0) {

//         listOfQuestions = [...questions];
//         listOfQuestions.sort(() => Math.random() - 0.5);
//       }

//       let questionIndex = Math.floor(Math.random() * listOfQuestions.length);
//       let question = listOfQuestions[questionIndex];
//       selectedQues.push({ ...question, "level": level })
//       listOfQuestions.splice(questionIndex, 1); 
//     }
//     return selectedQues;
//   }
// // }


function shuffleQuestions(questionsList) {
  const shuffledQuestions = [...questionsList];

  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
  }

  return shuffledQuestions;
}
// export function getQuestions(game, level) {
//   const gameData = data.musicGames[gameIdx[game]].levels;
//   const numOfQuestionsPerLevel = gameData[levelIdx[level]].numberOfQuestions;
//   const questions = [];

//   for (const [level, numQuestions] of Object.entries(numOfQuestionsPerLevel)) {
//     questions.push(
//       ...getRandomQuestions(
//         gameData[levelIdx[level]].questions,
//         numQuestions,
//         level
//       )
//     );
//   }

//   // console.log(questions);
//   return shuffleQuestions(questions);
// }


const getDuplicateQues = (questions, level, numberOfQuestions) =>{
  let selectedQuestions = []
  let questionBank = [...questions] 
  while(numberOfQuestions > 0){
    if(questionBank.length <= 0){
      questionBank = [...questions]
    }
    let questionIndex = Math.floor(Math.random() * questionBank.length);
    let question = questionBank[questionIndex]
    selectedQuestions.push({ ...question, "level": level })
    questionBank.splice(questionIndex, 1); 
    numberOfQuestions -=1

  }
  return selectedQuestions

}

const getRandomQuestions = (level, numberofQuestions, questions) =>{
  let selectedQuestions = []
  let duplicates = []
  let questionBank = [...questions] 
  while(questionBank.length > 0 && numberofQuestions >  0){
    let questionIndex = Math.floor(Math.random() * questionBank.length);
    let question = questionBank[questionIndex]
    selectedQuestions.push({ ...question, "level": level })
    numberofQuestions -= 1 
    questionBank.splice(questionIndex, 1); 
  }
  if(numberofQuestions > 0){
    duplicates = [...getDuplicateQues(questions, level, numberofQuestions)]

  }
  return {'selected': selectedQuestions, 'duplicate': duplicates}

}


export function getQuestions(game, level){

  const gamelevels = data.musicGames[gameIdx[game]].levels
  const numOfQuestionsPerLevel = gamelevels[levelIdx[level]].numberOfQuestions
  const selectedQues = []
  const duplicates = []
  for (const [level, numberOfQuestions] of Object.entries(numOfQuestionsPerLevel)){
    let {selected,  duplicate} = getRandomQuestions(level, numberOfQuestions, gamelevels[levelIdx[level]].questions)
    selectedQues.push(...selected)
    duplicates.push(...duplicate)
  }
  console.log([...shuffleQuestions(selectedQues), ...shuffleQuestions(duplicates)])
  return [...shuffleQuestions(selectedQues), ...shuffleQuestions(duplicates)]

}
