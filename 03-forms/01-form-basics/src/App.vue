<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input type="text" id="email" class="form-control" v-model="userData.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <!-- the lazy modifier will update the data property on blurring -->
            <!-- other modifiers are .trim to trim, .number to transform input to number-->
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy="userData.password"
            >
            <p>{{ password }}</p>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" class="form-control" v-model.number="userData.age">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label>
          <br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work! use v-model instead-->
          <textarea id="message" rows="5" class="form-control" v-model="message"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <!-- vue js will recognise that we have 2 checkboxes, both with the same v-model,
              so it will then take these values and merge them into the array specifed in our bound data property (sendMail)-->
              <input type="checkbox" id="sendmail" value="SendMail" v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfomail">
              <input type="checkbox" id="sendInfomail" value="SendInfoMail" v-model="sendMail"> Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <!-- vue js will recognise that we have 2 radio buttons, both with the same v-model,
            vue will then let only one radiobox be selected at a time, and will store the selected value in our bound data property (gender)-->
            <input type="radio" id="male" value="Male" v-model="gender"> Male
          </label>
          <label for="female">
            <input type="radio" id="female" value="Female" v-model="gender"> Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <!-- v-model gets placed on the HTML <select></select> tags,
          the value in v-model will override the :selected property in <option></option>-->
          <select id="priority" class="form-control" v-model="selectedPriority">
            <!-- <option v-for="priority in priorities" :key="priority" :selected="priority === 'Medium'">{{ priority }}</option> -->
            <option v-for="priority in priorities" :key="priority">{{ priority }}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <!--  ••• using v-model with custom components ••• -->
          <!-- v-model will pass a 'value' prop to the custom component that is bound to our data property (dataSwitch) -->
          <!-- v-model will also wait for an 'input' event to be fired, which will bind to our data property (dataSwitch) -->
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary" @click.prevent="submitForm">Submit!</button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <!-- to keep line breaks, add the following CSS -->
            <p style="white-space: pre">Message: {{ message }}</p>
            <p>
              <strong>Send Mail?</strong>
            </p>
            <ul>
              <li v-for="item in sendMail" :key="item">{{ item }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "./Switch.vue";
export default {
  data: () => ({
    userData: {
      email: "",
      password: "",
      age: null
    },
    message: "Hello World!",
    sendMail: [],
    gender: "Male",
    selectedPriority: "High",
    priorities: ["High", "Medium", "Low"],
    dataSwitch: true,
    isSubmitted: false
  }),
  methods: {
    submitForm() {
      this.isSubmitted = true;
    }
  },
  components: {
    appSwitch: Switch
  }
};
</script>

<style>
</style>
