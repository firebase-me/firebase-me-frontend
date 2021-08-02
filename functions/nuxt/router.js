import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _291b4490 = () => interopDefault(import('..\\pages\\faq\\index.vue' /* webpackChunkName: "pages/faq/index" */))
const _71b894c4 = () => interopDefault(import('..\\pages\\grapes.vue' /* webpackChunkName: "pages/grapes" */))
const _9ca95af0 = () => interopDefault(import('..\\pages\\messages.vue' /* webpackChunkName: "pages/messages" */))
const _4e3812c6 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _365422b6 = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _79884ac2 = () => interopDefault(import('..\\pages\\admin\\articles\\index.vue' /* webpackChunkName: "pages/admin/articles/index" */))
const _11cdeee5 = () => interopDefault(import('..\\pages\\admin\\globals\\index.vue' /* webpackChunkName: "pages/admin/globals/index" */))
const _71cb14bc = () => interopDefault(import('..\\pages\\admin\\main.vue' /* webpackChunkName: "pages/admin/main" */))
const _23c41206 = () => interopDefault(import('..\\pages\\admin\\overview\\index.vue' /* webpackChunkName: "pages/admin/overview/index" */))
const _a8daac66 = () => interopDefault(import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _a2a47f16 = () => interopDefault(import('..\\pages\\articles\\create.vue' /* webpackChunkName: "pages/articles/create" */))
const _202c1eaa = () => interopDefault(import('..\\pages\\articles\\dashboard.vue' /* webpackChunkName: "pages/articles/dashboard" */))
const _004ca066 = () => interopDefault(import('..\\pages\\articles\\editor.vue' /* webpackChunkName: "pages/articles/editor" */))
const _16aea39b = () => interopDefault(import('..\\pages\\admin\\users\\active.vue' /* webpackChunkName: "pages/admin/users/active" */))
const _385f0178 = () => interopDefault(import('..\\pages\\admin\\users\\applications.vue' /* webpackChunkName: "pages/admin/users/applications" */))
const _44ce15aa = () => interopDefault(import('..\\pages\\admin\\articles\\_id.vue' /* webpackChunkName: "pages/admin/articles/_id" */))
const _7600684c = () => interopDefault(import('..\\pages\\articles\\view\\_id.vue' /* webpackChunkName: "pages/articles/view/_id" */))
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
    path: "/faq",
    component: _291b4490,
    name: "faq"
  }, {
    path: "/grapes",
    component: _71b894c4,
    name: "grapes"
  }, {
    path: "/messages",
    component: _9ca95af0,
    name: "messages"
  }, {
    path: "/profile",
    component: _4e3812c6,
    name: "profile"
  }, {
    path: "/projects",
    component: _365422b6,
    name: "projects"
  }, {
    path: "/admin/articles",
    component: _79884ac2,
    name: "admin-articles"
  }, {
    path: "/admin/globals",
    component: _11cdeee5,
    name: "admin-globals"
  }, {
    path: "/admin/main",
    component: _71cb14bc,
    name: "admin-main"
  }, {
    path: "/admin/overview",
    component: _23c41206,
    name: "admin-overview"
  }, {
    path: "/admin/users",
    component: _a8daac66,
    name: "admin-users"
  }, {
    path: "/articles/create",
    component: _a2a47f16,
    name: "articles-create"
  }, {
    path: "/articles/dashboard",
    component: _202c1eaa,
    name: "articles-dashboard"
  }, {
    path: "/articles/editor",
    component: _004ca066,
    name: "articles-editor"
  }, {
    path: "/admin/users/active",
    component: _16aea39b,
    name: "admin-users-active"
  }, {
    path: "/admin/users/applications",
    component: _385f0178,
    name: "admin-users-applications"
  }, {
    path: "/admin/articles/:id",
    component: _44ce15aa,
    name: "admin-articles-id"
  }, {
    path: "/articles/view/:id?",
    component: _7600684c,
    name: "articles-view-id"
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
