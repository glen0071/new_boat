import { createStore } from "vuex";
import { firebaseApp } from '../database/index.js';
import { setDoc, getFirestore, collection, query, getDocs, getDoc, orderBy, doc } from "firebase/firestore";

const db = getFirestore(firebaseApp);
const queryLatest = query(collection(db, "quotes"), orderBy('createdAt'));
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
    async fetchLatestQuotes() {
      let quotes = []
      const querySnapshot = await getDocs(queryLatest);
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
    },
    async saveNewQuote(_state, quoteData) {
      await setDoc(doc(db, 'quotes', quoteData.id), quoteData)
    }
  },
  getters: {
    currentQuote: state => state.currentQuote
  }
})

export default store