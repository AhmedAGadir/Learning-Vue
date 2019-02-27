<template>
  <div>
    <!-- children is passed through reserved tag 'slot' -->
    <!-- when only using one slot -->
    <!-- <slot></slot> -->
    <!-- when using multiple slots - use named slots -->
    <!-- <slot name="title"></slot>
    <slot name="content"></slot>-->
    <!-- mixing named and default slots: -->
    <slot name="title"></slot>
    <slot></slot>
    <!-- in the case where we have a named slot that may or may not be passed down, 
    we can insert some fallback content between the slot tags to be displayed-->
    <span style="color: #ccc">
      <slot name="subtitle">The Subtitle</slot>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
/* slots can also be styled in here */
h2 {
  color: blue;
}
</style>
