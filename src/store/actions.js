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
  //TRIVIA

  async getTriviaCategories({commit}) {
    const response = await triviaService.getCategories();
    commit('getTriviaCategories', response.trivia_categories);
  },
  async setTriviaCategory({commit}, category) {
    const response = await triviaService.getQuestionsByCategory(category.id);
    commit('getQuestions', response.results);
    commit('setTriviaCategory', category);
  },
  async getQuestions({commit}) {
    const response  = await triviaService.getQuestions();
    commit('getQuestions', response.results);
  }




}

