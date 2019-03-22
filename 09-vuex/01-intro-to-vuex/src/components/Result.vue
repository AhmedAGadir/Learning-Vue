<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Number of clicks: {{ clicks }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // props: ['counter']
  // ************************************************
  //     computed: {
  //   counter() {
  //     // 1) reaching into vuex state - now we dont have to pass props around or use event buses
  //     //   return this.$store.state.counter * 2;
  //     // 2) getters - useful when you find yourself duplicating state computations throughout your application
  //     return this.$store.getters.doubleCounter;
  //   },
  //   clicks() {
  //     return this.$store.getters.stringCounter;
  //   }
  //     }
  // ************************************************
  // 3) instead of having to use computed properties for every single getter that you want to access, vuex offers mapGetters
  //   if you want to be able to use the spread operator syntax then follow this: https://github.com/JeffreyWay/laravel-mix/issues/76
  computed: {
    //   can pass an array
    //   ...mapGetters(['doubleCounter', 'stringCounter'])
    //   or an object to map the getters to different names
    ...mapGetters({
      counter: "doubleCounter",
      clicks: "stringCounter"
    })
  }
};
</script>