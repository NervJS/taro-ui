# 自定义主题

----

Taro UI 目前只有一套默认的主题配色，为满足业务和品牌上多样化的视觉需求，UI 库支持一定程度的样式定制。目前自定义主题的功能还在开发中，如果您有修改组件样式的需求，可以通过以下方式进行修改：

- globalClass 全局样式类
- 配置 customStyle 属性（仅有部分组件支持，请查看组件文档）

## 全局样式类

全局样式类是微信小程序定义的一套用于修改组件内部样式的方案。如果希望组件外样式类能够影响组件内部，可以在组件构造器中的 `options.addGlobalClass` 字段设置为 true（Taro UI 的组件均开启了此特性）。这个特性从小程序基础库版本 `2.2.3` 开始支持。

**P.S. `addGlobalClass` 这个 API 只对 Page 上的 class 起作用。换言之，如果在自定义的组件中使用 `taro-ui`，是无法通过 `全局样式类` 的方式去更改组件样式的。**

> 当开放了全局样式类，存在外部样式无意间污染组件样式的风险。由于 Taro UI 的组件样式采用 BEM 的命名方式，从一定程度上避免了样式污染的问题。

:::demo
```js
/* CustomComp.js */
export default CustomComp extends Component {
  static options = {
    addGlobalClass: true
  }
  
  render () {
    return <View className="red-text">这段文本的颜色由组件外的 class 决定</View>
  }
}
```
:::

:::demo
```js
/* 组件外的样式定义 */
.red-text {
  color: red;
}
```
:::
