# Textarea 多行文本输入框

---
Textarea 多行文本输入框组件

以下文档指示例子，请根据具体组件编写

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import AtTextarea from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtTextarea
  value={this.state.value}
  onChange={e => this.setState({value: e.target.value})}
  maxlength='200'
  placeholder='你的问题是...'
/>

```

:::

## 不显示字数

:::demo

```html
<AtTextarea
  count={false}
  value={this.state.value}
  onChange={e => this.setState({value: e.target.value})}
  maxlength='200'
  placeholder='你的问题是...'
/>

```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| value | 输入框当前值 | String  | - | - |
| maxlength | 最大长度  | Number  | - | 200 |
| placeholder | 占位符  | String | - | - |
| disabled | 是否禁用  | String | - | false |
| autoFocus| 是否自动聚焦  | Boolean | - | false |
| count | 是否显示字数  | Boolean | - | true |
| fixed| 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true  | Boolean | - | false|
| textOverflowForbidden | 文字超出最大长度时是否禁止输入，若否，则还可以在maxlength的基础上输入500字符，并右下角红字提示  | Boolean | - | true |
| height | 输入框高度  | Number | - | 100  |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | 输入框值改变时触发的事件 | event  |
| onFocus | 输入框获得焦点时触发 | event  |
| onBlur | 输入框失去焦点时触发 | event  |
| onConfirm | 点击完成时触发 | event  |
