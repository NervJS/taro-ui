# Tabs 标签页

---
标签页组件，用于让用户在不同的视图中进行切换。在 H5 上，不建议使用左右滑动来切换 Tab，这个跟某些浏览器自带的切换页面事件存在冲突，
如果只是支持微信浏览器的 H5，不会产生冲突。

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtTabs, AtTabsPane } from 'taro-ui'
```

:::

## 一般用法

说明： 该用法适合等宽标签，标签数不建议超过4个，超过4个建议使用**滚动标签栏**，增加 `scroll` 参数(见下)。
由于小程序的限制，无法遍历 `this.props.children`, `AtTabsPane` 需要用户自行传入 `current` 和 `index` 参数

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
  <AtTabsPane current={this.state.current} index={0}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={1}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={2}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
  </AtTabsPane>
</AtTabs>
```

:::

## 滚动标签栏

:::demo

```html
<AtTabs
  current={this.state.current}
  scroll
  tabList={[
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' },
    { title: '标签页4' },
    { title: '标签页5' },
    { title: '标签页6' },
    { title: '标签页7' },
    { title: '标签页8' },
    { title: '标签页9' }
  ]}
  onClick={this.handleClick}>
  <AtTabsPane current={this.state.current} index={0}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={1}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={2}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={3}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={4}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={5}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={6}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页七的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={7}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页八的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={8}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页九的内容</View>
  </AtTabsPane>
</AtTabs>
```

:::

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
    <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
  </AtTabsPane>
  : null
}
{current === 1
  ？ <AtTabsPane>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
  </AtTabsPane>
  : null
}
{current === 2
  ？ <AtTabsPane>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
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
