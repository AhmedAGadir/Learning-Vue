<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br>
        <br>
        <!-- the transition element allows us to animate what is between the closing tags 
        note: you can only animate one element per transition tag at a time, so you can have multiple elements 
        in a transition element but the conditions need to alternate when showing them-->
        <!-- 
            1) *-enter (attached for one frame at the beginning)
            2) *-enter-active
            3) *-leave
            4) *-leave-active

        css class is .v-enter if no name is supplied
        -->
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <transition name="slide">
          <div class="alert alert-info" v-show="show">This is some info</div>
        </transition>
        <!-- in the case that we're using both animations and transitions, and they each take different lengths, then 
        we can set the type attribute to animation/transition so that vue js knows which one dictates the length of adding/removing the DOM element-->
        <transition name="slide-fade" type="transition">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>

<style>
/* .v-enter --- default */

/* •••••••••••••••••••••••••••••••••••••••• */
/* •••••••••••••• transition •••••••••••••• */
/* •••••••••••••••••••••••••••••••••••••••• */

.fade-enter {
  /* no point setting up a transition here since its only there for one frame */
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
  /* opacity: 1 - we dont set up the opacity 1 here because:
    1) the .fade-enter class is immediately removed after 1 frame, and the default opacity is 1 so we dont need to wrtie that
    2) writing it here would instantly override the opacity from 0 to 1 and because of that we wouldn't see any transition 
     */
}
.fade-leave {
  /* one frame here again */
  /* opacity: 1 -- we dont need to set it, the default is zero */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

/* ••••••••••••••••••••••••••••••••••••••• */
/* •••••••••••••• animation •••••••••••••• */
/* ••••••••••••••••••••••••••••••••••••••• */

.slide-enter {
  /* transform: translateY(20px) -- this isnt neccessary since out slide-in animation sets up the inital state of the animation*/
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

/* •••••••••••••••••••••••••••••••••••••••••••••••••••••• */
/* •••••••••••••• transition AND animation •••••••••••••• */
/* •••••••••••••••••••••••••••••••••••••••••••••••••••••• */

.slide-fade-enter {
  opacity: 0;
}

.slide-fade-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 2s;
}

.slide-fade-leave {
}

.slide-fade-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 2s;
  opacity: 0;
}
</style>
