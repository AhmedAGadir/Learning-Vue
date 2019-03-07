<template>
  <div class="container">
    <form v-if="!formSubmitted">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->
          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
          <app-full-name v-model="fullName"></app-full-name>
          <div class="form-group">
            <label for="mail">Email</label>
            <input type="email" id="mail" class="form-control" v-model="mail">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" class="form-control" v-model="password">
          </div>
          <div class="form-group">
            <p style="fontWeight: bold">Store Data?</p>
            <label for="a">
              <input type="radio" id="a" value="true" v-model="storeData"> Yes
            </label>
            <label for="b">
              <input type="radio" id="b" value="false" v-model="storeData"> No
            </label>
          </div>
          <button class="btn btn-info" @click.prevent="formSubmitted = true">Submit</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="formSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{fullName.first}} {{fullName.last}}</p>
            <p>Mail: {{mail}}</p>
            <p>Password: {{password}}</p>
            <p>Store in Database?: {{storeData ? 'Yes' : 'No'}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from "./FullName.vue";
export default {
  data: () => ({
    fullName: {
      first: "",
      last: ""
    },
    mail: "",
    password: "",
    storeData: false,
    formSubmitted: false
  }),
  components: {
    appFullName: FullName
  }
};
</script>

<style>
</style>
