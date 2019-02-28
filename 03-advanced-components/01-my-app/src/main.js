import Vue from 'vue'
import App from './App.vue'

// to register a component globally
// import ServerStatus from './components/ServerStatus.vue';
// Vue.component('app-server', ServerStatus);
// can now use <app-server></app-server> tags throughout the application (reusable)

//  we've changed the ServerStatus component into a local component in Home, 
import Home from './components/Home.vue';
Vue.component('home', Home);
// can now use <home></home> tags throughout the application (reusable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App), // App will get compiled to JS and override #app
}).$mount('#app')
