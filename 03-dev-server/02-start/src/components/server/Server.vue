<template>
  <li
    class="list-group-item"
    @click="clickHandler"
  >ID: {{ server.id }} | Status: {{ server.status }}</li>
</template>

<script>
import { eventBus } from "../../main.js";
export default {
  props: ["server"],
  methods: {
    clickHandler() {
      eventBus.selectServer(this.server);
    }
  }
};
</script>

<style>
</style>

