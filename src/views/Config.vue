<template>
  <div class="config">
    <h1 class="title">
      Config
    </h1>
    <div class="property">
      <label>Level: {{ level }}</label>
    </div>
    <div class="button-group">
      <button @click="levelDown">
        -
      </button>
      <button @click="levelUp">
        +
      </button>
    </div>
    <div
      class="property"
    >
      <label>
        Fonts:
        <span v-if="fonts">
          Multiple
        </span>
        <span v-else>
          Single
        </span>
      </label>
      <button @click="toggleFonts">
        +
      </button>
    </div>
    <div class="button-group">
      <button @click="start">
        Start
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Config',
  computed: {
    ...mapGetters([
      'level',
      'capitals',
      'fonts',
    ]),
  },
  methods: {
    ...mapMutations([
      'levelUp',
      'levelDown',
      'toggleFonts',
    ]),
    start() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
<style lang="scss" scoped>

.config {
  background-color:palevioletred;
  height:100%;
  color:white;
}
.title {
  text-align: center;
}
.property {
  text-align: center;
  font-size: 2em;
}
.button-group {
  display: flex;
  width: 90%;
  padding: 5%;
  justify-content: space-around;
  button {
    width: 40%;
    border: 0.25em orange solid;
    border-radius: 20px;
    background: chocolate;
    color: white;
    font-size: 2em;
    padding: 0.25em;
  }
}
</style>
