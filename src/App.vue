<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  mounted() {
    document.title = 'Domain name for sale'
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
}
</style>
