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
    users: []
  }),
  methods: {
    submit() {
      // vueresource gives every instance in our application access to this.$http

      // the url is https://vuejs-http-5dbe2.firebaseio.com/
      // we have to add '/_NODE_NAME' to the url to create a node in our database (we called ours 'data)
      // then we have to add '.json' at the end

      // optional: we can configure a default url in our application - see main.js
      //   this.$http
      //     .post("", this.user)
      this.$http
        .post("https://vuejs-http-5dbe2.firebaseio.com/data.json", this.user)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchData() {
      this.$http
        .get("https://vuejs-http-5dbe2.firebaseio.com/data.json")
        .then(response => response.json())
        .then(data => {
          this.users = Object.keys(data).map(key => data[key]);
        });
    }
  }
};
</script>

<style>
</style>
