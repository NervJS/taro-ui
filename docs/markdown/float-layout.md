# FloatLayout 浮动弹层

---

提供 `浮动布局` 的功能,在页面上的层级为 `810`

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtFloatLayout } from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtFloatLayout
  isOpened
  title='这是个标题'
  onClose={ this.handleClose } >
  这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
  随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
  随你怎么写
</AtFloatLayout>
```

:::

## AtFloatLayout 参数

| 参数     | 说明                     | 类型     | 可选值 | 默认值  |
| -------- | ------------------------ | -------- | ------ | ------- |
| title    | 元素的标题               | String   | -      | -       |
| isOpened | 控制是否出现在页面上     | Boolean  | -      | `false` |
| onClose  | 元素被关闭时候触发的事件 | Function | -      | -       |
