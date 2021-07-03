import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01dc692c = () => interopDefault(import('..\\pages\\article.vue' /* webpackChunkName: "pages/article" */))
const _dde759ae = () => interopDefault(import('..\\pages\\editor.vue' /* webpackChunkName: "pages/editor" */))
const _5f97df4e = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _13c9889a = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _2f5691c0 = () => interopDefault(import('..\\pages\\admin\\articles.vue' /* webpackChunkName: "pages/admin/articles" */))
const _71cb14bc = () => interopDefault(import('..\\pages\\admin\\main.vue' /* webpackChunkName: "pages/admin/main" */))
const _4aaed757 = () => interopDefault(import('..\\pages\\admin\\navigation.vue' /* webpackChunkName: "pages/admin/navigation" */))
const _e497a8d4 = () => interopDefault(import('..\\pages\\profile\\main.vue' /* webpackChunkName: "pages/profile/main" */))
const _3b9cbb29 = () => interopDefault(import('..\\pages\\profile\\messages.vue' /* webpackChunkName: "pages/profile/messages" */))
const _7f74e952 = () => interopDefault(import('..\\pages\\profile\\projects.vue' /* webpackChunkName: "pages/profile/projects" */))
const _7ca2e046 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/article",
    component: _01dc692c,
    name: "article"
  }, {
    path: "/editor",
    component: _dde759ae,
    name: "editor"
  }, {
    path: "/inspire",
    component: _5f97df4e,
    name: "inspire"
  }, {
    path: "/services",
    component: _13c9889a,
    name: "services"
  }, {
    path: "/admin/articles",
    component: _2f5691c0,
    name: "admin-articles"
  }, {
    path: "/admin/main",
    component: _71cb14bc,
    name: "admin-main"
  }, {
    path: "/admin/navigation",
    component: _4aaed757,
    name: "admin-navigation"
  }, {
    path: "/profile/main",
    component: _e497a8d4,
    name: "profile-main"
  }, {
    path: "/profile/messages",
    component: _3b9cbb29,
    name: "profile-messages"
  }, {
    path: "/profile/projects",
    component: _7f74e952,
    name: "profile-projects"
  }, {
    path: "/",
    component: _7ca2e046,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
