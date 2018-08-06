# Grid 宫格布局

---

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtGrid } from "taro-ui"
```

:::

## 一般用法

:::demo

```html
<AtGrid data={
  [
    {
      icon: 'emoji',
      value: '放置文本'
    },
    {
      icon: 'emoji',
      value: '放置文本'
    },
    {
      icon: 'emoji',
      value: '放置文本'
    },
    {
      icon: 'emoji',
      value: '放置文本'
    },
    {
      icon: 'emoji',
      value: '放置文本'
    },
    {
      icon: 'emoji',
      value: '放置文本'
    }
  ]
} />
```

:::

## 矩形用法

:::demo

```html
<AtGrid mode='rect' data={
  [
    {
      icon: 'emoji',
      value: '放置文本'
    },
    {
      icon: 'emoji',
      value: '放置文本'
    },
    {
      icon: 'emoji',
      value: '放置文本'
    },
    {
      icon: 'emoji',
      value: '放置文本'
    },
    {
      icon: 'emoji',
      value: '放置文本'
    },
    {
      icon: 'emoji',
      value: '放置文本'
    }
  ]
} />
```

:::

## AtGrid 参数

| 参数      | 说明               | 类型                                               | 可选值 | 默认值  |
| --------- | ------------------ | -------------------------------------------------- | ------ | ------- |
| data      | 宫格布局数据源     | Array[{'{ icon , value , iconSize , iconColor }'}] | -      | -       |
| mode      | 元素的标题         | String                                             | -      | -       |
| columnNum | 每一列有多少个     | Number                                             | -      | -       |
| onClick   | 点击宫格触发的时间 | (item: Object, index: number): void                | -      | `false` |
