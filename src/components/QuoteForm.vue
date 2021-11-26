<template>
  <form @submit.prevent="onFormSubmit">
    <div>
      <input type="text" v-model="quote.text" placeholder="text">
    </div>
    <div>
      <input type="text" v-model="quote.author" placeholder="author">
    </div>
    <div>
      <button type="submit">Save</button>
    </div>
  </form>
</template>

<script>
  import { firebaseApp } from '../database/index.js';
  import { getFirestore, collection, query, getDocs } from "firebase/firestore";

  const db = getFirestore(firebaseApp);

  const q = query(collection(db, "quotes"));

  getDocs(q).then(querySnapshot => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data().text);
    });
  });

  export default {
    data() {
      return {
        quote: {
        }
      }
    },
    methods: {
      onFormSubmit(event) {
        event.preventDefault()
        db.collection('quotes').add(this.quote).then(() => {
          alert("Quote successfully created!");
          this.quote.text = ''
          this.quote.author = ''
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    mounted() {
      this.$store.dispatch('fetchQuotes')
    }
  }
</script>