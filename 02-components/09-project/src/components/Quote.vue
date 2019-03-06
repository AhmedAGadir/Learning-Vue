<template>
  <div
    class="bg-danger thumbnail col-md-3"
    :class="{quoteHover: isHover}"
    @mouseover="isHover = true"
    @mouseout="isHover = false"
  >{{quote.val}}</div>
</template>

<script>
export default {
  props: ["quote"],
  data: () => ({
    isHover: false
  })
};
</script>

<style scoped>
.thumbnail {
  margin: 10px;
  padding: 20px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  overflow: scroll;
}
/* .thumbnail:hover {
  opacity: 0.9;
  cursor: pointer;
} */
.quoteHover {
  background: lightpink;
  color: red;
  opacity: 0.9;
  cursor: pointer;
}
</style>

