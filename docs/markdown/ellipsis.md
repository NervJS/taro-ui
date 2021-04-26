# Ellipsis 文本自动省略号

---
文本自动省略号组件

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtEllipsis } from 'taro-ui'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~taro-ui/dist/style/components/ellipsis.scss";
```
:::

## 一般用法

:::demo

```js
import Taro from '@tarojs/taro'
import { AtEllipsis }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
     <AtEllipsis lines={2}>
        啊啊及发家史覅氨,,,
        <Text style='color: orange'>基酸覅健身房f奥</Text>
        术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚基酸覅健身房奥术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚
      </AtEllipsis>
    )
  }
}

```

:::

## 展开/收起

说明：

* 因为小程序的限制, 要展示 展开/收起 按钮的情况下, 只能通过`text`参数传入文本内容
* 若要以弹窗等自定义形式显示全部文本, 可以通过`onWillExpand`事件返回false来处理

:::demo

```js
import Taro from '@tarojs/taro'
import { AtEllipsis }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
     <AtEllipsis
        text='啊啊及发家史覅氨,,,基酸覅健身房奥术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚基酸覅健身房奥术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚'
        textStyle={{
          fontSize: 12
        }}
        btnText='全部展开全部'
        expand
        lines={2}
      />
    )
  }
}

```

:::demo
```js
import Taro from '@tarojs/taro'
import { AtEllipsis }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
     <AtEllipsis
        text='啊啊及发家史覅氨,,,基酸覅健身房奥术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚基酸覅健身房奥术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚'
        textStyle={{
          fontSize: 12
        }}
        btnText='查看全部'
        btnTextStyle={{
          color: 'red'
        }}
        onWillExpand={text => {
          Taro.showModal({
            title: text
          })
          return false
        }}
        expand
        lines={2}
      />
    )
  }
}

```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| text | 文本`传入该属性时将会有 展开 按钮`   | String  | - | '' |
| btnText  | 展开按钮名称  | String | - | '全部' |
| lines  | 在按照行数截取下最大的行数，超过则截取省略	  | number | - | undefined |
| expand  | 是否展开文本(该属性对children无效)  | Boolean | - | undefined |
| textStyle  | 文本text的样式	  | Object | - | 详见下 style object |
| btnTextStyle  | 按钮btnText的样式	  | Object | - | 详见下 style object |


## style object 字段详解

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   | 可选或必填
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |-------- |
| fontSize | 文字尺寸 (单位为px)  | number  | - | 14 | 可选 |
| fontColor  | 文字颜色  | String | - | 文本: `#646A73`, 按钮: `#9CA2A9` | 可选 |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onWillExpand | 文本将要展开事件, 可在该事件中返回false来自定义展示处理 | text 文本  |
| onExpand | 文本展开事件 | - |
| onWillCollapse | 文本将要收起事件 | - |
| onCollapse | 文本收起事件 | - |
