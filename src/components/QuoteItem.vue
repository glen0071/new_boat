<template>
  <div class="py-6">
    <router-link 
    :to="{ name: 'edit', params: { id: quote.id } }"
    >{{ quote.text }}
    </router-link> 
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
    }
  },
}
</script>
