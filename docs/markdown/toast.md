# Toast 轻提示

---

提供一个简单的 `Toast`，可以传入 `icon`、`image` 来展示不同的效果，另外提供日常使用频繁的三种状态来快速实现效果，页面层级为`1090`

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtToast } from "taro-ui"
```

:::

## 一般用法

:::demo

```html
<AtToast
  isOpened
  text={text}
  iconSize={iconSize}
  iconType={iconType}
  iconColor={iconColor}
  isHiddenIcon={isHiddenIcon}></AtToast>
```

:::

## AtToast 参数

| 参数     | 说明                                     | 类型    | 可选值                        | 默认值  |
| -------- | ---------------------------------------- | ------- | ----------------------------- | ------- |
| text     | 元素的内容                               | String  | -                             | -       |
| icon     | icon 的类型                              | String  | -                             | -       |
| image    | 元素展示的图片                           | String  | -                             | -       |
| status   | 元素的状态                               | String  | `error`, `loading`, `success` | -       |
| isOpened | 是否展示元素                             | Boolean | -                             | `false` |
| duration | 元素持续的事件                           | Number  | -                             | `3000`  |
| hasMask  | 是否存在底部遮罩层(无法点击底部的内容区) | Boolean | -                             | -       |

## AtToast 事件

| 事件名称 | 说明                     | 返回参数 |
| -------- | ------------------------ | -------- |
| onClick  | 元素被点击之后触发的事件 | -        |
| onClose  | 元素被关闭之后触发的事件 | -        |
