import chuckService from '../service/chuckService';
import triviaService from '../service/triviaService';

export default {
  async getRandomJoke({ commit }, category = 'dev'){//if nothing specified, the joke category will be dev
    const response = await chuckService.getRandomJoke(category);
    console.log(response);
    commit('getRandomJoke', response);
  },

  async getJokeCategories({ commit }){
    const response = await chuckService.getJokeCategories();
    commit('getJokeCategories', response);
  },

  setCategory({commit}, category) {
    commit('setCategory', category);
  },
  //TRIVIA************************************************

  async getTriviaCategories({commit}) {//getting categories from api
    const response = await triviaService.getCategories();
    commit('getTriviaCategories', response.trivia_categories);
  },
  async setTriviaCategory({commit}, category) {
    const response = await triviaService.getQuestionsByCategory(category.id);//requesting questions BY category.
    commit('getQuestions', response.results); //The received questions (from a given category) are handled and forwarded just like those questions without category.
    commit('setTriviaCategory', category);//... and here we also set up the category too. 
  },
  async getQuestions({commit}) {
    const response  = await triviaService.getQuestions();//requesting questions WITHOUT category
    commit('getQuestions', response.results);
  }




}

