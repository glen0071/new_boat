<template>
  <div>
    <div> {{ quote.text }} </div>
    <div> {{ quote.author }} 
      <router-link 
      :to="{ name: 'edit', params: { id: quote.id } }"
      >Edit</router-link> 
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
    }
  },
}
</script>
