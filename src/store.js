import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    level: 1,
    capitals: false,
    words: false,
  },
  mutations: {
    levelUp(state) {
      // mutate state
      state.level++;
    },
    levelDown(state) {
      // mutate state
      state.level--;
    },
    enableCapitals(state) {
      // mutate state
      state.capitals = true;
    },
    disableCapitals(state) {
      // mutate state
      state.capitals = false;
    },
    enableWords(state) {
      // mutate state
      state.words = true;
    },
    disableWords(state) {
      // mutate state
      state.words = false;
    },
  },
  actions: {
  },
});
