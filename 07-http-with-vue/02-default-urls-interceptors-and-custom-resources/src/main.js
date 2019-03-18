import Vue from 'vue'
import App from './App.vue'
// npm install --save vue-resource
import VueResource from 'vue-resource';

// .use tells vue to add a plugin to the core vue functionality 
Vue.use(VueResource);

// optional
// if you want to set some global options for http, use Vue.http
// we're going to use this to set a default URL for http requests 
Vue.http.options.root = 'https://vuejs-http-5dbe2.firebaseio.com/';

// interceptors
// Vue.http.interceptors.push((request, next) => {
//   console.log('Request', request);
//   // if you want you can change the request 
//   // e.g. 
//   if (request.method === 'POST') {
//     request.method = 'PUT';
//   }
//   // next to go on
//   // next();

//   // we can intercept responses as well by passing a function the the next paramater
//   next(response => {
//     console.log('Response', response);
//     // we can override/alter the response if we want
//     response.json = () => ({ messages: response.body })
//   })
// });


new Vue({
  el: '#app',
  render: h => h(App)
})
