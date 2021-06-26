exports.ids = [11,1,2];
exports.modules = {

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("12558c21", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b5911fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b5911fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b5911fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b5911fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b5911fca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".lds-ellipsis[data-v-b5911fca]{\n  display:inline-block;\n  position:relative;\n  width:80px;\n  height:80px\n}\n.lds-ellipsis div[data-v-b5911fca]{\n  position:absolute;\n  top:33px;\n  width:13px;\n  height:13px;\n  border-radius:50%;\n  background:green;\n  -webkit-animation-timing-function:cubic-bezier(0,1,1,0);\n          animation-timing-function:cubic-bezier(0,1,1,0)\n}\n.lds-ellipsis div[data-v-b5911fca]:first-child{\n  left:8px;\n  -webkit-animation:lds-ellipsis1-data-v-b5911fca .6s infinite;\n          animation:lds-ellipsis1-data-v-b5911fca .6s infinite\n}\n.lds-ellipsis div[data-v-b5911fca]:nth-child(2){\n  left:8px;\n  -webkit-animation:lds-ellipsis2-data-v-b5911fca .6s infinite;\n          animation:lds-ellipsis2-data-v-b5911fca .6s infinite\n}\n.lds-ellipsis div[data-v-b5911fca]:nth-child(3){\n  left:32px;\n  -webkit-animation:lds-ellipsis2-data-v-b5911fca .6s infinite;\n          animation:lds-ellipsis2-data-v-b5911fca .6s infinite\n}\n.lds-ellipsis div[data-v-b5911fca]:nth-child(4){\n  left:56px;\n  -webkit-animation:lds-ellipsis3-data-v-b5911fca .6s infinite;\n          animation:lds-ellipsis3-data-v-b5911fca .6s infinite\n}\n@-webkit-keyframes lds-ellipsis1-data-v-b5911fca{\n0%{\n    transform:scale(0)\n}\nto{\n    transform:scale(1)\n}\n}\n@keyframes lds-ellipsis1-data-v-b5911fca{\n0%{\n    transform:scale(0)\n}\nto{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-b5911fca{\n0%{\n    transform:scale(1)\n}\nto{\n    transform:scale(0)\n}\n}\n@keyframes lds-ellipsis3-data-v-b5911fca{\n0%{\n    transform:scale(1)\n}\nto{\n    transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-b5911fca{\n0%{\n    transform:translate(0)\n}\nto{\n    transform:translate(24px)\n}\n}\n@keyframes lds-ellipsis2-data-v-b5911fca{\n0%{\n    transform:translate(0)\n}\nto{\n    transform:translate(24px)\n}\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/fetch/index.vue?vue&type=template&id=571c70a8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"\n    mx-5\n    my-5\n    overflow-hidden\n    bg-white\n    rounded-lg\n    shadow-lg\n    dark:bg-gray-800\n    transform\n    hover:scale-120\n  "},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.img))+(_vm._ssrAttr("alt",_vm.judul))+" class=\"object-cover w-full h-56\"> <div class=\"py-5 text-center\"><p class=\"block text-md font-bold text-gray-800 dark:text-white px-2\">"+_vm._ssrEscape(_vm._s(_vm.judul))+"</p> <span class=\"text-sm text-gray-700 dark:text-gray-200\">"+_vm._ssrEscape("Size "+_vm._s(_vm.size)+" MB")+"</span></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/fetch/index.vue?vue&type=template&id=571c70a8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/fetch/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var fetchvue_type_script_lang_js_ = ({
  data() {
    return {
      urlBase: "http://103.226.138.95:1337"
    };
  },

  props: ['judul', 'size', 'img', 'to'],
  methods: {
    url() {
      this.$router.push('/detail/' + this.to);
    }

  }
});
// CONCATENATED MODULE: ./components/fetch/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_fetchvue_type_script_lang_js_ = (fetchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/fetch/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_fetchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "19c0dc82"
  
)

