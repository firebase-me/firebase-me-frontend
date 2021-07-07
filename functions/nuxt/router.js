import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1d9db5a4 = () => interopDefault(import('..\\pages\\article.vue' /* webpackChunkName: "pages/article" */))
const _36c58ca2 = () => interopDefault(import('..\\pages\\editor.vue' /* webpackChunkName: "pages/editor" */))
const _7e23c988 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _728a34c0 = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _904cbc0c = () => interopDefault(import('..\\pages\\admin\\articles.vue' /* webpackChunkName: "pages/admin/articles" */))
const _378351f6 = () => interopDefault(import('..\\pages\\admin\\main.vue' /* webpackChunkName: "pages/admin/main" */))
const _82a27dde = () => interopDefault(import('..\\pages\\admin\\navigation.vue' /* webpackChunkName: "pages/admin/navigation" */))
const _735bfb60 = () => interopDefault(import('..\\pages\\profile\\main.vue' /* webpackChunkName: "pages/profile/main" */))
const _a0c6b63a = () => interopDefault(import('..\\pages\\profile\\messages.vue' /* webpackChunkName: "pages/profile/messages" */))
const _34457511 = () => interopDefault(import('..\\pages\\profile\\projects.vue' /* webpackChunkName: "pages/profile/projects" */))
const _0bb81100 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1d9db5a4,
    name: "article"
  }, {
    path: "/editor",
    component: _36c58ca2,
    name: "editor"
  }, {
    path: "/inspire",
    component: _7e23c988,
    name: "inspire"
  }, {
    path: "/services",
    component: _728a34c0,
    name: "services"
  }, {
    path: "/admin/articles",
    component: _904cbc0c,
    name: "admin-articles"
  }, {
    path: "/admin/main",
    component: _378351f6,
    name: "admin-main"
  }, {
    path: "/admin/navigation",
    component: _82a27dde,
    name: "admin-navigation"
  }, {
    path: "/profile/main",
    component: _735bfb60,
    name: "profile-main"
  }, {
    path: "/profile/messages",
    component: _a0c6b63a,
    name: "profile-messages"
  }, {
    path: "/profile/projects",
    component: _34457511,
    name: "profile-projects"
  }, {
    path: "/",
    component: _0bb81100,
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
