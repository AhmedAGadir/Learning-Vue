<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
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
  methods: {
    // can pass an array
    ...mapMutations(["increment", "decrement"])
    // or an object to map mutations to new names
    // ...mapMutations({foo: 'increment', bar: 'decrement'})
  },
  actions: {
    // for async actions
    // can name this action 'increment' aswell and theres no conflict because this is a different object
    increment: context => {
      // context just gives us access to the commit method
      // it has a lot of the properties of our store (its not exactly the same however)
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    }
  }
};
</script>