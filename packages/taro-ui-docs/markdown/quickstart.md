# 快速上手

---

## 使用前准备

在使用之前，推荐学习 `Taro` 和 `ES2015`，并正确配置 `Node.js` v8.x 或以上版本

## 如何使用

### 1. 安装 Taro 脚手架工具

安装 `Taro` 开发工具 `@tarojs/cli`

使用 `npm` 或者 `yarn` 全局安装，或者直接使用 [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

:::demo
```bash
$ npm install -g @tarojs/cli
$ yarn global add @tarojs/cli
```
:::

### 2. 初始化项目

使用命令创建模板项目

:::demo
```bash
$ taro init myApp
```
:::

### 3. 安装 Taro UI

:::demo
```bash
$ cd myApp
$ npm install taro-ui
```
:::

**P.S.因为要支持自定义主题功能，需要将样式从组件中抽离出来，在微信小程序中依赖 globalClass 功能，所以需要微信基础库版本在 v2.2.3 以上。**

#### 配置需要额外编译的源码模块

<p style="color: #f00;">由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：</p>

:::demo
```js
h5: {
  esnextModules: ['taro-ui']
}
```
:::

### 4. 使用 Taro UI

#### 通过 babel 插件按需引入组件

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

```bash
# 安装插件
npm i babel-plugin-import -D
```

在.babelrc 或 babel.config.js 中添加配置：

```js
{
  "plugins": [
    [
      'import',
      {
        libraryName: 'taro-ui',
        customName: name => `taro-ui/lib/components/${name.slice(3)}`,
        customStyleName: name => `taro-ui/dist/style/components/${name.slice(3)}.scss`
      },
      'taro-ui'
    ]
  ]
}
```

接着你可以在代码中直接引入组件，插件会自动将代码转化为按需引入的形式。

```js
// 原始代码
import { AtButton } from 'taro-ui'

// 编译后代码
import AtButton from 'taro-ui/lib/components/button'
import 'taro-ui/dist/style/components/button.scss'
```

#### 引入所需组件

在代码中 `import` 需要的组件并按照文档说明使用

:::demo
```js
// page.js
import { AtButton } from 'taro-ui'

// 除了引入所需的组件，还需要手动引入组件样式
// app.js
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
```
:::

**引入组件样式的三种方式**

- **全局引入（JS中）：** 在入口文件中引入 `taro-ui` 所有的样式
:::demo
```js
import 'taro-ui/dist/style/index.scss' // 引入组件样式 - 方式一
```
:::

- **全局引入（CSS中）：** 在 `app.scss` 样式文件中 `import` 组件样式并按照文档说明使用
:::demo
```scss
@import "~taro-ui/dist/style/index.scss"; // 引入组件样式 - 方式二
```
:::

- **按需引入：** 在页面样式或全局样式中 `import` 需要的组件样式
:::demo
```scss
@import "~taro-ui/dist/style/components/button.scss"; // 引入所需的组件样式 - 方式三
```
:::

> 具体的组件样式文件请查看 [组件样式列表](https://github.com/NervJS/taro-ui/tree/dev/src/style/components)

## 示例

在 `/myApp/src/pages/index/index.tsx` 文件添加以下代码

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

在 `/myApp/src/app.scss` 文件中添加如下代码

:::demo
```scss
@import "~taro-ui/dist/style/index.scss"; // 引入组件样式，仅需引入一次即可
```
:::

## 按需引入

如果你只希望引入部分组件，比如 Button，那么可以只 `@import` 需要的样式文件

:::demo
```scss
@import "~taro-ui/dist/style/components/button.scss";
```
:::

## 编译并预览

进入项目目录开始开发，可以选择小程序预览模式，或者 h5 预览模式，若使用小程序预览模式，则需要自行下载并打开对应的小程序开发者工具，并选择预览项目根目录。

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

**支付宝小程序编译预览模式**

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

**百度小程序编译预览模式**

:::demo
```bash
# npm script
$ npm run dev:swan
# 仅限全局安装
$ taro build --type swan --watch
# npx 用户也可以使用
$ npx taro build --type swan --watch
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
