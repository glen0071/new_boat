import { createWebHashHistory, createRouter } from "vue-router";
import QuoteList from '@/components/QuoteList.vue'
import QuoteForm from '@/components/QuoteForm.vue'

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