import Vue from 'vue'
import App from './App.vue'

Vue.filter('globalCharCount', function (input) {
    return `${input} (${input.length})`
})

// Vue.mixin({
//     created() {
//         console.log('Global Mixin - Created Hook');
//     }
// });

new Vue({
    el: '#app',
    render: h => h(App)
})
