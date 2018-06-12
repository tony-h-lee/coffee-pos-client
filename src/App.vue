<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  %full-screen {
    min-height: 100vh;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    @extend %full-screen;
  }
  #app {
    @extend %full-screen;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
  }
</style>
