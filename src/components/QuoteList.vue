<template>
  <div class="">
    <div v-for="(quote, index) in allQuotes" :key="index">
      <QuoteItem :quote="quote" :index="index" />
    </div>
  </div>
</template>

<script>
import QuoteItem from './QuoteItem.vue'

export default {
  name: 'QuoteList',
  data() {
    return { quotes: this.$store.state.quotes }
  },
  components: {
    QuoteItem
  },
  computed: {
    allQuotes() {
      return this.$store.state.quotes
    }
  }
}
</script>
