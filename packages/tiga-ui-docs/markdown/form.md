# Form 表单组件

---
将组件内的用户输入的值提交。

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtForm } from 'tiga-ui'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~tiga-ui/dist/style/components/form.scss";
```
:::

## 一般用法 -- 水平布局

:::demo

```js
const Index = () => {
  const [form] = useForm()
  const onSubmit = () => {
    form
      .validateFields()
      .then(values => {
        console.log(values)
      }) // Do nothing about submit catch
      .catch(e => e)
  }

  return (
    <AtForm
      form={form}
      hasFeedback
      layout='horizontal'
      requiredMarkStyle='asterisk'
      footer={
        <AtButton
          formType='submit'
          type='primary'
          size='full'
          onClick={onSubmit}
        >
          提交
        </AtButton>
      }
    >
      <AtFormItem
        help
        name='name'
        label='姓名'
        rules={[{ required: true, message: '输入不能为空' }]}
      >
        <AtInput placeholder='请输入' />
      </AtFormItem>
      <AtFormItem
        help
        name='idcard'
        label='身份证号'
        extra='[ - ]'
        rules={[{ required: true, message: '输入不能为空' }]}
      >
        <AtInput placeholder='请输入' />
      </AtFormItem>
      <AtFormItem name='disabled' label='禁用' disabled>
        <AtInput placeholder='请输入' />
      </AtFormItem>
      <AtFormItem
        name='address'
        label='详细地址'
        rules={[{ required: true, message: '输入不能为空' }]}
      >
        <AtTextarea placeholder='请输入' />
      </AtFormItem>
    </AtForm>
  )

}

```

:::

## 一般用法 -- 垂直布局

:::demo

```js
const Index = () => {
  const [form] = useForm()
  const onSubmit = () => {
    form
      .validateFields()
      .then(values => {
        console.log(values)
      }) // Do nothing about submit catch
      .catch(e => e)
  }

  return (
    <AtForm
      hasFeedback
      form={form}
      layout='vertical'
      requiredMarkStyle='asterisk'
      footer={
        <AtButton
          formType='submit'
          type='primary'
          size='full'
          onClick={onSubmit}
        >
          提交
        </AtButton>
      }
    >
      <AtFormItem
        help
        name='subname'
        label='昵称'
        tail='操作'
        rules={[{ required: true, message: '输入不能为空' }]}
      >
        <AtInput placeholder='请输入' />
      </AtFormItem>
    </AtForm>
    <AtForm
      hasFeedback
      layout='vertical'
      requiredMarkStyle='asterisk'
    >
      <AtFormItem
        help
        name='remark'
        label='备注'
        tail='案列'
        rules={[{ required: true, message: '输入不能为空' }]}
      >
        <AtTextarea placeholder='请输入' />
      </AtFormItem>
    </AtForm>
  )

}

```

:::

## AtForm 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| name | 表单名  | string  | - | - |
| layout | 布局模式  | string  | `vertical`, `horizontal` | `horizontal` |
| hasFeedback | 是否展示错误反馈  | Boolean  | - | true |
| requiredMarkStyle | 必填选填的标记样式  | string  | `asterisk` | `asterisk` |
| footer | 表单底部  | ReactNode  | - | - |
| form | form 状态实例，由 `rc-field-form` 统一管理 | Object | - | - |


## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| 受控组件 | 表单的统一校验重置功能仍受控，后续对原始事件兼容 onsubmit 等兼容 | -  |

## AtFormItem 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| name | 字段名  | string  | - | - |
| label | 标签名  | string \| ReactNode  | - | - |
| description | 解释说明  | string \| ReactNode  | - | - |
| disabled | 禁用  | disabled  | - | - |
| help | 提示区  | boolean \| ReactNode  | - | false |
| hasFeedback | 是否展示错误反馈，配置则表单项单独控制  | boolean  | - | - |
| tail | 右侧操作区，只用于垂直布局模式  | string \| ReactNode  | - | - |
| extra | 额外内容  | string \| ReactNode  | - | - |
| arrow | 箭头  | boolean \| ReactNode  | - | - |
| required | 是否必选，默认 `false`（如有设置 `rules`，则会根据 `rules` 判断）  | boolean  | - | false |
| rules | 校验规则，设置字段的校验逻辑  | Rule[]  | - | - |

## Rule

Rule 支持接收 object 进行配置，也支持 function 来动态获取 form 的数据：

```tsx
type Rule = RuleConfig | ((form: FormInstance) => RuleConfig);
```

| 属性            | 说明                                                                                                                                | 类型                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| defaultField    | 仅在 `type` 为 `array` 类型时有效，用于指定数组元素的校验规则                                                                       | `rule`                     |
| enum            | 是否匹配枚举中的值（需要将 `type` 设置为 `enum`）                                                                                   | `any[]`                    |
| len             | string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度                                                         | `number`                   |
| max             | 必须设置 `type`：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度                                     | `number`                   |
| message         | 错误信息，不设置时会通过[模板](#validatemessages)自动生成                                                                           | `string`                   |
| min             | 必须设置 `type`：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度                                     | `number`                   |
| pattern         | 正则表达式匹配                                                                                                                      | `RegExp`                   |
| required        | 是否为必选字段                                                                                                                      | `boolean`                  |
| transform       | 将字段值转换成目标值后进行校验                                                                                                      | `(value) => any`           |
| type            | 类型，常见有 `string` \|`number` \|`boolean` \|`url` \| `email`。更多请参考[此处](https://github.com/yiminghe/async-validator#type) | `string`                   |
| validateTrigger | 设置触发验证时机，必须是 Form.Item 的 `validateTrigger` 的子集                                                                      | `string | string[] `      |
| validator       | 自定义校验，接收 Promise 作为返回值。[示例](#自定义表单字段)参考                                                                    | `(rule, value) => Promise` |
| warningOnly     | 仅警告，不阻塞表单提交                                                                                                              | `boolean`                  |
| whitespace      | 如果字段仅包含空格则校验不通过，只在 `type: 'string'` 时生效                                                                        | `boolean`                  |

