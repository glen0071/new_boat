<template>
  <div>
    <div> {{ quote.text }} </div>
    <div> {{ quote.author }} </div>
  </div>
</template>

<script>
export default {
  name: 'QuoteItem',
  props: {
    quote: Object
  },
}
</script>
