<template>
  <div class="w-full py-6">
    <div>
      <p class="mb-4">
        {{ quote.text }}
      </p>
      <p class="mb-4">
        Author: {{ quote.author }}
      </p>
      <p class="mb-4">
        Source: {{ quote.source }}
      </p>
      <p class="mb-4">
        Topics: {{ quote.topics }}
      </p>
      <router-link 
      :to="{ name: 'edit', params: { id: id } }"
      class="bg-white hover:bg-gray-100 py-2 px-4 border border-gray-400 rounded shadow"
      >Edit
      </router-link> 
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'QuoteDetail',
  data () {
    return { id: this.$route.params.id }
  },
  computed: {
    quote() {
      return this.$store.getters.currentQuote
    }
  },
  mounted() {
    if (this.quote.text === '') {
      this.$store.dispatch(
        'fetchQuote', this.$route.params.id
      )
    }
  }
}
</script>
