import { wrapFunctional } from './utils'

export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Dropdown } from '../..\\components\\dropdown\\index.vue'
export { default as Fetch } from '../..\\components\\fetch\\index.vue'
export { default as FooterSect } from '../..\\components\\footerSect\\index.vue'
export { default as LoaderScroll } from '../..\\components\\loaderScroll\\index.vue'
export { default as LoaderSect } from '../..\\components\\loaderSect\\index.vue'
export { default as NavbarComponent } from '../..\\components\\navbarComponent\\index.vue'
export { default as SearchSect } from '../..\\components\\searchSect\\index.vue'
export { default as SlideshowComps } from '../..\\components\\slideshowComps\\index.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyDropdown = import('../..\\components\\dropdown\\index.vue' /* webpackChunkName: "components/dropdown" */).then(c => wrapFunctional(c.default || c))
export const LazyFetch = import('../..\\components\\fetch\\index.vue' /* webpackChunkName: "components/fetch" */).then(c => wrapFunctional(c.default || c))
export const LazyFooterSect = import('../..\\components\\footerSect\\index.vue' /* webpackChunkName: "components/footer-sect" */).then(c => wrapFunctional(c.default || c))
export const LazyLoaderScroll = import('../..\\components\\loaderScroll\\index.vue' /* webpackChunkName: "components/loader-scroll" */).then(c => wrapFunctional(c.default || c))
export const LazyLoaderSect = import('../..\\components\\loaderSect\\index.vue' /* webpackChunkName: "components/loader-sect" */).then(c => wrapFunctional(c.default || c))
export const LazyNavbarComponent = import('../..\\components\\navbarComponent\\index.vue' /* webpackChunkName: "components/navbar-component" */).then(c => wrapFunctional(c.default || c))
export const LazySearchSect = import('../..\\components\\searchSect\\index.vue' /* webpackChunkName: "components/search-sect" */).then(c => wrapFunctional(c.default || c))
export const LazySlideshowComps = import('../..\\components\\slideshowComps\\index.vue' /* webpackChunkName: "components/slideshow-comps" */).then(c => wrapFunctional(c.default || c))
