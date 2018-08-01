# Button 按钮

---

按钮用于传递用户触摸时会触发的操作

以下文档指示例子，请根据具体组件编写

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import AtButton from 'taro-ui'
```
:::

## 一般用法

:::demo
```html
<At-Button type="success">按钮文案</At-Button>
<At-Button type="error">按钮文案</At-Button>
<At-Button type="warning">按钮文案</At-Button>
<At-Button type="info">按钮文案</At-Button>
```
:::

## 不同尺寸

:::demo
```html
<At-Button type="success">按钮文案</At-Button>
<At-Button type="error">按钮文案</At-Button>
<At-Button type="warning">按钮文案</At-Button>
<At-Button type="info">按钮文案</At-Button>
```
:::

## Button 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| type       | 按钮的类型                             | String  | `default`, `primary`, `success`, `error`, `warning`, `info`, `text` | -        |
| nativeType | 原生按钮的类型                         | String  | -                                                                   | `button` |
| size       | 按钮的大小                             | String  | `large`, `small`, `smaller`                                         | -        |
| hollow     | 是否为空心按钮                         | Boolean | -                                                                   | false    |
| icon       | 按钮的图标类名，填入图标的 `classname` | String  | 见文档 `Icon 图标`                                                  | -        |
| loading    | 设置按钮的载入状态                     | Boolean | -                                                                   | false    |
| circle     | 设置圆形图标按钮                       | Boolean | -                                                                   | false    |

## Button 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击按钮时触发 | - |
