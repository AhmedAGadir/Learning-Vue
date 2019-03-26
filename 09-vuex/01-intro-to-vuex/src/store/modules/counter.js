const state = {
    counter: 0
}

const getters = {
    doubleCounter(state) {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' clicks'
    }
}

const mutations = {
    increment: state => {
        state.counter++;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    }
}

const actions = {
    increment: context => {
        setTimeout(() => {
            context.commit("increment");
        }, 500);
    },
    decrement: (context, payload) => {
        context.commit("decrement", payload);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}