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
