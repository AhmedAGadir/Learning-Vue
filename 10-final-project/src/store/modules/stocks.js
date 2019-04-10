import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RAND_STOCKS'(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
};

const actions = {
    // the mutation for this action is in the portfolio module (doesn't matter since they get merged in store.js)
    buyStock(context, order) {
        context.commit('BUY_STOCK', order);
    },
    // destructuring
    initStocks({ commit }) {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks(context) {
        context.commit('RAND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}