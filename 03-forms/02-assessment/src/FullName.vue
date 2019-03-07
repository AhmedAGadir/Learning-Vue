<template>
  <div>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        class="form-control"
        :value="value.first"
        @input="input($event.target.value, value.last)"
      >
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        class="form-control"
        :value="value.last"
        @input="input(value.first, $event.target.value)"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    input(first, last) {
      this.$emit("input", { first, last });
    }
  }
};
</script>

<style>
</style>


