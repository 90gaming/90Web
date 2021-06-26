exports.ids = [8,3,5];
exports.modules = {

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("a24bca70", content, true, context)
};

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loaderSect/index.vue?vue&type=template&id=d15a04f6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"hero container max-w-screen-lg mx-auto pb-10 h-80"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" alt=\"screenshot\" class=\"mx-auto h-20 animate-spin\"> <p class=\"text-center font-semibold animate-bounce text-6xl text-green-800\">\n    Loading . . .\n  </p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/loaderSect/index.vue?vue&type=template&id=d15a04f6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/loaderSect/index.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "81160126"
  
)

/* harmony default export */ var loaderSect = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("0d05fc7c", content, true)

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hooper-slide{\n  flex-shrink:0;\n  height:100%;\n  margin:0;\n  padding:0;\n  list-style:none\n}\n\n.hooper-progress{\n  position:absolute;\n  top:0;\n  right:0;\n  left:0;\n  height:4px;\n  background-color:#efefef\n}\n\n.hooper-progress-inner{\n  height:100%;\n  background-color:#4285f4;\n  transition:.3s\n}\n\n.hooper-pagination{\n  position:absolute;\n  bottom:0;\n  right:50%;\n  transform:translateX(50%);\n  display:flex;\n  padding:5px 10px\n}\n\n.hooper-indicators{\n  display:flex;\n  list-style:none;\n  margin:0;\n  padding:0\n}\n\n.hooper-indicator.is-active,.hooper-indicator:hover{\n  background-color:#4285f4\n}\n\n.hooper-indicator{\n  margin:0 2px;\n  width:12px;\n  height:4px;\n  border-radius:4px;\n  border:none;\n  padding:0;\n  background-color:#fff;\n  cursor:pointer\n}\n\n.hooper-pagination.is-vertical{\n  bottom:auto;\n  right:0;\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.hooper-pagination.is-vertical .hooper-indicators{\n  flex-direction:column\n}\n\n.hooper-pagination.is-vertical .hooper-indicator{\n  width:6px\n}\n\n.hooper-next,.hooper-prev{\n  background-color:transparent;\n  border:none;\n  padding:1em;\n  position:absolute;\n  top:50%;\n  transform:translateY(-50%);\n  cursor:pointer\n}\n\n.hooper-next.is-disabled,.hooper-prev.is-disabled{\n  opacity:.3;\n  cursor:not-allowed\n}\n\n.hooper-next{\n  right:0\n}\n\n.hooper-prev{\n  left:0\n}\n\n.hooper-navigation.is-vertical .hooper-next{\n  top:auto;\n  bottom:0;\n  transform:none\n}\n\n.hooper-navigation.is-vertical .hooper-prev{\n  top:0;\n  bottom:auto;\n  right:0;\n  left:auto;\n  transform:none\n}\n\n.hooper-navigation.is-rtl .hooper-prev{\n  left:auto;\n  right:0\n}\n\n.hooper-navigation.is-rtl .hooper-next{\n  right:auto;\n  left:0\n}\n\n.hooper{\n  position:relative;\n  width:100%;\n  height:200px\n}\n\n.hooper,.hooper *{\n  box-sizing:border-box\n}\n\n.hooper-list{\n  overflow:hidden;\n  width:100%;\n  height:100%\n}\n\n.hooper-track{\n  display:flex;\n  box-sizing:border-box;\n  width:100%;\n  height:100%;\n  padding:0;\n  margin:0\n}\n\n.hooper.is-vertical .hooper-track{\n  flex-direction:column;\n  height:200px\n}\n\n.hooper.is-rtl{\n  direction:rtl\n}\n\n.hooper-sr-only{\n  position:absolute;\n  width:1px;\n  height:1px;\n  padding:0;\n  margin:-1px;\n  overflow:hidden;\n  clip:rect(0,0,0,0);\n  border:0\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hooper-next,.hooper-prev{\n  background-color:#bf8be4;\n  border:none;\n  padding:1em;\n  position:absolute;\n  top:50%;\n  transform:translateY(-50%);\n  cursor:pointer\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/slideshowComps/index.vue?vue&type=template&id=02cd9ae8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('hooper',{staticStyle:{"max-width":"400px","margin":"auto"},attrs:{"autoPlay":true,"playSpeed":2000}},[_vm._l((_vm.images),function(thumb){return _c('slide',{key:thumb.id,staticClass:"bg-contain bg-center bg-no-repeat",staticStyle:{"background-size":"100% 100%"},style:({ backgroundImage: 'url(' + _vm.url+thumb.formats.medium.url + ')' })})}),_vm._v(" "),_c('hooper-navigation',{attrs:{"slot":"hooper-addons"},slot:"hooper-addons"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/slideshowComps/index.vue?vue&type=template&id=02cd9ae8&

// EXTERNAL MODULE: ./node_modules/hooper/dist/hooper.css
var hooper = __webpack_require__(55);

// EXTERNAL MODULE: external "hooper"
var external_hooper_ = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/slideshowComps/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var slideshowCompsvue_type_script_lang_js_ = ({
  props: ['images'],
  components: {
    Hooper: external_hooper_["Hooper"],
    Slide: external_hooper_["Slide"],
    HooperNavigation: external_hooper_["Navigation"]
  },

  data() {
    return {
      url: "http://103.226.138.95:1337"
    };
  },

  mounted() {
    console.log('Thumbnail', this.images);
  }

});
// CONCATENATED MODULE: ./components/slideshowComps/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_slideshowCompsvue_type_script_lang_js_ = (slideshowCompsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/slideshowComps/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_slideshowCompsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "565f4ca6"
  
)

