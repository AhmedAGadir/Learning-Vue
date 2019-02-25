<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <!-- passing data down -->
    <p>User Name: {{ transformName() }}</p>
    <p>User Age: {{ myAge }}</p>
    <!-- passing data up -->
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  //   ••• can use case sensitive props when using webpack setup •••
  //   ••• if we want to validate prop types, then dont use an array, use an object •••
  //   props: ["myName"],
  props: {
    // ••• can pass just a string of what type the property should be •••
    // myName: String
    // ••• or an array of different types the property can be •••
    // myName: [String, Array]
    // ••• can also set an object for more config on the property •••
    myName: {
      type: String,
      required: true,
      default: "Max" // its doesnt make sense to use default and required at the same time since the default will always get overridden lol

      //   ••• Note: if you want to have a type of Object, then the default should always be a function that returns an object •••
      //   type: Object,
      //   default: function() {
      //       return {
      //           name: 'Max'
      //       }
      //   }
    },
    myAge: {
      type: Number
    }
  },
  methods: {
    transformName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      // you can do this in the same way that its done in react => by using closures aka passing a method down to the child component that changes the name in the parent when invoked
      // however vue gives another option for achieving the same result:

      // this would only change myName in this component and not the parent
      //   this.myName = "Max";

      // built in vue method that emits a custom event and allows you to pass data up
      this.$emit("nameWasReset", "Max");
    }
  }
  // created() {
  //   // the created lifecycle hook is a good place to register listeners
  //   // an eventBus is useful when you need to pass data between components without traversing long parent/children chains (see "./userEdit.vue")
  //   // not needed at the moment since we only need to go up a single level to allow data to be received from './userEdit'
  //   eventBus.$on("ageWasEdited", age => {
  //     this.myAge = age;
  //   });
  // }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
