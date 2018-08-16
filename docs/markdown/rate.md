# Rate 评分组件

---
Rate 评分组件

以下文档指示例子，请根据具体组件编写

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import AtRate from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtRate value={this.state.value} onChange={val => this.setState({value:val})} />
```

## 自定义星星大小

:::demo

```html
<AtRate size='15' value={this.state.value} onChange={val => this.setState({value:val})} />
```

:::

## 自定义评分数

:::demo

```html
<AtRate max={10} value={this.state.value} onChange={val => this.setState({value:val})} />
```

:::

## 只读

:::demo

```html
<AtRate value={3.5} />
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| value | 当前评分  | Number  | - | 0 |
| max     | 最大评分  | Number | - | 5 |
| size | 评分星星大小 | `Number`或`String`  | - | 20 |
| margin | 星星间隔,单位根据环境转为rpx或rem  | `Number`或`String`  | - | 5 |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | 输入框值改变时触发的事件 | 当前值value  |
