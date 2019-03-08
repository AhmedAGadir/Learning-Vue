import Vue from 'vue'
import App from './App.vue'

// global filters
Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
})

// a global mixin will be mixed in to every component in your application
Vue.mixin({
  created() {
    console.log('Global Mixin created')
  }
})


new Vue({
  el: '#app',
  render: h => h(App)
})
