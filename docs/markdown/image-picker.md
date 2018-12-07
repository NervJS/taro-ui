# ImagePicker 图片选择器

---
图片选择器，一般用于上传图片前的文件选择操作，但不包括图片上传的功能

## 使用指南

Taro-UI 版本需要在 `v1.5.0` 以上，在 Taro 文件中引入组件

:::demo

```js
import { AtImagePicker } from 'taro-ui'
```

:::

## 一般用法

说明

* 该组件为受控组件，开发者需要通过 onChange 事件来更新 files，files 与 onChange 函数必填

* 开发者可以获取 files 数据并通过 [Taro.uploadFile](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html) 上传图片

:::demo

```jsx
import Taro from '@tarojs/taro'
import { AtImagePicker } from 'taro-ui'

export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      files: [{
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki1.jpeg',
      },
      {
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki2.jpeg',
      },
      {
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki3.png',
      }]
    }
  }
  onChange (files) {
    this.setState({
      files
    })
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }
  render () {
    return (
      <AtImagePicker
        files={this.state.files}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}

```

:::

## 多选图片

:::demo

```jsx
<AtImagePicker
  multiple
  files={this.state.files}
  onChange={this.onChange.bind(this)}
  onFail={this.onFail.bind(this)}
  onImageClick={this.onImageClick.bind(this)}
/>
```

:::

## 自定义数量

:::demo

```jsx
<AtImagePicker
  length={5}
  files={this.state.files}
  onChange={this.onChange.bind(this)}
  onFail={this.onFail.bind(this)}
  onImageClick={this.onImageClick.bind(this)}
/>
```

:::

## 多种图片预览模式

:::demo

```jsx
<AtImagePicker
  mode='top'
  files={this.state.files}
  onChange={this.onChange.bind(this)}
  onFail={this.onFail.bind(this)}
  onImageClick={this.onImageClick.bind(this)}
/>
```

:::

## 参数

| 参数       | 说明       | 类型    | 可选值    | 默认值   |
| ---------- | -------- | ------- | -------- | -------- |
| files | 图片文件数组, 元素为对象, 包含属性 url（必选) | Array  | - | [] |
| mode | 图片预览模式，详见(微信开发者文档)[https://developers.weixin.qq.com/miniprogram/dev/component/image.html] | String  | ```'scaleToFill'|'aspectFit'|'aspectFill'|'widthFix'|'top'|'bottom'|'center'|'left'|'right'|'top left'|'top right'|'bottom left'|'bottom right'``` | aspectFill |
| showAddBtn | 是否显示添加图片按钮 | Boolean  | - | true |
| multiple | 是否支持多选 | Boolean  | - | false |
| length | 单行的图片数量 | Number  | - | 4 |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引 | (files: Array, operationType: string, index: number): void  |
| onImageClick | 点击图片触发的回调 | (index: number, file: Object): void |
| onFail | 选择失败触发的回调 | (msg: string): void|
