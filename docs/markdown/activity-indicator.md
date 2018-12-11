# ActivityIndicator 活动指示器

---

该组件提供一个加载等待元素，也就是 Loading 组件

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtActivityIndicator } from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtActivityIndicator></AtActivityIndicator>
```

:::

## 自定义尺寸

:::demo

```html
<AtActivityIndicator size={32}></AtActivityIndicator>
```

:::

## 自定义颜色

:::demo

```html
<AtActivityIndicator color='#13CE66'></AtActivityIndicator>
```

:::

## 自定义需要展示的文字

:::demo

```html
<AtActivityIndicator content='加载中...'></AtActivityIndicator>
```

:::

## 垂直水平居中（当设置 center 时需要给父容器提供 position: relative 属性）

:::demo

```html
<AtActivityIndicator mode='center'></AtActivityIndicator>
```

:::

## AtActivityIndicator 参数

| 参数    | 说明             | 类型   | 可选值            | 默认值    |
| ------- | ---------------- | ------ | ----------------- | --------- |
| mode    | 元素的类型       | String | `center`,`normal` | -         |
| size    | loading 图的大小 | Number | -                 | `24`      |
| color   | loading 图的样色 | String | -                 | `#6190E8` |
| content | 元素的内容文本   | String | -                 | -         |
