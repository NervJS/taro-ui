---
imports:
  import IconList from '../components/iconlist/index.jsx'
---
# Icon 图标

---

用于展示 ICON。该组件的 ICON 图形基于 Webfont，因此可任意放大、改变颜色。

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtIcon } from 'taro-ui'
```

:::

## 一般用法

:::demo

```html
<AtIcon value='clock' size='30' color='#F00'></AtIcon>
```

:::

## 使用第三方字体图标库

### 步骤一：配置 postcss 小程序端样式引用本地资源内联

:::demo

```js
/* config/dev.js */
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {
    module: {
      postcss: {
        // 小程序端样式引用本地资源内联
        url: {
          enable: true,
          limit: 102400000000
        }
      }
    }
  },
  h5: {}
}

/* config/prod.js */
module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  weapp: {
    module: {
      postcss: {
        // 小程序端样式引用本地资源内联
        url: {
          enable: true,
          limit: 102400000000
        }
      }
    }
  },
  h5: {}
}
```

:::

### 步骤二：编写字体图标库 css

:::demo

```css
/* icon.scss */
@font-face {
  font-family: 'FontAwesome';
  src: url('./assets/fonts/fontawesome-webfont.eot?v=4.7.0');
  src: url('./assets/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('./assets/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('./assets/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fa-clock:before {
  content: "\f00c";
}
```

:::

### 步骤三：在 app.js 全局引入 icon.scss

:::demo

```js
/* app.js */
import './icon.scss'
```

:::

### 步骤四：在 `设置-项目设置-调试基础库` 设置版本 `2.2.3` 以上


### 步骤五：使用 `AtIcon`

:::demo

```js
<AtIcon prefixClass='fa' value='clock' size='30' color='#F00'></AtIcon>
```

:::



## Icon 参数

| 参数  | 说明     | 类型   | 可选值                | 默认值 |
|:------|:---------|:-------|:----------------------|:-------|
| prefixClass | className 前缀，用于第三方字体图标库，比如想使用'fa fa-clock' 的图标，则 传入`prefixClass='fa' value='clock'` | String | - | 'at-icon' |
| value | 图标图案 | String | 参考下表              | -      |
| size  | 图标大小 | String | 大于10的整数          | 24     |
| color | 图标颜色 | String | 可被CSS支持的颜色单位 | -      |

## 图标示例

### 主要
<IconList type='main'></IconList>

### 文件
<IconList type='file'></IconList>

### 文本
<IconList type='text'></IconList>

### 箭头
<IconList type='arrow'></IconList>

### 媒体控制
<IconList type='media'></IconList>

### 多媒体
<IconList type='photo'></IconList>

### Logo
<IconList type='logo'></IconList>
