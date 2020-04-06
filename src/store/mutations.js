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


  getTriviaCategories(state, categories) {//we are getting all the categories from the api
    state.storeTrivia.categories = categories;
  },
  setTriviaCategory(state, category) {//here we set up one choosen category
    state.storeTrivia.chosenCategory = category;
  },
  getQuestions(state, questions) {//from actions, two methods are using this one method: the setTriviaCategory and the actual getQuestions
    state.storeTrivia.questions = questions;
  }



}