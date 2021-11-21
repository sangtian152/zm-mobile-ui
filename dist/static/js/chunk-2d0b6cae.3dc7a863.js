(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6cae"],{"1f58":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content doc-main"},[a("h2",{attrs:{id:"picker",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#picker"}},[t._v("$")]),t._v(" Picker")]),a("div",{staticClass:"tip"},[a("div",[t._v("选择器，支持多 slot 联动。")])]),a("h3",{attrs:{id:"yin-ru",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yin-ru"}},[t._v("$")]),t._v(" 引入")]),a("pre",[a("code",{staticClass:"language-javascript"},[t._v("import { Picker } from 'iwei-ui';\n\nVue.component(Picker.name, Picker);\n")])]),a("h3",{attrs:{id:"ji-chu-yong-fa",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-chu-yong-fa"}},[t._v("$")]),t._v(" 基础用法")]),a("p",[t._v("传入 "),a("code",[t._v("slots")]),t._v("，当被选中的值发生变化时触发 "),a("code",[t._v("change")]),t._v(" 事件。"),a("code",[t._v("change")]),t._v(" 事件有两个参数，分别为当前 "),a("code",[t._v("picker")]),t._v(" 的 "),a("code",[t._v("vue")]),t._v(" 实例和各 "),a("code",[t._v("slot")]),t._v(" 被选中的值组成的数组")]),a("pre",[a("code",{staticClass:"language-html"},[t._v('<zmbl-picker :slots="slots" @change="onValuesChange"></zmbl-picker>\n')])]),a("pre",[a("code",{staticClass:"language-javascript"},[t._v("export default {\n  methods: {\n    onValuesChange(picker, values) {\n      if (values[0] > values[1]) {\n        picker.setSlotValue(1, values[0]);\n      }\n    }\n  },\n  data() {\n    return {\n      slots: [\n        {\n          flex: 1,\n          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],\n          className: 'slot1',\n          textAlign: 'right'\n        }, {\n          divider: true,\n          content: '-',\n          className: 'slot2'\n        }, {\n          flex: 1,\n          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],\n          className: 'slot3',\n          textAlign: 'left'\n        }\n      ]\n    };\n  }\n};\n")])]),a("h3",{attrs:{id:"shu-xing",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shu-xing"}},[t._v("$")]),t._v(" 属性")]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),a("th",[t._v("说明")]),a("th",[t._v("类型")]),a("th",[t._v("可选值")]),a("th",[t._v("默认值")])])]),a("tbody",[a("tr",[a("td",[t._v("slots")]),a("td",[t._v("slot 对象数组")]),a("td",[t._v("Array")]),a("td"),a("td",[t._v("[]")])]),a("tr",[a("td",[t._v("valueKey")]),a("td",[t._v("当 values 为对象数组时，作为文本显示在 Picker 中的对应字段的字段名")]),a("td",[t._v("Array")]),a("td"),a("td")]),a("tr",[a("td",[t._v("showToolbar")]),a("td",[t._v("是否在组件顶部显示一个 toolbar，内容自定义")]),a("td",[t._v("Boolean")]),a("td"),a("td",[t._v("false")])]),a("tr",[a("td",[t._v("visibleItemCount")]),a("td",[t._v("slot 中可见备选值的个数")]),a("td",[t._v("Number")]),a("td"),a("td",[t._v("5")])]),a("tr",[a("td",[t._v("itemHeight")]),a("td",[t._v("每个 slot 的高度")]),a("td",[t._v("Number")]),a("td"),a("td",[t._v("36")])])])]),a("h3",{attrs:{id:"slot-dui-xiang",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slot-dui-xiang"}},[t._v("$")]),t._v(" slot 对象")]),a("p",[t._v("绑定到 slots 属性的数组由对象组成，每个对象都对应一个 slot，它们有如下键名")]),a("table",[a("thead",[a("tr",[a("th",[t._v("key")]),a("th",[t._v("说明")])])]),a("tbody",[a("tr",[a("td",[t._v("divider")]),a("td",[t._v("对应 slot 是否为分隔符")])]),a("tr",[a("td",[t._v("content")]),a("td",[t._v("分隔符 slot 的显示文本")])]),a("tr",[a("td",[t._v("values")]),a("td",[t._v("对应 slot 的备选值数组。若为对象数组，则需在 zmbl-picker 标签上设置 value-key 属性来指定显示的字段名")])]),a("tr",[a("td",[t._v("defaultIndex")]),a("td",[t._v("对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0")])]),a("tr",[a("td",[t._v("textAlign")]),a("td",[t._v("对应 slot 的对齐方式")])]),a("tr",[a("td",[t._v("flex")]),a("td",[t._v("对应 slot CSS 的 flex 值")])]),a("tr",[a("td",[t._v("className")]),a("td",[t._v("对应 slot 的类名")])])])]),a("h3",{attrs:{id:"events",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("$")]),t._v(" Events")]),a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),a("th",[t._v("说明")]),a("th",[t._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[t._v("change")]),a("td",[t._v("当被选中的值发生变化时触发")]),a("td",[t._v("checked: Boolean")])])])]),a("h3",{attrs:{id:"fang-fa",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fang-fa"}},[t._v("$")]),t._v(" 方法")]),a("table",[a("thead",[a("tr",[a("th",[t._v("方法名")]),a("th",[t._v("说明")]),a("th",[t._v("参数")]),a("th",[t._v("返回值")])])]),a("tbody",[a("tr",[a("td",[t._v("getSlotValue")]),a("td",[t._v("获取给定 slot 目前被选中的值")]),a("td",[t._v("index")]),a("td",[t._v("value")])]),a("tr",[a("td",[t._v("setSlotValue")]),a("td",[t._v("设定给定 slot 被选中的值，该值必须存在于该 slot 的备选值数组中")]),a("td",[t._v("index, value")]),a("td",[t._v("—")])]),a("tr",[a("td",[t._v("getSlotValues")]),a("td",[t._v("获取给定 slot 的备选值数组")]),a("td",[t._v("index")]),a("td",[t._v("values")])]),a("tr",[a("td",[t._v("setSlotValues")]),a("td",[t._v("设定给定 slot 的备选值数组")]),a("td",[t._v("index, values")]),a("td",[t._v("—")])]),a("tr",[a("td",[t._v("getValues")]),a("td",[t._v("获取所有 slot 目前被选中的值（分隔符 slot 除外）")]),a("td"),a("td",[t._v("values")])]),a("tr",[a("td",[t._v("setValues")]),a("td",[t._v("设定所有 slot 被选中的值（分隔符 slot 除外），该值必须存在于对应 slot 的备选值数组中")]),a("td",[t._v("values")]),a("td",[t._v("—")])])])]),a("h3",{attrs:{id:"slot",tabindex:"-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("$")]),t._v(" Slot")]),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),a("th",[t._v("说明")])])]),a("tbody",[a("tr",[a("td",[t._v("—")]),a("td",[t._v("当 showToolbar 为 true 时，toolbar 中的内容")])])])])])}],d=a("2877"),l={},r=Object(d["a"])(l,s,v,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0b6cae.3dc7a863.js.map