<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 0
  }),
  created() {
    console.log('Created')
  },
  destroyed() {
    console.log('Destroyed');
  },
  // lifecycle hooks for dynamic compoennts
  deactivated() {
    console.log('Deactivated')
  },
  activated() {
    console.log('Activated')
  } 
};
</script>

<style scoped>
</style>
