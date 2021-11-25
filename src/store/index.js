import { createStore } from "vuex";

export default createStore({
  state: {
    quotes: [
      {
        text: 'Truthfullness is the foundation of all human virtues'
      }
    ],
    count: 0,
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  increment (context) {
    context.commit('increment')
  }
})