/* harmony default export */ var fetch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loaderScroll/index.vue?vue&type=template&id=b5911fca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center font-semibold text-6xl text-green-800"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" class=\"h-10 animate-spin mx-auto\" data-v-b5911fca> <div class=\"lds-ellipsis\" data-v-b5911fca><div data-v-b5911fca></div><div data-v-b5911fca></div><div data-v-b5911fca></div><div data-v-b5911fca></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/loaderScroll/index.vue?vue&type=template&id=b5911fca&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/loaderScroll/index.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b5911fca",
  "6aa50c77"
  
)

/* harmony default export */ var loaderScroll = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tag/_slug.vue?vue&type=template&id=10b577ea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"font-semibold text-3xl my-5 mx-5 text-gray-600\">\n    Tag : <span class=\"text-black\">"+_vm._ssrEscape(_vm._s(_vm.categories.Label))+"</span></div> "+((_vm.isErrorFetch)?("<div class=\"mx-auto\"><p class=\"text-center font-semibold text-6xl mb-60\">"+_vm._ssrEscape(_vm._s(_vm.$route.params.slug)+" ")+"<span class=\"text-red-800\">Not Found</span></p></div>"):"<!---->")+" "),(_vm.isLoad)?_c('loaderSect'):_c('div',{staticClass:"grid grid-cols-2 md:grid-cols-4"},_vm._l((_vm.links),function(link){return _c('fetchData',{key:link.id,attrs:{"judul":link.Title,"img":_vm.urlImg + link.Cover[0].formats.small.url,"size":link.Size,"to":link.Slug}})}),1),_vm._ssrNode(" "),(_vm.isLoadFetch)?_c('scrollingLoader'):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tag/_slug.vue?vue&type=template&id=10b577ea&

// EXTERNAL MODULE: ./components/loaderScroll/index.vue + 2 modules
var loaderScroll = __webpack_require__(52);

// EXTERNAL MODULE: ./components/fetch/index.vue + 4 modules
var fetch = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tag/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  layout: 'slug',

  head() {
    return {
      title: '90Games - Tag: ' + this.categories.Label,
      meta: [{
        hid: 'Download android Private server',
        name: 'Android private server download ' + this.categories.Label + ', download dragonnest private server' + this.year,
        content: 'Android private server download ' + this.categories.Label + ', download dragonnest private server' + this.year
      }]
    };
  },

  data() {
    return {
      isErrorFetch: false,
      urlImg: "http://103.226.138.95:1337",
      isLoad: true,
      categories: {
        Label: ''
      },
      page: 1,
      isLoadFetch: false,
      links: []
    };
  },

  components: {
    scrollingLoader: loaderScroll["default"],
    fetchData: fetch["default"]
  },
  methods: {
    async getFetchApk() {
      const response = await this.$axios.get("applications" + `?categories.Slug=` + this.$route.params.slug + `&_limit=8`);

      if (response.data.length > 0) {
        this.links = response.data;
        this.isLoad = false;
      } else {
        this.isErrorFetch = true;
      }
    },

    getNextFetch() {
      this.isLoadFetch = true;

      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.page += 8;
          const page = this.page;
          this.$axios.get("applications" + `?categories.Slug=` + this.$route.params.slug + `&_start=` + page + `&_limit=8`).then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.links.push(response.data[i]);
            }

            this.isLoadFetch = false;
          });
        }
      };
    }

  },

  beforeMount() {
    this.getFetchApk();
  },

  mounted() {
    this.getNextFetch();
  },

  async created() {
    const rest = await this.$axios.get("categories" + '?Slug=' + this.$route.params.slug);

    if (rest.data.length > 0) {
      this.categories = rest.data[0];
    } else {
      this.$router.push('/404');
    }
  }

});
// CONCATENATED MODULE: ./pages/tag/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var tag_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/tag/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tag_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7556edaa"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map