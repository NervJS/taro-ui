# Modal 模态框

---

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
```

:::

## 一般用法

:::demo

```html
<AtModal>
  <AtModalHeader>标题</AtModalHeader>
  <AtModalContent>
    <View className='modal-content'>
      这里是正文内容，欢迎加入京东凹凸实验室
      这里是正文内容，欢迎加入京东凹凸实验室
      这里是正文内容，欢迎加入京东凹凸实验室
    </View>
  </AtModalContent>
  <AtModalAction>
    <Button>取消</Button>
    <Button className='serious-button'>
      确定
    </Button>
  </AtModalAction>
</AtModal>
```

:::
