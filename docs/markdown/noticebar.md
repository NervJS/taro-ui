# Noticebar 通告栏

---

用于展示一行或多行通告

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import AtNoticebar from 'taro-ui'
```
:::

## 一般用法

:::demo
```html
<AtNoticebar>这是 NoticeBar 通告栏。单行</AtNoticebar>
```
:::

## Noticebar 参数

| 微信小程序 | H5 | 参数     | 说明               | 类型    | 可选值         | 默认值   |
|:-----------|:---|:---------|:-------------------|:--------|:---------------|:---------|
| √          | √  | close    | 是否需要关闭按钮   | Boolean | -              | false    |
| √          | √  | single   | 内容是否单行       | Boolean | -              | false    |
| √          | √  | moreText | “查看更多”链接文本 | String  | -              | 查看详情 |
| √          | √  | moreUrl  | “查看更多”链接地址 | String  | -              | -        |
| √          | √  | icon     | 内容前的icon图标   | String  | 参考`icon`组件 | -        |
