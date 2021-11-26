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
      random (length = 8) {
        return Math.random().toString(16).substr(2, length);
      },
      async onFormSubmit ()  {
        await setDoc(doc(db, 'quotes', this.random), {
          text: this.quote.text,
          author: this.quote.author,
          topic: this.quote.topic
        })
      }
    }
  }
</script>