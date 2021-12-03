import { createApp } from 'vue'
import App from '@/App.vue'
import store from "@/store/index.js";
import router from "@/router/index.js";
import InstantSearch from 'vue-instantsearch/vue3/es';
import './index.css'

createApp(App).use(store).use(router).use(InstantSearch).mount('#app')
