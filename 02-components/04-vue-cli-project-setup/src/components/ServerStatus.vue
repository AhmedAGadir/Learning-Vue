<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change</button>
  </div>
</template>

<script>
export default {
  // when using a project setup, the data method must always be a function that returns an object
  // this is because our .vue files are reusable components (see previous notes)
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>

<style>
</style>


