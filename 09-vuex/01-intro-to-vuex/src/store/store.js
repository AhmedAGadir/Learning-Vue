import Vue from 'vue';
// npm install --save vuex
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' clicks'
        }
    }
})