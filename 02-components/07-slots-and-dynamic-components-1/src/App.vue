<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <!-- passing props without binding (not dynamic): -->
        <!-- <app-quote quote="a wONDERFUL qUOTE"> -->
        <!-- passing props with binding (dynamic): -->
        <!-- <app-quote :quote="quote"> -->
        <!-- ************************************************************** -->
        <!-- ************************************************************** -->
        <!-- ************************************************************** -->
        <!-- passing HTML props through children (useful for when you want to distribute content in other components e.g. widgets, slideshows etc): -->
        <!-- when only using a single slot: -->
        <!-- <app-quote>
          <h2>tHE qUOTE</h2>
          <p>{{ quote }}</p>
        </app-quote>-->
        <!-- when you want to use multiple slots -->
        <!-- <app-quote>
          <h2 slot="title">tHE qUOTE</h2>
          <p slot="content">{{ quote }}</p>
        </app-quote>-->
        <!-- everything that doesnt have a slot attribute will be part of the default slot -->
        <!-- <app-quote>
          <h2 slot="title">tHE qUOTE</h2>
          <p>{{ quote }}</p>
        </app-quote>-->
        <!-- ************************************************************** -->
        <!-- ************************************************************** -->
        <!-- ************************************************************** -->
        <!-- switching multiple components with dynamic components -->
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'app-new'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <!-- reserved component <component></component> which allows us to dynamically add components-->
        <!-- when changing the selected component, they are destroyed and created each time -->
        <!-- <component :is='selectedComponent'>
          <p>Default Content</p>
        </component> -->
        <!-- to prevent this from happening, wrap the component with a <keep-alive></keep-alive> tag-->
        <!-- now the component will not be destroyed (preserving its state) -->
        <keep-alive>
          <component :is='selectedComponent'>
            <p>Default Content</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import appAuthor from "./components/Author.vue";
import appNew from "./components/New.vue";
export default {
  // remember in proper project setups, data must be a function that returns an object!
  data: () => ({
    quote: "a wONDERFUL qUOTE",
    selectedComponent: "appQuote"
  }),
  components: {
    appQuote: Quote,
    appAuthor,
    "app-new": appNew
  }
};
</script>

<style scoped>
/* slots aka children be styled in the component they are defined in (when styling is scoped) */
h2 {
  text-decoration: underline;
}
</style>
