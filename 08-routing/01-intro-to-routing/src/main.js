import Vue from 'vue'
import App from './App.vue'
// npm install --save vue-router
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  // default mode is 'hash', which uses a hash to tell the browser not to make server calls but instead let vue js control what pages we go to
  // the reason were using the history mode is so that any page returns the index.html file, and then allows vue js to navigate based on the path
  mode: 'history'
})

//  register routes here (in the root vue instance);
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
