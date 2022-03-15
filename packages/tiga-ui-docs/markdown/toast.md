# Toast 轻提示

---

提供一个简单的 `Toast`，支持提示元素自定义，页面层级为`25`

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtToast } from 'tagi-ui'
```

:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo

```scss
@import '~taro-ui/dist/style/components/toast.scss';
```

:::

## 一般用法

:::demo

```html
<AtToast isOpened text="{text}"></AtToast>
```

:::
**支持自定义子元素**

```html
<AtToast isOpened>children</AtToast>
```

## AtToast 参数

| 参数     | 说明                                                                                             | 类型    | 可选值                  | 默认值  |
| -------- | ------------------------------------------------------------------------------------------------ | ------- | ----------------------- | ------- |
| text     | 元素的内容                                                                                       | String  |
| duration | 提示的时长:<br>auto-文字小于 7 个字时为 2 秒，大于 7 个字为 3.5 秒<br> short-2 秒<br>long-3.5 秒 | String  | `auto`, `short`, `long` | `auto`  |
| isOpened | 是否展示元素                                                                              | Boolean | -                       | `false` |
| maskHide | 是否存在底部遮罩层(无法点击底部的内容区)                                                         | Boolean | -                       | -       |
| isShowInModal | react-native中的兼容性处理，在弹窗上使用toast时需要用到这个参数，其他环境忽视                                                         | Boolean | -                       | `false`      |

## AtToast 事件

| 事件名称 | 说明                                        | 返回参数 |
| -------- | ------------------------------------------- | -------- |
| onClick  | 元素被点击之后触发的事件                    | -        |
| onClose  | 元素被关闭之后触发的事件                    | -        |

## React-native 端的兼容性

说明：

- 在 rn 中 Modal 的层级是最高的，考虑到可能出现弹窗上面轻提示的情况组件对兼容性有相关处理.
  需要 Toast 组件放在 Modal 组件内部，并传入属性值isShowInModal为true;
- 对于其他环境则中不需要把Toast放在Modal组件内部（放Moadl内部可能会导致最大宽度值受影响);

:::demo

```js
import React from 'react'
import { AtToast, AtDialog } from 'tiga-ui'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class ToastPage extends ReactComponent {
  constructor() {
    super(...arguments)
    this.state = {
      isOpened: false,
      isOPened1: false,
    }
  }
  handleClickModal() {
    this.setState({
      isOpened1: true
    })
  }
  render() {
    return (
      <AtDialog
        isOpened={isOpened}
        title='基础模态框'
        // content='模块框内容'
        primaryText='showtoast'
        secondaryText='取消'
        onPrimary={this.handleClickModal.bind(this)}
      >
          <AtToast isShowInModal isOpened={isOpened1}>
            <View style={{ color: 'white' }}>文本内容提示</View>
          </AtToast>
      </AtDialog>
    )
  }
}
```

:::
