# 快速上手

---

## 安装 Taro

安装 Taro 开发工具 @tarojs/cli

使用 npm 或者 yarn 全局安装，或者直接使用 [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

```bash
$ npm install -g @tarojs/cli
$ yarn global add @tarojs/cli
```

## 初始化项目

使用命令创建模板项目

```bash
$ taro init myApp
```

### 安装 Taro UI

```bash
$ cd myApp
$ npm i taro-ui
```

## 使用

在代码中 `import` 组件并按照文档说明进行使用

```js
import { AtInput } from 'taro-ui'
```

## 示例

在 `/myApp/src/pages/index/index.jsx` 文件添加以下代码

```jsx
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtInput, AtForm } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state = {
      inputValue: ''
    }
  }
  handleChange(value) {
    this.setState({ 'inputValue' : value })
  }
  render () {
    return (
      <View className='index'>
        <AtForm>
          <AtInput
            border={false}
            name='value'
            title='标准五个字'
            type='text'
            placeholder='标准五个字'
            value={this.state.inputValue}
            onChange={this.handleChange.bind(this)}
          />
        </AtForm>
      </View>
    )
  }
}
```

## 编译并预览

进入项目目录开始开发，可以选择小程序预览模式，或者 h5 预览模式，若使用微信小程序预览模式，则需要自行下载并打开微信开发者工具，选择预览项目根目录。

**微信小程序编译预览模式**

```bash
# npm script
$ npm run dev:weapp
# 仅限全局安装
$ taro build --type weapp --watch
# npx用户也可以使用
$ npx taro build --type weapp --watch
```

**H5编译预览模式**

```bash
# npm script
$ npm run dev:h5
# 仅限全局安装
$ taro build --type h5 --watch
# npx用户也可以使用
$ npx taro build --type h5 --watch
```