/* harmony default export */ var slideshowComps = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/detail/_slug.vue?vue&type=template&id=359833ec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-col justify-center my-10"},[(_vm.isLoad)?_c('loaderSect'):_c('div',{staticClass:"relative mx-10"},[_c('div',{staticClass:"relative px-4 py-10 bg-white shadow-lg p-10 rounded-xl"},[_c('div',{staticClass:"mx-auto"},[_c('div',{staticClass:"py-5 flex"},[_c('nuxt-link',{staticClass:"text-indigo-800 font-semibold flex-1",attrs:{"to":"/"}},[_vm._v("🡠 Back to Home")]),_vm._v(" "),_c('a',{staticClass:"\n              text-white\n              inline-block\n              bg-red-600\n              hover:bg-red-800\n              hover:text-red-200\n              py-1\n              px-5\n              rounded-md\n            ",attrs:{"href":"#Report"}},[_vm._v("Report Broken")])],1),_vm._v(" "),_c('h1',{staticClass:"font-semiboldtext-gray-900 font-bold text-4xl"},[_vm._v("\n          "+_vm._s(_vm.item.Title)+"\n        ")]),_vm._v(" "),_c('p',{staticClass:"font-light text-4x4 text-gray-600 pb-5"},[_vm._v("\n          Updated on "+_vm._s(_vm.getDate)+"\n        ")]),_vm._v(" "),(_vm.item.Youtube)?_c('div',{staticClass:"relative",staticStyle:{"padding-top":"56.25%"}},[_c('iframe',{staticClass:"absolute inset-0 w-full h-full",attrs:{"height":"315","src":'https://www.youtube.com/embed/' + _vm.item.Youtube}})]):_vm._e(),_vm._v(" "),_c('div'),_vm._v(" "),_c('div',{staticClass:"divide-y divide-gray-200"},[_c('div',{staticClass:"\n              py-8\n              text-base\n              leading-6\n              space-y-4\n              text-gray-700\n              sm:text-lg\n              sm:leading-7\n            "},[_c('div',[_c('vue-simple-markdown',{attrs:{"source":_vm.item.Content}})],1)]),_vm._v(" "),_c('slideshowComps',{attrs:{"images":_vm.thumb}}),_vm._v(" "),_c('div',{staticClass:"pt-6 text-center pb-6"},[_c('p',{staticClass:"font-bold uppercase pb-5"},[_vm._v("Download Link")]),_vm._v(" "),_c('p',[(_vm.item.Drive)?_c('a',{staticClass:"\n                  py-2\n                  px-4\n                  rounded-lg\n                  font-bold\n                  text-white\n                  hover:bg-green-600\n                  bg-green-800\n                  inline-flex\n                  items-center\n                ",attrs:{"href":_vm.item.Drive}},[_c('svg',{staticClass:"fill-current w-4 h-4 mr-2",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20"}},[_c('path',{attrs:{"d":"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"}})]),_vm._v(" "),_c('span',[_vm._v("Google Drive")])]):_vm._e(),_vm._v(" "),(_vm.item.Mega)?_c('a',{staticClass:"\n                  bg-red-600\n                  hover:bg-red-800\n                  text-white\n                  font-bold\n                  py-2\n                  px-4\n                  rounded-lg\n                  inline-flex\n                  items-center\n                ",attrs:{"href":_vm.item.Mega}},[_c('svg',{staticClass:"fill-current w-4 h-4 mr-2",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20"}},[_c('path',{attrs:{"d":"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"}})]),_vm._v(" "),_c('span',[_vm._v("Mega Download")])]):_vm._e()])]),_vm._v(" "),(_vm.isCategories)?_c('div',{staticClass:"px-6 pt-4 pb-2"},_vm._l((_vm.item.categories),function(items){return _c('div',{key:items.id},[_c('nuxt-link',{staticClass:"\n                inline-block\n                bg-gray-200\n                rounded-full\n                px-3\n                py-1\n                text-sm\n                font-semibold\n                text-gray-700\n                mr-2\n                mb-2\n              ",attrs:{"to":'/tag/'+items.Slug}},[_vm._v(_vm._s(items.Label))])],1)}),0):_vm._e()],1)])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/detail/_slug.vue?vue&type=template&id=359833ec&

