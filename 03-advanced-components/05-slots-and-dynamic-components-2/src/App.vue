<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button @click="selectedComponent = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
        <button @click="selectedComponent = 'appGreen'" class="btn btn-success">Load Green Template</button>
        <button @click="selectedComponent = 'appRed'" class="btn btn-danger">Load Red Template</button>
        <hr>
        <!-- <app-blue>
          <h1>Hello World!</h1>
          <p>roses are blue, violets are blue</p>
        </app-blue>
        <app-green>
          <h1>Hello World!</h1>
          <p>roses are green, violets are green</p>
        </app-green>
        <app-red>
          <h1>Hello World!</h1>
          <p>roses are red, violets are red</p>
        </app-red>-->
        <component :is="selectedComponent">
          <h1>Hello World!</h1>
          <p>roses are {{ getColor(selectedComponent)}}, violets are {{ getColor(selectedComponent)}}</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data: () => ({
    selectedComponent: "appBlue"
  }),
  methods: {
    getColor(selectedComponent) {
      return selectedComponent.replace("app", "").toLowerCase();
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
