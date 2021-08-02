import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AdminMenuGroup: () => import('../..\\components\\AdminMenuGroup.vue' /* webpackChunkName: "components/admin-menu-group" */).then(c => wrapFunctional(c.default || c)),
  AdminUserActive: () => import('../..\\components\\AdminUserActive.vue' /* webpackChunkName: "components/admin-user-active" */).then(c => wrapFunctional(c.default || c)),
  AdminUserApplications: () => import('../..\\components\\AdminUserApplications.vue' /* webpackChunkName: "components/admin-user-applications" */).then(c => wrapFunctional(c.default || c)),
  AdminUserBanned: () => import('../..\\components\\AdminUserBanned.vue' /* webpackChunkName: "components/admin-user-banned" */).then(c => wrapFunctional(c.default || c)),
  AdminUsersGroup: () => import('../..\\components\\AdminUsersGroup.vue' /* webpackChunkName: "components/admin-users-group" */).then(c => wrapFunctional(c.default || c)),
  ApplicationCard: () => import('../..\\components\\ApplicationCard.vue' /* webpackChunkName: "components/application-card" */).then(c => wrapFunctional(c.default || c)),
  ArticleCard: () => import('../..\\components\\ArticleCard.vue' /* webpackChunkName: "components/article-card" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  MenuGroup: () => import('../..\\components\\MenuGroup.vue' /* webpackChunkName: "components/menu-group" */).then(c => wrapFunctional(c.default || c)),
  NuxtLogo: () => import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c)),
  Pagination: () => import('../..\\components\\Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
