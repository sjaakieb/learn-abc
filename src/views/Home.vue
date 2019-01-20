<template>
  <div
    v-touch:longtap="longtapHandler"
    class="home"
    :class="[letterSizeClass]"
    @click="updateLetter"
  >
    {{ letter }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const LETTER_OPTIONS = [
  ['i', 'k', 'm', 's'],
  ['p', 'aa', 'r', 'e', 'v'],
  ['n', 't', 'ee', 'b', 'oo'],
  ['d', 'oe', 'z', 'ij', 'h'],
  ['w', 'o', 'a', 'u', 'j'],
  ['eu', 'ie', 'l', 'ou', 'uu'],
  ['g', 'au', 'ui', 'f', 'ei'],
  ['sch'],
];

export default {
  name: 'Home',
  data() {
    return {
      random: 0,
    };
  },
  computed: {
    ...mapGetters([
      'level',
      'capitals',
    ]),
    letters() {
      return LETTER_OPTIONS.slice(0, this.level + 1).reduce((acc, value) => acc.concat(value), []);
    },
    letter() {
      if (this.random > this.letters.length - 1) {
        return this.letters[this.random - this.letters.length].toUpperCase();
      }
      return this.letters[this.random];
    },
    numberOfOptions() {
      if (this.capitals) {
        return this.letters.length * 2;
      }
      return this.letters.length;
    },
    letterSizeClass() {
      return `letter-size-${this.letter.length}`;
    },
  },
  methods: {
    updateLetter() {
      let a;
      do {
        a = this.getRandomInt(this.numberOfOptions);
      } while (a === this.random);
      this.random = a;
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    longtapHandler() {
      this.$router.push({ name: 'config' });
    },
  },
};
</script>
<style lang='scss' scoped>
.home {
  height: 100%;
  width: 100%;
  background-color: yellow;
  line-height: 100vh;
  text-align: center;
  user-select: none;
  &.letter-size-1 {
    font-size: 60vh;
    color:black;
  }
  &.letter-size-2 {
    font-size: 40vh;
    color:grey;
  }
}
</style>
