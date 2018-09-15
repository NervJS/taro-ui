# Textarea 多行文本框

---
多行文本输入框，可控制是否显示当前字数，可自定义高度。

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtTextarea } from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtTextarea
  value={this.state.value}
  onChange={this.handleChange}
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
  onChange={this.handleChange}
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
| placeholderStyle | 指定 placeholder 的样式，只在小程序有效  | String  | - | - |
| placeholderClass | 指定 placeholder 的样式类，只在小程序有效  | String | - | - |
| disabled | 是否禁用  | String | - | false |
| autoFocus| 是否自动聚焦  | Boolean | - | false |
| focus| 获取焦点  | Boolean | - | false |
| showConfirmBar| 是否显示键盘上方带有” 完成 “按钮那一栏  | Boolean | - | false |
| selectionStart| 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用  | Number | - | -1 |
| selectionEnd| 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用  | Number | - | -1 |
| count | 是否显示字数  | Boolean | - | true |
| fixed| 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true  | Boolean | - | false|
| textOverflowForbidden | 文字超出最大长度时是否禁止输入，若否，则还可以在 maxlength 的基础上输入500字符，并右下角红字提示  | Boolean | - | true |
| height | 输入框高度  | Number | - | 100  |
| cursorSpacing | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离，只在小程序端有效，目前安卓端微信官方有 bug，该特性失效  | Number | - | 100  |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | 输入框值改变时触发的事件 | event  |
| onFocus | 输入框获得焦点时触发 | event  |
| onBlur | 输入框失去焦点时触发 | event  |
| onConfirm | 点击完成时触发 | event  |
| onLinechange | 输入框行数变化时调用 | event  |
