# NavBar 导航栏

---
导航栏组件。

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtNavBar } from 'tiga-ui'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~tiga-ui/dist/style/components/nav-bar.scss";
@import "~tiga-ui/dist/style/components/icon.scss";
```
:::

## 一般用法

默认左侧返回按钮，字体颜色与组件保持一致，如要更改 title 传 ReactNode 即可
:::demo

```html
<AtNavBar title='自定义标题' />
```

:::

## 自定义标题内容

title 为 ReactNode

:::demo

```html
<AtNavBar title='自定义标题' />
```

## 自定义左侧内容

leftIcon 为 ReactNode

:::demo

```html
<AtNavBar title='标题' leftIcon='取消' />
```

## 自定右侧内容

extra 为 ReactNode

:::demo

```html
<AtNavBar title='标题' extra='右边内容' />
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| fixed | TODO：是否固定顶部  | Boolean | - | false |
| border | TODO：是否显示下划线 | Boolean | - | true |
| leftIcon  | 左侧返回图标  | ReactNode | - | 返回 Icon |
| title | 标题文字 | ReactNode  | - | - |
| extra | 右侧额外文字 | ReactNode  | - | - |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onBack | 左侧区域点击事件 | -  |
