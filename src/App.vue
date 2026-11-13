<template>
  <div v-if="isDrizzleInitialized" id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <div v-else><h2>Loading...</h2></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapGetters} from "vuex"
export default {
  name: 'App',
  computed: mapGetters("drizzle",["isDrizzleInitialized"]),
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
------------------------
<template>
  <div v-if="isDrizzleInitialized" id="app">
    <h1>hello dApp</h1>
  </div>
  <div v-else><h2>Loading...</h2></div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: 'App',
  computed: mapGetters("drizzle",["isDrizzleInitialized"]),
  components: {
    // HelloWorld
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