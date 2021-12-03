<template>
  <form @submit.prevent="onFormSubmit">
    <div>
      <textarea type="text" v-model="quote.text" placeholder="text" class="w-full p-2 text-center content-center italic rounded mb-5">
      </textarea>
    </div>
    <div>
      <input type="text" v-model="quote.author" placeholder="author" class="w-full p-2 text-center content-center italic rounded mb-8" />
    </div>
    <div>
      <textarea type="text" v-model="quote.topics" placeholder="topics" class="w-full p-2 text-center content-center italic rounded">
      </textarea>
    </div>
    <div>
      <div class='actions width-full flex justify-end'>
        <button 
          class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5"
          type="submit">
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    computed: {
      quote() {
        return this.$store.getters.currentQuote
      }
    },
    methods: {
      getId () {
        if (this.$route.params.id) {
          return this.$route.params.id
        } else {
          return this.random()
        }
      },
      random (length = 8) {
        return Math.random().toString(16).substr(2, length);
      },
      created () {
        if (this.quote.createdAt) {
          return this.quote.createdAt
        } else {
          return Date.now()
        }
      },
      onFormSubmit ()  {
        const newQuote = {
          ...this.quote,
          id: this.getId(),
          createdAt: Date.now(),
        }
        this.$store.dispatch('saveNewQuote', newQuote)
      },
    },
    mounted() {
      if (this.$route.params.id) {
        const quoteId = this.$route.params.id
        this.$store.dispatch('fetchQuote', quoteId)
      } else {
        this.$store.commit('clearQuote')
      }
    }
  }
</script>