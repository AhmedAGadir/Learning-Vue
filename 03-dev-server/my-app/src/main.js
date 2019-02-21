import Vue from 'vue'
import App from './App.vue'

// to register a component globally
import Home from './components/Home';
Vue.component('app-server-status', Home)

Vue.config.productionTip = false

new Vue({
  render: h => h(App), // App will get compiled to JS and override #app
}).$mount('#app')
