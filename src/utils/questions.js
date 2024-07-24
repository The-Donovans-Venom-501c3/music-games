import chord from '../data/chord.json'
import interval from '../data/intervalIdentification.json'
import note from "../data/noteIdentification.json"
import key from "../data/keySignatureIdentification.json"
import major_minor from '../data/majorMinorIdentification.json'
import scale from '../data/scaleIdentification.json'
import ledger from '../data/ledgerLineAddition.json'

function shuffleQuestions(questionsList) {
  const shuffledQuestions = [...questionsList];

  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
  }

  return shuffledQuestions;
}

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

const gameObjects = {
  'note': note,
  'key': key,
  "major-minor": major_minor,
  'scale': scale,
  'interval': interval,
  'chord': chord,
  'ledger': ledger,
};
const levelIdx = { easy: 0, medium: 1, hard: 2 };

export function getQuestions(game, level){

  const gamelevels = gameObjects[game].levels
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
