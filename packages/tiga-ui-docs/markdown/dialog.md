# Dialog 对话框

---

`Dialog (对话框)` 组件

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtDialog } from "tiga-ui"
```
:::

> 由于微信小程序的限制，在 `Dialog` 组件中使用一些客户端创建的原生组件（如：`textarea`、`input`等）时，即使 `Dialog` 组件处于隐藏状态，原生组件依然会在页面上显示，具体参见微信小程序文档：[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)。

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~tiga-ui/dist/style/components/dialog.scss";
```
:::

## 一般用法

:::demo

```html
<AtDialog
  isOpened={isOpened1}
  title='基础模态框'
  content='模块框内容'
  primaryText='主要操作'
  secondaryText='次要操作'
  onPrimary={this.closeDialog.bind(this, 1, 'Dialog被关闭了')}
  onSecondary={this.closeDialog.bind(this, 1, 'Dialog被关闭了')}
  onClose={this.closeDialog.bind(this, 1)}
/>
```

:::

## 单个按钮模态框

:::demo

```html
<AtDialog
  isOpened={isOpened2}
  title='单个按钮模态框'
  content='模块框内容'
  onPrimary={this.closeDialog.bind(this, 2, 'Dialog被关闭了')}
  onClose={this.closeDialog.bind(this, 2)}
/>
```

## 三个按钮模态框

:::demo

```html
<AtDialog
  isOpened={isOpened3}
  title='三个按钮模态框'
  content='模块框内容'
  primaryText='主要操作'
  secondaryText='次要操作'
  tertiaryText='辅助操作'
  onPrimary={this.closeDialog.bind(this, 3, 'Dialog被关闭了')}
  onSecondary={this.closeDialog.bind(this, 3, 'Dialog被关闭了')}
  onTertiary={this.closeDialog.bind(this, 3, 'Dialog被关闭了')}
  onClose={this.closeDialog.bind(this, 3)}
/>
```

## 无标题模态框

:::demo

```html
<AtDialog
  isOpened={isOpened4}
  content='无标题模态框'
  onPrimary={this.closeDialog.bind(this, 4, 'Dialog被关闭了')}
  onClose={this.closeDialog.bind(this, 4)}
/>
```

## 自定义模态框

:::demo

```html
<AtDialog
  isOpened={isOpened5}
  title='自定义模态框'
  onPrimary={this.closeDialog.bind(this, 5, 'Dialog被关闭了')}
  onClose={this.closeDialog.bind(this, 5)}
>
  这里是正文内容，欢迎加入58安居客。。
  这里是正文内容，欢迎加入58安居客。。
  这里是正文内容，欢迎加入58安居客。。
</AtDialog>
```

:::

## AtDialog 参数

| 参数                | 说明                       | 类型    | 可选值 | 默认值  |
| ------------------- | -------------------------- | ------- | ------ | ------- |
| title               | 元素的标题                 | String  | -      | -       |
| content             | 元素的内容                 | String  | -      | -       |
| primaryText          | 主操作按钮的文本             | String  | -      | -       |
| secondaryText          | 次操作按钮的文本             | String  | -      | -       |
| tertiaryText          | 次次操作按钮的文本             | String  | -      | -       |
| closeOnClickOverlay | 点击浮层的时候时候自动关闭 | Boolean | -      | `false` |
| scrollY         | RN 配置，是否内容滚动             | String  | -      | `false`   |
| isOpened            | 是否显示模态框             | Boolean  | -      | `false`       |

## AtDialog 事件

| 事件名称  | 说明                   | 返回参数 |
| --------- | ---------------------- | -------- |
| onClose   | 触发关闭时的事件       | -        |
| onPrimary  | 点击主操作按钮触发的事件 | -        |
| onSecondary | 点击次操作按钮触发的事件 | -        |
| onTertiary | 点击次次操作按钮触发的事件 | -        |
