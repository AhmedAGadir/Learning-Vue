import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import value from './modules/value';

Vue.use(Vuex);

// ****************************************************
// ****** before splitting store up into modules ******
// ****************************************************

// export const store = new Vuex.Store({
//     state: {
//         counter: 0,
//         value: 0
//     },
//     getters: {
//         doubleCounter(state) {
//             return state.counter * 2;
//         },
//         stringCounter: state => {
//             return state.counter + ' clicks'
//         },
//         value: state => {
//             return state.value;
//         }
//     },
//     // setters are called mutations (because they mutate the state)
//     // however mutations have to be synchronous
//     mutations: {
//         increment: state => {
//             // we dont return a new state, we just mutate the current state
//             state.counter++;
//         },
//         // mutations can also receive a payload 
//         decrement: (state, payload) => {
//             state.counter -= payload;
//         },
//         updateValue: (state, payload) => {
//             state.value = payload;
//         }
//     },
//     actions: {
//         // for async actions
//         // can name this action 'increment' as well and theres no conflict because this is a different object
//         // for clear code: its better to always use actions, even when not doing asynchronous commits
//         increment: context => {
//             // context just gives us access to the commit method
//             // it has a lot of the properties of our store (its not exactly the same however)
//             setTimeout(() => {
//                 context.commit("increment");
//             }, 500);
//         },
//         decrement: (context, payload) => {
//             // we pass the payload to the mutation were gonna execute
//             context.commit("decrement", payload);
//         },
//         updateValue: (context, payload) => {
//             context.commit('updateValue', payload);
//         }
//     }
// })


// ***************************************************
// ****** after splitting up store into modules ******
// ***************************************************

export const store = new Vuex.Store({
    modules: {
        counter,
        value
    }
})
