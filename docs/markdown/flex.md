# Flex 弹性布局

---

基于 `Flex Box` 布局封装的组件，可以帮助使用者方便、快捷的构建弹性布局

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtFlex, AtFlexItem } from "taro-ui"
```

:::

## 一般用法

:::demo

```html
<AtFlex>
  <AtFlexItem>A</AtFlexItem>
  <AtFlexItem>B</AtFlexItem>
  <AtFlexItem>C</AtFlexItem>
</AtFlex>
```
:::

## 使用栅格化（长度）

:::demo

```html
<AtFlex>
  <AtFlexItem size='3'>A</AtFlexItem>
  <AtFlexItem size='6'>B</AtFlexItem>
  <AtFlexItem size='2'>C</AtFlexItem>
  <AtFlexItem size='1'>D</AtFlexItem>
</AtFlex>
```
:::

## 使用栅格化（偏移）

:::demo

```html
<AtFlex>
  <AtFlexItem offset='2'>A</AtFlexItem>
  <AtFlexItem offset='3'>B</AtFlexItem>
  <AtFlexItem>C</AtFlexItem>
</AtFlex>
```
:::

## 超出换行

:::demo

```html
<AtFlex wrap='wrap'>
  <AtFlexItem size='4'>A</AtFlexItem>
  <AtFlexItem size='4'>B</AtFlexItem>
  <AtFlexItem size='4'>C</AtFlexItem>
  <AtFlexItem size='4'>D</AtFlexItem>
  <AtFlexItem size='4'>E</AtFlexItem>
</AtFlex>
```
:::

## 宽度根据内容撑开

:::demo

```html
<AtFlex>
  <AtFlexItem isAuto size='1'>
    被内容撑开
  </AtFlexItem>
  <AtFlexItem>B</AtFlexItem>
</AtFlex>
```
:::

## AtFlex 参数

| 参数         | 说明                         | 类型   | 可选值                                           | 默认值    |
| ------------ | ---------------------------- | ------ | ------------------------------------------------ | --------- |
| dirction     | 主轴的方向                   | String | `row`, `column`, `row-reverse`, `column-reverse` | `row`     |
| wrap         | 子元素的换行方式             | String | `no-wrap`, `wrap`, `wrap-reverse`                | `no-wrap` |
| justify      | 子元素在主轴方向上的对齐方式 | String | `start`, `end`, `center`, `between`, `around`    | `start`   |
| align        | 子元素在副轴方向上的对齐方式 | String | `start`, `end`, `center`, `stretch`, `baseline`  | `start`   |
| alignContent | 子元素在交叉轴上的对齐方式   | String | `start`, `end`, `center`, `between`, `around`    | -         |

## AtFlexItem 参数

| 参数   | 说明                       | 类型    | 可选值                    | 默认值  |
| ------ | -------------------------- | ------- | ------------------------- | ------- |
| size   | 占栅格系统的大小           | Number  | 1 ~ 12                    | -       |
| offset | 偏移栅格系统的大小         | Number  | 1 ~ 12                    | -       |
| isWrap | 是否自动换行               | Boolean | -                         | `false` |
| isAuto | 是否被内容区自动撑开       | Boolean | -                         | `false` |
| align  | 元素在副轴方向上的对齐方式 | String  | `top`, `bottom`, `center` | `top`   |
