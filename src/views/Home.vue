<template>
  <div
    v-touch:longtap="longtapHandler"
    class="home"
    @click="updateLetter">
      {{letter}}
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      letters: ['i', 'k', 'm', 's'],
      random: 0,
      capitals: true,
    };
  },
  methods: {
    updateLetter() {
      let a;
      do {
        a = this.getRandomInt(this.numberOfLetters);
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
  computed: {
    letter() {
      if (this.random > this.letters.length - 1) {
        return this.letters[this.random - this.letters.length].toUpperCase();
      }
      return this.letters[this.random];
    },
    numberOfLetters() {
      if (this.capitals) {
        return this.letters.length * 2;
      }
      return this.letters.length;
    },
  },
};
</script>
<style lang='scss' scoped>
.home {
  height: 90vh;
  width: 100%;
  font-size:70vh;
  background-color: yellow;
}
</style>
