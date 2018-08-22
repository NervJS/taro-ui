# SegmentedControl 分段器组件

---
由至少 2 个分段控件组成，用作不同视图的显示，可自定义文字大小，配色。

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtSegmentedControl } from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtSegmentedControl
  values={['标签页1', '标签页2', '标签页3']}
  onClick={val => this.setState({current: val})}
  current={this.state.current}
/>
{this.state.current === 0 ? <View className='tab-content'>标签1的内容</View> : null}
{this.state.current === 1 ? <View className='tab-content'>标签2的内容</View> : null}
{this.state.current === 2 ? <View className='tab-content'>标签3的内容</View> : null}

```

:::

## 自定义颜色、字体大小

:::demo

```html
<AtSegmentedControl
  onClick={val => this.setState({current: val})}
  selectedColor='#FF4949'
  fontSize='30'
  current={current}
  values={['标签页1', '标签页2', '标签页3']}
/>


```

:::

## 禁用

:::demo

```html
<AtSegmentedControl
  disabled
  values={['标签页1', '标签页2', '标签页3']}
  onClick={val => this.setState({current: val})}
  current={this.state.current}
/>
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| current | 当前选中的`tab`索引值，从0计数  | Number  | - | 0 |
| color     | 背景颜色与选中标签字体的颜色  | String | - | `#fff` |
| selectedColor  | 选中的标签背景色与边框颜色  | String | - | `#6190E8` |
| values | 选项数组,值是字符串,eg: ['标签页1','标签页2' ] | Array  | - | false |
| disabled | 是否禁止点击 | Boolean  | - | false |
| fontSize | 字体大小,单位h5为rem，小程序为rem | Number  | - | 28 |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击触发事件 | 选中tab列表索引值  |
