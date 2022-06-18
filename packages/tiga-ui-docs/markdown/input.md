# Input 输入框

---

用于接受单行文本

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtInput } from 'tiga-ui'
```

:::

**组件依赖的样式文件（仅按需引用时需要）**


:::demo

```scss
@import '~tiga-ui/dist/style/components/input.scss';
```

:::

## 用法


  

**单独使用**
:::demo
```html
<AtInput title="标题" placeholder="请输入" />
```
:::
**表单使用（推荐）** 

##### 说明：inpu在表单内元素的布局和自定义具有更好适配性,推荐使用通过AtFormItem 的help，extra属性自定义个性化配置
:::demo
```html
<AtForm
  form={form}
  hasFeedback
  layout='horizontal'
  requiredMarkStyle='asterisk'
>
  <AtFormItem name='base' label='标题'>
    <AtInput
      placeholder='请输入'
      onChange={handleInput}
    />
  </AtFormItem>
</AtForm>
```

:::

## 事件
##### 说明：单独使用时通过onChange事件获取值 ，表单使用时通过form的onSubmit事件获取对应值
:::demo
```html
<AtInput title="单独用" placeholder="请输入" onChange="{handleInput}" />
```

:::

## Input 参数

| 参数     | 说明         | 类型    | 可选值        | 默认值 |
| -------- | ------------ | ------- | ------------- | ------ |
| value     | 输入框当前值，开发者通过onChange事件来更新value值     | String  | - |
| title    | 标题区内容     | String  | -             | -      |
| placeholder    | 占位符     | String  | -             | -      |
| maxLength  | 最大长度| number | -             | -  |
| clearable    | 是否可清除     | Boolean  | -             | false    |
| required   | 是否为必填| Boolean | -             | false  |
| disabled | 是否为禁用态 | Boolean | -             | false  |
| prefix    | 标题区右侧符号插槽     | ReactDOM  | -             | -      |
| iconName    | 右区自定义icon AtIcon的name     | String  | -             | -      |
| iconSize    | 右区自定义icon size  | Number  | -             | -      |
| iconColor    | 右区自定义icon color    | String  | -             | -      |
| buttonTxt    | 右区自定义按钮文案     | String  | -             | -      |
| buttonDisabled    | 右区自定义按钮禁用状态     | Boolean  | -             | false      |


## Input 事件

| 事件名称 | 说明                               | 返回参数     |
| -------- | ---------------------------------- | ------------ |
| onChange  | 输入框数值变化时触发 | (value,event) => void |
| onBlur  | 输入框失焦事件| (event) => void |
| onFocus  | 输入框聚焦事件 | (event) => void |
| onClick  | 如果使用buttonTxt配置自定义按钮 此事件可触发按钮事件 | -

# InputGroup 输入组

---

用于展示一组输入框，可配置label和input数量。

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtInputGroup } from 'tiga-ui'
```

:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo

```scss
@import '~tiga-ui/dist/style/components/input.scss';
```

:::

## 用法

:::demo
**单独使用**
```html
  <AtInputGroup data={groupConfig} onChange={handleInput} />
```

:::


**表单使用（推荐）** 
:::demo
```html

const GROUPCONFIG = [
  { value: '', label: '室' },
  { value: '', label: '厅' },
  { value: '', label: '卫' }
]

<AtForm
  form={form}
  hasFeedback
  layout='horizontal'
  requiredMarkStyle='asterisk'
>
  <AtFormItem name='base' label='标题'>
    <AtInputGroup data={GROUPCONFIG} onChange={handleInput} />
  </AtFormItem>
</AtForm>
```

:::

## InputGroup 参数

| 参数     | 说明           | 类型    | 可选值        | 默认值 |
| -------- | -------------- | ------- | ------------- | ------ |
| data     | 输入组配置，必填项, 渲染输入组 子元素对象属性为value，label   | Array | - | - |
| disabled | 是否为禁用态   | Boolean | -             | false  |
| title     | 单独使用时 自配置标题（表单组忽略）    | string | -             | -   |

## InputGroup 事件

| 事件名称 | 说明                               | 返回参数     |
| -------- | ---------------------------------- | ------------ |
| onChange  |  输入框数值变化时触发 | value  |
