import stocks from '../../data/stocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RAND_STOCKS'(state) {

    }
};

const actions = {
    buyStock(context, order) {
        context.commit();
    },
    initStocks(context) {
        context.commit('SET_STOCKS', stocks);
    },
    randomizeStocks(context) {
        context.commit('RAND_STOCKS');
    }
};

const getters = {
    stocks: state => state.stocks
};

export default {
    state,
    mutations,
    actions,
    getters
}