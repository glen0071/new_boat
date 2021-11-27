import { createStore } from "vuex";
import { firebaseApp } from '../database/index.js';
import { getFirestore, collection, query, getDocs, getDoc, doc } from "firebase/firestore";

const db = getFirestore(firebaseApp);
const q = query(collection(db, "quotes"));
const blankQuote = {
  id: '001',
  text: '',
  author: '',
  topics: ''
}

const store = createStore({
  state () {
    return {
      count: 0,
      quotes: [ blankQuote ],
      blankQuote: blankQuote,
      currentQuote: blankQuote
    }
  },
  mutations: {
    setQuote (state, quote) {
      state.currentQuote = quote
    },
    setQuotes (state, quotes) {
      state.quotes = quotes
    },
    addQuote (state, quote) {
      state.quotes.push(quote)
    },
    addQuotes (state, quotes) {
      state.quotes.push(quotes)
    },
    clearQuote (state) {
      state.currentQuote = blankQuote
    }
  },
  actions: {
    async fetchQuotes() {
      let quotes = []
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        quotes.push(
          {
            id: doc.id,
            text: doc.data().text,
            author: doc.data().author
          }
        )
      }); 
      this.commit('setQuotes', quotes)
    },
    async fetchQuote(_state, quoteId) {
      const docRef = doc(db, "quotes", quoteId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.commit('setQuote', docSnap.data())
      } else {
        // doc.data() will be undefined in this case
        // error handling when doc is not found
      }
    }
  },
  getters: {
    currentQuote: state => state.currentQuote
  }
})

export default store