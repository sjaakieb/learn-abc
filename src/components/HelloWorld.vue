<template>
  <div class="hello">
    <h1 :class="fontFamily">A</h1>
    <select v-model="selected" multiple>
      <option v-for="family in families" :key="family">{{family}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      selected: [],
      families: ['comic', 'georgia', 'verdana', 'courier'],
    };
  },
  computed: {
    fontFamily(){
      if (this.selected.length>0){
        return this.selected[0];
      }
      return '';
    }
  }
};
</script>
<style lang="scss" scoped>
.hello {
  .comic {
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
  .georgia {
    font-family: Georgia, serif;
  }
  .veranda {
    font-family: Verdana, Geneva, sans-serif;
  }
  .courier {
    font-family: "Courier New", Courier, monospace;
  }
}
</style>
