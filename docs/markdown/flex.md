# Flex 弹性布局

---

基于 `Flex Box` 布局封装的组件，可以帮助使用者方便、快捷的构建弹性布局

## 使用指南

由于小程序的限制 `Flex` 组件只能通过样式来完成,需要在 `app.js` 上添加以下这段代码

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
<View className='at-flex'>
  <View className='at-flex__item'>A</View>
  <View className='at-flex__item'>B</View>
  <View className='at-flex__item'>C</View>
</View>
```

:::

## 使用栅格化（长度）

:::demo

```html
<View className='at-flex'>
  <View className='at-flex__item at-flex__item-size--3'>A</View>
  <View className='at-flex__item at-flex__item-size--6'>B</View>
  <View className='at-flex__item at-flex__item-size--2'>C</View>
  <View className='at-flex__item at-flex__item-size--1'>D</View>
</View>
```

:::

## 使用栅格化（偏移）

:::demo

```html
<View className='at-flex'>
  <View className='at-flex__item at-flex__item-offset--2'>
    A
  </View>
  <View className='at-flex__item at-flex__item-offset--3'>
    B
  </View>
  <View className='at-flex__item'>C</View>
</View>
```

:::

## 超出换行

:::demo

```html
<View className='at-flex at-flex__wrap--wrap'>
  <View className='at-flex__item at-flex__item-size--4'>A</View>
  <View className='at-flex__item at-flex__item-size--4'>B</View>
  <View className='at-flex__item at-flex__item-size--4'>C</View>
  <View className='at-flex__item at-flex__item-size--4'>D</View>
  <View className='at-flex__item at-flex__item-size--4'>E</View>
</View>
```

:::

## 宽度根据内容撑开

:::demo

```html
<View className='at-flex'>
  <View className='at-flex__item at-flex__item-size--1 at-flex__item--auto'>
    被内容撑开
  </View>
  <View className='at-flex__item'>B</View>
</View>
```

:::

## 内容自动换行

:::demo

```html
<View className='at-flex'>
  <View className='at-flex__item at-flex__item-size--1 at-flex__item--wrap'>
    被内容撑开
  </View>
  <View className='at-flex__item'>B</View>
</View>
```

:::

## 侧轴方向的对齐方式

:::demo

```html
<View className='at-flex'>
  <View style='height:100px' className='at-flex__item'>A</View>
  <View className='at-flex__item'>默认对齐方式 -- stretch</View>
</View>
<View className='at-flex at-flex__align--start'>
  <View style='height:100px' className='at-flex__item'>B</View>
  <View className='at-flex__item'>顶部对齐 -- start</View>
</View>
<View className='at-flex at-flex__align--center'>
  <View style='height:100px' className='at-flex__item'>C</View>
  <View className='at-flex__item'>居中对齐 -- center</View>
</View>
<View className='at-flex at-flex__align--end'>
  <View style='height:100px' className='at-flex__item'>D</View>
  <View className='at-flex__item'>底部对齐 -- end</View>
</View>
```

:::

## 主轴方向的排列方式

:::demo

```html
<View className='at-flex'>
  <View className='at-flex__item at-flex__item-size--5'>默认</View>
  <View className='at-flex__item at-flex__item-size--5'>Start</View>
</View>
<View className='at-flex at-flex__justify--end'>
  <View className='at-flex__item at-flex__item-size--5'>底部排列</View>
  <View className='at-flex__item at-flex__item-size--5'>End</View>
</View>
<View className='at-flex at-flex__justify--center'>
  <View className='at-flex__item at-flex__item-size--5'>居中排列</View>
  <View className='at-flex__item at-flex__item-size--5'>Center</View>
</View>
<View className='at-flex at-flex__justify--between'>
  <View className='at-flex__item at-flex__item-size--5'>左右排列</View>
  <View className='at-flex__item at-flex__item-size--5'>Between</View>
</View>
<View className='at-flex at-flex__justify--around'>
  <View className='at-flex__item at-flex__item-size--5'>平均排列</View>
  <View className='at-flex__item at-flex__item-size--5'>Around</View>
</View>
```

:::
