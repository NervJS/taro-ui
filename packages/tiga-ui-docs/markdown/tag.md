# Tag 标签

---

用于展示1个或多个文字标签，可点击切换选中、不选中的状态。

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtTag } from 'tiga-ui'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~tiga-ui/dist/style/components/tag.scss";
```
:::

## 用法

:::demo
```html
<AtTag>标签</AtTag>
<AtTag type='primary'>标签</AtTag>
<AtTag size='small'>标签</AtTag>
```
:::

## 点击事件

:::demo
```html
<!-- 点击返回当前标签名字和是否选中 -->
<AtTag 
  name='tag-1' 
  type='primary' 
  onClick={this.onClick.bind(this)}
>
  tag-1
</AtTag>
```
:::

## Tag 参数

| 参数     | 说明         | 类型    | 可选值        | 默认值 |
|---------|-------------|--------|--------------|-------|
| size     | 大小尺寸     | String  | normal, small | normal |
| name     | 标签名字     | String  | -             | -      |
| active   | 是否为选中态 | Boolean | -             | false  |
| disabled | 是否为禁用态 | Boolean | -             | false  |

## Tag 事件

| 事件名称 | 说明                               | 返回参数     |
|---------|-----------------------------------|-------------|
| onClick  | 点击标签时触发，返回标签名字和状态 | name, active |

# TagGroup 标签组

---

用于展示一组标签，可点击切换选中、不选中的状态。

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtTag, AtTagGroup } from 'tiga-ui'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~tiga-ui/dist/style/components/tag.scss";
```
:::

## 用法

:::demo
```html
<AtTagGroup
  type='header'
  data={this.state.tagList}
  onClick={this.handleClick.bind(this)}
/>
```
:::

## 标签组类型

:::demo
```html
<!-- 类型 type=header -->
<AtTagGroup
  type='header'
  data={this.state.tagList}
  onClick={this.handleClick.bind(this)}
/>
<!-- 类型 type 默认值是 form -->
<AtTagGroup
  size='small'
  data={this.state.longTagList}
  onClick={this.handleLongTagClick.bind(this)}
/>
```
:::

## 标签组是否换行

:::demo
```html
<!-- 头部类型 isWrap -->
<AtTagGroup
  isWrap
  type='header'
  data={this.state.tagList}
  onClick={this.handleClick.bind(this)}
/>
```
:::

## 标签组滚动

:::demo
```html
<AtTagGroup
  scrollX
  type='header'
  data={this.state.longTagList}
  onClick={this.handleLongTagClick.bind(this)}
/>
```
:::

## TagGroup 参数

| 参数     | 说明         | 类型    | 可选值        | 默认值 |
|---------|-------------|--------|--------------|-------|
| size     | 大小尺寸     | String  | normal, small | normal |
| type     | 标签组类型     | String  | header, form | form |
| disabled | 是否为禁用态 | Boolean | -             | false  |
| scrollX | 是否为超出滚动 | Boolean | -             | false  |
| isWrap | 是否为超出换行 | Boolean | -             | true  |
| data | 标签组数据 | Array<> | -             | []  |

## Tag 事件

| 事件名称 | 说明                               | 返回参数     |
|---------|-----------------------------------|-------------|
| onClick  | 点击标签时触发，返回标签名字和状态 | name, active |
