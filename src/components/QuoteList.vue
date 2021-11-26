<template>
  <div class="hello">
    <h3>Quotes</h3>
    <div v-for="(quote, index) in quotes" :key="index">
      <QuoteItem :quote="quote" />
      <QuoteForm />
    </div>
  </div>
</template>

<script>
import QuoteItem from './QuoteItem.vue'
import QuoteForm from './QuoteForm.vue'

// import { db } from '../database/index.js'

export default {
  name: 'QuoteList',
  components: {
    QuoteItem,
    QuoteForm
  },
  props: {
    msg: String
  },
  computed: {
    quotes () {
      return this.$store.state.quotes
    }
  }
}
</script>
