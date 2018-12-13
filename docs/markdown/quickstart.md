# 快速上手

---

## 安装 Taro

安装 `Taro` 开发工具 `@tarojs/cli`，`Taro` 版本需要在 `1.1.0` 以上

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

### 安装 Taro UI

:::demo
```bash
$ cd myApp
$ npm install taro-ui
```
:::

## 使用

在代码中 `import` 需要的组件并按照文档说明使用

:::demo
```js
import { AtButton } from 'taro-ui'
```
:::

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

**H5 编译预览模式**

:::demo
```bash
# npm script
$ npm run dev:h5
# 仅限全局安装
$ taro build --type h5 --watch
# npx用户也可以使用
$ npx taro build --type h5 --watch
```
:::
