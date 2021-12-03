import { createWebHashHistory, createRouter } from "vue-router";
import QuoteList from '@/components/QuoteList.vue'
import QuoteForm from '@/components/QuoteForm.vue'
import QuoteSearch from '@/components/QuoteSearch.vue'

const routes = [
  {
    path: '/',
    name: 'list',
    component: QuoteList
  },
  {
    path: '/new',
    name: 'new',
    component: QuoteForm
  },
  {
    path: '/search',
    name: 'search',
    component: QuoteSearch
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: QuoteForm
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router