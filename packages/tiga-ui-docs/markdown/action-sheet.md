# ActionSheet 动作面板

---

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtActionSheet, AtActionSheetItem } from "tiga-ui"
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~tiga-ui/dist/style/components/action-sheet.scss";
```
:::

## 一般用法 -- 无标题

:::demo

```html
<AtActionSheet
  cancelText='取消'
  isOpened={isOpened1}
  onClose={this.handleClose.bind(this, 1)}
>
  <AtActionSheetItem
    onClick={this.showToast.bind(this, '点击了按钮一')}
  >
    按钮一
  </AtActionSheetItem>
  <AtActionSheetItem
    onClick={this.showToast.bind(this, '点击了按钮二')}
    hasBottomBorder={false}
  >
    按钮二
  </AtActionSheetItem>
</AtActionSheet>
```

:::

## 含标题

:::demo

```html
<AtActionSheet
  cancelText='取消'
  isOpened={isOpened2}
  onClose={this.handleClose.bind(this, 2)}
  title='此处是操作释义，建议20个字以内，使用陈述句'
>
  <AtActionSheetItem
    onClick={this.showToast.bind(this, '点击了按钮一')}
  >
    按钮一
  </AtActionSheetItem>
  <AtActionSheetItem
    onClick={this.showToast.bind(this, '点击了按钮二')}
    hasBottomBorder={false}
  >
    按钮二
  </AtActionSheetItem>
</AtActionSheet>
```

:::

## 自定义选项

:::demo

```html
<AtActionSheet
  cancelText='取消'
  isOpened={isOpened3}
  onCancel={this.handleCancel}
  onClose={this.handleClose.bind(this, 3)}
  title='清除位置信息后， 别人将不能查看到你'
>
  <AtActionSheetItem
    onClick={this.showToast.bind(this, '点击了按钮一')}
  >
    按钮一
  </AtActionSheetItem>
  <AtActionSheetItem
    onClick={this.showToast.bind(this, '点击了按钮二')}
  >
    按钮二
  </AtActionSheetItem>
  <AtActionSheetItem
    onClick={this.showToast.bind(this, '成功清除位置')}
    hasBottomBorder={false}
  >
    <Text className='danger'>清除位置信息并退出</Text>
  </AtActionSheetItem>
</AtActionSheet>
```

:::

## 选项释义文案

:::demo

```html
<AtActionSheet
  cancelText='取消'
  isOpened={isOpened4}
  onClose={this.handleClose.bind(this, 4)}
>
  <AtActionSheetItem
    onClick={this.showToast.bind(this, '点击了按钮一')}
    subText='这是按钮一'
  >
    按钮一
  </AtActionSheetItem>
  <AtActionSheetItem
    onClick={this.showToast.bind(this, '点击了按钮二')}
    hasBottomBorder={false}
    subText='这是按钮二'
  >
    按钮二
  </AtActionSheetItem>
</AtActionSheet>
```

:::

## AtActionSheet 参数

| 参数       | 说明           | 类型    | 可选值 | 默认值  |
| ---------- | -------------- | ------- | ------ | ------- |
| title      | 元素的标题     | String  | -      | -       |
| isOpened   | 是否展示元素   | Boolean | -      | `false` |
| cancelText | 取消按钮的内容 | String  | -      | -       |
| closeOnClickOverlay | 点击浮层的时候时候自动关闭 | boolean  | -      | `true` |

## AtActionSheet 事件

| 事件名称 | 说明                         | 返回参数 |
| -------- | ---------------------------- | -------- |
| onClose  | 元素被关闭触发的事件         | -        |
| onCancel | 点击了底部取消按钮触发的事件 | -        |

## AtActionSheetItem 参数

| 参数       | 说明           | 类型    | 可选值 | 默认值  |
| ---------- | -------------- | ------- | ------ | ------- |
| subText      | 释义     | String  | -      | -       |
| hasBottomBorder   | 是否有底部边框   | Boolean | -      | `true` |

## AtActionSheetItem 事件

| 事件名称 | 说明                 | 返回参数 |
| -------- | -------------------- | -------- |
| onClick  | 点击 Item 触发的事件 | -        |
