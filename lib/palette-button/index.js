module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 202);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.function.name.js");

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_palette_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_palette_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_palette_button_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "core-js/modules/es.function.name.js"
var es_function_name_js_ = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/palette-button/src/palette-button.vue?vue&type=template&id=76fdfa34&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "zmbl-palette-button",
      class: {
        expand: _vm.expanded,
        "zmbl-palette-button-active": _vm.transforming
      },
      on: {
        animationend: _vm.onMainAnimationEnd,
        webkitAnimationEnd: _vm.onMainAnimationEnd,
        mozAnimationEnd: _vm.onMainAnimationEnd
      }
    },
    [
      _c(
        "div",
        { staticClass: "zmbl-sub-button-container" },
        [_vm._t("default")],
        2
      ),
      _c(
        "div",
        {
          staticClass: "zmbl-main-button",
          style: _vm.mainButtonStyle,
          on: { touchstart: _vm.toggle }
        },
        [_vm._v("\n    " + _vm._s(_vm.content) + "\n  ")]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/palette-button/src/palette-button.vue?vue&type=template&id=76fdfa34&

// EXTERNAL MODULE: external "core-js/modules/es.number.constructor.js"
var es_number_constructor_js_ = __webpack_require__(2);

// EXTERNAL MODULE: external "core-js/modules/es.number.to-fixed.js"
var es_number_to_fixed_js_ = __webpack_require__(97);

// EXTERNAL MODULE: external "core-js/modules/es.array.index-of.js"
var es_array_index_of_js_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/palette-button/src/palette-button.vue?vue&type=script&lang=js&





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
/* harmony default export */ var palette_buttonvue_type_script_lang_js_ = ({
  name: 'zmbl-palette-button',
  data: function data() {
    return {
      transforming: false,
      // 是否正在执行动画
      expanded: false // 是否已经展开子按钮

    };
  },
  props: {
    content: {
      type: String,
      "default": ''
    },
    offset: {
      type: Number,
      // 扇面偏移角，默认是四分之π，配合默认方向lt
      "default": Math.PI / 4
    },
    direction: {
      type: String,
      "default": 'lt' // lt t rt this.radius rb b lb l 取值有8个方向，左上、上、右上、右、右下、下、左下、左，默认为左上

    },
    radius: {
      type: Number,
      "default": 90
    },
    mainButtonStyle: {
      type: String,
      // 应用到 zmbl-main-button 上的 class
      "default": ''
    }
  },
  methods: {
    toggle: function toggle(event) {
      if (!this.transforming) {
        if (this.expanded) {
          this.collapse(event);
        } else {
          this.expand(event);
        }
      }
    },
    onMainAnimationEnd: function onMainAnimationEnd(event) {
      this.transforming = false;
      this.$emit('expanded');
    },
    expand: function expand(event) {
      this.expanded = true;
      this.transforming = true;
      this.$emit('expand', event);
    },
    collapse: function collapse(event) {
      this.expanded = false;
      this.$emit('collapse', event);
    }
  },
  mounted: function mounted() {
    this.slotChildren = [];

    for (var i = 0; i < this.$slots["default"].length; i++) {
      if (this.$slots["default"][i].elm.nodeType !== 3) {
        this.slotChildren.push(this.$slots["default"][i]);
      }
    }

    var css = '';
    var direction_arc = Math.PI * (3 + Math.max(['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'].indexOf(this.direction), 0)) / 4;

    for (var _i = 0; _i < this.slotChildren.length; _i++) {
      var arc = (Math.PI - this.offset * 2) / (this.slotChildren.length - 1) * _i + this.offset + direction_arc;
      var x = (Math.cos(arc) * this.radius).toFixed(2);
      var y = (Math.sin(arc) * this.radius).toFixed(2);
      var item_css = '.expand .palette-button-' + this._uid + '-sub-' + _i + '{transform:translate(' + x + 'px,' + y + 'px) rotate(720deg);transition-delay:' + 0.03 * _i + 's}';
      css += item_css;
      this.slotChildren[_i].elm.className += ' palette-button-' + this._uid + '-sub-' + _i;
    }

    this.styleNode = document.createElement('style');
    this.styleNode.type = 'text/css';
    this.styleNode.rel = 'stylesheet';
    this.styleNode.title = 'palette button style';
    this.styleNode.appendChild(document.createTextNode(css));
    document.getElementsByTagName('head')[0].appendChild(this.styleNode);
  },
  destroyed: function destroyed() {
    if (this.styleNode) {
      this.styleNode.parentNode.removeChild(this.styleNode);
    }
  }
});
// CONCATENATED MODULE: ./packages/palette-button/src/palette-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_palette_buttonvue_type_script_lang_js_ = (palette_buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/palette-button/src/palette-button.vue?vue&type=style&index=0&lang=scss&
var palette_buttonvue_type_style_index_0_lang_scss_ = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/palette-button/src/palette-button.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_palette_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/palette-button/src/palette-button.vue"
/* harmony default export */ var palette_button = (component.exports);
// CONCATENATED MODULE: ./packages/palette-button/index.js




palette_button.install = function (Vue) {
  return Vue.component(palette_button.name, palette_button);
};

/* harmony default export */ var packages_palette_button = __webpack_exports__["default"] = (palette_button);

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.array.index-of.js");

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es.number.to-fixed.js");

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });