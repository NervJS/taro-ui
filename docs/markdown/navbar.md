# NavBar 导航栏

---
导航栏组件，主要用于头部导航。

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtNavBar } from 'taro-ui'
```

:::

## 一般用法

:::demo

```jsx
<AtNavBar
  onClickRgIconSt={this.handleClick}
  onClickRgIconNd={this.handleClick}
  onClickLeftIcon={this.handleClick}
  color='#000'
  title='NavBar 导航栏示例'
  leftText='返回'
  rightFirstIconType='bullet-list'
  rightSecondIconType='user'
/>
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| color | 链接文字跟图标颜色，不包括标题 | String  | - | `#6190E8` |
| fixed | 是否固定顶部  | Boolean | - | false |
| border | 是否显示下划线(v1.4.0 新增)  | Boolean | - | true |
| leftIconType  | 左边图标类型，图标类型请看`AtIcon`文档  | String | - | 'chevron-left' |
| leftText | 左边文字 | String  | - | - |
| title | 标题文字 | String  | - | - |
| rightFirstIconType | 从右到左，第一个图标类型，图标类型请看`AtIcon`文档 | String  | - | - |
| rightSecondIconType | 从右到左第二个图标类型，图标类型请看`AtIcon`文档 | String  | - | - |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClickLeftIcon | 左边第一个图标类型点击事件 | -  |
| onClickRgIconSt | 从右到左第一个图标类型点击事件 | -  |
| onClickRgIconNd | 从右到左第二个图标类型点击事件 | -  |
