# Taro UI

## 开发引导

### 目录结构

```tree
.
├── config  # Taro 项目配置
│   ├── dev.js
│   ├── index.js
│   └── prod.js
├── dist # Taro 部署目录
├── src # 开发目录
│   ├── components # Taro UI 组件
│   │   ├── activity-indicator
│   │   │   ├── index.js
│   │   │   └── index.scss
│   │   └── modal
│   │       ├── index.js
│   │       └── index.scss
│   ├── pages # Taro UI 页面 用于演示
│   │   ├── action # 触摸反馈 演示页面
│   │   │   ├── action-sheet
│   │   │   │   ├── index.js
│   │   │   │   └── index.scss
│   │   │   ├── activity-indicator
│   │   │   │   ├── index.js
│   │   │   │   └── index.scss
│   │   │   ├── modal
│   │   │   │   ├── index.js
│   │   │   │   └── index.scss
│   │   │   ├── progress
│   │   │   │   ├── index.js
│   │   │   │   └── index.scss
│   │   │   └── toast
│   │   │       ├── index.js
│   │   │       └── index.scss
│   │   └── index # 入口页面
│   │       ├── index.js
│   │       └── index.scss
│   ├── style # Taro UI 公用SCSS文件
│   │   ├── global.scss # Taro UI 全局样式
│   │   ├── mixins.scss
│   │   └── variables.scss
│   ├── theme # 主题包
│   │   ├── assertive.scss
│   │   └── balance.scss
│   ├── app.js # 入口文件
│   ├── app.scss # 演示页面的全局变量
│   └── index.html
├── LICENSE
├── README.md
├── gulpfile.js
├── package.json
├── project.config.json
```

### 一些规范

- 组件的 CSS 命名统一使用 `${block-name}__${element-name}--${modifier-name}`,`Taro UI` 组件需要加上 `at-` 的前缀
- 按照预期 只要执行 `gulpfile` 文件里 `theme`就可以生成需要的主题文件,`sass`用于处理 Taro 项目下无法编译出 css 文件的问题
- 为了避免组件与基础组件冲突 组件的名称也需要加上 `At` 前缀
