<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <!-- sometimes you just want to add a small something to a html tag, and creating a component would be overkill, thats when directives are useful -->
        <!-- directives always start with "v-" -->
        <p v-text="'Some Text'"></p>
        <!-- be careful when using v-html, sanitize whatever your putting in to avoid cross-site scripting attacks -->
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <!-- 2 options to create directives:
        1) register it globally ••••••• (see main.js) •••••••-->
        <!-- <p v-highlight>Color this</p>  -->
        <p v-highlight="'red'">Color this</p>
        <!-- you can pass arguments to the directive with a colon after the directive -->
        <p v-highlight:background="'green'">Color this</p>
        <!-- with a modifier -->
        <p v-highlight:background.delay="'blue'">Color this</p>

        <!-- 2) register it locally (see below) -->
        <p
          v-local-highlight:background.delay.blink="{mainColor: 'pink', secondColor: 'orange', intervalDelay: 500}"
        >Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    localHighlight: {
      bind: function(el, binding, vnode) {
        let timeoutDelay = 0;
        if (binding.modifiers["delay"]) {
          timeoutDelay = 3000;
        }
        if (binding.modifiers["blink"]) {
          // with an interval
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          let intervalDelay = binding.value.intervalDelay;
          setTimeout(() => {
            setInterval(() => {
              currentColor === mainColor
                ? (currentColor = secondColor)
                : (currentColor = mainColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, intervalDelay);
          }, timeoutDelay);
        } else {
          // without an interval
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style>
</style>
