<template>
    <nav id="header" class="w-full flex px-5 p-3">
		<div class="w-full flex justify-between">
			<div>
				<a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
					Wiser
				</a>
			</div>
			<div class="text-gray-900 text-base no-underline hover:no-underline hover:pointer font-extrabold text-xl pl-4">
				<router-link to="/search" class="" href="#">Search</router-link> |
				<a href="" @click.prevent="newQuote">New</a> |
				<router-link to="/about" class="" href="#">About</router-link>
			</div>
		</div>
	</nav>
</template>

<script>

export default {
  name: 'NavMenu',
  methods: {
    newQuote() {
      this.$store.commit('clearQuote')
      this.$router.push({ path: 'new' })
    }
  }
}
</script>

<style scoped>
#header {
  background-color: white;
}
</style>
