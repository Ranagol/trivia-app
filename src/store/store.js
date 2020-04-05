import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import storeChuck from './storeChuck';
import storeTrivia from './storeTrivia';
import mutations from './mutations';
import actions from './actions';


Vue.use(Vuex);

export const store = new Vuex.Store({
  getters,
  state: {
    storeChuck,
    storeTrivia,
  },
  mutations,
  actions,
})