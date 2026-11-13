<template>
  <div v-if="isDrizzleInitialized" id="app">
    <h1>hello dApp</h1>
    <MyComponent></MyComponent>
  </div>
  <div v-else><h2>Loading...</h2></div>
</template>

<script>
import {mapGetters} from "vuex"
import MyComponent from "./components/MyComponent.vue";
export default {
  name: 'App',
  computed: mapGetters("drizzle",["isDrizzleInitialized"]),
  components: {
    MyComponent
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