exports.ids = [2];
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

/***/ })

};;
//# sourceMappingURL=loader-scroll.js.map