import Vue from 'vue'
import App from './App.vue'

// 5 hooks for creating directives

// 1) .bind(el, binding, vnode) (once directive is attached) // the latter 2 properties should be treated as read-only (dont change them)
// 2) .inserted(el, binding, vnode) (once inserted in the DOM) 
// 3) .update(el, binding, vnode, oldVnode) (once component is updated - before its children though) // oldVnode should also be treated as read-only
// 4) .componentDidUpdate(el, binding, vnode, oldVnode) (component component AND its children have updated)
// 5) .unbind(el, binding, vnode) (once directive has been removed)

// bind and update are the most common

Vue.directive('highlight', {
  bind: function (el, binding, vnode) {
    // el.style.backgroundColor = 'green' // without any input from the user e.g. <p v-highlight>hello world</p>
    // el.style.backgroundColor = binding.value // the value the user enters e.g. <p v-highlight="'green">hello world</p>

    // with an argument from the user e.g. <p v-highlight:background="'blue'">hello world</p>
    // if (binding.arg == 'background') {
    //   el.style.backgroundColor = binding.value
    // } else {
    //   el.style.color = binding.value
    // }

    // accounting for a .delay modifier
    var delay = 0;
    if (binding.modifiers['delay']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay);
  }
})


new Vue({
  el: '#app',
  render: h => h(App)
})
