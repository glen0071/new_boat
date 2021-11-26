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
    },
    addQuote (state, quote) {
      state.quotes.push(quote)
    },
    addQuotes (state, quote) {
      state.quotes.push(quote)
    }
  },
  actions: {
    async fetchQuotes() {
      let quote = blankQuote
      let quotes = []

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        quote = blankQuote
        quote.id = doc.id
        quote.text = doc.data().text
        quote.author = doc.data().author
        quotes.push(quote)
      });      
      this.commit('addQuotes', quotes)
    }
  }
})

export default store