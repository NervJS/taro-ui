# Flex 弹性布局

---

基于 `Flex Box` 布局封装的组件，可以帮助使用者方便、快捷的构建弹性布局

## 使用指南

由于小程序的限制 `Flex` 组件只能通过样式来完成，需要在 `app.js` 上添加以下这段代码

> 由于 `app.js` 添加的样式文件 在小程序上只能影响 `page` 样式,不能影响 `component` 的样式，所以在 `component` 的时候你可能需要再次引入

:::demo

```js
if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}
```

:::

## 一般用法

:::demo

```html
<View className='at-row'>
  <View className='at-col'>A</View>
  <View className='at-col'>B</View>
  <View className='at-col'>C</View>
</View>
```

:::

## 使用栅格化（长度）

:::demo

```html
<View className='at-row'>
  <View className='at-col at-col-3'>A</View>
  <View className='at-col at-col-6'>B</View>
  <View className='at-col at-col-2'>C</View>
  <View className='at-col at-col-1'>D</View>
</View>
```

:::

## 使用栅格化（偏移）

:::demo

```html
<View className='at-row'>
  <View className='at-col at-col__offset-2'>
    A
  </View>
  <View className='at-col at-col__offset-3'>
    B
  </View>
  <View className='at-col'>C</View>
</View>
```

:::

## 超出换行

:::demo

```html
<View className='at-row at-row--wrap'>
  <View className='at-col at-col-4'>A</View>
  <View className='at-col at-col-4'>B</View>
  <View className='at-col at-col-4'>C</View>
  <View className='at-col at-col-4'>D</View>
  <View className='at-col at-col-4'>E</View>
</View>
```

:::

## 宽度根据内容撑开

:::demo

```html
<View className='at-row'>
  <View className='at-col at-col-1 at-col--auto'>
    被内容撑开
  </View>
  <View className='at-col'>B</View>
</View>
```

:::

## 内容自动换行

:::demo

```html
<View className='at-row'>
  <View className='at-col at-col-1 at-col--wrap'>
    内容自动换行
  </View>
  <View className='at-col'>B</View>
</View>
```

:::

## 侧轴方向的对齐方式

:::demo

```html
<View className='at-row'>
  <View style='height:100px' className='at-col'>A</View>
  <View className='at-col'>默认对齐方式 -- stretch</View>
</View>
<View className='at-row at-row__align--start'>
  <View style='height:100px' className='at-col'>B</View>
  <View className='at-col'>顶部对齐 -- start</View>
</View>
<View className='at-row at-row__align--center'>
  <View style='height:100px' className='at-col'>C</View>
  <View className='at-col'>居中对齐 -- center</View>
</View>
<View className='at-row at-row__align--end'>
  <View style='height:100px' className='at-col'>D</View>
  <View className='at-col'>底部对齐 -- end</View>
</View>
```

:::

## 主轴方向的排列方式

:::demo

```html
<View className='at-row'>
  <View className='at-col at-col-5'>默认</View>
  <View className='at-col at-col-5'>Start</View>
</View>
<View className='at-row at-row__justify--end'>
  <View className='at-col at-col-5'>底部排列</View>
  <View className='at-col at-col-5'>End</View>
</View>
<View className='at-row at-row__justify--center'>
  <View className='at-col at-col-5'>居中排列</View>
  <View className='at-col at-col-5'>Center</View>
</View>
<View className='at-row at-row__justify--between'>
  <View className='at-col at-col-5'>左右排列</View>
  <View className='at-col at-col-5'>Between</View>
</View>
<View className='at-row at-row__justify--around'>
  <View className='at-col at-col-5'>平均排列</View>
  <View className='at-col at-col-5'>Around</View>
</View>
```
:::
