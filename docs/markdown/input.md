# Button 按钮

---

按钮用于传递用户触摸时会触发的操作

以下文档指示例子，请根据具体组件编写

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import AtInput,AtForm from 'taro-ui'
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
<AtForm>
  <AtInput title='文本' type='text' placeholder='单行文本' value={this.state.value} onChange={val => this.setState({'value':val})} />
  <AtInput title='数字' type='number' placeholder='请输入数字'value={this.state.value} onChange={val => this.setState({'value':val})} />
  <AtInput title='密码' type='password' placeholder='密码不能少于10位数'value={this.state.value} onChange={val => this.setState({'value':val})} />
  <AtInput title='身份证' type='idcard' placeholder='身份证号码' value={this.state.value} onChange={val => this.setState({'value':val})} />
  <AtInput title='小数' type='digit' placeholder='请输入小数' value={this.state.value} onChange={val => this.setState({'value':val})} />
  <AtInput border={false} title='手机号码' type='phone' placeholder='手机号码' value={this.state.value} onChange={val => this.setState({'value':val})} />
</AtForm>
```

:::

## 不同状态

:::demo

```html
<AtForm>
  <AtInput error title='出现错误' type='text' placeholder='点击按钮触发回调' onErrorClick={() => {console.log('error')}} />
  <AtInput editable={false} title='不可编辑' type='text' placeholder='不可编辑'/>
  <AtInput border={false} clear title='清除按钮' type='text' placeholder='点击清除按钮清空内容' />
</AtForm>
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
| cursorSpacing       | 指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离,只在微信小程序有效 | Number  | -  | 50      |
| confirmType | 设置键盘右下角按钮的文字,只在小程序有效| String | - | '完成' |
| disabled    | 是否禁止输入，禁止点击按钮  | Boolean | - | false    |
| border    | 是否显示下划线边框  | Boolean | - | true    |
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
| onConfirm | 点击完成按钮时触发 | 输入框当前值value  |
| onErrorClick | 点击错误按钮触发的事件 | -  |
