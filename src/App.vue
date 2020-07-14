<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-for="v in Array.from(Array(1000).keys())" v-bind:key="v">
      <HelloWorld msg="v"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
