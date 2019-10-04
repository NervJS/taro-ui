# List 列表

---

提供常见的 `List` 组件，帮助使用者快速搭建列表

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtList, AtListItem } from "taro-ui"
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~taro-ui/dist/style/components/list.scss";
@import "~taro-ui/dist/style/components/icon.scss";
```
:::

## 一般用法

:::demo

```html
<AtList>
  <AtListItem title='标题文字' onClick={this.handleClick} />
  <AtListItem title='标题文字' arrow='right' />
  <AtListItem title='标题文字' extraText='详细信息' />
  <AtListItem title='禁用状态' disabled extraText='详细信息' />
</AtList>
```

:::

## 带描述信息

:::demo

```html
<AtList>
  <AtListItem title='标题文字' note='描述信息' />
  <AtListItem title='标题文字' note='描述信息' arrow='right' />
  <AtListItem
    arrow='right'
    note='描述信息'
    title='标题文字标题文字标题文字标题文字标题文字'
    extraText='详细信息详细信息详细信息详细信息'
  />
</AtList>
```

:::

## 包含图片

:::demo

```html
<AtList>
  <AtListItem
    title='标题文字'
    arrow='right'
    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
  />
  <AtListItem
    title='标题文字'
    note='描述信息'
    arrow='right'
    thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
  />
  <AtListItem
    title='标题文字'
    note='描述信息'
    extraText='详细信息'
    arrow='right'
    thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
  />
</AtList>
```

:::

## 支持图标的 Item

:::demo

```html
<AtList>
  <AtListItem
    title='标题文字'
    note='描述信息'
    arrow='right'
    iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
  />
  <AtListItem
    title='标题文字'
    note='描述信息'
    extraText='详细信息'
    arrow='right'
    iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
  />
</AtList>
```

:::

## 无边框的 Item

:::demo

```html
 <AtList hasBorder={false}>
  <AtListItem
    isSwitch
    title='标题文字'
    hasBorder={false}
    onSwitchChange={this.handleChange}
  />
  <AtListItem
    isSwitch
    title='标题文字'
    hasBorder={false}
    onSwitchChange={this.handleChange}
  />
</AtList>
```

:::

## 带 Switch 的 Item

:::demo

```html
<AtList>
  <AtListItem
    title='标题文字'
    isSwitch
    onSwitchChange={this.handleChange}
  />
</AtList>
```

:::

## AtList 参数

| 参数      | 说明       | 类型    | 可选值 | 默认值 |
| --------- | ---------- | ------- | ------ | ------ |
| hasBorder | 是否有边框 | Boolean | -      | `true` |

## AtListItem 参数

| 参数          | 说明             | 类型                                                                 | 可选值                 | 默认值  |
| ------------- | ---------------- | -------------------------------------------------------------------- | ---------------------- | ------- |
| title         | 元素的标题       | String                                                               | -                      | -       |
| disabled      | 是否禁用         | Boolean                                                              | -                      | `false` |
| note          | 元素的描述信息   | String                                                               | -                      | -       |
| thumb         | 元素的主要缩略图 | String                                                               | -                      | -       |
| arrow         | 箭头的方向       | String                                                               | `right`,`top`,`bottom` | -       |
| extraText     | 额外信息的文本   | String                                                               | -                      | -       |
| extraThumb    | 额外信息的缩略图 | String                                                               | -                      | -       |
| isSwitch      | 额外信息是否开关 | Boolean                                                              | -                      | `false` |
| switchColor   | 开关的颜色       | String                                                               | -                      | `#6190E8` |
| switchIsCheck | 额外信息开关的值 | Boolean                                                              | -                      | `false` |
| hasBorder     | 是否有边框       | Boolean                                                              | -                      | `true`  |
| iconInfo      | icon 信息        | {'{ value , size? , color?, prefixClass?,className?,customStyle? }'} | -                      | `true`  |

## AtListItem 事件

| 事件名称       | 说明                       | 返回参数 |
| -------------- | -------------------------- | -------- |
| onClick        | 用户点击元素触发的事件     | -        |
| onSwitchChange | 用户点击切换 Switch 时触发 | -        |
