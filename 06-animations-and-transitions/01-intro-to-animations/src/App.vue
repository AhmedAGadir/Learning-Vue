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
        <!-- the name attribute doesnt have to be static, it can be dynamic e.g. use :name instead of name -->
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <!-- how to animate an element when the page is first loaded by adding the 'appear' attribute-->
        <transition name="slide" appear>
          <div class="alert alert-info" v-show="show">This is some info</div>
        </transition>
        <!-- in the case that we're using both animations and transitions, and they each take different lengths, then 
        we can set the type attribute to animation/transition so that vue js knows which one dictates the length of adding/removing the DOM element-->
        <transition name="slide-fade" type="transition">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <!-- * added the animate.css library to the project-->
        <!-- we can ovverride the default vue classes (v-enter, v-enter-active etc) -->
        <!-- note: you cant use the 'appear' attribute when you set up your own classes -->
        <transition
          name="fade"
          appear
          enter-active-class="animated bounce"
          leave-active-class="animated shake"
        >
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>

        <!-- how to transition from one element to another -->
        <!-- the conditions for rendering the elements need to alternate -->
        <!-- note: this doesnt work with v-show, only works with v-if -->
        <!-- keys need to be added -->
        <!-- two modes to chose from: (1) out-in (2) in-out
          out-in: let the old element animate out then bring in the new one 
          in-out: let the new element come in, then get rid of the old one
        -->
        <transition name="fade" mode="out-in">
          <div class="alert alert-warning" v-if="show" key="warning">This is some warning</div>
          <div class="alert alert-info" v-else key="info">This is some info</div>
        </transition>

        <!-- if you want to animate via javascript, you can do so by listening to the transition elements lifecycle hooks -->
        <!-- 
          1) before-enter
          2) enter
          3) after-enter
          4) after-enter-cancelled

          1) before-leave
          2) leave
          3) after-leave
          4) after-leave-cancelled
        -->
        <hr>
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br>
        <br>
        <!-- add :css="false" to let vue js know we're not using CSS classes here -->
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
        <br>
        <br>

        <!-- transitioning with dynamic components -->
        <button
          class="btn btn-primary"
          @click="selectedComponent = selectedComponent === 'app-success-alert' ? 'app-danger-alert' : 'app-success-alert'"
        >Toggle Components</button>
        <br>
        <br>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>

        <!-- animating lists using <transition-group></transition-group> -->
        <!-- 
          works exactly like <transition>, only difference is that <transition> is not rendered to the DOM, wheras <transition-group> renders a new HTML tag to the DOM,
          the default tag rendered is a <span> but you can override this by setting the tag attribute e.g. <transition-group tag="DIV">
          note: must always include a :key with transition-group elements
        -->
        <!-- transition-group also gives us a new CSS class "*-move" (v-move by default) which can be used to animate, elements in the group that have to move in order to make space for the new element  -->
        <hr>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br>
        <br>
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, ind) in numbers"
              :key="number"
              @click="removeItem(ind)"
              style="cursor: pointer"
            >{{ number }}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./DangerAlert.vue";
import SuccessAlert from "./SuccessAlert.vue";
export default {
  data: () => ({
    show: false,
    load: true,
    elementWidth: 100,
    selectedComponent: "app-success-alert",
    numbers: [1, 2, 3, 4, 5]
  }),
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
          // done tells vue js the animation is finished
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
          // done tells vue js the animation is finished
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(ind) {
      this.numbers.splice(ind, 1);
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  }
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
  /* position: absolute is added for transition-group purposes: i.e. to allows elements to be removed smoothly in the DOM (see lecture 202, time: 5:00 to know more) */
  position: absolute;
}

.slide-move {
  /* vue js knows what to do behind the scenes now */
  transition: transform 1s;
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
