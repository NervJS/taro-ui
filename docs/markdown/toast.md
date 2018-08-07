# Toast 轻提示

---

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
  text={text}
  isOpened={isOpened}
  iconSize={iconSize}
  iconType={iconType}
  iconColor={iconColor}
  isHiddenIcon={isHiddenIcon}></AtToast>
```

:::

## AtToast 参数

| 参数         | 说明          | 类型    | 可选值 | 默认值  |
| ------------ | ------------- | ------- | ------ | ------- |
| text         | 元素的内容    | String  | -      | -       |
| iconType     | icon 的种类   | String  | -      | -       |
| iconSize     | icon 的大小   | Number  | -      | -       |
| iconColor    | icon 的颜色   | Number  | -      | -       |
| isOpened     | 是否展现组件  | Boolean | -      | -       |
| isHiddenIcon | 是否隐藏 icon | Boolean | -      | `false` |
