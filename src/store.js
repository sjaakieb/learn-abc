import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    level: 0,
    capitals: false,
    fonts: false,
  },
  getters: {
    level: state => state.level,
    capitals: state => state.capitals,
    fonts: state => state.fonts,
    words: state => state.words,
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    levelUp(state) {
      if (state.level < 7) {
        state.level += 1;
      }
    },
    levelDown(state) {
      if (state.level > 0) {
        state.level -= 1;
      }
    },
    enableCapitals(state) {
      state.capitals = true;
    },
    disableCapitals(state) {
      state.capitals = false;
    },
    enableFonts(state) {
      state.fonts = true;
    },
    disableFonts(state) {
      state.fonts = false;
    },
    toggleFonts(state) {
      state.fonts = !state.fonts;
    },
  },
  actions: {
  },
});
