# Taro UI

[![NPM][npm-version-image]][npm-version-url] [![NPM Downloads][npm-downloads-image]][npm-downloads-url] [![david-dm][david-dm-image]][david-dm-url] [![License][license-image]][license-url]

一款基于 `Taro` 框架开发的多端 UI 组件库

> Taro UI 3 目前仍在开发中，在 [`next`](https://github.com/NervJS/taro-ui/tree/next) 分支，已经支持到 Taro v3.0.0-alpha.3，如体验，安装命令 `npm i —save taro-ui@next`

## 特性

- 基于 `Taro` 开发 UI 组件
- 一套组件可以在 `微信小程序`，`支付宝小程序`，`百度小程序`，`H5` 多端适配运行（`ReactNative` 端暂不支持）
- 提供友好的 API，可灵活的使用组件

## 关于 Taro

Taro 是由 [凹凸实验室](https://aotu.io) 倾力打造的多端开发解决方案。现如今市面上端的形态多种多样，Web、ReactNative、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信小程序、H5、RN等）运行的代码。

## 体验

请使用微信扫一扫以下体验码

![QRCode](https://user-images.githubusercontent.com/1240899/46650700-25a4e600-cbd0-11e8-90ff-905edb39c340.jpg)

## 相关链接

- [Taro UI 使用文档](https://taro-ui.aotu.io)
- [Taro UI 官方示例](https://github.com/NervJS/taro-ui-demo)
- [Taro](https://taro.aotu.io/)
- [Taro 物料市场](https://taro-ext.jd.com)
- [Taro 论坛 Taro-UI 板块](https://taro-club.jd.com/category/11/taro-ui)

## 安装

需要安装 `Taro` 开发工具 `@tarojs/cli`，`Taro` 版本需要在 `1.0.0-beta.18` 以上

```bash
npm install -g @tarojs/cli
```

然后在项目中安装 Taro UI

```bash
npm install taro-ui
```

## 使用

在代码中 `import` 需要的组件并按照文档说明使用

```js
import { AtButton } from 'taro-ui'
```

## 开发交流

[官方微信交流群](https://github.com/NervJS/taro-ui/issues/16)

## 开发计划

[开发计划](./PLANS.md)

## 路线图

![Roadmap][roadmap-image]

## 贡献

如果你在使用 `Taro UI` 时遇到问题，或者有好的建议，欢迎给我们提 `Issue` 或 `Pull Request`。在开始之前，请阅读 [贡献指南](https://github.com/NervJS/taro-ui/blob/master/.github/CONTRIBUTING.md)

## License

MIT

[npm-version-image]: https://img.shields.io/npm/v/taro-ui.svg?style=flat-square
[npm-version-url]: https://www.npmjs.com/package/taro-ui
[npm-downloads-image]: https://img.shields.io/npm/dm/taro-ui?style=flat-square
[npm-downloads-url]: https://www.npmjs.com/package/taro-ui
[david-dm-image]: https://david-dm.org/NervJS/taro-ui.svg?style=flat-square
[david-dm-url]: https://david-dm.org/NervJS/taro-ui
[license-image]: https://img.shields.io/github/license/NervJS/taro-ui?style=flat-square
[license-url]: https://github.com/NervJS/taro-ui/blob/master/LICENSE
[roadmap-image]: ./docs/assets/taro-ui-roadmap.svg
