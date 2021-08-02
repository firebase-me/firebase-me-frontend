import { wrapFunctional } from './utils'

export { default as AdminMenuGroup } from '../..\\components\\AdminMenuGroup.vue'
export { default as AdminUserActive } from '../..\\components\\AdminUserActive.vue'
export { default as AdminUserApplications } from '../..\\components\\AdminUserApplications.vue'
export { default as AdminUserBanned } from '../..\\components\\AdminUserBanned.vue'
export { default as AdminUsersGroup } from '../..\\components\\AdminUsersGroup.vue'
export { default as ApplicationCard } from '../..\\components\\ApplicationCard.vue'
export { default as ArticleCard } from '../..\\components\\ArticleCard.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as MenuGroup } from '../..\\components\\MenuGroup.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Pagination } from '../..\\components\\Pagination.vue'

export const LazyAdminMenuGroup = import('../..\\components\\AdminMenuGroup.vue' /* webpackChunkName: "components/admin-menu-group" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminUserActive = import('../..\\components\\AdminUserActive.vue' /* webpackChunkName: "components/admin-user-active" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminUserApplications = import('../..\\components\\AdminUserApplications.vue' /* webpackChunkName: "components/admin-user-applications" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminUserBanned = import('../..\\components\\AdminUserBanned.vue' /* webpackChunkName: "components/admin-user-banned" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminUsersGroup = import('../..\\components\\AdminUsersGroup.vue' /* webpackChunkName: "components/admin-users-group" */).then(c => wrapFunctional(c.default || c))
export const LazyApplicationCard = import('../..\\components\\ApplicationCard.vue' /* webpackChunkName: "components/application-card" */).then(c => wrapFunctional(c.default || c))
export const LazyArticleCard = import('../..\\components\\ArticleCard.vue' /* webpackChunkName: "components/article-card" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuGroup = import('../..\\components\\MenuGroup.vue' /* webpackChunkName: "components/menu-group" */).then(c => wrapFunctional(c.default || c))
export const LazyNuxtLogo = import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyPagination = import('../..\\components\\Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
