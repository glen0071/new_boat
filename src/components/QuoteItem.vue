<template>
  <div class="w-full py-6">
    <div>
      <a href="" @click.prevent="programmaticallyNavigate" >{{ quote.text }}</a>
    </div>
    <div class="text-sm md:text-base font-normal text-gray-600 float-right"> 
      ({{ quote.author }})
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'QuoteItem',
  props: {
    quote: { 
      type: Object,
      required: true
    },
    index: { 
      type: Number,
      required: true
    }
  },
  methods: {
    programmaticallyNavigate: function () {
      this.$store.commit('setQuote', 
        this.$store.state.quotes[this.index]
      )
      this.$router.push({ name: 'detail', params: { id: this.quote.id } })
    }
  }
}
</script>
