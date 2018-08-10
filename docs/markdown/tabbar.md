# TabBar 标签栏

---
TabBar 标签栏

以下文档指示例子，请根据具体组件编写

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import AtTabBar from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtTabBar
  tabLislt={[{ title: '待办事项', text: 8 }, { title: '拍照' }, { title: '通讯录', dot: true }]}
  onClick={val => this.setState({current: val})}
  current={this.state.current}
/>

```

## 带图标标签栏

:::demo

```html
<AtTabBar
  tabLislt={[{ title: '待办事项', iconType: 'bullet-list', text: 'new' }, { title: '拍照', iconType: 'camera' }, { title: '文件夹', iconType: 'folder', text: '100', max: '99' }]}
  onClick={val => this.setState({current: val})}
  current={this.state.current}
/>
```

:::

## 自定义图标颜色、字体颜色、背景颜色

:::demo

```html
<AtTabBar
  backgroundColor='#ececec'
  color='#ea6bb8'
  tabLislt={[{ title: '待办事项', iconType: 'bullet-list', text: 'new' }, { title: '拍照', iconType: 'camera' }, { title: '文件夹', iconType: 'folder', text: '100', max: '99' }]}
  onClick={val => this.setState({current: val})}
  current={this.state.current}
/>
```

:::

## 固定底部

:::demo

```html
<AtTabBar
  fixed
  tabLislt={[{ title: '待办事项', iconType: 'bullet-list', text: 'new' }, { title: '拍照', iconType: 'camera' }, { title: '文件夹', iconType: 'folder', text: '100', max: '99' }]}
  onClick={val => this.setState({current: val})}
  current={this.state.current}
/>
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| current | 当前选中的`tab`索引值，从0计数  | Number  | - | 0 |
| color     | 未选中标签字体与图标颜色  | String | - | `#333` |
| selectedColor  | 选中标签字体与图标颜色  | String | - | `#6190E8` |
| fixed | 是否固定底部 | Boolean  | - | false |
| backgroundColor | 是否固定底部 | String  | - | `#fff` |
| iconSize | 图标大小 | Number  | - | 24 |
| fontSize | 字体大小 | Number  | - | 14 |
| tabList | tab 列表,object 字段说明请看下表 | Array  | - | false |

## tabList object字段详解

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   | 可选或必填
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |-------- |
| title | 标题  | String  | - | 0 | 必填 |
| iconType | 未选中时展示的icon 类型，仅支持AtIcon支持的类型  | String | - | - | 可选 |
| selectedIconType  | 选中时展示的icon 类型，仅支持AtIcon支持的类型  | String | - | - |可选 |
| text | 右上角显示到文本，可以为数字或文字，如果有dot，优先显示dot | String  | - | - | 可选 |
| max | text可显示的最大数字，超过则显示最大数字加'+'，如'99+' | Number  | - | - | 可选 |
| dot | 是否显示红点，优先级比text高 | Boolean  | - | false |可选 |


## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击触发事件 | 选中tab列表索引值  |
