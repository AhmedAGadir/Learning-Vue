<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ text | reverse }}</p>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ 'Salam World!' | globalCharCount }}</p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>{{ computedReverseText }}</p>
        <p>{{ computedCharCount }}</p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
      </div>
    </div>
  </div>
</template>

<script>
import { textMixin } from "./textMixin";
export default {
  data: () => ({
    text: "Golden Experience!",
    text2: "Salam World!"
  }),
  mixins: [textMixin],
  filters: {
    reverse(input) {
      return input
        .split("")
        .reverse()
        .join("");
    }
  }
  // // changing this to a mixin now
  // // better to use computed properties than filters
  // computed: {
  //   computedReverseText() {
  //     return this.text
  //       .split("")
  //       .reverse()
  //       .join("");
  //   },
  //   computedCharCount() {
  //     return `${this.text2} (${this.text2.length})`;
  //   }
  // }
};
</script>

<style>
</style>
