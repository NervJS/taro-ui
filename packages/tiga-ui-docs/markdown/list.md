# ListItem 列表

---

提供常见的 `AtListItem` 组件，帮助使用者快速搭建列表

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtListItem } from "tiga-ui"
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~tiga-ui/dist/style/components/list.scss";
@import "~tiga-ui/dist/style/components/icon.scss";
```
:::

## 一般用法

:::demo

```html
<AtListItem title='标题文字' onClick={this.handleClick} />
```

:::

## 带描述信息

:::demo

```html
<AtListItem
  title='标题文字'
  extra='详细信息'
  description='描述信息'
/>
<AtListItem
  arrow
  title='标题文字'
  extra='详细信息'
  description='描述信息右对齐'
  descriptionLayout='right'
/>
```

:::

## 包含箭头，Icon

:::demo

```html
<AtListItem
  title='标题文字'
  arrow={
    <AtIcon
      className='list-page-arrow'
      value='comm_icon_right_line'
      size={16}
    />
  }
/>
<AtListItem disabled title='禁用状态' extra='详细信息' />
<AtListItem
  title='标题文字'
  extra='箭头单独点击事件'
  arrow={
    <AtIcon
      className='list-page-arrow'
      value='comm_icon_right_line'
      size={16}
      onClick={e => {
        if (Taro.getEnv() !== Taro.ENV_TYPE.RN) {
          e.stopPropagation()
        }
        Taro.showToast({
          title: '点击箭头'
        })
      }}
    />
  }
  onClick={this.handleClick}
/>
```

:::

## 支持标题前和标题后

:::demo

```html
<AtListItem
  prefix={
    <AtIcon
      className='list-page-arrow'
      value='comm_icon_more_line'
      size={16}
    />
  }
  title='前缀图标标题'
/>
<AtListItem title='标题文字' extra='详细信息' />
<AtListItem
  title='标题文字'
  extra={
    <View className='list-page-item-button'>
      <AtButton>通过调整extra子元素自身布局适应</AtButton>
    </View>
  }
/>
```

:::

## 描述超长

:::demo

```html
<AtListItem arrow title='标题超过六个字换行' extra='详细信息' />
<AtListItem
  arrow
  title='标题文字'
  extra='详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息'
/>
<AtListItem
  arrow
  ellipsis
  title='标题文字'
  extra='超长省略详细信息详细信息详细信息详细信息详细信息详细信息详细信息详细信息'
/>
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
| description          | 元素的描述信息   | String \| ReactNode                                                              | -                      | -       |
| arrow         | 箭头      | Boolean \| ReactNode                                                               | `right`,`top`,`bottom` | -       |
| extra     | 额外信息   | String \| ReactNode                                                              | -                      | -       |
| prefix    | 前缀信息 | String                                                               | -                      | -       |
| ellipsis      | 超出省略 | Boolean                                                              | -                      | `false` |
| descriptionLayout   | 描述信息对齐方式       | String                                                         | `left`, `right`                            | `left` |

## AtListItem 事件

| 事件名称       | 说明                       | 返回参数 |
| -------------- | -------------------------- | -------- |
| onClick        | 用户点击元素触发的事件     | -        |
