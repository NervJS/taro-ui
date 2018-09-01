# Modal 模态框

---

提供一个简单的 `Modal` 框，也可以作为 `Dialog (对话框)` 之类的组件使用，在页面上的层级为 `1000`

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtModal isOpened>
  <AtModalHeader>标题</AtModalHeader>
  <AtModalContent>
      这里是正文内容，欢迎加入京东凹凸实验室
      这里是正文内容，欢迎加入京东凹凸实验室
      这里是正文内容，欢迎加入京东凹凸实验室
  </AtModalContent>
  <AtModalAction>
    <Button>取消</Button>
    <Button>确定</Button>
  </AtModalAction>
</AtModal>
```

:::

## 简化使用

:::demo

```html
<AtModal
  isOpened
  title='标题'
  cancelText='取消'
  confirmText='确认'
  onCancel={ this.handleCancel }
  onConfirm={ this.handleConfirm }
  content='欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室'
/>
```

:::

## AtModal 参数

| 参数        | 说明                   | 类型     | 可选值 | 默认值 |
| ----------- | ---------------------- | -------- | ------ | ------ |
| title       | 元素的标题             | String   | -      | -      |
| content     | 元素的内容             | String   | -      | -      |
| cancelText  | 取消按钮的文本         | String   | -      | -      |
| confirmText | 确认按钮的文本         | String   | -      | -      |
| onCancel    | 点击取消按钮触发的样式 | Function | -      | -      |
| onConfirm   | 点击确认按钮触发的事件 | Function | -      | -      |
