import { createWebHashHistory, createRouter } from "vue-router";
import QuoteList from '@/components/QuoteList.vue'
import QuoteForm from '@/components/QuoteForm.vue'
import QuoteSearch from '@/components/QuoteSearch.vue'
import QuoteDetail from '@/components/QuoteDetail.vue'
import About from '@/components/About.vue'

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
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: QuoteForm
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: QuoteDetail
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router