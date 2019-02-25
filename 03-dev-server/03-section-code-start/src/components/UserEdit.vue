<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ myAge }}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: ["myAge"],
  methods: {
    editAge() {
      // an eventBus is useful for when you need to pass data between components without traversing long parent/children chains,
      // not needed at the moment since we only need to go up a single level to allow data to be passed to './userDetails'

      // example A) (using an empty event bus)
      // this.myAge = 30;
      // eventBus.$emit("ageWasEdited", this.myAge);

      // example B) (using an event bus with some centralized code)
      // this.myAge = 30;
      // eventBus.changeAge(this.myAge);

      // an event bus is not neccessary for our use case
      this.$emit("ageWasEdited", 30);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
