<template>
  <div class="header">
    <h2>Quotes Added</h2>
    <div class="progress">
      <div
        class="progress-bar progress-bar-info"
        role="progressbar"
        aria-valuenow="numberOfQuotes"
        aria-valuemin="0"
        aria-valuemax="maxQuotes"
        :style="{width: (numberOfQuotes/maxQuotes) * 100 + '%'}"
      >{{ numberOfQuotes }}/{{ maxQuotes }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numberOfQuotes: {
      type: Number,
      required: true
    },
    maxQuotes: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.header {
  margin-top: 30px;
}
.input-group {
  margin: 20px 0;
}
</style>