// EXTERNAL MODULE: ./components/slideshowComps/index.vue + 4 modules
var slideshowComps = __webpack_require__(60);

// EXTERNAL MODULE: ./components/loaderSect/index.vue + 2 modules
var loaderSect = __webpack_require__(54);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/detail/_slug.vue?vue&type=script&lang=js&
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
  head() {
    return {
      title: this.item.Title + ' - 90Games',
      meta: [{
        hid: this.item.Excerpt,
        name: this.item.Excerpt + 'Android private server download, download dragonnest private server' + this.year,
        content: this.item.Title + ', Android private server download, download dragonnest private server' + this.item.Excerpt + ' ' + this.year
      }, {
        property: 'og:title',
        content: `${this.item.Title}`
      }, {
        property: 'og:description',
        content: `${this.item.Content}`.replace(/<\/?[^>]+(>|$)/g, '')
      }, {
        property: 'og:image',
        content: `${this.picture}`
      }]
    };
  },

  data() {
    return {
      item: {
        Title: ''
      },
      thumb: [],
      year: '2021',
      picture: '',
      isCategories: true,
      isLoad: true
    };
  },

  components: {
    loaderSect: loaderSect["default"],
    slideshowComps: slideshowComps["default"]
  },

  async mounted() {
    var a = new Date();
    var b = a.getFullYear();
    this.year = b;
    const res = await this.$axios.get("applications" + '?Slug=' + this.$route.params.slug);

    if (res.data.length !== 0) {
      this.isLoad = false;
      this.picture = "http://103.226.138.95:1337" + res.data[0].Cover[0].formats.medium.url;
      this.thumb = res.data[0].Cover;
      this.item = res.data[0];

      if (res.data[0].categories.length == 0) {
        this.isCategories = false;
      } else {
        this.isCategories = true;
      }
    } else {
      this.$router.push('/404');
    }
  },

  computed: {
    getDate() {
      return this.$moment(this.item.update, 'YYYY-MM-DD').fromNow();
    }

  }
});
// CONCATENATED MODULE: ./pages/detail/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/detail/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "48c2c4a8"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map