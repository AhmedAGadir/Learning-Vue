<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data"
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    // note that the component hasnt been created yet, so you can't access your data yet
    next();
    // note that if you have to access the component, you can do so by passing next a callback, however note that at this point in time the component has been created
    // next(vm => {
    //   vm.link
    // })

    // the best thing to do is to access some other file / global storage, so
    // if (user.isAuthenticated) {
    //   next();
    // } else {
    //   next(false);
    // }
  }
};
</script>
