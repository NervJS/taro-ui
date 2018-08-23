# Input 按钮

---

用于接受单行文本，支持文本、密码、数字、手机号码、银行卡等类型的输入。

用户可控制是否显示输入框标题，是否出现清除按钮，输入框状态，还可以自定义 Input 组件的右边栏，实现自定义按钮、验证码输入框等。

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtInput, AtForm } from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtInput
  name='value'
  title='标准五个字'
  type='text'
  placeholder='标准五个字'
  value={this.state.value}
  onChange={val => this.setState({'value':val})}
/>

```

:::

## 不同输入框类型

:::demo

```html
<AtForm>
  <AtInput
    name='value1'
    title='文本'
    type='text'
    placeholder='单行文本'
    value={this.state.value1}
    onChange={val => this.setState({'value1':val})}
  />
  <AtInput
    name='value2'
    title='数字'
    type='number'
    placeholder='请输入数字'
    value={this.state.value2}
    onChange={val => this.setState({'value2':val})}
  />
  <AtInput
    name='value3'
    title='密码'
    type='password'
    placeholder='密码不能少于10位数'
    value={this.state.value3}
    onChange={val => this.setState({'value3':val})}
  />
  <AtInput
    name='value4'
    title='身份证'
    type='idcard'
    placeholder='身份证号码'
    value={this.state.value4}
    onChange={val => this.setState({'value4':val})}
  />
  <AtInput
    name='value5'
    title='小数'
    type='digit'
    placeholder='请输入小数'
    value={this.state.value5}
    onChange={val => this.setState({'value5':val})}
  />
  <AtInput
    name='value6'
    border={false}
    title='手机号码'
    type='phone'
    placeholder='手机号码'
    value={this.state.value6}
    onChange={val => this.setState({'value6':val})}
  />
</AtForm>
```

:::

## 不同状态

:::demo

```html
<AtForm>
  <AtInput
    disabled
    title='禁用'
    type='text'
    placeholder='禁止输入'
    value={this.state.value1}
    onChange={val => this.setState({'value1':val})}
  />
  <AtInput
    error
    title='出现错误'
    type='text'
    placeholder='点击按钮触发回调'
    value={this.state.value2}
    onChange={val => this.setState({'value2':val})}
    onErrorClick={() => {console.log('error')}}
  />
  <AtInput
    editable={false}
    title='不可编辑'
    type='text'
    placeholder='不可编辑'
    value={this.state.value3}
    onChange={val => this.setState({'value3':val})}
  />
  <AtInput
    clear
    border={false}
    title='清除按钮'
    placeholder='点击清除按钮清空内容'
    type='text'
    value={this.state.value4}
    onChange={val => this.setState({'value4':val})}
  />
</AtForm>
```

:::

## 自定义右边栏

:::demo

```html

<AtInput
  clear
  title='验证码'
  type='text'
  maxlength='4'
  placeholder='验证码'
  value={this.state.value}
  onChange={val => this.setState({'value':val})}
>
  <Image src='https://aotu.io/img.png' />
</AtInput>
```

:::

## Input 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| name       | 输入框的唯一标识，有传入点击 title 会聚焦输入框 | String  | - | - |
| type     | 输入框类型 | String | `text`,`number`,`password`,`phone`,`idcard`,`digit` | `text` |
| value | 输入框值 | String  | - | - |
| placeholder | 占位符  | String  | - | - |
| title     | 输入框左侧标题，若传入为空，则不显示标题  | String | - | -  |
| maxlength | 最大长度 | Number  | -  | 140      |
| cursorSpacing | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离,只在微信小程序有效 | Number  | -  | 50      |
| confirmType | 设置键盘右下角按钮的文字,只在小程序有效| String | - | '完成' |
| disabled    | 是否禁止输入，禁止点击按钮  | Boolean | - | false    |
| border    | 是否显示下划线边框  | Boolean | - | true    |
| editable  | 是否可编辑 | Boolean | - | True |
| error     | 是否出现错误 | Boolean | - | false |
| clear     | 是否显示清除按钮 | Boolean | - | false |
| autoFocus     | 是否自动聚焦 | Boolean | - | false |

## Input 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | 输入框值改变时触发的事件 | 输入框当前值 value  |
| onFocus | 输入框被选中时触发的事件 | 输入框当前值 value  |
| onBlur | 输入框失去焦点时触发的事件 | 输入框当前值 value  |
| onConfirm | 点击完成按钮时触发 | 输入框当前值 value  |
| onErrorClick | 点击错误按钮触发的事件 | -  |
