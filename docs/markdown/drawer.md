# Drawer 抽屉

---

抽屉菜单

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtDrawer } from "taro-ui";
```

:::

需要在组件类中初始化状态值 show 和 onClose() 事件:

```js
import Taro, { Component } from "@tarojs/taro";
import { AtDrawer } from "taro-ui";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: false
    };
  }

  onClose() {
    this.setState({ show: false });
  }
}
```

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

## 完整实例

:::demo

需要在组件类中定义好状态 show 和 onClose() 事件:

```js
import Taro, { Component } from "@tarojs/taro";
import { AtDrawer,AtButton } from "taro-ui";

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: false
    };
  }

  handleDrawerClick() {
    this.setState({ show: true });
  }

  onClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <AtDrawer
        show={this.state.show}
        mask
        onClose={this.onClose.bind(this)}
        items={["菜单1", "菜单2"]}
      />
      <AtButton
        onClick= ={this.handleDrawerClick.bind(this)}> 显示Drawer
      </AtButton>
    );
  }
}
```

## Drawer 参数

| 参数  | 说明           | 类型    | 可选值              | 默认值 |
| :---- | :------------- | :------ | :------------------ | :----- |
| show  | 展示或隐藏     | Boolean | -                   | false  |
| mask  | 是否需要遮罩   | Boolean | -                   | true   |
| width | 抽屉宽度       | String  | 合法的 CSS 宽度单位 | 230px  |
| right | 是否从右侧滑出 | Boolean | -                   | false  |
| items | 菜单列表       | Array   | -                   | -      |

## Drawer 事件

| 事件名称    | 说明                       | 返回参数          |
| :---------- | :------------------------- | :---------------- |
| onItemClick | 点击菜单时触发             | index（菜单序号） |
| onClose     | 动画结束组件关闭的时候触发 | -                 |
