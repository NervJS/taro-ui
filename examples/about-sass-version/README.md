# 关于 sass 语法报错问题

SassError: Undefined operation: "calc($col / 12) times 100%".

```
$width: calc($col / 12) * 100%;
```

## 报错原因
由于 taro 底层升级 node sass 导致的

## 解决方案

方案一：降低 sass 版本

在 package.json 中添加如下配置
```
"resolutions": {
    "sass": "1.62.0"
 },
```

方案二：升级 taro 相关依赖

在 package.json 中批量替换 taro 相关依赖版本 v3.4.5 及以上版本
