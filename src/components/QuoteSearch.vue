<template>
  <ais-instant-search :search-client="searchClient" index-name="quotes">
    <ais-search-box />
    <ais-hits>
      <template v-slot:item="{ item }">
        <h2>{{ item.text }}</h2>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/satellite-min.css';

export default {
  name: 'QuoteSearch',
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