import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7b2e64e7 = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _6d26a2fc = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _6a91bf60 = () => interopDefault(import('..\\pages\\tester.vue' /* webpackChunkName: "pages/tester" */))
const _650095f0 = () => interopDefault(import('..\\pages\\detail\\_slug.vue' /* webpackChunkName: "pages/detail/_slug" */))
const _260c7b51 = () => interopDefault(import('..\\pages\\search\\_slug.vue' /* webpackChunkName: "pages/search/_slug" */))
const _e362365e = () => interopDefault(import('..\\pages\\tag\\_slug.vue' /* webpackChunkName: "pages/tag/_slug" */))
const _e643047e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _7b2e64e7,
    name: "404"
  }, {
    path: "/about",
    component: _6d26a2fc,
    name: "about"
  }, {
    path: "/tester",
    component: _6a91bf60,
    name: "tester"
  }, {
    path: "/detail/:slug?",
    component: _650095f0,
    name: "detail-slug"
  }, {
    path: "/search/:slug?",
    component: _260c7b51,
    name: "search-slug"
  }, {
    path: "/tag/:slug?",
    component: _e362365e,
    name: "tag-slug"
  }, {
    path: "/",
    component: _e643047e,
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
