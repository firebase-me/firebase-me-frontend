import { wrapFunctional } from './utils'

export { default as ArticleCard } from '../..\\components\\ArticleCard.vue'
export { default as Card } from '../..\\components\\Card.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as MenuGroup } from '../..\\components\\MenuGroup.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Pagination } from '../..\\components\\Pagination.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'

export const LazyArticleCard = import('../..\\components\\ArticleCard.vue' /* webpackChunkName: "components/article-card" */).then(c => wrapFunctional(c.default || c))
export const LazyCard = import('../..\\components\\Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuGroup = import('../..\\components\\MenuGroup.vue' /* webpackChunkName: "components/menu-group" */).then(c => wrapFunctional(c.default || c))
export const LazyNuxtLogo = import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPagination = import('../..\\components\\Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorial = import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
