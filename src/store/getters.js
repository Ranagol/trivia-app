export default {
  randomJoke: state => state.storeChuck.randomJoke,
  categories: state => state.storeChuck.categories,
  chosenCategory: state => state.storeChuck.chosenCategory,
  //TRIVIA
  //trivia: state => state.storeTrivia,//wtf is this, this is unnecesary
  triviaCategories: state => state.storeTrivia.categories,
  questions: state => state.storeTrivia.questions,
  chosenTriviaCategory: state => state.storeTrivia.chosenCategory

  
}