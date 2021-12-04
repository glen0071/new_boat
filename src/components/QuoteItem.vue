<template>
  <div class="w-full py-6">
    <div>
      <router-link 
      :to="{ name: 'edit', params: { id: findId } }"
      >{{ quote.text }}
      </router-link> 
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
    }
  },
  computed: {
    findId: function () {
      if (this.quote.id) {
        return this.quote.id
      } else {
        return this.quote.objectID
      }
    }
  }
}
</script>
