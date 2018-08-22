# Checkbox 多选框

---
多选框组件

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtCheckbox } from 'taro-ui'
```

:::

## 一般用法

:::demo

```jsx
<AtCheckbox
  options={[
    { value: 'list1', label: 'iPhone X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。' },
    { value: 'list2', label: 'HUAWEI P20' },
    { value: 'list3', label: 'OPPO Find X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', disabled: true },
    { value: 'list4', label: 'vivo NEX', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', disabled: true }
  ]}
  selectedList={this.state.selectedList}
  onChange={val => this.setState({selectedList: val})}
/>
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| selectedList | 被选中的选项列表 eg: `['list1']`  | Array  | - | - |
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
| onChange | 输入框值改变时触发的事件 | 选中的value列表  |
