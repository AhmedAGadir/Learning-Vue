<template>
  <div class="container">
    <!-- <app-header></app-header>
    <app-add-quote></app-add-quote>
    <app-quotes>-->
    <div class="header">
      <h2>Quotes Added</h2>
      <div class="progress">
        <div
          class="progress-bar progress-bar-info"
          role="progressbar"
          aria-valuenow="60"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{width: quotes.length * 10 + '%'}"
        >{{ quotes.length }}/10</div>
      </div>
    </div>
    <div>
      <h3>Quote</h3>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Life is like a box of chocolates..."
          @keydown.enter="addQuote"
        >
        <span class="input-group-btn">
          <button class="btn btn-info" type="button" @click="addQuote">Add Quote</button>
        </span>
      </div>
    </div>
    <div class="container-fluid" v-if="this.quotes.length > 0">
      <div class="row bg-success">
        <div
          class="thumbnail col-md-3"
          v-for="quote in quotes"
          :key="quote.id"
          @click="deleteQuote(quote.id)"
        >{{ quote.val }}</div>
      </div>
    </div>
    <div class="alert alert-success text-center">
      <p>Info: Click on a Quote to delete it</p>
    </div>
  </div>
</template>

<script>
// import appHeader from "./components/Header.vue";
// import appAddQuote from "./components/AddQuote.vue";
// import appQuotes from "./components/Quotes.vue";
export default {
  data: () => ({
    idSequence: 0,
    quotes: []
  }),
  methods: {
    addQuote() {
      if (this.quotes.length === 10) {
        alert("Delete a quote first!");
        return;
      }
      let quoteInput = document.querySelector(".form-control");
      if (!quoteInput.value) {
        return;
      }
      this.quotes.push({
        val: quoteInput.value,
        id: this.idSequence++
      });
      quoteInput.value = "";
    },
    deleteQuote(id) {
      var quoteInd = this.quotes.findIndex(quote => quote.id === id);
      this.quotes.splice(quoteInd, 1);
    }
  },
  components: {
    // appHeader,
    // appAddQuote,
    // appQuotes
  }
};
</script>

<style>
.header {
  margin-top: 30px;
}
.input-group {
  margin: 20px 0;
}
.thumbnail {
  margin: 10px;
  padding: 20px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
}

.thumbnail:hover {
  opacity: 0.9;
  cursor: pointer;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
  color: grey;
  /* background-color: blue; */
}
</style>
