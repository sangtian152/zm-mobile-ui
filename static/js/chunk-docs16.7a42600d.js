(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-docs16"],{"31e7":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content doc-main"},[t._m(0),n("p",[t._v("无限滚动指令。")]),t._m(1),t._m(2),t._m(3),t._m(4),n("pre",[n("code",{staticClass:"language-html"},[t._v('<ul\n  v-infinite-scroll="loadMore"\n  infinite-scroll-disabled="loading"\n  infinite-scroll-distance="10">\n  <li v-for="item in list">'+t._s("{")+"{item}"+t._s("}")+"</li>\n</ul>\n")])]),t._m(5),t._m(6),t._m(7)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{attrs:{id:"infinite-scroll",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#infinite-scroll"}},[t._v("$")]),t._v(" Infinite scroll")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"yin-ru",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yin-ru"}},[t._v("$")]),t._v(" 引入")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-javascript"},[t._v("import { InfiniteScroll } from 'iwei-ui';\nVue.use(InfiniteScroll);\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"ji-chu-yong-fa",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("$")]),t._v(" 基础用法")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("为 HTML 元素添加 "),n("code",[t._v("v-infinite-scroll")]),t._v(" 指令即可使用无限滚动。滚动该元素，当其底部与被滚动元素底部的距离小于给定的阈值（通过 "),n("code",[t._v("infinite-scroll-distance")]),t._v(" 设置）时，绑定到 "),n("code",[t._v("v-infinite-scroll")]),t._v(" 指令的方法就会被触发。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-javascript"},[t._v("loadMore() {\n  this.loading = true;\n  setTimeout(() => {\n    let last = this.list[this.list.length - 1];\n    for (let i = 1; i <= 10; i++) {\n      this.list.push(last + i);\n    }\n    this.loading = false;\n  }, 2500);\n}\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{attrs:{id:"shu-xing",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing"}},[t._v("$")]),t._v(" 属性")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("infinite-scroll-disabled")]),n("td",[t._v("若为真，则无限滚动不会被触发")]),n("td",[t._v("Boolean")]),n("td",[t._v("true/false")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("infinite-scroll-distance")]),n("td",[t._v("触发加载方法的滚动距离阈值（像素）")]),n("td",[t._v("Number")]),n("td"),n("td",[t._v("10")])]),n("tr",[n("td",[t._v("infinite-scroll-immediate-check")]),n("td",[t._v("若为真，则指令被绑定到元素上后会立即检查是否需要执行加载方法。在初始状态下内容有可能撑不满容器时十分有用。）")]),n("td",[t._v("Boolean")]),n("td"),n("td",[t._v("true")])]),n("tr",[n("td",[t._v("infinite-scroll-listen-for-event")]),n("td",[t._v("一个 event，被执行时会立即检查是否需要执行加载方法。")]),n("td",[t._v("Function")]),n("td"),n("td",[t._v("false")])])])])}],r=n("2877"),a={},l=Object(r["a"])(a,i,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-docs16.7a42600d.js.map