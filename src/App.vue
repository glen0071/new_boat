<template>
  <body class="bg-gray-100 font-sans leading-normal tracking-normal">
    <nav-menu />
    <div class="container w-full md:max-w-3xl mx-auto pt-20">

      <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">
        <router-view />

      </div>
    </div>
  </body>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'

export default {
  name: 'App',
  components: {
    NavMenu,
  },
  mounted() {
    this.$store.dispatch('fetchLatestQuotes')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
