# Button 按钮

---

按钮用于传递用户触摸时会触发的操作

以下文档指示例子，请根据具体组件编写

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import AtInput from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtInput name='value' title='标准五个字' type='text' placeholder='标准五个字' value={this.state.value} onChange={val => this.setState({'value':val})} />

```

:::

## 不同输入框类型

:::demo

```html
<AtInput title='文本' type='text' placeholder='单行文本' />
<AtInput title='数字' type='number' placeholder='请输入数字'/>
<AtInput title='密码' type='password' placeholder='密码不能少于10位数'/>
<AtInput title='身份证' type='idcard' placeholder='身份证号码' />
<AtInput title='小数' type='digit' placeholder='请输入小数' />
<AtInput title='手机号码' type='phone' placeholder='手机号码' />
```

:::

## 不同状态

:::demo

```html
<AtInput error title='出现错误' type='text' placeholder='点击按钮触发回调'/>
<AtInput editable={false} title='不可编辑' type='text' placeholder='不可编辑'/>
<AtInput clear title='清除按钮' type='text' placeholder='点击清除按钮清空内容' />
```

:::

## 自定义右边栏

:::demo

```html

<AtInput title='验证码' type='text' maxlength='4' clear placeholder='验证码' >
  <Image src={verificationCode} />
</AtInput>
```

:::

## Input 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| name       | 输入框的唯一标识，有传入点击title会聚焦输入框 | String  | - | - |
| type     | 输入框类型 | String | `text`,`number`,`password`,`phone`,`idcard`,`digit` | `text` |
| value | 输入框值 | String  | - | - |
| placeholder       | 占位符  | String  | - | - |
| title     | 输入框左侧标题，若传入为空，则不显示标题  | String | - | -  |
| maxlength       | 最大长度 | Number  | -  | 140      |
| disabled    | 是否禁止输入，禁止点击按钮  | Boolean | - | false    |
| editable     | 是否可编辑 | Boolean | - | True |
| error     | 是否出现错误 | Boolean | - | false |
| clear     | 是否显示清除按钮 | Boolean | - | false |
| autoFocus     | 是否自动聚焦 | Boolean | - | false |

## Input 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | 输入框值改变时触发的事件 | 输入框当前值value  |
| onFocus | 输入框被选中时触发的事件 | 输入框当前值value  |
| onBlur | 输入框失去焦点时触发的事件 | 输入框当前值value  |
| onErrorClick | 点击错误按钮触发的事件 | -  |
