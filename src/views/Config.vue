<template>
  <div class="about">
    <h1>Config</h1>
    <button @click="start">Start</button>
  </div>
</template>
<script>
export default {
   name: 'config',
   methods: {
     start() {
       this.$router.push({name:'home'});
     }
   }
}
</script>
