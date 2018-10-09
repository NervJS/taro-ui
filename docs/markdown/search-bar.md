# SearchBar 搜索栏

---
可用于用户输入搜索信息

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtSearchBar } from 'taro-ui'
```

:::

## 一般用法

:::demo

```js
/*
  onChange (value) {
    this.setState({
      value: value
    })
  }
*/
<AtSearchBar
  value={this.state.value}
  onChange={this.onChange.bind(this)}
/>
```

:::

## 自定义按钮文字和点击事件

:::demo

```js
/*
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('click')
  }
*/
<AtSearchBar
  actionName='搜一下'
  value={this.state.value}
  onChange={this.onChange.bind(this)}
  onActionClick={this.onActionClick.bind(this)}
/>
```

:::

## 一直显示按钮

:::demo

```js
/*
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('click')
  }
*/
<AtSearchBar
  showActionButton
  value={this.state.value}
  onChange={this.onChange.bind(this)}
  onActionClick={this.onActionClick.bind(this)}
/>
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| value | 输入框值 | String  | - | - |
| placeholder | 占位符  | String  | - | - |
| maxlength | 最大长度 | Number  | -  | 140 |
| fixed | 是否固定顶部 | Boolean  | -  | false |
| focus | 是否聚焦 | Boolean  | -  | false |
| disabled | 是否禁止输入 | Boolean  | -  | false |
| showActionButton | 是否一直显示右侧按钮 | Boolean  | -  | false |
| actionName | 右侧按钮文案 | String  | -  | '搜索' |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | 输入框值改变时触发的事件 | 输入框当前值 value  |
| onFocus | 输入框值聚焦时触发的事件 | event  |
| onBlur | 输入框值失去焦点时触发的事件 | event  |
| onConfirm | 键盘点击完成时触发的事件 | event  |
| onActionClick | 右侧按钮点击触发事件 | event  |
