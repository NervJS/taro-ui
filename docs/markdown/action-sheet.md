# ActionSheet 动作面板

---

该组件提供了一种多端统一的 `动作面板` 样式与 `IOS` 对齐 在页面上的层级为 `1010`

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtActionSheet, AtActionSheetItem } from "taro-ui"
```

:::

## 一般用法

:::demo

```html
<AtActionSheet isOpened>
  <AtActionSheetItem>
    按钮一
  </AtActionSheetItem>
  <AtActionSheetItem>
    按钮二
  </AtActionSheetItem>
</AtActionSheet>
```

:::

## 添加标题和底部取消按钮

:::demo

```html
<AtActionSheet isOpened cancleText='取消' title=‘头部标题可以用通过转义字符换行’>
  <AtActionSheetItem>
    按钮一
  </AtActionSheetItem>
  <AtActionSheetItem>
    按钮二
  </AtActionSheetItem>
</AtActionSheet>
```

:::

## 添加监听事件

:::demo

```html
<AtActionSheet isOpened cancleText='取消' title=‘头部标题可以用通过转义字符换行’ onCancle={ this.handleCancle } onClose={ this.handleClose }>
  <AtActionSheetItem onClick={ this.handleClick }>
    按钮一
  </AtActionSheetItem>
  <AtActionSheetItem>
    按钮二
  </AtActionSheetItem>
</AtActionSheet>
```

:::

## AtActionSheet 参数

| 参数       | 说明                         | 类型     | 可选值 | 默认值 |
| ---------- | ---------------------------- | -------- | ------ | ------ |
| title      | 元素的标题                   | String   | -      | -      |
| isOpened   | 是否展示元素                 | Boolean  | -      | `false`  |
| cancleText | 取消按钮的内容               | String   | -      | -      |
| onClose    | 元素被关闭触发的事件         | Function | -      | -      |
| onCancle   | 点击了底部取消按钮触发的事件 | Function | -      | -      |

## AtActionSheetItem 参数

| 参数    | 说明                 | 类型     | 可选值 | 默认值 |
| ------- | -------------------- | -------- | ------ | ------ |
| onClick | 点击 Item 触发的事件 | Function | -      | -      |
