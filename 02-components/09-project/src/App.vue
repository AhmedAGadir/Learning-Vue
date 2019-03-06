<template>
  <div class="container">
    <app-header :numberOfQuotes="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-add-quote @addNewQuote="addQuote"></app-add-quote>
    <div class="container-fluid" v-show="quotes.length > 0">
      <div class="row bg-primary">
        <!-- the native modifier allows you to register listeners to vue components -->
        <app-quote
          v-for="quote in quotes"
          :key="quote.id"
          @click.native="deleteQuote(quote.id)"
          :quote="quote"
        ></app-quote>
      </div>
    </div>
    <div class="alert alert-info text-center">
      <p>Info: Click on a quote to delete it</p>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";
import appAddQuote from "./components/AddQuote.vue";
import appQuote from "./components/Quote.vue";
export default {
  data: () => ({
    quotes: [],
    maxQuotes: 10
  }),
  methods: {
    addQuote(quote) {
      if (this.quotes.length === this.maxQuotes) {
        return alert("Delete a quote first!");
      }
      this.quotes.push(quote);
    },
    deleteQuote(id) {
      var quoteInd = this.quotes.findIndex(quote => quote.id === id);
      this.quotes.splice(quoteInd, 1);
    }
  },
  components: {
    appHeader,
    appAddQuote,
    appQuote
  }
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
  color: rgb(105, 105, 112);
}
</style>
