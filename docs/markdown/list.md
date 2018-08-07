# List 列表

---

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtListItem } from "taro-ui"
```

:::

## 一般用法

:::demo

```html
<AtListItem title='标题文字'/>
```

:::

## 带箭头的 Item

:::demo

```html
<AtListItem title='标题文字' arrow='right' />
```

:::

## 带附加信息的 Item

:::demo

```html
<AtListItem
  arrow='right'
  title='标题文字'
  extraText='详细信息' />
```

:::

## 带 Switch 的 Item

:::demo

```html
<AtListItem isSwitch arrow='right' title='标题文字' />
```

:::

## 带缩略图的 Item

:::demo

```html
<AtListItem
  arrow='right'
  title='标题文字'
  extraText='详细信息'
  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15307837419.PNG' />
```

:::

## 带描述信息的 Item

:::demo

```html
<AtListItem
  arrow='right'
  note='描述信息'
  title='标题文字'
  extraText='详细信息'
  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15307837419.PNG' />
```

:::

## AtList 参数

| 参数       | 说明                   | 类型     | 可选值                 | 默认值  |
| ---------- | ---------------------- | -------- | ---------------------- | ------- |
| title      | 元素的标题             | String   | -                      | -       |
| note       | 元素的描述信息         | String   | -                      | -       |
| thumb      | 元素的主要缩略图       | String   | -                      | -       |
| arrow      | 箭头的方向             | String   | `right`,`top`,`bottom` | -       |
| extraText  | 额外信息的文本         | String   | -                      | -       |
| extraThumb | 额外信息的缩略图       | String   | -                      | -       |
| isSwitch   | 额外信息是否开关       | Boolean  | -                      | `false` |
| onClick    | 用户点击元素触发的事件 | Function | -                      | -       |
