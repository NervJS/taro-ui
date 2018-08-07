# ActionSheet 上拉菜单

---

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtActionSheet } from "taro-ui"
```

:::

## 一般用法

:::demo

```html
<AtActionSheet
  cancleText='取消'
  title='清除位置信息后， 别人将不能查看到你这里最多显示两行'>
  <AtActionSheetItem>按钮一</AtActionSheetItem>
  <AtActionSheetItem>按钮二</AtActionSheetItem>
  <AtActionSheetItem>
    <Text className='danger'>清除位置信息并退出</Text>
  </AtActionSheetItem>
</AtActionSheet>
```

:::

## AtActionSheet 参数

| 参数       | 说明           | 类型    | 可选值 | 默认值 |
| ---------- | -------------- | ------- | ------ | ------ |
| title      | 元素的标题     | String  | -      | -      |
| isOpened   | 是否展示元素   | Boolean | -      | -      |
| cancleText | 取消按钮的内容 | String  | -      | -      |
