<template>
  <div class="hello">
    <h1>Quotes</h1>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted: () => {
    console.log(store.state.count)
  }
}
</script>
