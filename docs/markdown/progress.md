# Progress 进度条

---

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtProgress } from "taro-ui"
```

:::

## 一般用法

:::demo

```html
<AtProgress></AtProgress>
```

:::

## AtProgress 参数

| 参数          | 说明         | 类型    | 可选值                     | 默认值  |
| ------------- | ------------ | ------- | -------------------------- | ------- |
| color         | 元素的颜色   | String  | -                          | -       |
| status        | 元素的状态   | String  | `progress`,`error`,`success` | -       |
| percent       | 元素的进度   | Number  | -                          | -       |
| strokeWidth   | 元素的规格   | Number  | -                          | -       |
| isHidePercent | 是否隐藏文字 | Boolean | -                          | `false` |
