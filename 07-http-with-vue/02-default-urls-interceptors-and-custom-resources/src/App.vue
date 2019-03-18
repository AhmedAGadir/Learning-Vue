<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="mail" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <input type="text" class="form-control" v-model="node">
        <br>
        <br>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br>
        <br>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="user in users"
            :key="user.username"
          >{{ user.username }} - {{ user.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      username: "",
      email: ""
    },
    users: [],
    resource: {},
    node: "data"
  }),
  methods: {
    submit() {
      // we can configure a default url in our application - see main.js
      // this.$http
      //   .post("data.json", this.user)
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });

      // save is one of the default actions provided by vueresource
      // first argument is paramateres we may want to pass
      // second argument is data we want to pass

      // without dynamic url configured
      // this.resource.save({}, this.user);
      // with dynamic url configured
      this.resource.save({ node: this.node }, this.user);
      // or
      // this.resource.saveAlt(this.user);
    },
    fetchData() {
      // this.$http
      //   .get("data.json")
      //   .then(response => response.json())
      //   .then(data => {
      //     this.users = Object.keys(data).map(key => data[key]);
      //   });
      this.resource
        .getData({ node: this.node })
        .then(response => response.json())
        .then(data => {
          this.users = Object.keys(data).map(key => data[key]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    // initialise resources
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" }
    };
    // this.resource = this.$resource("data.json", {}, customActions);
    // dynamically setting the endpooint
    this.resource = this.$resource("{node}.json", {}, customActions);
  }
};
</script>

<style>
</style>
