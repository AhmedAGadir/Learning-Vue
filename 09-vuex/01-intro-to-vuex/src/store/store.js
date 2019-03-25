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
    },
    // setters are called mutations (because they mutate the state)
    // however mutations have to be synchronous
    mutations: {
        increment: state => {
            // we dont return a new state, we just mutate the current state
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        }
    }
})