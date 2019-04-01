import Vue from 'vue'
import App from './App.vue'
// npm install --save-dev babel-preset-stage-2
// then go to .babel-rc
// npm install --save vue-router
import VueRouter from 'vue-router';
import { routes } from './routes';
// npm install --save vuex
import store from './store/store';

Vue.use(VueRouter);
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
