export default {
  getRandomJoke(state, randomJoke){
    state.storeChuck.randomJoke = randomJoke;
  },

  getJokeCategories(state, categories) {
    state.storeChuck.categories = categories;
    console.log('categories from mutations', categories);
  },

  setCategory(state, category) {
    state.storeChuck.chosenCategory = category;
  },

  //TRIVIA


  getTriviaCategories(state, categories) {
    state.storeTrivia.categories = categories;
  },
  setTriviaCategory(state, category) {
    state.storeTrivia.chosenCategory = category;
  },
  getQuestions(state, questions) {
    state.storeTrivia.questions = questions;
  }



}