import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Dropdown: () => import('../..\\components\\dropdown\\index.vue' /* webpackChunkName: "components/dropdown" */).then(c => wrapFunctional(c.default || c)),
  Fetch: () => import('../..\\components\\fetch\\index.vue' /* webpackChunkName: "components/fetch" */).then(c => wrapFunctional(c.default || c)),
  FooterSect: () => import('../..\\components\\footerSect\\index.vue' /* webpackChunkName: "components/footer-sect" */).then(c => wrapFunctional(c.default || c)),
  LoaderScroll: () => import('../..\\components\\loaderScroll\\index.vue' /* webpackChunkName: "components/loader-scroll" */).then(c => wrapFunctional(c.default || c)),
  LoaderSect: () => import('../..\\components\\loaderSect\\index.vue' /* webpackChunkName: "components/loader-sect" */).then(c => wrapFunctional(c.default || c)),
  NavbarComponent: () => import('../..\\components\\navbarComponent\\index.vue' /* webpackChunkName: "components/navbar-component" */).then(c => wrapFunctional(c.default || c)),
  SearchSect: () => import('../..\\components\\searchSect\\index.vue' /* webpackChunkName: "components/search-sect" */).then(c => wrapFunctional(c.default || c)),
  SlideshowComps: () => import('../..\\components\\slideshowComps\\index.vue' /* webpackChunkName: "components/slideshow-comps" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
