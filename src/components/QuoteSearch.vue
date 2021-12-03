<template>
  <ais-instant-search :search-client="searchClient" index-name="quotes">
    <ais-search-box />
    <ais-hits>
      <template v-slot:item="{ item }">
        <QuoteItem :quote="item" />
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite-min.css';
import QuoteItem from '@/components/QuoteItem.vue'

export default {
  name: 'QuoteSearch',
  components: {
    QuoteItem
  },
  data() {
    return {
      searchClient: algoliasearch(
        'GHSPBCA7UP',
        '8eed7271d5c9310d141e146d6fb872dc'
      ),
    };
  },
}
</script>