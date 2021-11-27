<template>
  <div id="nav">
      <router-link to="/">Quotes</router-link> |
      <a href="" @click.prevent="newQuote">New</a>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('fetchQuotes')
  },
  methods: {
    newQuote() {
      this.$store.commit('clearQuote')
      this.$router.push({ path: 'new' })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
