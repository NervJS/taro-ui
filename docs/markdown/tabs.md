# Tabs 标签页

---
标签页组件，用于让用户在不同的视图中进行切换。在 iOS 端的次级页面中，不建议使用左右滑动来切换 Tab，这个和 iOS 的左滑返回存在冲突

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtTabs, AtTabsPane} from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtTabs
  current={this.state.current}
  tabList={[
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' }
  ]}
  onClick={this.handleClick}>
  <AtTabsPane>
    <View className='tab-content'>标签页一的内容</View>
  </AtTabsPane>
  <AtTabsPane>
    <View className='tab-content'>标签页二的内容</View>
  </AtTabsPane>
  <AtTabsPane>
    <View className='tab-content'>标签页三的内容</View>
  </AtTabsPane>
</AtTabs>
```

## 禁止内容切换动画

:::demo

```html
<AtTabs
  current={this.state.current}
  tabList={[
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' }
  ]}
  onClick={this.handleClick}>
</AtTabs>
{current === 0
  ？ <AtTabsPane>
    <View className='tab-content'>标签页一的内容</View>
  </AtTabsPane>
  : null
}
{current === 1
  ？ <AtTabsPane>
    <View className='tab-content'>标签页二的内容</View>
  </AtTabsPane>
  : null
}
{current === 2
  ？ <AtTabsPane>
    <View className='tab-content'>标签页三的内容</View>
  </AtTabsPane>
  : null
}
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| current | 当前选中的标签索引值，从0计数  | Number  | - | 0 |
| scroll     | 是否横向滚动  | Boolean | - | false |
| swipeable  | 是否支持手势滑动切换内容页  | Boolean | - | true |
| tabList | tab 列表 object 详细字段看下表 | Array  | - | - |

## tabList object字段详解

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   | 可选或必填
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |-------- |
| title | 标题  | String  | - | 0 | 必填 |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击或滑动时触发事件 | 选中标签列表索引值  |
