# Form 表单组件

---
将组件内的用户输入的值提交。当点击 表单中 formType 为 submit 的 button 组件时，会将表单组件中的 value 值进行提交，需要在表单组件中加上 name 来作为 key。

**目前该组件只对 AtInput 组件有效**

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtForm, AtInput } from 'taro-ui'
```

:::

## 一般用法

:::demo

```html

<AtForm
  onSubmit={this.onSubmit.bind(this)}
  onReset={this.onReset.bind(this)}
>
  <AtInput
    name='value1'
    title='文本'
    type='text'
    placeholder='单行文本'
    value={this.state.value1}
    onChange={this.handleChange.bind(this)}
  />
</AtForm>

```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| style | 样式 | String or Object  | - | - |
| reportSubmit | 是否返回 formId 用于发送模板消息  | Boolean  | - | false |


## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onSubmit | 携带 form 中的数据触发 submit 事件 | event  |
| onReset | 表单重置时会触发 reset 事件 | event  |
