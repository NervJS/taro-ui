# AtModalSheet 模态面板

---

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtModalSheet } from "tiga-ui"
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~tiga-ui/dist/style/components/modal-sheet.scss";
```
:::

## 一般用法

:::demo

```html
<AtModalSheet
  title='标题'
  isOpened={isOpened1}
  onClose={this.handleClose.bind(this, 1)}
>
  <View>自定义内容</View>
</AtModalSheet>
```

:::

## 带操作按钮

> 当配置了 `cancelText`, `resetText`, `confirmText`, `onCancel`, `onReset`, `onConfirm` 其中一个则认为是操作模式

:::demo

```html
<AtModalSheet
  title='标题'
  cancelText='取消'
  isOpened={isOpened2}
  onClose={this.handleClose.bind(this, 2)}
>
  <View>自定义内容</View>
</AtModalSheet>
```

:::

## 主体内容自定义

:::demo

```html
<AtModalSheet
  title='标题'
  isOpened={isOpened3}
  onClose={this.handleClose.bind(this, 3)}
>
  <View>
    <Input placeholder='请输入' />
  </View>
</AtModalSheet>
```

:::

## AtModalSheet 参数

| 参数       | 说明           | 类型    | 可选值 | 默认值  |
| ---------- | -------------- | ------- | ------ | ------- |
| title      | 元素的标题     | String  | -      | -       |
| isOpened   | 是否展示元素   | Boolean | -      | `false` |
| cancelText | 取消文案 | String  | -      | -       |
| resetText | 重置文案 | String  | -      | -       |
| confirmText | 重置文案 | String  | -      | -       |
| closeIcon | 关闭图标 | String  | -      | `comm_icon_false_line`     |
| closeOnClickOverlay | 点击浮层的时候时候自动关闭 | boolean  | -      | `true` |

## AtModalSheet 事件

| 事件名称 | 说明                         | 返回参数 |
| -------- | ---------------------------- | -------- |
| onClose  | 元素被关闭触发的事件         | -        |
| onCancel | 点击取消触发的事件 | -        |
| onReset | 点击重置触发的事件 | -        |
| onConfirm | 点击确定触发的事件 | -        |

