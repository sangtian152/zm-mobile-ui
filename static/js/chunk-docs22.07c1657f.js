(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-docs22"],{"17cd":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("section",{staticClass:"content doc-main"},[n("h2",{attrs:{id:"palettebutton",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#palettebutton"}},[t._v("$")]),t._v(" PaletteButton")]),n("div",{staticClass:"tip"},[n("div",[t._v("调色板按钮。")])]),n("h3",{attrs:{id:"yin-ru",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yin-ru"}},[t._v("$")]),t._v(" 引入")]),n("pre",[n("code",{staticClass:"language-javascript"},[t._v("import { PaletteButton } from 'iwei-ui';\nVue.component(PaletteButton.name, PaletteButton);\n")])]),n("h3",{attrs:{id:"ji-ben-yong-fa",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben-yong-fa"}},[t._v("$")]),t._v(" 基本用法")]),n("pre",[n("code",{staticClass:"language-html"},[t._v('<zmbl-palette-button content="+">\n  <div class="my-icon-button"></div>\n  <div class="my-icon-button"></div>\n  <div class="my-icon-button"></div>\n</zmbl-palette-button>\n')])]),n("h3",{attrs:{id:"she-zhi-can-shu-he-shi-jian-yi-ji-shou-dong-chu-fa-shi-jian",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#she-zhi-can-shu-he-shi-jian-yi-ji-shou-dong-chu-fa-shi-jian"}},[t._v("$")]),t._v(" 设置参数和事件，以及手动触发事件")]),n("pre",[n("code",{staticClass:"language-html"},[t._v('<zmbl-palette-button content="+" @expand="main_log(\'expand\')" @expanded="main_log(\'expanded\')" @collapse="main_log(\'collapse\')"\n  direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"\n  style="left:30px;">\n  <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>\n  <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>\n  <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>\n</zmbl-palette-button>\n')])]),n("pre",[n("code",{staticClass:"language-javascript"},[t._v("methods: {\n  main_log(val) {\n    console.log('main_log', val);\n  },\n  sub_log(val) {\n    console.log('sub_log', val);\n    this.$refs.target_1.collapse();\n  }\n}\n")])]),n("h3",{attrs:{id:"shu-xing",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing"}},[t._v("$")]),t._v(" 属性")]),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("可选值")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("content")]),n("td",[t._v("主按钮内容")]),n("td",[t._v("String")]),n("td"),n("td")]),n("tr",[n("td",[t._v("offset")]),n("td",[t._v("角度偏移量")]),n("td",[t._v("Number")]),n("td"),n("td",[t._v("Math.PI / 4")])]),n("tr",[n("td",[t._v("direction")]),n("td",[t._v("按钮展开方向")]),n("td",[t._v("string")]),n("td",[t._v("lt, t, rt, r, rb, b, lb, l")]),n("td",[t._v("lt")])]),n("tr",[n("td",[t._v("radius")]),n("td",[t._v("按钮展开半径")]),n("td",[t._v("Number")]),n("td"),n("td",[t._v("90")])]),n("tr",[n("td",[t._v("mainButtonStyle")]),n("td",[t._v("主按钮样式")]),n("td",[t._v("String")]),n("td"),n("td")])])]),n("h3",{attrs:{id:"fang-fa",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fang-fa"}},[t._v("$")]),t._v(" 方法")]),n("table",[n("thead",[n("tr",[n("th",[t._v("方法名")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("toggle")]),n("td",[t._v("切换按钮展开/收起状态")])]),n("tr",[n("td",[t._v("expand")]),n("td",[t._v("展开按钮")])]),n("tr",[n("td",[t._v("collapse")]),n("td",[t._v("收起按钮")])])])]),n("h3",{attrs:{id:"shi-jian",tabindex:"-1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shi-jian"}},[t._v("$")]),t._v(" 事件")]),n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),n("th",[t._v("说明")])])]),n("tbody",[n("tr",[n("td",[t._v("expand")]),n("td",[t._v("按钮开始展开")])]),n("tr",[n("td",[t._v("expanded")]),n("td",[t._v("按钮完全展开（动画效果执行结束）")])]),n("tr",[n("td",[t._v("collapse")]),n("td",[t._v("按钮开始收起")])])])])])}],i=n("2877"),d={},o=Object(i["a"])(d,e,s,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-docs22.07c1657f.js.map