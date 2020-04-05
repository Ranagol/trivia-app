import chuckService from '../service/chuckService';

export default {
  async getRandomJoke({ commit }, category = 'dev'){//if nothing specified, the joke category will be dev
    const response = await chuckService.getRandomJoke(category);
    console.log('response arrived', response);
    commit('getRandomJoke', response);
  }
}

