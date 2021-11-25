<template>
  <div class="hello">
    <h3>Quotes</h3>
    <div v-for="(quote, index) in quotes" :key="index">
      {{ quote.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
