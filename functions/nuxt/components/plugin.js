import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  ArticleCard: () => import('../..\\components\\ArticleCard.vue' /* webpackChunkName: "components/article-card" */).then(c => wrapFunctional(c.default || c)),
  Card: () => import('../..\\components\\Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  MenuGroup: () => import('../..\\components\\MenuGroup.vue' /* webpackChunkName: "components/menu-group" */).then(c => wrapFunctional(c.default || c)),
  NuxtLogo: () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  Pagination: () => import('../..\\components\\Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c)),
  Tutorial: () => import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
