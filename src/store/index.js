import { createStore } from "vuex";

const store = createStore({
  state () {
    return {
      count: 0,
      quotes: [
        {
          text: 'Truthfulness is the foundation of all human virtues...',
          author: `Bahá'í`
        }
      ]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


export default store