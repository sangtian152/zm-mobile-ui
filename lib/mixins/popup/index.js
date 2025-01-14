"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _merge = _interopRequireDefault(require("zmbl-ui/lib/utils/merge"));

var _popupManager = _interopRequireDefault(require("./popup-manager"));

exports.PopupManager = _popupManager.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idSeed = 1;
var transitions = [];

var hookTransition = function hookTransition(transition) {
  if (transitions.indexOf(transition) !== -1) return;

  var getVueInstance = function getVueInstance(element) {
    var instance = element.__vue__;

    if (!instance) {
      var textNode = element.previousSibling;

      if (textNode.__vue__) {
        instance = textNode.__vue__;
      }
    }

    return instance;
  };

  _vue.default.transition(transition, {
    afterEnter: function afterEnter(el) {
      var instance = getVueInstance(el);

      if (instance) {
        instance.doAfterOpen && instance.doAfterOpen();
      }
    },
    afterLeave: function afterLeave(el) {
      var instance = getVueInstance(el);

      if (instance) {
        instance.doAfterClose && instance.doAfterClose();
      }
    }
  });
};

var scrollBarWidth;

var getScrollBarWidth = function getScrollBarWidth() {
  if (_vue.default.prototype.$isServer) return;
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';
  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return widthNoScroll - widthWithScroll;
};

var getDOM = function getDOM(dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling;
    getDOM(dom);
  }

  return dom;
};

var _default = {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: ''
    },
    openDelay: {},
    closeDelay: {},
    zIndex: {},
    modal: {
      type: Boolean,
      default: false
    },
    modalFade: {
      type: Boolean,
      default: true
    },
    modalClass: {},
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },
  created: function created() {
    if (this.transition) {
      hookTransition(this.transition);
    }
  },
  beforeMount: function beforeMount() {
    this._popupId = 'popup-' + idSeed++;

    _popupManager.default.register(this._popupId, this);
  },
  beforeDestroy: function beforeDestroy() {
    _popupManager.default.deregister(this._popupId);

    _popupManager.default.closeModal(this._popupId);

    if (this.modal && this.bodyOverflow !== null && this.bodyOverflow !== 'hidden') {
      document.body.style.overflow = this.bodyOverflow;
      document.body.style.paddingRight = this.bodyPaddingRight;
    }

    this.bodyOverflow = null;
    this.bodyPaddingRight = null;
  },
  data: function data() {
    return {
      opened: false,
      bodyOverflow: null,
      bodyPaddingRight: null,
      rendered: false
    };
  },
  watch: {
    value: function value(val) {
      var _this = this;

      if (val) {
        if (this._opening) return;

        if (!this.rendered) {
          this.rendered = true;

          _vue.default.nextTick(function () {
            _this.open();
          });
        } else {
          this.open();
        }
      } else {
        this.close();
      }
    }
  },
  methods: {
    open: function open(options) {
      var _this2 = this;

      if (!this.rendered) {
        this.rendered = true;
        this.$emit('input', true);
      }

      var props = (0, _merge.default)({}, this, options, this.$props);

      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }

      clearTimeout(this._openTimer);
      var openDelay = Number(props.openDelay);

      if (openDelay > 0) {
        this._openTimer = setTimeout(function () {
          _this2._openTimer = null;

          _this2.doOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },
    doOpen: function doOpen(props) {
      if (this.$isServer) return;
      if (this.willOpen && !this.willOpen()) return;
      if (this.opened) return;
      this._opening = true; // 使用 vue-popup 的组件，如果需要和父组件通信显示的状态，应该使用 value，它是一个 prop，
      // 这样在父组件中用 v-model 即可；否则可以使用 visible，它是一个 data

      this.visible = true;
      this.$emit('input', true);
      var dom = getDOM(this.$el);
      var modal = props.modal;
      var zIndex = props.zIndex;

      if (zIndex) {
        _popupManager.default.zIndex = zIndex;
      }

      if (modal) {
        if (this._closing) {
          _popupManager.default.closeModal(this._popupId);

          this._closing = false;
        }

        _popupManager.default.openModal(this._popupId, _popupManager.default.nextZIndex(), dom, props.modalClass, props.modalFade);

        if (props.lockScroll) {
          if (!this.bodyOverflow) {
            this.bodyPaddingRight = document.body.style.paddingRight;
            this.bodyOverflow = document.body.style.overflow;
          }

          scrollBarWidth = getScrollBarWidth();
          var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;

          if (scrollBarWidth > 0 && bodyHasOverflow) {
            document.body.style.paddingRight = scrollBarWidth + 'px';
          }

          document.body.style.overflow = 'hidden';
        }
      }

      if (getComputedStyle(dom).position === 'static') {
        dom.style.position = 'absolute';
      }

      dom.style.zIndex = _popupManager.default.nextZIndex();
      this.opened = true;
      this.onOpen && this.onOpen();

      if (!this.transition) {
        this.doAfterOpen();
      }
    },
    doAfterOpen: function doAfterOpen() {
      this._opening = false;
    },
    close: function close() {
      var _this3 = this;

      if (this.willClose && !this.willClose()) return;

      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }

      clearTimeout(this._closeTimer);
      var closeDelay = Number(this.closeDelay);

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(function () {
          _this3._closeTimer = null;

          _this3.doClose();
        }, closeDelay);
      } else {
        this.doClose();
      }
    },
    doClose: function doClose() {
      var _this4 = this;

      this.visible = false;
      this.$emit('input', false);
      this._closing = true;
      this.onClose && this.onClose();

      if (this.lockScroll) {
        setTimeout(function () {
          if (_this4.modal && _this4.bodyOverflow !== 'hidden') {
            document.body.style.overflow = _this4.bodyOverflow;
            document.body.style.paddingRight = _this4.bodyPaddingRight;
          }

          _this4.bodyOverflow = null;
          _this4.bodyPaddingRight = null;
        }, 200);
      }

      this.opened = false;

      if (!this.transition) {
        this.doAfterClose();
      }
    },
    doAfterClose: function doAfterClose() {
      _popupManager.default.closeModal(this._popupId);

      this._closing = false;
    }
  }
};
exports.default = _default;