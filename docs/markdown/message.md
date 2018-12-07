# Message 消息通知

---
可进行消息提醒

## 使用指南

Taro-UI 版本需要在 `v1.4.1` 以上，在 Taro 文件中引入组件

:::demo

```js
import { AtMessage } from 'taro-ui'
```

:::

## 一般用法

说明

* 必须在页面引入 `<AtMessage />`，使用 `Taro.atMessage` 函数进行调用传参数，参数 `Options` 为 `Object` 类型，见下表

:::demo

```js
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtMessage } from 'taro-ui'

export default class LoadMorePage extends Taro.Component {
  handleClick (type) {
    Taro.atMessage({
      'message': '消息通知',
      'type': type,
    })
  }
  render () {
    return (
      <View>
        <AtMessage />
        <AtButton onClick={this.handleClick.bind(this)}>
          普通消息
        </AtButton>
        <AtButton onClick={this.handleClick.bind(this, 'success')}>
          成功消息
        </AtButton>
        <AtButton onClick={this.handleClick.bind(this, 'error')}>
          错误消息
        </AtButton>
        <AtButton onClick={this.handleClick.bind(this, 'warning')}>
          警告消息
        </AtButton>
      </View>
    )
  }
}
```

:::

## Taro.atMessage Options 字段说明

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| message | 文本消息内容 | String  | - | - |
| type | 消息类型 | String  | info，success，error，warning | info |
| duration | 消息持续时间,单位 ms  | Number  | - | 3000 |
