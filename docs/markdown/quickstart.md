# 快速上手

---

## 安装 Taro

安装 `Taro` 开发工具 `@tarojs/cli`

使用 `npm` 或者 `yarn` 全局安装，或者直接使用 [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

:::demo
```bash
$ npm install -g @tarojs/cli
$ yarn global add @tarojs/cli
```
:::

## 初始化项目

使用命令创建模板项目

:::demo
```bash
$ taro init myApp
```
:::

## 安装 Taro UI

:::demo
```bash
$ cd myApp
$ npm install taro-ui
# 或者使用自定义主题版本
$ npm install taro-ui@next
```
:::

## 配置需要额外编译的源码模块

**由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：**

:::demo
```js
h5: {
  esnextModules: ['taro-ui']
}
```
:::

## 使用基础版本

在代码中 `import` 需要的组件并按照文档说明使用

:::demo
```js
import { AtButton } from 'taro-ui'
```
:::

## 使用自定义主题版本（v2.0.0+）

在代码中 `import` 需要的组件并按照文档说明使用

:::demo
```js
import { AtButton } from 'taro-ui'
import '~taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
```
:::

或者在样式代码中 `import` 组件样式并按照文档说明使用

:::demo
```scss
@import "~taro-ui/dist/style/index.scss"; // 引入组件样式 - 方式二
```
:::

或者在样式代码中 `import` 需要的组件样式

:::demo
```scss
@import "~taro-ui/dist/style/components/button.scss"; // 引入所需的组件样式 - 方式三
```
:::

> [组件样式列表](https://github.com/NervJS/taro-ui/tree/next/src/style/components)

## 示例

在 `/myApp/src/pages/index/index.jsx` 文件添加以下代码

:::demo
```jsx
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.scss'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  
  render () {
    return (
      <View className='index'>
         <AtButton type='primary'>按钮文案</AtButton>
      </View>
    )
  }
}
```
:::

在 `/myApp/src/pages/index/index.scss` 文件中添加如下代码（仅在 v2.0.0+ 版本中需要手动引入）

:::demo
```scss
@import "~taro-ui/dist/style/index.scss"; // 引入组件样式
```
:::

## 按需引入（仅支持版本v2.0.0+）

如果你只希望引入部分组件，比如 Button，那么可以只 `@import` 需要的样式文件

:::demo
```scss
@import "~taro-ui/dist/style/components/button.scss";
```
:::

## 编译并预览

进入项目目录开始开发，可以选择小程序预览模式，或者 h5 预览模式，若使用微信小程序预览模式，则需要自行下载并打开微信开发者工具，选择预览项目根目录。

**微信小程序编译预览模式**

:::demo
```bash
# npm script
$ npm run dev:weapp
# 仅限全局安装
$ taro build --type weapp --watch
# npx用户也可以使用
$ npx taro build --type weapp --watch
```
:::

**支付宝小程序编译预览模式（仅支持版本v2.0.0+）**

:::demo
```bash
# npm script
$ npm run dev:alipay
# 仅限全局安装
$ taro build --type alipay --watch
# npx 用户也可以使用
$ npx taro build --type alipay --watch
```
:::

**H5 编译预览模式**

:::demo
```bash
# npm script
$ npm run dev:h5
# 仅限全局安装
$ taro build --type h5 --watch
# npx 用户也可以使用
$ npx taro build --type h5 --watch
```
:::
