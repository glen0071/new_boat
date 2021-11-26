<template>
  <form @submit.prevent="onFormSubmit">
    <div>
      <textarea type="text" v-model="quote.text" placeholder="text">
      </textarea>
    </div>
    <div>
      <textarea type="text" v-model="quote.author" placeholder="author">
      </textarea>
    </div>
    <div>
      <textarea type="text" v-model="quote.topic" placeholder="topic">
      </textarea>
    </div>
    <div>
      <button type="submit">Save</button>
    </div>
  </form>
</template>

<script>
  import { firebaseApp } from '../database/index.js';
  import { getFirestore, doc, setDoc } from "firebase/firestore";

  const db = getFirestore(firebaseApp);

  export default {
    data() {
      return {
        quote: { }
      }
    },
    methods: {
      async onFormSubmit ()  {
        await setDoc(doc(db, 'quotes', 'is_there_any_remover'), {
          text: this.quote.text,
          author: this.quote.author,
          topic: this.quote.topic
        })
      }
    },
    mounted() {
      this.$store.dispatch('fetchQuotes')
    }
  }
</script>