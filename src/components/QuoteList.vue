<template>
  <div class="hello">
    <h3>Quotes</h3>
    <div v-for="(quote, index) in quotes" :key="index">
      <QuoteItem :quote="quote" />
    </div>
  </div>
</template>

<script>
import QuoteItem from './QuoteItem.vue'

export default {
  name: 'QuoteList',
  components: {
    QuoteItem
  },
  props: {
    msg: String
  },
  computed: {
    quotes () {
      return this.$store.state.quotes
    }
  },
  mounted() {
    console.log(this.$store.state.quotes)
    this.$store.dispatch('fetchQuotes')
  }
}
</script>
