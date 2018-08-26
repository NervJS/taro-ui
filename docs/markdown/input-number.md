# InputNumber 输入框

---
带加减按钮的数字输入框，用户可以控制每次点击增加的数值，支持小数，同时支持自定义输入框宽度。

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtInputNumber } from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtInputNumber
  min={0}
  max={10}
  step={1}
  value={this.state.number}
  onChange={this.handleChange}
/>
```

:::

## 每次点击改变 0.1

:::demo

```html
<AtInputNumber
  min={0}
  max={10}
  step={0.1}
  value={this.state.number}
  onChange={this.handleChange}
/>
```

:::

## 禁止状态

:::demo

```html
<AtInputNumber
  disabled
  min={0}
  max={10}
  step={1}
  value={this.state.number}
  onChange={this.handleChange}
/>
```

:::

## 自定义宽度

:::demo

```html
<AtInputNumber
  min={0}
  max={10}
  step={1}
  width={200}
  value={this.state.number}
  onChange={this.handleChange}
/>
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| value | 输入框值 | Number  | - | 1 |
| width | input 宽度,不包括两侧按钮，单位根据环境转为 `rpx` 或 `rem`  | Number  | - | 120 |
| min   | 最小值  | Number  | - | 0 |
| max   | 最大值  | Number | - | 100 |
| step   | 每次点击改变的间隔大小 | Number  | -  | 1 |
| disabled| 是否禁止输入，禁止点击按钮  | Boolean | - | false    |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | 输入框值改变时触发的事件 | 输入框当前值 value  |
