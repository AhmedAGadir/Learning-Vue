<template>
  <div>
    <h1>The User Page</h1>
    <p>Loaded ID: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
  </div>
</template>

<script>
export default {
  computed: {
    // from now on dont use arrow functions in the compoennts 'data' or 'computed' properties, it messes up with the 'this' keyword
    id() {
      return this.$route.params.id;
    }
  },
  // note: if we are already on a component and somehow the path changes, vue js will not recreate the component
  // this can be an issue if some pieces on those components change (e.g. the :id)
  // to get around this we need to watch those pieces
  watch: {
    // 'to' is the new route, 'from' is the old route
    $route(to, from) {
      this.id = to.params.id;
    }
    // As of vue-router version 2.2, you can also bind your route params to props of the target components. This eliminates the need of watch ing $route .
    // There are three ways of using this feature, check this official example to learn more: https://github.com/vuejs/vue-router/tree/dev/examples/route-props
    // You can basically either pass a static value, bind a dynamic value to props or use a function to also convert your dynamic value.
  },
  methods: {
    navigateToHome() {
      // push adds it to the stack of existing routes - allowing back and forward browser buttons to work
      //   can pass a string
      this.$router.push("/");
      // or an object
      //   this.$router.push({ path: "/" });
    }
  }
};
</script>
