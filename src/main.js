import Vue from 'vue'
import App from './App.vue'
import store from './store'
import drizzleVuePlugin from "@drizzle/vue-plugin"
import drizzleOptions from "./drizzleOptions"
import Toasted from 'vue-toasted'
Vue.config.productionTip = false
Vue.use(drizzleVuePlugin, { store, drizzleOptions })
Vue.use(Toasted)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')