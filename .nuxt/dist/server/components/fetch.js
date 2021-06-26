exports.ids = [1];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=fetch.js.map