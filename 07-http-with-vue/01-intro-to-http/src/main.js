import Vue from 'vue'
import App from './App.vue'
// npm install --save vue-resource
import VueResource from 'vue-resource';

// .use tells vue to add a plugin to the core vue functionality 
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
