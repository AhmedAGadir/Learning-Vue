import Vue from 'vue'
import App from './App.vue'

// event bus - the order is important => needs to come before our main vue instance

// empty event bus
// export const eventBus = new Vue();

// event bus that has some code centralized in good - good for avoiding duplicate code and storing some data that can be accessible anywhere throughout our application 
export const eventBus = new Vue({
  data: {
    // can add data here
  },
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})

