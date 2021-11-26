import { createWebHashHistory, createRouter } from "vue-router";
import QuoteList from '@/components/QuoteList.vue'
import QuoteForm from '@/components/QuoteForm.vue'

const routes = [
  {
    path: '/',
    name: 'QuoteList',
    component: QuoteList
  },
  {
    path: '/new',
    name: 'QuoteForm',
    component: QuoteForm
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router