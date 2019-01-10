import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    level: 1,
    capitals: false,
  },
  getters: {
    level: state => state.level,
    capitals: state => state.capitals,
    words: state => state.words,
  },
  mutations: {
    levelUp(state) {
      if (state.level < 7) {
        state.level++;
      }
    },
    levelDown(state) {
      if (state.level > 0) {
        state.level--;
      }
    },
    enableCapitals(state) {
      state.capitals = true;
    },
    disableCapitals(state) {
      state.capitals = false;
    },
  },
  actions: {
  },
});
