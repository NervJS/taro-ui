# Radio 单选框

---
单选框组件

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtRadio } from 'taro-ui'
```

:::

## 一般用法

:::demo

```jsx
<AtRadio
  options={[
    { label: '单选项一', value: 'option1', desc: '单选项描述' },
    { label: '单选项二', value: 'option2' },
    { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
  ]}
  value={this.state.value}
  onClick={val => this.setState({value:val})}
/>
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| value | 当前单选框值  | String  | - | 0 |
| options  | object选项列表，object 字段详细看下表  | Array | - | - |

## options object字段详解

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   | 可选或必填
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |-------- |
| value | 选项标识符，必须保证唯一  | String  | - | - | 必填 |
| label  | 选项标题  | String | - | - | 必填|
| desc  | 选项描述，显示在标题下方的文字  | String | - | - | 可选|
| disabled  | 是否禁止点击  | Boolean | - | false | 可选|

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击选项触发事件 | 当前值value  |
