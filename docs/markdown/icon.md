# Icon 图标

---

用于展示 icon 。该组件的 icon 图形基于 webfont，因此可任意放大、改变颜色。

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtIcon } from 'taro-ui'
```
:::

## 一般用法

:::demo
```html
<AtIcon value='clock' size='30' color='#F00'></AtIcon>
```
:::

## Icon 参数

| 参数  | 说明     | 类型   | 可选值                | 默认值 |
|:------|:---------|:-------|:----------------------|:-------|
| value | 图标图案 | String | 参考下表              | -      |
| size  | 图标大小 | String | 大于10的整数          | 24     |
| color | 图标颜色 | String | 可被CSS支持的颜色单位 | -      |
