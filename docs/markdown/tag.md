# Tag 标签

---

用于展示1个或多个文字标签。

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import AtTag from 'taro-ui'
```
:::

## 用法

:::demo
```html
<AtTag>标签</AtTag>
<AtTag type='primary' circle>标签</AtTag>
<AtTag size='small'>标签</AtTag>
```
:::

## Tag 参数

| 微信小程序 | H5 | 参数     | 说明             | 类型    | 可选值        | 默认值 |
|:-----------|:---|:---------|:-----------------|:--------|:--------------|:-------|
| √          | √  | size     | 大小尺寸         | String  | normal, small | normal |
| √          | √  | type     | 样式类型         | String  | primary       | -      |
| √          | √  | circle   | 标签是否大圆角   | Boolean | -             | false  |
| √          | √  | active   | 标签是否为选中态 | Boolean | -             | false  |
| √          | √  | disabled | 标签是否为禁用态 | Boolean | -             | false  |

## Tag 事件

| 微信小程序 | H5 | 事件名称 | 说明           | 返回参数            |
|:-----------|:---|:---------|:---------------|:--------------------|
| √          | √  | onClick  | 点击标签时触发 | (event, { active }) |