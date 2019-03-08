<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- filters are a syntax feature that help us transform output in the template, it doesnt transform the data itself, it only transform what the user sees -->
        <!-- note: there are no built-in features in vue js, we have to build our own -->
        <!-- the pipe symbol tells vue js to use the filter on the right of pipe to the value on the left on the pipe -->
        <p>{{ text | toUpperCase }}</p>
        <!-- can chain filters -->
        <p>{{ text | toUpperCase | to-lowercase }}</p>
        <!-- computer properties are often better to use than filters -->
        <button @click="fruits.push('berries')">Add New Fruit</button>
        <input type="text" v-model="filterText">
        <ul>
          <!-- if for example we wanted to only render a fruit if it appears in our filter text, then using a filter here would be suboptimal as the filter would get reapplied on every re-render of the DOM -->
          <!-- in this case a computed property would be better -->
          <!-- <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li> -->
          <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin";
export default {
  data: () => ({
    text: "Hello there!"
  }),
  // local filters
  filters: {
    toUpperCase: function(value) {
      return value.toUpperCase();
    }
  },
  // can avoid duplicate code with mixins
  mixins: [fruitMixin],
  components: {
    appList: List
  }
};
</script>

<style>
</style>
