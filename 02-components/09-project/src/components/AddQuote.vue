<template>
  <div>
    <h3>Quote</h3>
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Life is like a box of chocolates..."
        v-model="input"
        @keydown.enter="addQuote"
      >
      <span class="input-group-btn">
        <button class="btn btn-info" type="button" @click="addQuote">Add Quote</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    input: "",
    idSequence: 0
  }),
  methods: {
    addQuote() {
      if (!this.input) {
        return;
      }
      this.$emit("addNewQuote", {
        val: this.input,
        id: this.idSequence++
      });
      this.input = "";
    }
  }
};
</script>

<style>
</style>

