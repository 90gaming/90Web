exports.ids = [5];
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

/***/ })

};;
//# sourceMappingURL=slideshow-comps.js.map