import { createStore } from "vuex";
import { firebaseApp } from '../database/index.js';
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

const db = getFirestore(firebaseApp);
const q = query(collection(db, "quotes"));
const blankQuote = {
  id: '',
  text: '',
  author: ''
}

const store = createStore({
  state () {
    return {
      count: 0,
      quotes: [
        {
          id: '001',
          text: 'Truthfulness is the foundation of all human virtues...',
          author: `Bahá'í`
        }
      ],
      blankQuote: blankQuote
    }
  },
  mutations: {
    setQuote (state, quote) {
      state.quotes = [quote]
    }
  },
  actions: {
    async fetchQuotes() {
      let quote = blankQuote

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        quote.id = doc.id
        quote.text = doc.data().text
        quote.author = doc.data().author
        this.commit('setQuote', quote)
      });      
    }
  }

})


export default store