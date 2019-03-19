<template>
  <div>
    <h1>The User Page</h1>
    <button @click="navigateToHome" class="btn btn-primary">Go To Home</button>
    <hr>
    <!-- since we confiugred this component with children routes, we need to use the <router-view> component here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    }
  }
};
</script>
