# Switch 开关组件

---
开关组件，在两个互斥对象进行选择

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtForm, AtSwitch } from 'tiga-ui'
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~tiga-ui/dist/style/components/switch.scss";
```
:::

## 一般用法

:::demo

```js
import Taro from '@tarojs/taro'
import { AtForm, AtSwitch }  from 'tiga-ui'

<AtSwitch />
```

:::

## 默认选中

:::demo

```js
<AtSwitch checked />
```

:::

:::

## 自定义样式

说明：

* RN 用可用字段调整样式，其他端可使用 css 覆盖的方式重写样式。

:::demo

```js
<View className='panel__title'>调整样式</View>
  <View className='panel__content'>
    <View className='example-item'>
      <AtSwitch color='#04be02' />
    </View>
    {Taro.getEnv() === 'RN' && (
      <View className='example-item'>
        <AtSwitch
          duration={350}
          switchWidth={80}
          switchPadding={1}
          buttonWidth={35}
          buttonColor='yellow'
          backgroundColor='#e9e9e9'
        />
      </View>
    )}
  </View>
```

:::

## 禁用

:::demo

```js
<AtSwitch disabled />
<AtSwitch checked disabled />
```

:::

## 与表单结合

:::demo

```js
<View className='panel__content'>
  <View className='example-item'>
    <AtForm>
      <AtFormItem name='activity1' label='活动1开启'>
        <AtSwitch />
      </AtFormItem>
    </AtForm>
  </View>
  <View className='example-item'>
    <AtForm
      layout='horizontal'
      form={form}
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
        name='activity2'
        label={<View style={{ fontSize: 16, lineHeight: 31 }}>活动2开启</View>}
      >
        <AtSwitch />
      </AtFormItem>
    </AtForm>
  </View>
</View>
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| color | 选中时的背景颜色 $color-brand  | String  | - | `#ff4d13` |
| checked     | 是否显示开启  | Boolean | - | false |
| disabled     | 是否禁止点击  | Boolean | - | false |
| backgroundColor     | 背景颜色 $color-border-heavie，仅支持rn，其他端使用类改样式  | string | - | `#e0e0e0` |
| duration     | 切换动画的时长，仅支持rn，其他端使用类改样式  | number | - | `200` |
| switchWidth     | 宽度，仅支持rn，其他端使用类改样式  | number | - | `51` |
| switchPadding     | 内边距，仅支持rn，其他端使用类改样式  | number | - | `2` |
| buttonWidth     | 按钮的宽度，仅支持rn，其他端使用类改样式  | number | - | `27` |
| buttonColor     | 按钮的颜色，仅支持rn，其他端使用类改样式  | string | - | `#fff` |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | 输入框值改变时触发的事件 | 当前值 value  |
