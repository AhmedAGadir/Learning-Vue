import Vue from 'vue'
import App from './App.vue'
// npm install --save-dev babel-preset-stage-2
// then go to .babel-rc
// npm install --save vue-router
import VueRouter from 'vue-router';
import { routes } from './routes';
// npm install --save vuex
import store from './store/store';
// npm install --save vue-resource
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'https://vuejs-stock-trader-467e3.firebaseio.com/';

Vue.filter('currency', value => {
  return '£' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})