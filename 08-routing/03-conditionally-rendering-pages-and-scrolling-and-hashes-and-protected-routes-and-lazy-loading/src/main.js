import Vue from 'vue'
import App from './App.vue'
// npm install --save vue-router
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // expects you to return either an object with coordinates , or a selector
    // savedPosition is if the user clicks the back button
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    // return { x: 0, y: 700 };
  }
});

// 3 places you can use before enter guards:
// 1) globally
// 2) in routes.js
// 3) in components themselves

// using guards globally:
// execute this before each routing action
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');

  // you have to execute next() to allow the routing action to continue
  next();
  // you can also pass false to abort the routing action
  // next(false)
  // or a path to redirect
  // next('/user') 
  // next({path: '/user'})

})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
