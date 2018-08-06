# Icon 图标

---

语义化的矢量图形，taro-ui 使用开源的 Feather 作为图标库，并制作成了 icon font。Feather 使用的是 24x24 的尺寸，拥有一致的圆角，一致的笔画宽度，确保整个图标系统保持视觉上的统一性。

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import AtIcon from 'taro-ui'
```
:::

## 一般用法

:::demo
```html
<AtIcon value="clock" size="30" color="#F00"></AtIcon>
```
:::

## Icon 参数

| 微信小程序 | H5 | 参数  | 说明     | 类型   | 可选值                | 默认值 |
|:-----------|:---|:------|:---------|:-------|:----------------------|:-------|
| √          | √  | value | 图标图案 | String | 参考下表              | -      |
| √          | √  | size  | 图标大小 | String | 大于10的整数          | 24     |
| √          | √  | color | 图标颜色 | String | 可被CSS支持的颜色单位 | -      |
