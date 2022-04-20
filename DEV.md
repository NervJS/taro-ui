# Tiga UI 开发

## 组件库
### 起步
```
yarn // or npm install
```
```
# 组件库与 demo 连接，lerna 对 packages 进行 symlink
lerna bootstrap
```

### 组件开发
```
cd packages/tiga-ui
yarn dev:rollup // 开发 watch 模式编译文件，方便调试
```

### 组件发布
```
lerna publish --force-publish --registry http://ires.58corp.com/repository/npm/ --no-git-tag-version --no-push
```

## demo 开发调试
### 小程序
```
cd packages/tiga-ui-demo
yarn dev:weapp
```
用小程序开发者工具打开 `dist` 目录

### H5
```
cd packages/tiga-ui-demo
yarn dev:h5
```

### React Native
#### 启动本地 server
```
cd packages/tiga-ui-demo
yarn dev:rn // or yarn dev:rn --reset-cache
```

#### 壳
注意 React Native 版本需要保持一致

##### 自定义安装壳子
下载官方壳应用(NervJS/taro-native-shell)[https://github.com/NervJS/taro-native-shell] 选择与 tiga-ui react-native 版本一致的分支

##### 使用发布商店 App 壳子
<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvzhk2732kj30fu0u0aax.jpg" width="300px" />

> 输入本机 IP 或者扫码 `taro://**`

Tips: RN demo 开发，更改组件 style 样式，需要更改一下 packages/tiga-ui-demo/src/app.scss 触发一下样式重编。
