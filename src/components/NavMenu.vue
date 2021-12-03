<template>
    <nav id="header" class="fixed w-full top-0 flex px-5 pt-5">
		<div class="w-full flex justify-between">
			<div>
				<a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
					Home | Wiser
				</a>
			</div>
			<div class="text-gray-900 text-base no-underline hover:no-underline hover:pointer font-extrabold text-xl pl-4">
				<a href="" @click.prevent="newQuote">New</a> |
				<router-link to="/search" class="" href="#">Search</router-link>
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
