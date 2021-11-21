## swipe
轮播图，可自定义轮播时间间隔、动画时长等。

### 引入

```javascript
import { Swipe, SwipeItem } from 'iwei-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
```

### 基础用法
```html
<zmbl-swipe :auto="4000">
  <zmbl-swipe-item>1</zmbl-swipe-item>
  <zmbl-swipe-item>2</zmbl-swipe-item>
  <zmbl-swipe-item>3</zmbl-swipe-item>
</zmbl-swipe>
```

### 隐藏 indicators
```html
<zmbl-swipe :show-indicators="false">
  <zmbl-swipe-item>1</zmbl-swipe-item>
  <zmbl-swipe-item>2</zmbl-swipe-item>
  <zmbl-swipe-item>3</zmbl-swipe-item>
</zmbl-swipe>
```

### 取消自动播放
```html
<zmbl-swipe :auto="0">
  <zmbl-swipe-item>1</zmbl-swipe-item>
  <zmbl-swipe-item>2</zmbl-swipe-item>
  <zmbl-swipe-item>3</zmbl-swipe-item>
</zmbl-swipe>
```

### 属性
| 参数            | 说明                                       | 类型                         | 默认值       |
|-------------------|-------------------------------|--------------------|---------------|
| speed           | 动画持时（毫秒）   | Number        | 300      |
| auto          | 自动播放的时间间隔（毫秒）        | Number | 3000              |
| defaultIndex    | 初始显示的轮播图的索引         | Number    | 0     |
| continuous       | 是否可以循环播放   | Boolean                       | true          |
| showIndicators |是否显示 indicators | Boolean          | true          |
| prevent | 是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能 | Boolean          | false          |
| stopPropagation | 是否在 touchstart 事件触发时阻止冒泡。 | Boolean          | false          |

### Slot
zmbl-swipe
| name            | 说明                                     |
|-------------------|---------------------------------------|
| —                 | 一个或多个 zmbl-swipe-item 组件     |

zmbl-swipe-item
| name            | 说明                                     |
|-------------------|---------------------------------------|
| —                 | 单个轮播图的内容     |