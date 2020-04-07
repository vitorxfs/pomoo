import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pomoStates: ["focus", "shortBreak", "longBreak"],
    currentPomoState: 0,
    order: [0, 1, 0, 1, 0, 1, 0, 2],
    // stateName: this.pomoStates[this.currentPomoState]
  },
  mutations: {
    nextState (state) {
      if(state.currentPomoState >= (state.order.length - 1)){
        state.currentPomoState = 0;
      } else {
        state.currentPomoState++;
      }
    },
  },
  getters: {
    currentState: state => state.pomoStates[state.order[state.currentPomoState]]
  }
});

export default store;