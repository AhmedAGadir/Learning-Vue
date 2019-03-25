<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  // ********************************************************
  // methods: {
  //   increment() {
  //     // we can use an event bus or pass props around
  //     // this.$emit('updated', 1);
  //     // To change state when using a store we have some options:
  //     // 1) reach directly into the store
  //     // this.$store.state.counter++;
  //     // 2) use mutations (setters)
  //     this.$store.commit("increment");
  //   },
  //   decrement() {
  //     // this.$emit('updated', -1);
  //     // this.$store.state.counter--;
  //     this.$store.commit("decrement");
  //   }
  // }
  // **********************************************************
  // 3) instead of having to create a method for each commit we want to make, we can use mapMutations
  // methods: {
  //   // can pass an array
  //   ...mapMutations(["increment", "decrement"])
  //   // or an object to map mutations to new names
  //   // ...mapMutations({foo: 'increment', bar: 'decrement'})
  // }
  // **********************************************************
  // 4) again, its cleaner to use actions all over our code that to mapMutations
  methods: {
    ...mapActions(["increment", "decrement"])
    // under the hood map actions creates the following:
    // when calling the actions, we can pass params if we want
    // decrement(amount) {
    //   this.$store.dispatch('decrement', payload);
    // }
  }
};
</script>