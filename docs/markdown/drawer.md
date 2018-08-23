# Drawer 抽屉

---

抽屉菜单

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtDrawer } from 'taro-ui'
```
:::

## 用法

:::demo
```html
<AtDrawer 
  show={this.state.show} 
  mask 
  onClose={this.onClose.bind(this)} 
  items={['菜单1', '菜单2']}
></AtDrawer>
```
:::

## 右边弹出

:::demo
```html
<AtDrawer 
  show={this.state.show} 
  right 
  mask 
  onClose={this.onClose.bind(this)} 
  items={['菜单1', '菜单2']}
></AtDrawer>
```
:::

## Drawer 参数

| 参数  | 说明           | 类型    | 可选值            | 默认值 |
|:------|:---------------|:--------|:------------------|:-------|
| show  | 展示或隐藏     | Boolean | -                 | false  |
| mask  | 是否需要遮罩   | Boolean | -                 | true   |
| width | 抽屉宽度       | String  | 合法的CSS宽度单位 | 230px  |
| right | 是否从右侧滑出 | Boolean | -                 | false  |
| items | 菜单列表       | Array   | -                 | -      |

## Drawer 事件

| 事件名称    | 说明                       | 返回参数          |
|:------------|:---------------------------|:------------------|
| onItemClick | 点击菜单时触发             | index（菜单序号） |
| onClose     | 动画结束组件关闭的时候触发 | -                 |
