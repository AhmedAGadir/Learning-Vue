<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!selectedServer">Server Details are currently not updated</p>
    <template v-else>
      <p>Server {{ selectedServer.id }}: Status: {{ selectedServer.status }}</p>
      <button class="btn btn-primary" @click="resetServer">Reset Status</button>
    </template>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";
export default {
  data: () => ({
    selectedServer: null
  }),
  methods: {
    resetServer() {
      this.selectedServer.status = "Normal";
      // dont need to pass to event bus or anything as weve changed an object reference
    }
  },
  created() {
    eventBus.$on("serverSelected", server => {
      this.selectedServer = server;
    });
  }
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>

