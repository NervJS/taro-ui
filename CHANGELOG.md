<a name="2.2.3"></a>
## [2.2.3](https://github.com/nervjs/taro-ui/compare/v2.2.2...v2.2.3) (2019-10-15)


### Bug Fixes

* **tab-bar** 修复 tab-bar min-height 样式书写错误 ([#769](https://github.com/NervJS/taro-ui/pull/769)) ([b00c0ee](https://github.com/NervJS/taro-ui/commit/b00c0ee))
* **countdown** 修复 CountDown 类型文件缺少 isShowHour 的问题 ([f03975a](https://github.com/NervJS/taro-ui/commit/f03975a))
* **searchbar** 修复 H5，组件 AtSearchBar，属性 focus=true 时，ios 键盘收缩不了 ([#356](https://github.com/NervJS/taro-ui/issues/356)) ([b9e48b5](https://github.com/NervJS/taro-ui/commit/b9e48b5))
* **form** 修复 AtForm onSubmit 在 H5 中无效，但小程序有效 ([#375](https://github.com/NervJS/taro-ui/issues/375)) ([#380](https://github.com/NervJS/taro-ui/issues/380)) ([461e311](https://github.com/NervJS/taro-ui/commit/461e311))
* **swipeAction** 修复 SwipeAction 组件滑动的时候没有屏蔽屏幕局上下滑动 ([#306](https://github.com/NervJS/taro-ui/issues/306)) ([36d6f59](https://github.com/NervJS/taro-ui/commit/36d6f59))
* **swipeAction** 移除 swiperAction move 事件 阻止冒泡逻辑 ([7a93a3e](https://github.com/NervJS/taro-ui/commit/7a93a3e))
* **list** 修复 List extraText 值为 0 时的显示问题 ([#641](https://github.com/NervJS/taro-ui/issues/641)) ([2f25266](https://github.com/NervJS/taro-ui/commit/2f25266))
* **searchBar** 修复 ActionButton 隐藏时搜索框右侧多出 10 像素边距的问题 ([#794](https://github.com/NervJS/taro-ui/issues/794)) ([98ab30c](https://github.com/NervJS/taro-ui/commit/98ab30c))
* **modal** 修复 H5 环境下，AtModal 组件传入 ‘content’ 字符串里存在 ‘\n’ 之类的，不能实现想得到效果 ([#554](https://github.com/NervJS/taro-ui/issues/554)) ([a781f27](https://github.com/NervJS/taro-ui/commit/a781f27))
* **indexes** 多次点击会滚动多余的距离 ([f895852](https://github.com/NervJS/taro-ui/commit/f895852))
* **indexes** atindexes 滚动不精准 ([86469e3](https://github.com/NervJS/taro-ui/commit/86469e3))
* **range** Range 组件设置 min, max 属性异常 ([#670](https://github.com/NervJS/taro-ui/issues/670)) ([f734a2c](https://github.com/NervJS/taro-ui/commit/f734a2c))
* **image-picker** key 反优化处理 ([#635](https://github.com/NervJS/taro-ui/issues/635)) ([a1d0a5e](https://github.com/NervJS/taro-ui/commit/a1d0a5e))
* **button** 修复样式问题 ([#534](https://github.com/NervJS/taro-ui/issues/534)) ([60074d6](https://github.com/NervJS/taro-ui/commit/60074d6))
* **tabs** ios 样式 ([#646](https://github.com/NervJS/taro-ui/issues/646)) ([3d811b8](https://github.com/NervJS/taro-ui/commit/3d811b8))
* **input** type InputFunction bugs ([#645](https://github.com/NervJS/taro-ui/pull/645)) ([a74d039](https://github.com/NervJS/taro-ui/commit/a74d039))
* **tabs** 修复 tabs 组件无法自动滚动到第一个 tab 位置 ([#752](https://github.com/NervJS/taro-ui/pull/752)) ([86fae15](https://github.com/NervJS/taro-ui/commit/86fae15))
* **input-number** 更新测试快照 ([b125e0a](https://github.com/NervJS/taro-ui/commit/b125e0a))
* **docs** fix List broken indent ([#800](https://github.com/NervJS/taro-ui/pull/800)) ([fe2af95](https://github.com/NervJS/taro-ui/commit/fe2af95))


### Features

* **accordion** accordion 支持 note 属性 ([f10ebe6](https://github.com/NervJS/taro-ui/commit/f10ebe6))
* **searchBar** searchBar 新增 type 属性 ([4816e40](https://github.com/NervJS/taro-ui/commit/4816e40))
* **form** 修改表单页 ([7367188](https://github.com/NervJS/taro-ui/commit/7367188))
* **atCard** atCard 组件支持自定义图标 ([#229](https://github.com/NervJS/taro-ui/issues/229)) ([bf7d066](https://github.com/NervJS/taro-ui/commit/bf7d066))
* **atCard** atCard 修改样式 ([d04ffeb](https://github.com/NervJS/taro-ui/commit/d04ffeb))
* **searchBar** 增加输入框类型属性 ([#464](https://github.com/NervJS/taro-ui/issues/464)) ([b19514b](https://github.com/NervJS/taro-ui/commit/b19514b))
* **searchBar** 添加自定义输入框类型的示例 ([a751cd1](https://github.com/NervJS/taro-ui/commit/a751cd1))
* **srarchBar** 添加 inputType 类型和类型描述 ([acec729](https://github.com/NervJS/taro-ui/commit/acec729))
* **indexes** AtIndexes 通过程序接口控制跳转到 指定的 section ([#612](https://github.com/NervJS/taro-ui/issues/612)) ([be0a300](https://github.com/NervJS/taro-ui/commit/be0a300))
* **searchBar** 修改 searchBar demo ([1e59589](https://github.com/NervJS/taro-ui/commit/1e59589))
* **card** atCard extra 自定义样式 ([#684](https://github.com/NervJS/taro-ui/issues/684)) ([794f319](https://github.com/NervJS/taro-ui/commit/794f319))
* **accordion** 增加图标对 prefixClass 属性支持 ([#656](https://github.com/NervJS/taro-ui/pull/656)) ([60aff30](https://github.com/NervJS/taro-ui/commit/60aff30))
* **countdown** 添加支持隐藏小时的配置项 ([874b512](https://github.com/NervJS/taro-ui/commit/874b512))
* **input-number** 添加仅禁止输入类型和类型描述，添加文档说明及 demo 用例 ([#786](https://github.com/NervJS/taro-ui/issues/786)) ([d6bc8e9](https://github.com/NervJS/taro-ui/commit/d6bc8e9))



<a name="2.2.1"></a>
## [2.2.1](https://github.com/nervjs/taro-ui/compare/v2.2.0...v2.2.1) (2019-06-18)


### Bug Fixes

* **input:** # 583 AtInput 不触发 onChange 的问题 ([8fd8b1e](https://github.com/nervjs/taro-ui/commit/8fd8b1e))
* **input:** 百度小程序无法输入内容 ([1fcbb19](https://github.com/nervjs/taro-ui/commit/1fcbb19))
* **radio:** fix 文字过长不换行 [#548](https://github.com/nervjs/taro-ui/issues/548) ([17c6f4f](https://github.com/nervjs/taro-ui/commit/17c6f4f))
* **timeline:** color 和 icon 同时设置出现两个图标 fix [#550](https://github.com/nervjs/taro-ui/issues/550) ([e24751a](https://github.com/nervjs/taro-ui/commit/e24751a))
* **utils:** getEventDetail 获取数据错误 fix [#553](https://github.com/nervjs/taro-ui/issues/553) ([248b247](https://github.com/nervjs/taro-ui/commit/248b247))
* 修复 [#628](https://github.com/nervjs/taro-ui/issues/628) 和 [#637](https://github.com/nervjs/taro-ui/issues/637) ([98d4dd2](https://github.com/nervjs/taro-ui/commit/98d4dd2))
* 修复 uuid + 日历案例报错 ([eaac2f6](https://github.com/nervjs/taro-ui/commit/eaac2f6))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/nervjs/taro-ui/compare/v2.1.0...v2.2.0) (2019-06-12)


### Bug Fixes

* **SearchBar:** 修复输入框文字显示不全的样式问题 [#539](https://github.com/nervjs/taro-ui/issues/539) ([50cc0fc](https://github.com/nervjs/taro-ui/commit/50cc0fc))
* **SwipeAction:** 修复 SwiperAction 报错问题 closed [#574](https://github.com/nervjs/taro-ui/issues/574) ([f97223f](https://github.com/nervjs/taro-ui/commit/f97223f))
* **SwipeAction:** 不再以自增作为id ([9b0a901](https://github.com/nervjs/taro-ui/commit/9b0a901))
* **SwipeAction:** 阻止滑动触发默认行为 ([#525](https://github.com/nervjs/taro-ui/issues/525)) ([24b4892](https://github.com/nervjs/taro-ui/commit/24b4892))
* **TabBar:** 修复 TypeScript 中 TabItem 没有 image/ selectedImage 属性报错 ([3c71b65](https://github.com/nervjs/taro-ui/commit/3c71b65))
* **TabBar:** 修复 tabbar 中 props参数名称错误的问题 ([519837d](https://github.com/nervjs/taro-ui/commit/519837d))
* **Accordion:** 修复折叠起来保留内容区的高度问题 ([19e2ea3e](https://github.com/nervjs/taro-ui/commit/19e2ea3e))


### Features

* **Calendar:** Calendar 组件添加仅显示有效时间组功能 ([#527](https://github.com/nervjs/taro-ui/issues/527)) ([b63eb1a](https://github.com/nervjs/taro-ui/commit/b63eb1a))
* **Curtain:** 增加关闭图标位置的示例 ([d209916](https://github.com/nervjs/taro-ui/commit/d209916))
* **Typings:** fix typings of some comps ([c50d4ea](https://github.com/nervjs/taro-ui/commit/c50d4ea))
* 添加 [@types](https://github.com/types)/loadsh ([a424706](https://github.com/nervjs/taro-ui/commit/a424706))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/nervjs/taro-ui/compare/v2.0.2...v2.1.0) (2019-04-10)


### Bug Fixes

* **InputNumber:** 修改错误的小驼峰写法 ([a29702c](https://github.com/nervjs/taro-ui/commit/a29702c))
* **LoadMore:** 修复按钮宽度问题 ([710fda5](https://github.com/nervjs/taro-ui/commit/710fda5))
* **Range:**  排序问题 fix [#481](https://github.com/nervjs/taro-ui/issues/481) ([7dfeb89](https://github.com/nervjs/taro-ui/commit/7dfeb89))
* **SearchBar:** 修复中文输入法候选词的时候和 placehold 重影 ([360f597](https://github.com/nervjs/taro-ui/commit/360f597))
* **SearchBar:** 修改AtSearchBar动画的实现，去除以往基于不稳定的placeholder长度计算，改用flexGrow控制伸缩 ([e4ec5b4](https://github.com/nervjs/taro-ui/commit/e4ec5b4))
* **TabBar:** 修改隐藏逻辑 ([6261707](https://github.com/nervjs/taro-ui/commit/6261707))
* **Tabs:** 修复右滑返回上一页触发滑动页面的 bug ([ae87341](https://github.com/nervjs/taro-ui/commit/ae87341))
* **Tabs:** 内容换行 fix [#483](https://github.com/nervjs/taro-ui/issues/483) ([dde1b82](https://github.com/nervjs/taro-ui/commit/dde1b82))
* **Tabs:** 参数调整 ([308dd49](https://github.com/nervjs/taro-ui/commit/308dd49))


### Features

* **Fab:** 重构 Float Button 组件 ([cae0285](https://github.com/nervjs/taro-ui/commit/cae0285))
* **Input:** 事件返回值增加当前事件 event [#515](https://github.com/nervjs/taro-ui/issues/515) ([3b4d7e4](https://github.com/nervjs/taro-ui/commit/3b4d7e4))
* **InputNumber:** 为AtInputNumber添加错误提示回调 ([3b2dd28](https://github.com/nervjs/taro-ui/commit/3b2dd28))
* **NavBar:** 添加 leftIconType，rightFirstIconType，rightFirstIconType 支持自行扩展字体图标 ([1693a07](https://github.com/nervjs/taro-ui/commit/1693a07))
* **SearchBar:**  搜索框增加清除按钮的事件 fix [#438](https://github.com/nervjs/taro-ui/issues/438) ([b0cea85](https://github.com/nervjs/taro-ui/commit/b0cea85))
* **TabBar:** tab图标支持图片 ([ad8ea7c](https://github.com/nervjs/taro-ui/commit/ad8ea7c))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/nervjs/taro-ui/compare/v2.0.1...v2.0.2) (2019-03-05)


### Bug Fixes

* **input-number:** 改正 d.ts, onBlur 为非必填项 ([2635118](https://github.com/nervjs/taro-ui/commit/2635118))
* **List:** 修复 extraThumb 不显示的问题 [#418](https://github.com/nervjs/taro-ui/issues/418) ([fb3b7fe](https://github.com/nervjs/taro-ui/commit/fb3b7fe))


### Features

* 新增 issue helper ([a047231](https://github.com/nervjs/taro-ui/commit/a047231))
* 更新 issue template 配置 ([72241ce](https://github.com/nervjs/taro-ui/commit/72241ce))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/nervjs/taro-ui/compare/v2.0.0...v2.0.1) (2019-02-21)


### Bug Fixes

* **accordion:** requestAnimationFrame 不存在 ([08be8c6](https://github.com/nervjs/taro-ui/commit/08be8c6))
* **accordion:** 修复 accordion 问题 ([fd037b9](https://github.com/nervjs/taro-ui/commit/fd037b9))
* **input:** 改正 d.ts ([d8a380e](https://github.com/nervjs/taro-ui/commit/d8a380e))
* **Message:** 修复文字溢出 [#391](https://github.com/nervjs/taro-ui/issues/391) ([aaac2a6](https://github.com/nervjs/taro-ui/commit/aaac2a6))
* **Modal:** 修复 android 机的 小黑点 close [#410](https://github.com/nervjs/taro-ui/issues/410) close [#404](https://github.com/nervjs/taro-ui/issues/404) ([01461a4](https://github.com/nervjs/taro-ui/commit/01461a4))
* **swan:** 兼容 swan 百度小程序 ([adb3f94](https://github.com/nervjs/taro-ui/commit/adb3f94))
* **tabs:** tab-panel 空白 ([39f88d6](https://github.com/nervjs/taro-ui/commit/39f88d6))


### Features

* **theme:** 新增 7Fresh 主题 ([fc18269](https://github.com/nervjs/taro-ui/commit/fc18269))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/nervjs/taro-ui/compare/v2.0.0-beta.2...v2.0.0) (2019-02-03)


### Bug Fixes

* **accordion:** 适配百度并重构 ([13f927d](https://github.com/nervjs/taro-ui/commit/13f927d))
* 修复百度小程序noticebar ([1bedaa9](https://github.com/nervjs/taro-ui/commit/1bedaa9))
* **calendar:** 修复组件 start 可以 大于 end 的问题 closed [#366](https://github.com/nervjs/taro-ui/issues/366) ([320f9df](https://github.com/nervjs/taro-ui/commit/320f9df))
* 修复百度小程序icon ([d4e19be](https://github.com/nervjs/taro-ui/commit/d4e19be))
* **Checkbox:** 修复 ICON 变形的问题 [#378](https://github.com/nervjs/taro-ui/issues/378) ([7cada7a](https://github.com/nervjs/taro-ui/commit/7cada7a))
* **Components:** closed [#336](https://github.com/nervjs/taro-ui/issues/336) [#367](https://github.com/nervjs/taro-ui/issues/367) ([beee397](https://github.com/nervjs/taro-ui/commit/beee397))
* **form:** Form 中 button 位置偏右 [#158](https://github.com/nervjs/taro-ui/issues/158) ([da3d0fd](https://github.com/nervjs/taro-ui/commit/da3d0fd))
* **message:** 适配百度 ([b55cc89](https://github.com/nervjs/taro-ui/commit/b55cc89))
* **noticebar:** 修复跑马灯模式在微信小程序字体大小渲染有误的问题 ([3b34feb](https://github.com/nervjs/taro-ui/commit/3b34feb))
* **range:** 适配百度 ([8e4e8eb](https://github.com/nervjs/taro-ui/commit/8e4e8eb))
* **SwipeAction:** 处理 h5 clientRectangle 数据问题 ([18e9a4c](https://github.com/nervjs/taro-ui/commit/18e9a4c))
* **switch:** 适配百度 ([9bafce5](https://github.com/nervjs/taro-ui/commit/9bafce5))
* **tabs:** 修复 inactive 高度未隐藏 ([857baf2](https://github.com/nervjs/taro-ui/commit/857baf2))
* **tabs:** 适配百度 ([ee42685](https://github.com/nervjs/taro-ui/commit/ee42685))


### Features

* **image-picker:** 适配百度 ([7043eab](https://github.com/nervjs/taro-ui/commit/7043eab))
* 添加红色主题 ([aacfd84](https://github.com/nervjs/taro-ui/commit/aacfd84))
* **indexes:** 适配百度 ([4f52def](https://github.com/nervjs/taro-ui/commit/4f52def))
* **Switch:** 调整样式 ([5b2a2ef](https://github.com/nervjs/taro-ui/commit/5b2a2ef))
* 适配百度 ([0743caf](https://github.com/nervjs/taro-ui/commit/0743caf))
* **theme:** 优化自定义主题变量名 ([7f0f0a0](https://github.com/nervjs/taro-ui/commit/7f0f0a0))
* **theme:** 添加红色主题 ([a8caf39](https://github.com/nervjs/taro-ui/commit/a8caf39))
* **Theme:** 开放可变更的自定义主题变量 ([3b46579](https://github.com/nervjs/taro-ui/commit/3b46579))
* **toast:** 增加 customStyle ([8b63b83](https://github.com/nervjs/taro-ui/commit/8b63b83))



<a name="2.0.0-beta.2"></a>
# [2.0.0-beta.2](https://github.com/nervjs/taro-ui/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2019-01-17)


### Bug Fixes

* **calendar:** 新增日历 onSelectDate 方法 ([6e9ad74](https://github.com/nervjs/taro-ui/commit/6e9ad74))
* **Calendar:** 修复 onMonethChange 触发问题 close [#305](https://github.com/nervjs/taro-ui/issues/305) close [#337](https://github.com/nervjs/taro-ui/issues/337) ([360c7a1](https://github.com/nervjs/taro-ui/commit/360c7a1))
* **countdown:** 修复页面 setState 引起倒计时停止 fix [#333](https://github.com/nervjs/taro-ui/issues/333) ([99924c5](https://github.com/nervjs/taro-ui/commit/99924c5))
* **FloatLayout:** 修复滚动穿透问题 close [#352](https://github.com/nervjs/taro-ui/issues/352) ([25c8074](https://github.com/nervjs/taro-ui/commit/25c8074))
* **FloatLayout:** 处理 标题不存在 的问题 [#327](https://github.com/nervjs/taro-ui/issues/327) ([ac44dde](https://github.com/nervjs/taro-ui/commit/ac44dde))
* **image-picker:** 修复删除bug ([d5fd1a4](https://github.com/nervjs/taro-ui/commit/d5fd1a4))
* **image-picker:** 删除时返回新数组 ([c0459d9](https://github.com/nervjs/taro-ui/commit/c0459d9))
* **tabs:** tabs 改为受控组件 ([ed87db7](https://github.com/nervjs/taro-ui/commit/ed87db7))
* **tabs:** 修复二次点击 [#321](https://github.com/nervjs/taro-ui/issues/321) ([a57aa7f](https://github.com/nervjs/taro-ui/commit/a57aa7f))
* **textarea:** 参数类型对齐 ([4079d93](https://github.com/nervjs/taro-ui/commit/4079d93))
* **types:** 修复 types 定义 ([fefc0fc](https://github.com/nervjs/taro-ui/commit/fefc0fc))



<a name="2.0.0-beta.1"></a>
# [2.0.0-beta.1](https://github.com/nervjs/taro-ui/compare/v1.5.4...v2.0.0-beta.1) (2019-01-03)


### Bug Fixes

* **countdown:** 修复冲突代码 ([2593a31](https://github.com/nervjs/taro-ui/commit/2593a31))
* **List:** 修复 arrow 属性导致 list 无法展示问题 ([0a8c31d](https://github.com/nervjs/taro-ui/commit/0a8c31d))
* **search:** 修复 Picker 的 value 只能在 最大和最小之间 ([3c90722](https://github.com/nervjs/taro-ui/commit/3c90722))
* **textarea:** 修复支付宝小程序 ([99d6cf0](https://github.com/nervjs/taro-ui/commit/99d6cf0))
* **textarea:** 适配支付宝小程序 ([b793f6b](https://github.com/nervjs/taro-ui/commit/b793f6b))


### Features

* **Accordion:** 兼容支付包小程序 ([41b3868](https://github.com/nervjs/taro-ui/commit/41b3868))



<a name="1.5.4"></a>
## [1.5.4](https://github.com/nervjs/taro-ui/compare/v1.5.3...v1.5.4) (2018-12-30)


### Bug Fixes

* **ActionSheet:** 修复 state 无法改变 被 Text 包含的问题 close [#286](https://github.com/nervjs/taro-ui/issues/286) ([9ed24d1](https://github.com/nervjs/taro-ui/commit/9ed24d1))
* **Component:** 修复部分问题 ([2d533c4](https://github.com/nervjs/taro-ui/commit/2d533c4))
* **Components:** 修复组件中带有浮层的 穿透滚动问题 h5 下 close [#286](https://github.com/nervjs/taro-ui/issues/286) ([44040dc](https://github.com/nervjs/taro-ui/commit/44040dc))
* **Countdown:** 修复倒计时多次触发的问题 ([260387d](https://github.com/nervjs/taro-ui/commit/260387d))
* **image-picker:** 适配支付宝 ([0bf1731](https://github.com/nervjs/taro-ui/commit/0bf1731))
* **indexes:** 支付宝适配 ([5aa8189](https://github.com/nervjs/taro-ui/commit/5aa8189))
* **input:** fix [#165](https://github.com/nervjs/taro-ui/issues/165) editabled 无法切换 ([c827afe](https://github.com/nervjs/taro-ui/commit/c827afe))
* **input:** 改名 maxLength ([5bf9bf1](https://github.com/nervjs/taro-ui/commit/5bf9bf1))
* **input:** 改名 maxLength ([5744a47](https://github.com/nervjs/taro-ui/commit/5744a47))
* **input:** 调整 icon 位置 ([e428342](https://github.com/nervjs/taro-ui/commit/e428342))
* **input:** 适配支付宝小程序 ([50c7352](https://github.com/nervjs/taro-ui/commit/50c7352))
* **List:** 修复 Picker 样式导致 List 样式错乱 ([3aa93ef](https://github.com/nervjs/taro-ui/commit/3aa93ef))
* **search-bar:** 支付宝适配 ([6038524](https://github.com/nervjs/taro-ui/commit/6038524))
* **SwipeAction:** 修复 ios 滚动问题 ([cd92c81](https://github.com/nervjs/taro-ui/commit/cd92c81))
* **SwipeAction:** 移除 log ([a85de1c](https://github.com/nervjs/taro-ui/commit/a85de1c))
* **tabs:** 修复兼容性问题 ([59551d3](https://github.com/nervjs/taro-ui/commit/59551d3))
* **tabs:** 适配支付宝小程序 ([ea0ae28](https://github.com/nervjs/taro-ui/commit/ea0ae28))
* **textarea:** 改名 maxLength ([019e9e4](https://github.com/nervjs/taro-ui/commit/019e9e4))
* **textarea:** 适配支付宝小程序 ([85c00e3](https://github.com/nervjs/taro-ui/commit/85c00e3))
* delayQuerySelector 改版 ([4436f17](https://github.com/nervjs/taro-ui/commit/4436f17))
* h5 热更新报错 ([8b9e609](https://github.com/nervjs/taro-ui/commit/8b9e609))
* 去掉无用语句 ([b98a642](https://github.com/nervjs/taro-ui/commit/b98a642))


### Features

* 修复组件在支付宝的问题 和 体验问题 ([257bed9](https://github.com/nervjs/taro-ui/commit/257bed9))
* 新增 UUID 方法 ([246ad32](https://github.com/nervjs/taro-ui/commit/246ad32))
* **customize-theme:** 调整代码结构，更改 css 命名 ([c57e64f](https://github.com/nervjs/taro-ui/commit/c57e64f))
* **customize-theme:** 调整代码结构，更改 css 命名 ([b98c4eb](https://github.com/nervjs/taro-ui/commit/b98c4eb))
* **range:** 适配支付宝小程序 ([79d1c3e](https://github.com/nervjs/taro-ui/commit/79d1c3e))



<a name="1.5.3"></a>
## [1.5.3](https://github.com/nervjs/taro-ui/compare/v1.5.2...v1.5.3) (2018-12-24)


### Bug Fixes

* **@types/avatar:** 优化 avatar的types定义 ([b1aebbb](https://github.com/nervjs/taro-ui/commit/b1aebbb))
* **countdown:** 修复倒计时结束事件多次触发的问题 ([c7915a1](https://github.com/nervjs/taro-ui/commit/c7915a1))
* **curtain:** 处理冒泡 ([47f2ee6](https://github.com/nervjs/taro-ui/commit/47f2ee6))
* **FloatLayout:** 新增 ScrollView 的一些属性 close [#258](https://github.com/nervjs/taro-ui/issues/258) [#259](https://github.com/nervjs/taro-ui/issues/259) ([bb79794](https://github.com/nervjs/taro-ui/commit/bb79794))
* **FloatLayout:** 暂时屏蔽 onClose 回应问题 close [#266](https://github.com/nervjs/taro-ui/issues/266) ([9d7210a](https://github.com/nervjs/taro-ui/commit/9d7210a))
* **icon:** 转化 rpx fix [#112](https://github.com/nervjs/taro-ui/issues/112) ([047c938](https://github.com/nervjs/taro-ui/commit/047c938))
* **image-picker:** 修复不能选择同一文件 ([4c23d93](https://github.com/nervjs/taro-ui/commit/4c23d93))
* **segmented-control:** 优化 segmented-control 页面体验 ([631d628](https://github.com/nervjs/taro-ui/commit/631d628))
* **SwipeAction:** 处理 SwipeAction 的一些问题 close [#225](https://github.com/nervjs/taro-ui/issues/225) ([a671632](https://github.com/nervjs/taro-ui/commit/a671632))
* **SwipeAction:** 简单处理 h5 作用域问题 ([2ca61b5](https://github.com/nervjs/taro-ui/commit/2ca61b5))
* **textarea:** 修复 maxlength 设置无效 ([50f1788](https://github.com/nervjs/taro-ui/commit/50f1788))
* 修复支付宝问题 ([b12fe13](https://github.com/nervjs/taro-ui/commit/b12fe13))
* 修复支付宝问题、drawer支持children等 ([9248146](https://github.com/nervjs/taro-ui/commit/9248146))


### Features

* **Curtain:** 重构幕帘样式，增加多 position 支持 ([f9cedb1](https://github.com/nervjs/taro-ui/commit/f9cedb1))
* **customize-theme:** 调整代码结构，更改 css 命名 ([8ab1764](https://github.com/nervjs/taro-ui/commit/8ab1764))
* **customize-theme:** 调整代码结构，更改 css 命名 ([6256a0e](https://github.com/nervjs/taro-ui/commit/6256a0e))
* **input-number:** 增加 onBlur 事件 [#251](https://github.com/nervjs/taro-ui/issues/251) ([a31ffcb](https://github.com/nervjs/taro-ui/commit/a31ffcb))
* **style:** 组件样式抽离 ([614fd40](https://github.com/nervjs/taro-ui/commit/614fd40))



<a name="1.5.2"></a>
## [1.5.2](https://github.com/nervjs/taro-ui/compare/v1.5.1...v1.5.2) (2018-12-13)


### Bug Fixes

* **calendar:** 优化 plugins 的逻辑 ([a04daa7](https://github.com/nervjs/taro-ui/commit/a04daa7))
* **calendar:** 修复日历组件 禁止滑动下无法点击日期 ([90e80bf](https://github.com/nervjs/taro-ui/commit/90e80bf))
* **count-down:** 页面隐藏停止 fix [#242](https://github.com/nervjs/taro-ui/issues/242) ([eef0bac](https://github.com/nervjs/taro-ui/commit/eef0bac))
* **doc:** 修复了几个单引号错误 ([#244](https://github.com/nervjs/taro-ui/issues/244)) ([6953a10](https://github.com/nervjs/taro-ui/commit/6953a10))
* **image-picker:** 修复 input 大小不为 0 ([2017bb9](https://github.com/nervjs/taro-ui/commit/2017bb9))
* **image-picker:** 将 FileReader 替换成 window.URL.createObjectURL ([5274a0b](https://github.com/nervjs/taro-ui/commit/5274a0b))
* **Indexes:** 修复 H5 下索引位置错落的问题 ([d7d2b5c](https://github.com/nervjs/taro-ui/commit/d7d2b5c))
* **list:** 新增 switchColor 属性 close [#235](https://github.com/nervjs/taro-ui/issues/235) ([8a61499](https://github.com/nervjs/taro-ui/commit/8a61499))
* **message:** 定时关闭改成 setState 后的回掉 fix[#226](https://github.com/nervjs/taro-ui/issues/226) ([69861eb](https://github.com/nervjs/taro-ui/commit/69861eb))
* **search:** 修复支付宝的一些问题 ([cdf681a](https://github.com/nervjs/taro-ui/commit/cdf681a))
* **Textarea:** 修复 maxLength 设置无效的问题 ([#231](https://github.com/nervjs/taro-ui/issues/231)) ([04909f0](https://github.com/nervjs/taro-ui/commit/04909f0))


### Features

* 抽离样式文件，与组件解耦 ([100287c](https://github.com/nervjs/taro-ui/commit/100287c))
* **component:** 兼容支付宝API ([440f4d4](https://github.com/nervjs/taro-ui/commit/440f4d4))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/nervjs/taro-ui/compare/v1.5.0...v1.5.1) (2018-12-03)


### Bug Fixes

* **calendar:** 简化日历组件 ([20698a6](https://github.com/nervjs/taro-ui/commit/20698a6))
* **components:** 移除 iPhone X的判断逻辑 close [#206](https://github.com/nervjs/taro-ui/issues/206) ([79ba5b0](https://github.com/nervjs/taro-ui/commit/79ba5b0))
* **message:** fix bug [#204](https://github.com/nervjs/taro-ui/issues/204) ([2d8e52c](https://github.com/nervjs/taro-ui/commit/2d8e52c))


### Features

* **input-number:** 开放 input type [#203](https://github.com/nervjs/taro-ui/issues/203) ([6543725](https://github.com/nervjs/taro-ui/commit/6543725))
* **load-more:** 开放样式 props [#198](https://github.com/nervjs/taro-ui/issues/198) ([71fa238](https://github.com/nervjs/taro-ui/commit/71fa238))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/nervjs/taro-ui/compare/v1.4.0...v1.5.0) (2018-11-27)


### Bug Fixes

* **calendar:** 修复日历组件滚动问题 + 修复手机机型兼容问题 ([fd544a0](https://github.com/nervjs/taro-ui/commit/fd544a0))
* **calendar:** 修复选中日期 mark 的背景色 ([0bbd9fb](https://github.com/nervjs/taro-ui/commit/0bbd9fb))
* **calendar:** 处理 箭头控制器 无法使用问题 ([3e82420](https://github.com/nervjs/taro-ui/commit/3e82420))
* **calendar:** 处理日历组件的文档 ([f0bd57b](https://github.com/nervjs/taro-ui/commit/f0bd57b))
* **calendar:** 暂时注释箭头控制器的功能 ([6640ebe](https://github.com/nervjs/taro-ui/commit/6640ebe))
* **calendar:** 添加优化属性 ([3c3e070](https://github.com/nervjs/taro-ui/commit/3c3e070))
* **count-down:** 修复 props 更新问题 ([3114bc3](https://github.com/nervjs/taro-ui/commit/3114bc3))
* **divider:** 修复pxTransform 问题 ([bb6623a](https://github.com/nervjs/taro-ui/commit/bb6623a))
* **form:** 删除无用代码 ([795f152](https://github.com/nervjs/taro-ui/commit/795f152))
* **image-picker:** 修复 image-picker 细节问题 ([a7167c0](https://github.com/nervjs/taro-ui/commit/a7167c0))
* **image-picker:** 修复 ref 丢失问题 ([ce664a0](https://github.com/nervjs/taro-ui/commit/ce664a0))
* **image-picker:** 修复test ([e96ae4f](https://github.com/nervjs/taro-ui/commit/e96ae4f))
* **image-picker:** 修改细节 ([2255109](https://github.com/nervjs/taro-ui/commit/2255109))
* **indexes:** 修复 H5 端滑动不精准的问题 ([63b9eee](https://github.com/nervjs/taro-ui/commit/63b9eee))
* **indexes:** 禁止事件冒泡 ([4d238fb](https://github.com/nervjs/taro-ui/commit/4d238fb))
* **indexes:** 默认去除动画 ([af7dd5e](https://github.com/nervjs/taro-ui/commit/af7dd5e))
* **input-number:** fix [#141](https://github.com/nervjs/taro-ui/issues/141) input-number max 值失效 ([8e39738](https://github.com/nervjs/taro-ui/commit/8e39738))
* **input-number:** 修复 input-number 数字大小限制问题 ([1e8abec](https://github.com/nervjs/taro-ui/commit/1e8abec))
* **input-number:** 修改pxTransform测试方式 ([2c71d15](https://github.com/nervjs/taro-ui/commit/2c71d15))
* **load-more:** 修复 ios 溢出问题 ([99d2d75](https://github.com/nervjs/taro-ui/commit/99d2d75))
* **message:** 修复 message 细节 ([6423668](https://github.com/nervjs/taro-ui/commit/6423668))
* **message:** 修复 test ([83603a4](https://github.com/nervjs/taro-ui/commit/83603a4))
* **message:** 修改演示页面 ([c723dd9](https://github.com/nervjs/taro-ui/commit/c723dd9))
* **message:** 修正type，改变 message api ([507b33c](https://github.com/nervjs/taro-ui/commit/507b33c))
* **message:** 调用方式修改 ([dc3d2e9](https://github.com/nervjs/taro-ui/commit/dc3d2e9))
* **range:** range padding ([e648f78](https://github.com/nervjs/taro-ui/commit/e648f78))
* 修复测试 ([dd7b61b](https://github.com/nervjs/taro-ui/commit/dd7b61b))
* **rate:** 修改pxTransform测试方式 ([f3063dd](https://github.com/nervjs/taro-ui/commit/f3063dd))
* **search-bar:**  修正函数参数 ([a5d19f0](https://github.com/nervjs/taro-ui/commit/a5d19f0))
* **segmented-control:** 修复 pxTransform 测试方式 ([162a8bc](https://github.com/nervjs/taro-ui/commit/162a8bc))
* **switch:** 修复函数参数 ([eafdcb0](https://github.com/nervjs/taro-ui/commit/eafdcb0))
* **tab-bar:** 修复函数参数问题 ([9e1309a](https://github.com/nervjs/taro-ui/commit/9e1309a))
* **tabs:** 修复函数参数问题 ([4f3287e](https://github.com/nervjs/taro-ui/commit/4f3287e))
* **textarea:** 修复 pxTransform 测试问题 ([6c15ed7](https://github.com/nervjs/taro-ui/commit/6c15ed7))
* **types:** 添加 AtSlider  close [#166](https://github.com/nervjs/taro-ui/issues/166) ([8cb53c3](https://github.com/nervjs/taro-ui/commit/8cb53c3))


### Features

* **calendar:** 优化日历组件快速翻动的处理方式 ([1657d84](https://github.com/nervjs/taro-ui/commit/1657d84))
* **calender:** 新增区域选择功能 ([c9bf146](https://github.com/nervjs/taro-ui/commit/c9bf146))
* **image-picker:** 新增 image-picker type ([38d836f](https://github.com/nervjs/taro-ui/commit/38d836f))
* **image-picker:** 新增 image-picker 组件 ([b500eae](https://github.com/nervjs/taro-ui/commit/b500eae))
* **indexes:** 优化索引选择器样式 ([ad2414a](https://github.com/nervjs/taro-ui/commit/ad2414a))
* **indexes:** 增加 indexes types ([7c7ce09](https://github.com/nervjs/taro-ui/commit/7c7ce09))
* **indexes:** 增加滑动跳转 ([5099632](https://github.com/nervjs/taro-ui/commit/5099632))
* **indexes:** 新增索引选择器组件 ([995decb](https://github.com/nervjs/taro-ui/commit/995decb))
* **message:** 增加 message type ([eed2a16](https://github.com/nervjs/taro-ui/commit/eed2a16))
* **modal:** 新增可控的 overlay 点击关闭属性 close [#166](https://github.com/nervjs/taro-ui/issues/166) ([aa64d57](https://github.com/nervjs/taro-ui/commit/aa64d57))
* **range:** 新增 range type ([d1355d5](https://github.com/nervjs/taro-ui/commit/d1355d5))
* **range:** 新增 range 组件 ([68885d7](https://github.com/nervjs/taro-ui/commit/68885d7))
* **range:** 更改 Range 滑块的大小 ([efe4be2](https://github.com/nervjs/taro-ui/commit/efe4be2))
* **Range:** 滑动的时候禁止事件冒泡 ([9d55d5c](https://github.com/nervjs/taro-ui/commit/9d55d5c))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/nervjs/taro-ui/compare/v1.3.5...v1.4.0) (2018-11-11)


### Bug Fixes

* **count-down:** 回收定时器 ([5c01fed](https://github.com/nervjs/taro-ui/commit/5c01fed))
* **count-down:** 增加横线 ([3b9e90a](https://github.com/nervjs/taro-ui/commit/3b9e90a))
* **curtain:**  去除动画 ([67c47b3](https://github.com/nervjs/taro-ui/commit/67c47b3))
* **curtain:** 修复细节问题 ([a9a2c7c](https://github.com/nervjs/taro-ui/commit/a9a2c7c))
* **curtain:** 调整细节 ([56e8380](https://github.com/nervjs/taro-ui/commit/56e8380))
* **drawer:** 修复drawer溢出滚动。 close [#132](https://github.com/nervjs/taro-ui/issues/132) ([bc4f3b7](https://github.com/nervjs/taro-ui/commit/bc4f3b7))
* **Drawer:** 修复 onClose 重复触发的问题 ([#167](https://github.com/nervjs/taro-ui/issues/167)) ([580e8ec](https://github.com/nervjs/taro-ui/commit/580e8ec))
* **Drawer:** 修复弹层无法正常显示的问题 ([34fd07d](https://github.com/nervjs/taro-ui/commit/34fd07d))
* **load-more:** 兼容小程序 ([4c50e49](https://github.com/nervjs/taro-ui/commit/4c50e49))
* 修复 types 是否必须 ([f836ab3](https://github.com/nervjs/taro-ui/commit/f836ab3))
* **steps:** 细节修改 ([a95ebcf](https://github.com/nervjs/taro-ui/commit/a95ebcf))
* **tabs:** fix [#163](https://github.com/nervjs/taro-ui/issues/163) ios 8 下页面异常 ([a76c9c2](https://github.com/nervjs/taro-ui/commit/a76c9c2))
* **tag:** 补全type。 close [#161](https://github.com/nervjs/taro-ui/issues/161) ([52a378e](https://github.com/nervjs/taro-ui/commit/52a378e))
* **textarea:** 组件 props 修改 ([3574aed](https://github.com/nervjs/taro-ui/commit/3574aed))


### Features

* **calendar:** 日历组件迁移 ([86696da](https://github.com/nervjs/taro-ui/commit/86696da))
* **count-down:** 增加新字体 ([e0582ac](https://github.com/nervjs/taro-ui/commit/e0582ac))
* **count-down:** 新增 count-down 倒计时组件 ([ea7875e](https://github.com/nervjs/taro-ui/commit/ea7875e))
* **curtain:** 增加 curtain 组件 ([3c3402b](https://github.com/nervjs/taro-ui/commit/3c3402b))
* **curtain:** 增加type ([793e4c2](https://github.com/nervjs/taro-ui/commit/793e4c2))
* **message:** 新增消息组件 ([8954217](https://github.com/nervjs/taro-ui/commit/8954217))
* **navbar:** 新增下划线控制变量 [#162](https://github.com/nervjs/taro-ui/issues/162) ([55f4bb0](https://github.com/nervjs/taro-ui/commit/55f4bb0))
* **segmented-control:** 优化动画 ([1528b80](https://github.com/nervjs/taro-ui/commit/1528b80))
* **steps:** 增加types ([b73c0fa](https://github.com/nervjs/taro-ui/commit/b73c0fa))
* **steps:** 新增步骤条组件 ([7906467](https://github.com/nervjs/taro-ui/commit/7906467))



<a name="1.3.5"></a>
## [1.3.5](https://github.com/nervjs/taro-ui/compare/v1.3.4...v1.3.5) (2018-10-23)


### Bug Fixes

* **slider:** 修复 AtSlider 变更 value 无效的问题 ([#135](https://github.com/nervjs/taro-ui/issues/135)) ([b25e996](https://github.com/nervjs/taro-ui/commit/b25e996))


### Features

* **divider:** 新增 divider 组件 ([162b515](https://github.com/nervjs/taro-ui/commit/162b515))
* **load-more:** 新增 load-more 文档 ([4869719](https://github.com/nervjs/taro-ui/commit/4869719))



<a name="1.3.4"></a>
## [1.3.4](https://github.com/nervjs/taro-ui/compare/v1.3.3...v1.3.4) (2018-10-22)


### Bug Fixes

* **1px:** 修复组件 noBorder 失效的问题 ([fef44e1](https://github.com/nervjs/taro-ui/commit/fef44e1))
* **toast:** 修复 Toast 组件的 type 文件 close [#131](https://github.com/nervjs/taro-ui/issues/131) ([89e6833](https://github.com/nervjs/taro-ui/commit/89e6833))


### Features

* **load-more:** 新增 load-more 组件 ([6778ed5](https://github.com/nervjs/taro-ui/commit/6778ed5))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/nervjs/taro-ui/compare/v1.3.2...v1.3.3) (2018-10-21)


### Bug Fixes

* **search-bar:** 增加 className，customStyle ([1def61e](https://github.com/nervjs/taro-ui/commit/1def61e))


### Features

* **1px:** 更改 1px 的实现方式 ([548bf1e](https://github.com/nervjs/taro-ui/commit/548bf1e))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/nervjs/taro-ui/compare/v1.3.0...v1.3.2) (2018-10-19)


### Bug Fixes

* **accordion:** 小程序动画bug ([c435587](https://github.com/nervjs/taro-ui/commit/c435587))
* **button:** button的submit问题 ([807e024](https://github.com/nervjs/taro-ui/commit/807e024))
* **button:** 修复通栏按钮在父容器 flex 下的bug ([11806cb](https://github.com/nervjs/taro-ui/commit/11806cb))
* **component:** 修复组件的一些问题 ([a6c00df](https://github.com/nervjs/taro-ui/commit/a6c00df))
* **doc:** 完善 ActivityIndicator 的文档 ([6e9a63f](https://github.com/nervjs/taro-ui/commit/6e9a63f))
* **grid:** 修复图标父容器没有被完整填充 ([528e145](https://github.com/nervjs/taro-ui/commit/528e145))
* **input:** 删除onChange ([90c47a1](https://github.com/nervjs/taro-ui/commit/90c47a1))
* **input:** 去除 important ([f80ade7](https://github.com/nervjs/taro-ui/commit/f80ade7))
* **input:** 增加 focus 属性 ([0279161](https://github.com/nervjs/taro-ui/commit/0279161))
* **noticebar:** 修复样式问题 ([2cb269f](https://github.com/nervjs/taro-ui/commit/2cb269f))
* **search-bar:** fixed 状态下宽度问题 ([e8e0d47](https://github.com/nervjs/taro-ui/commit/e8e0d47))
* **search-bar:** 完善search-bar 文档 ([5c899b0](https://github.com/nervjs/taro-ui/commit/5c899b0))
* **swipe-action:** 修复交互问题 ([c06bb39](https://github.com/nervjs/taro-ui/commit/c06bb39))
* **taro-ui:** 修复若干issue问题, close [#83](https://github.com/nervjs/taro-ui/issues/83) [#54](https://github.com/nervjs/taro-ui/issues/54) [#53](https://github.com/nervjs/taro-ui/issues/53) ([b85a026](https://github.com/nervjs/taro-ui/commit/b85a026))
* **testcase:** 更新测试用例 ([77ed71b](https://github.com/nervjs/taro-ui/commit/77ed71b))


### Features

* **1px:** 优化组件细节，分隔线使用 1rpx ([3ed1e1c](https://github.com/nervjs/taro-ui/commit/3ed1e1c))
* **grid:** 新增 Grid 支持自定义Icon,修复Grid 的问题 ([e73374b](https://github.com/nervjs/taro-ui/commit/e73374b))
* **list:** 新增icon属性 ([51f853d](https://github.com/nervjs/taro-ui/commit/51f853d))
* **list:** 更新快照 ([4cfde6d](https://github.com/nervjs/taro-ui/commit/4cfde6d))
* **modal:** 新增 modal 遮罩层 可被点击取消 ([0de416f](https://github.com/nervjs/taro-ui/commit/0de416f))
* **swipe-action:** 完善测试案例 ([350f100](https://github.com/nervjs/taro-ui/commit/350f100))
* **tabs:** 增加垂直切换功能 ([956d99f](https://github.com/nervjs/taro-ui/commit/956d99f))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/nervjs/taro-ui/compare/v1.2.3...v1.3.0) (2018-10-09)


### Bug Fixes

* **accordion:** 增加默认开启状态 ([b1cddfb](https://github.com/nervjs/taro-ui/commit/b1cddfb))
* **list:** 修复switch 在禁用状态仍然可以切换 fixed [#95](https://github.com/nervjs/taro-ui/issues/95) ([f803697](https://github.com/nervjs/taro-ui/commit/f803697))
* **list:** 列表边框UI问题 ([faa1792](https://github.com/nervjs/taro-ui/commit/faa1792))
* **search-bar:** ios 溢出问题 ([4da14da](https://github.com/nervjs/taro-ui/commit/4da14da))
* **search-bar:** 样式优先级 ([01c9355](https://github.com/nervjs/taro-ui/commit/01c9355))


### Features

* **accordion:** 增加type ([32281fd](https://github.com/nervjs/taro-ui/commit/32281fd))
* **accordion:** 增加文档 ([b925a17](https://github.com/nervjs/taro-ui/commit/b925a17))
* **accordion:** 增加测试 ([ccfef15](https://github.com/nervjs/taro-ui/commit/ccfef15))
* **search-bar:** 增加types ([04136a6](https://github.com/nervjs/taro-ui/commit/04136a6))
* **slider:** 新增 Slider 组件 ([9fc6141](https://github.com/nervjs/taro-ui/commit/9fc6141))
* **Slider:** 添加测试用例 ([c9295f4](https://github.com/nervjs/taro-ui/commit/c9295f4))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/nervjs/taro-ui/compare/v1.2.2...v1.2.3) (2018-09-29)


### Bug Fixes

* **action-sheet:** 修复 ActionSheetFooter 样式问题 closed [#78](https://github.com/nervjs/taro-ui/issues/78) ([29a5c6c](https://github.com/nervjs/taro-ui/commit/29a5c6c))
* **action-sheet:** 完善 UI 问题 [#78](https://github.com/nervjs/taro-ui/issues/78) ([5aa472b](https://github.com/nervjs/taro-ui/commit/5aa472b))
* **button:** type - sendMessageTitle ([#86](https://github.com/nervjs/taro-ui/issues/86)) ([c4efbb2](https://github.com/nervjs/taro-ui/commit/c4efbb2))
* **button:** 修复button的ts警告问题 ([d4079bb](https://github.com/nervjs/taro-ui/commit/d4079bb))
* **button:** 修改button文档、avatar条件判断 ([1b8128c](https://github.com/nervjs/taro-ui/commit/1b8128c))
* **button:** 小程序button开放能力回调 ([1d6811d](https://github.com/nervjs/taro-ui/commit/1d6811d))
* **component:** 修复组件报参数类型错误的 warning ([9760c2f](https://github.com/nervjs/taro-ui/commit/9760c2f))
* **components:** 修复组件报错 ([05d035f](https://github.com/nervjs/taro-ui/commit/05d035f))
* **input:** fix [#85](https://github.com/nervjs/taro-ui/issues/85) types 错误 ([cb94a89](https://github.com/nervjs/taro-ui/commit/cb94a89))
* **input:** onClick type optional ([509fa35](https://github.com/nervjs/taro-ui/commit/509fa35))
* **input:** types ([2f37f15](https://github.com/nervjs/taro-ui/commit/2f37f15))
* **tabs:** 规范 css ([cf56b03](https://github.com/nervjs/taro-ui/commit/cf56b03))
* **types:** grid - columnNum ([#73](https://github.com/nervjs/taro-ui/issues/73)) ([04e08f8](https://github.com/nervjs/taro-ui/commit/04e08f8))
* [#84](https://github.com/nervjs/taro-ui/issues/84) style 为null 处理 ([b21a852](https://github.com/nervjs/taro-ui/commit/b21a852))
* 修复 types 缺少关键词 和 toast 无法自动关闭 ([bb0bfff](https://github.com/nervjs/taro-ui/commit/bb0bfff))


### Features

* **accordion:** 新增组件 ([daa7b57](https://github.com/nervjs/taro-ui/commit/daa7b57))
* **component:** 完成 SwipeAction 组件编写 ([5651075](https://github.com/nervjs/taro-ui/commit/5651075))
* **list:** 新增disabled 属性 closed [#90](https://github.com/nervjs/taro-ui/issues/90) ([4d710e4](https://github.com/nervjs/taro-ui/commit/4d710e4))
* **search-bar:** 按照设计稿修改 ([afca35f](https://github.com/nervjs/taro-ui/commit/afca35f))
* **search-bar:** 新增组件 ([63acb61](https://github.com/nervjs/taro-ui/commit/63acb61))
* **swipe-action:** 完善测试案例 ([2083653](https://github.com/nervjs/taro-ui/commit/2083653))
* **swipe-action:** 完成 SwipeAction 组件 + 编写文档 + 编写 d.ts 文件 ([8050f43](https://github.com/nervjs/taro-ui/commit/8050f43))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/nervjs/taro-ui/compare/v1.2.1...v1.2.2) (2018-09-20)


### Bug Fixes

* **button:** 修复button案例页 ([1439894](https://github.com/nervjs/taro-ui/commit/1439894))
* **docs:** 修复 flex 文档错误 ([a8bd73a](https://github.com/nervjs/taro-ui/commit/a8bd73a))
* **flex:** 无法换行问题 ([443c8e1](https://github.com/nervjs/taro-ui/commit/443c8e1))
* **input:** 修复 input name ([b4187f9](https://github.com/nervjs/taro-ui/commit/b4187f9))
* **overlay:** 修复 toast 遮罩层出现,仍然可以点击底部按钮 ([33cc812](https://github.com/nervjs/taro-ui/commit/33cc812))
* **toast:** overlay z-index ([30338e5](https://github.com/nervjs/taro-ui/commit/30338e5))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/nervjs/taro-ui/compare/v1.2.0...v1.2.1) (2018-09-15)


### Bug Fixes

* **pagination:** 暂时去掉pagination的picker ([94ddf71](https://github.com/nervjs/taro-ui/commit/94ddf71))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/nervjs/taro-ui/compare/v1.1.5...v1.2.0) (2018-09-15)


### Bug Fixes

* **component:** resolved [#55](https://github.com/nervjs/taro-ui/issues/55) ([1577fa4](https://github.com/nervjs/taro-ui/commit/1577fa4))
* **component:** 修复基类带来的 setData 错误 ([35b746c](https://github.com/nervjs/taro-ui/commit/35b746c))
* **doc:** 修复文档的错误 ([378f7f6](https://github.com/nervjs/taro-ui/commit/378f7f6))
* **drawer:** 修改初始状态 ([754317f](https://github.com/nervjs/taro-ui/commit/754317f))
* **flex:** 修复一些 flex 样式 ([454986b](https://github.com/nervjs/taro-ui/commit/454986b))
* **form:** 对齐属性 ([e632bfa](https://github.com/nervjs/taro-ui/commit/e632bfa))
* **input:** page 报错 ([7bbd02b](https://github.com/nervjs/taro-ui/commit/7bbd02b))
* **input:** types ([c20d44f](https://github.com/nervjs/taro-ui/commit/c20d44f))
* **input:** 删除无用测试 ([6c0e796](https://github.com/nervjs/taro-ui/commit/6c0e796))
* **input:** 对齐属性 ([21fa4da](https://github.com/nervjs/taro-ui/commit/21fa4da))
* **input:** 重新生成镜像 ([b077e3e](https://github.com/nervjs/taro-ui/commit/b077e3e))
* **page:** 修复展示页的问题 ([7f23458](https://github.com/nervjs/taro-ui/commit/7f23458))
* **pagination:** 修改分页组件 ([a89a713](https://github.com/nervjs/taro-ui/commit/a89a713))
* **tabs-pane:** 添加默认font-size ([759d924](https://github.com/nervjs/taro-ui/commit/759d924))
* **type:** 增加 customStyle ([65ed9b7](https://github.com/nervjs/taro-ui/commit/65ed9b7))
* 修改图标展示页 ([eca28d6](https://github.com/nervjs/taro-ui/commit/eca28d6))


### Features

* [#37](https://github.com/nervjs/taro-ui/issues/37) tabs 支持自动滑动 ([1e1753f](https://github.com/nervjs/taro-ui/commit/1e1753f))
* 增加 className 和 customStyle ([a0a7e3e](https://github.com/nervjs/taro-ui/commit/a0a7e3e))
* 增加 classNames 工具包 ([a9d52d3](https://github.com/nervjs/taro-ui/commit/a9d52d3))
* **taro-ui:** 增加customStyle ([c38b0a5](https://github.com/nervjs/taro-ui/commit/c38b0a5))
* 增加 placeholder 和 placeholderClass ([dbbf747](https://github.com/nervjs/taro-ui/commit/dbbf747))
* **@types:** className d.ts ([329e5b4](https://github.com/nervjs/taro-ui/commit/329e5b4))
* 增加 style props ([ac36240](https://github.com/nervjs/taro-ui/commit/ac36240))
* **taro-ui:** 添加className支持 ([d4230fc](https://github.com/nervjs/taro-ui/commit/d4230fc))
* 增加合并 style 公共函数 ([10bee2d](https://github.com/nervjs/taro-ui/commit/10bee2d))
* 对齐 textarea 属性 ([50a1102](https://github.com/nervjs/taro-ui/commit/50a1102))
* **1.2.0:** button等组件增加微信能力 ([c7cfa82](https://github.com/nervjs/taro-ui/commit/c7cfa82))
* **component:** 修复className 的问题 ([322b761](https://github.com/nervjs/taro-ui/commit/322b761))
* **component:** 增加className 的props ([0bd1be6](https://github.com/nervjs/taro-ui/commit/0bd1be6))
* **grid:** 增加 noBorder 的属性 ([3a7e8b9](https://github.com/nervjs/taro-ui/commit/3a7e8b9))
* **icon:** resolved [#26](https://github.com/nervjs/taro-ui/issues/26) 自定义 icon ([ed73c91](https://github.com/nervjs/taro-ui/commit/ed73c91))
* **icon:** 增加className 和 customStyle ([2c09511](https://github.com/nervjs/taro-ui/commit/2c09511))
* **input:** 增加 placeholderStyle 和 placeholderClass ([14caf3c](https://github.com/nervjs/taro-ui/commit/14caf3c))
* **input:** 增加className, customStyle ([6d455c7](https://github.com/nervjs/taro-ui/commit/6d455c7))
* **tabbar:** resolved [#36](https://github.com/nervjs/taro-ui/issues/36) tabbar 支持自定义 iconfont 图标 ([ff86663](https://github.com/nervjs/taro-ui/commit/ff86663))



<a name="1.1.5"></a>
## [1.1.5](https://github.com/nervjs/taro-ui/compare/v1.1.3...v1.1.5) (2018-09-05)



<a name="1.1.3"></a>
## [1.1.3](https://github.com/nervjs/taro-ui/compare/v1.1.1...v1.1.3) (2018-09-05)


### Bug Fixes

* **docs:** 增加 card 通栏字段 ([2059c19](https://github.com/nervjs/taro-ui/commit/2059c19))
* **pagination:** 修复分页组件 ([8f9ac2b](https://github.com/nervjs/taro-ui/commit/8f9ac2b))
* **radio:** 完善非必须props ([6d0d432](https://github.com/nervjs/taro-ui/commit/6d0d432))
* **tag:** 修复tag传参 ([1912a8b](https://github.com/nervjs/taro-ui/commit/1912a8b))
* **types:** AtCardProps ([6e418ef](https://github.com/nervjs/taro-ui/commit/6e418ef))
* **types:** AtInputNumberProps ([cc8a9bb](https://github.com/nervjs/taro-ui/commit/cc8a9bb))
* **types:** AtInputProps ([41970a6](https://github.com/nervjs/taro-ui/commit/41970a6))
* **types:** AtNavBarProps ([f331d9a](https://github.com/nervjs/taro-ui/commit/f331d9a))
* **types:** AtRateProps ([f01ee00](https://github.com/nervjs/taro-ui/commit/f01ee00))
* **types:** AtSegmentedControlProps ([159cb22](https://github.com/nervjs/taro-ui/commit/159cb22))
* **types:** AtSwitchProps ([80efa61](https://github.com/nervjs/taro-ui/commit/80efa61))
* **types:** AtTabBarProps ([8a75691](https://github.com/nervjs/taro-ui/commit/8a75691))
* **types:** AtTabsProps ([454a863](https://github.com/nervjs/taro-ui/commit/454a863))
* **types:** AtTextareaProps ([a1f70b8](https://github.com/nervjs/taro-ui/commit/a1f70b8))
* **types:** content is string array ([58f51e9](https://github.com/nervjs/taro-ui/commit/58f51e9))
* **types:** segmentedControl ([28c28fa](https://github.com/nervjs/taro-ui/commit/28c28fa))
* types ([a017ad0](https://github.com/nervjs/taro-ui/commit/a017ad0))
* types ([26ef8e0](https://github.com/nervjs/taro-ui/commit/26ef8e0))


### Features

* **test:** 完善 list 的测试案例 ([e84a182](https://github.com/nervjs/taro-ui/commit/e84a182))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/nervjs/taro-ui/compare/v1.1.0...v1.1.1) (2018-09-03)


### Bug Fixes

* [#32](https://github.com/nervjs/taro-ui/issues/32) tab 高度问题 ([7f62879](https://github.com/nervjs/taro-ui/commit/7f62879))
* **all:** 修复名字拼错 ([f4025ed](https://github.com/nervjs/taro-ui/commit/f4025ed))
* **demo:** 修复展示页面flex 没有偏移的问题 ([3791d95](https://github.com/nervjs/taro-ui/commit/3791d95))
* AtTimeLine -> AtTimeline ([65a07a5](https://github.com/nervjs/taro-ui/commit/65a07a5))
* remove `Math.abs` ([a2d6717](https://github.com/nervjs/taro-ui/commit/a2d6717))
* **list:** 修复 列表中缺少switch 的值 ([1feb327](https://github.com/nervjs/taro-ui/commit/1feb327))
* **tabbar:** 修复文档错误 ([76f7657](https://github.com/nervjs/taro-ui/commit/76f7657))
* **taro-ui:** 完善d.ts，修改若干bug ([e4832b8](https://github.com/nervjs/taro-ui/commit/e4832b8))
* **test:** 修复测试中的问题 ([c95bcef](https://github.com/nervjs/taro-ui/commit/c95bcef))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/nervjs/taro-ui/compare/v1.0.1...v1.1.0) (2018-08-30)


### Bug Fixes

* 增大图标 ([9a53c70](https://github.com/nervjs/taro-ui/commit/9a53c70))
* **build:** 删除 ActionSheet的测试案例 + 新增 types + 新增 base component 的引用 ([d441b69](https://github.com/nervjs/taro-ui/commit/d441b69))
* **component:** 修复 props 和 state 的 key 一致问题 ([ec822bc](https://github.com/nervjs/taro-ui/commit/ec822bc))
* **component:** 修复 弹出框底部可移动+ 判断环境执行 sysInfo 接口 ([198d88e](https://github.com/nervjs/taro-ui/commit/198d88e))
* **componnet:** 修复grid 点击触发的数据 ([90d4aa4](https://github.com/nervjs/taro-ui/commit/90d4aa4))
* 适配 taro beta.21 版本 ([53972b7](https://github.com/nervjs/taro-ui/commit/53972b7))


### Features

* **componnet:** 新增基类 ([7092b1f](https://github.com/nervjs/taro-ui/commit/7092b1f))
* 组件改为继承自 AtComponent 基类 ([87de708](https://github.com/nervjs/taro-ui/commit/87de708))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/nervjs/taro-ui/compare/v1.0.0...v1.0.1) (2018-08-28)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/nervjs/taro-ui/compare/v1.0.0-beta.4...v1.0.0) (2018-08-27)


### Bug Fixes

* **actionsheet:** 修复actionsheet 点击态 ([4cca3ef](https://github.com/nervjs/taro-ui/commit/4cca3ef))
* **components:** 修复组件中 this 丢失的问题 完善组件的 defaultProps 和 d.ts 的逻辑 ([f3eccf5](https://github.com/nervjs/taro-ui/commit/f3eccf5))
* 修复样式冲突 ([a52418e](https://github.com/nervjs/taro-ui/commit/a52418e))


### Features

* **docs:** 新增无边框的list 文档 ([2a5799d](https://github.com/nervjs/taro-ui/commit/2a5799d))
* 组件适配 iPhone X ([f7bbcfc](https://github.com/nervjs/taro-ui/commit/f7bbcfc))



<a name="1.0.0-beta.4"></a>
# [1.0.0-beta.4](https://github.com/nervjs/taro-ui/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2018-08-27)


### Bug Fixes

* **docs:** 修复文档标点符号问题 ([22ec476](https://github.com/nervjs/taro-ui/commit/22ec476))
* **docs:** 修复文档标点符号问题 ([49c8189](https://github.com/nervjs/taro-ui/commit/49c8189))
* **view:** badge层级 ([301fcd5](https://github.com/nervjs/taro-ui/commit/301fcd5))
* 修复 ActivityIndicator 打包的问题 ([5ff27af](https://github.com/nervjs/taro-ui/commit/5ff27af))


### Features

* **activity-indicator:** 更换Loading ([b216380](https://github.com/nervjs/taro-ui/commit/b216380))
* **types:** 完善 index 入口文件 ([a036aee](https://github.com/nervjs/taro-ui/commit/a036aee))
* **types:** 完成 types 的功能 ([b14eb43](https://github.com/nervjs/taro-ui/commit/b14eb43))
* **types:** 新增 type(d.ts) 文件 ([c70605c](https://github.com/nervjs/taro-ui/commit/c70605c))



<a name="1.0.0-beta.3"></a>
# [1.0.0-beta.3](https://github.com/nervjs/taro-ui/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2018-08-24)


### Bug Fixes

* **button:** small 状态的 loading 大小 ([d85d93d](https://github.com/nervjs/taro-ui/commit/d85d93d))
* **button:** 修复 loading ([c934714](https://github.com/nervjs/taro-ui/commit/c934714))
* **toast:** 修复toast数据没更新问题 ([a1006a6](https://github.com/nervjs/taro-ui/commit/a1006a6))


### Features

* 发布 v1.0.0-beta.2 ([956ede1](https://github.com/nervjs/taro-ui/commit/956ede1))
* **docs:** 改变flex的文档 ([2985d7b](https://github.com/nervjs/taro-ui/commit/2985d7b))
* **flex:** 缩短 Flex 样式的名称 ([7eacd91](https://github.com/nervjs/taro-ui/commit/7eacd91))



<a name="1.0.0-beta.2"></a>
# [1.0.0-beta.2](https://github.com/nervjs/taro-ui/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2018-08-23)


### Bug Fixes

* border 更改 ([5c5b6e9](https://github.com/nervjs/taro-ui/commit/5c5b6e9))
* icon 合并冲突，将type改为value ([a757215](https://github.com/nervjs/taro-ui/commit/a757215))
* mixin ([f6282dc](https://github.com/nervjs/taro-ui/commit/f6282dc))
* zindex 规范化 ([739f72f](https://github.com/nervjs/taro-ui/commit/739f72f))
* 体验细节修改 ([67cf35d](https://github.com/nervjs/taro-ui/commit/67cf35d))
* 修复 h5 细节 ([471e0ad](https://github.com/nervjs/taro-ui/commit/471e0ad))
* 修复 scss 变量相乘的问题 ([97d117b](https://github.com/nervjs/taro-ui/commit/97d117b))
* 修复h5 问题 ([1858b7a](https://github.com/nervjs/taro-ui/commit/1858b7a))
* 修复h5细节 ([c514972](https://github.com/nervjs/taro-ui/commit/c514972))
* 修复tabs 滚动时高度变化 ([4230a73](https://github.com/nervjs/taro-ui/commit/4230a73))
* 修复Toast loading 问题 + list 边框没对齐问题 ([1b296c2](https://github.com/nervjs/taro-ui/commit/1b296c2))
* 修复左栏点击有空隙 ([38621b2](https://github.com/nervjs/taro-ui/commit/38621b2))
* 修复组件样式失效 ([d465722](https://github.com/nervjs/taro-ui/commit/d465722))
* 修复细节 ([0f80f55](https://github.com/nervjs/taro-ui/commit/0f80f55))
* 修复细节问题 ([5bbd240](https://github.com/nervjs/taro-ui/commit/5bbd240))
* 修复首页展示错误 ([48f32cd](https://github.com/nervjs/taro-ui/commit/48f32cd))
* 修改展示页面 ([868dd6b](https://github.com/nervjs/taro-ui/commit/868dd6b))
* 出现 1px 空隙 ([c2cf407](https://github.com/nervjs/taro-ui/commit/c2cf407))
* 删除icon page 路径 ([53dd793](https://github.com/nervjs/taro-ui/commit/53dd793))
* 增加default props ([667b9c3](https://github.com/nervjs/taro-ui/commit/667b9c3))
* 居中icon ([64213b9](https://github.com/nervjs/taro-ui/commit/64213b9))
* 手机预览框被遮挡 ([49e808e](https://github.com/nervjs/taro-ui/commit/49e808e))
* 替换变量 ([bb0adfb](https://github.com/nervjs/taro-ui/commit/bb0adfb))
* 样式被注释了 ([afc6db8](https://github.com/nervjs/taro-ui/commit/afc6db8))
* 注释使用children的代码 ([143cbd0](https://github.com/nervjs/taro-ui/commit/143cbd0))
* 添加Modal ([1380e2a](https://github.com/nervjs/taro-ui/commit/1380e2a))
* **input:** 修复系列细节问题 ([e50da1b](https://github.com/nervjs/taro-ui/commit/e50da1b))
* 点击态问题 ([858b642](https://github.com/nervjs/taro-ui/commit/858b642))
* **action:** eslint action components again ([85c2df2](https://github.com/nervjs/taro-ui/commit/85c2df2))
* **action:** eslint actions components ([b9e3087](https://github.com/nervjs/taro-ui/commit/b9e3087))
* **action-input:** 适配h5 ([74d7389](https://github.com/nervjs/taro-ui/commit/74d7389))
* **actionsheet:** 修复ActionSheet的更新问题 ([4ad034a](https://github.com/nervjs/taro-ui/commit/4ad034a))
* **basic:** 修复样式 ([f402122](https://github.com/nervjs/taro-ui/commit/f402122))
* **basic:** 修复问题 ([f700b5d](https://github.com/nervjs/taro-ui/commit/f700b5d))
* **basic&view:** lint修复 ([8de1e5c](https://github.com/nervjs/taro-ui/commit/8de1e5c))
* **button:** 按钮样式 ([5680eef](https://github.com/nervjs/taro-ui/commit/5680eef))
* **checkbox:** 修复icon在wxapp不居中 ([ce3cbdb](https://github.com/nervjs/taro-ui/commit/ce3cbdb))
* **checkbox:** 更换图标 ([d060638](https://github.com/nervjs/taro-ui/commit/d060638))
* **component:** 修复action 和 layout的一些问题 ([3370937](https://github.com/nervjs/taro-ui/commit/3370937))
* **component:** 修复Modal FlotLayout 的体验问题 ([fcfc04d](https://github.com/nervjs/taro-ui/commit/fcfc04d))
* **component:** 修复组件体验问题 ([c8ad754](https://github.com/nervjs/taro-ui/commit/c8ad754))
* **components:** 检查PropType没有添加的组件 修复体验问题 ([85a4cbb](https://github.com/nervjs/taro-ui/commit/85a4cbb))
* **form:** 修复style类型报错 ([f55e170](https://github.com/nervjs/taro-ui/commit/f55e170))
* **form:** 增加border ([b31b236](https://github.com/nervjs/taro-ui/commit/b31b236))
* **h5:** 修复h5的体验问题 ([26b9bd2](https://github.com/nervjs/taro-ui/commit/26b9bd2))
* **input:** 修复h5 icon显示时高度变化 ([8b8eb2d](https://github.com/nervjs/taro-ui/commit/8b8eb2d))
* **input:** 修改示例图片路径 ([16241fe](https://github.com/nervjs/taro-ui/commit/16241fe))
* **input:** 垂直居中 ([267e332](https://github.com/nervjs/taro-ui/commit/267e332))
* **input:** 更换图标 ([c53594e](https://github.com/nervjs/taro-ui/commit/c53594e))
* **input:** 清除按钮点击事件 ([e976ca2](https://github.com/nervjs/taro-ui/commit/e976ca2))
* **input:** 调整间距 ([af9b537](https://github.com/nervjs/taro-ui/commit/af9b537))
* **input-number:** 修改input-number规格 ([2f03a8f](https://github.com/nervjs/taro-ui/commit/2f03a8f))
* **input-number:** 增加disabled ([19cc951](https://github.com/nervjs/taro-ui/commit/19cc951))
* **input-number:** 更换图标 ([a5b936f](https://github.com/nervjs/taro-ui/commit/a5b936f))
* **input-number:** 禁用时点击态不显示 ([13d120c](https://github.com/nervjs/taro-ui/commit/13d120c))
* **lint:** 关闭custom-component-children校验 ([4918e62](https://github.com/nervjs/taro-ui/commit/4918e62))
* **nav-bar:** 修改默认函数 ([073fbff](https://github.com/nervjs/taro-ui/commit/073fbff))
* **nav-bar:** 去除点击间隙 ([2f234c0](https://github.com/nervjs/taro-ui/commit/2f234c0))
* **nav-bar:** 文字溢出处理 ([991c1c8](https://github.com/nervjs/taro-ui/commit/991c1c8))
* **nav-bar:** 调整间距 ([d0641bb](https://github.com/nervjs/taro-ui/commit/d0641bb))
* **navbar:** 更换icon 顺序 ([993d88d](https://github.com/nervjs/taro-ui/commit/993d88d))
* **navigation:** timeline样式 ([c21c48f](https://github.com/nervjs/taro-ui/commit/c21c48f))
* **navigation:** timeline样式 ([d34713b](https://github.com/nervjs/taro-ui/commit/d34713b))
* **navigation:** 修复timeline ([68bb790](https://github.com/nervjs/taro-ui/commit/68bb790))
* **radio:** 更换图标 ([eee1ce1](https://github.com/nervjs/taro-ui/commit/eee1ce1))
* **rate:** 修改展示页 ([4820c6b](https://github.com/nervjs/taro-ui/commit/4820c6b))
* **rate:** 更换图标 ([fe57ab9](https://github.com/nervjs/taro-ui/commit/fe57ab9))
* **segmented-control:** h5预览细节调整 ([92d974d](https://github.com/nervjs/taro-ui/commit/92d974d))
* **segmented-control:** 修复边框问题 ([e1b1a16](https://github.com/nervjs/taro-ui/commit/e1b1a16))
* **segmented-control:** 细节问题 ([d45a321](https://github.com/nervjs/taro-ui/commit/d45a321))
* **segmented-control:** 解决溢出 ([d346c41](https://github.com/nervjs/taro-ui/commit/d346c41))
* **switch:** h5 switch 不靠右 ([3d461af](https://github.com/nervjs/taro-ui/commit/3d461af))
* **switch:** 变量替换 ([a878046](https://github.com/nervjs/taro-ui/commit/a878046))
* **tab-bar:** 修复溢出问题 ([7eb9619](https://github.com/nervjs/taro-ui/commit/7eb9619))
* **tabbar:** 修复体验问题 ([e6888a2](https://github.com/nervjs/taro-ui/commit/e6888a2))
* **tabs:** 内容溢出处理 ([10227fc](https://github.com/nervjs/taro-ui/commit/10227fc))
* **tabs:** 取消禁止默认事件 ([e76314f](https://github.com/nervjs/taro-ui/commit/e76314f))
* **tabs:** 隐藏滚动条 ([35db71d](https://github.com/nervjs/taro-ui/commit/35db71d))
* **taro-ui:** 修复问题 ([df1ada1](https://github.com/nervjs/taro-ui/commit/df1ada1))
* **taro-ui:** 修复问题 ([53555f9](https://github.com/nervjs/taro-ui/commit/53555f9))
* **taro-ui:** 修复问题 ([dedb8c7](https://github.com/nervjs/taro-ui/commit/dedb8c7))
* **taro-ui:** 修复问题 ([e56607e](https://github.com/nervjs/taro-ui/commit/e56607e))
* **textarea:** 调整高度 ([97cb452](https://github.com/nervjs/taro-ui/commit/97cb452))
* **view:** noticebar完善 ([f6806b9](https://github.com/nervjs/taro-ui/commit/f6806b9))
* **view:** 修复badge传参为空字符的情况 ([a6fc736](https://github.com/nervjs/taro-ui/commit/a6fc736))
* **view:** 修复noticebar ([f0739a7](https://github.com/nervjs/taro-ui/commit/f0739a7))
* **wxapp:** 处理兼容问题 ([45b11cb](https://github.com/nervjs/taro-ui/commit/45b11cb))
* 选中圆圈在h5不圆 ([e5d99c6](https://github.com/nervjs/taro-ui/commit/e5d99c6))


### Features

* **AcitonSheet:** 优化 ActionSheet 的样式 ([ca42bce](https://github.com/nervjs/taro-ui/commit/ca42bce))
* **action:**  更改命名、完成一期任务 ([d91ce31](https://github.com/nervjs/taro-ui/commit/d91ce31))
* **action:** 初步完成action 的优化 ([ee00565](https://github.com/nervjs/taro-ui/commit/ee00565))
* **action:** 初步完成action 组件的文档 ([44c684a](https://github.com/nervjs/taro-ui/commit/44c684a))
* **action:** 完善action文档 ([73b4abe](https://github.com/nervjs/taro-ui/commit/73b4abe))
* **action:** 完成 Activity Indicator 组件 ([5609737](https://github.com/nervjs/taro-ui/commit/5609737))
* **action-input:** 增加事件属性 ([f9004d8](https://github.com/nervjs/taro-ui/commit/f9004d8))
* **atui:** 提交按钮和icon ([1756135](https://github.com/nervjs/taro-ui/commit/1756135))
* **Avatar:** 优化 Avatar 的样式 ([0700c84](https://github.com/nervjs/taro-ui/commit/0700c84))
* **Badge:** 优化 Badge 组件样式 ([6305500](https://github.com/nervjs/taro-ui/commit/6305500))
* **base:** 按钮样式 ([af0158d](https://github.com/nervjs/taro-ui/commit/af0158d))
* **base:** 更新按钮 ([9a8da97](https://github.com/nervjs/taro-ui/commit/9a8da97))
* **Button:** 优化 Button 组件，完善 DEMO 页面 ([21a04b0](https://github.com/nervjs/taro-ui/commit/21a04b0))
* **Button:** 优化图标旋转的问题，更新展示页 ([0b93599](https://github.com/nervjs/taro-ui/commit/0b93599))
* **Button:** 按钮边框改为 1px ([8d6a19e](https://github.com/nervjs/taro-ui/commit/8d6a19e))
* **checkbox:** 修改示例 ([632c148](https://github.com/nervjs/taro-ui/commit/632c148))
* **checkbox:** 增加disabled状态 ([2206989](https://github.com/nervjs/taro-ui/commit/2206989))
* **Checkbox:** 修改 Checkbox 样式 ([e4496ae](https://github.com/nervjs/taro-ui/commit/e4496ae))
* **componnets:** 优化组件 layout 和 action ([e9d8ac2](https://github.com/nervjs/taro-ui/commit/e9d8ac2))
* **doc:** 完善 Button 组件展示页 ([63f5de4](https://github.com/nervjs/taro-ui/commit/63f5de4))
* **doc:** 完善 Noticebar 展示页 ([8a61a97](https://github.com/nervjs/taro-ui/commit/8a61a97))
* add progress ([45e41c7](https://github.com/nervjs/taro-ui/commit/45e41c7))
* article样式 ([d6d4085](https://github.com/nervjs/taro-ui/commit/d6d4085))
* 为input、textarea 增加placeholder mixin ([6a55443](https://github.com/nervjs/taro-ui/commit/6a55443))
* 修改动画时间 ([33dbd42](https://github.com/nervjs/taro-ui/commit/33dbd42))
* 升级 Taro 版本到 beta.6 ([8d2c0f5](https://github.com/nervjs/taro-ui/commit/8d2c0f5))
* 升级 Taro 至 beta5 ([6b5ae4d](https://github.com/nervjs/taro-ui/commit/6b5ae4d))
* 基础组件、视图组件 ([c6d13b0](https://github.com/nervjs/taro-ui/commit/c6d13b0))
* 增加disabled，active mixin ([7230d02](https://github.com/nervjs/taro-ui/commit/7230d02))
* 增加form表单 ([badbf2d](https://github.com/nervjs/taro-ui/commit/badbf2d))
* 增加jest测试 ([2f523d0](https://github.com/nervjs/taro-ui/commit/2f523d0))
* **docs:** 完善 PC 文档页面 ([9b17db8](https://github.com/nervjs/taro-ui/commit/9b17db8))
* 增加过渡效果 ([fd82138](https://github.com/nervjs/taro-ui/commit/fd82138))
* **doc:** 文档头部组件化 ([aab78e2](https://github.com/nervjs/taro-ui/commit/aab78e2))
* **doc:** 添加 PC 文档框架 ([624e733](https://github.com/nervjs/taro-ui/commit/624e733))
* **doc:** 添加字体展示页 ([2f73d2b](https://github.com/nervjs/taro-ui/commit/2f73d2b))
* **doc:** 添加颜色展示页 ([32eb71b](https://github.com/nervjs/taro-ui/commit/32eb71b))
* **doc:** 重构基础组件展示页 ([190bffa](https://github.com/nervjs/taro-ui/commit/190bffa))
* **doc:** 重构操作反馈展示页 ([5696ec1](https://github.com/nervjs/taro-ui/commit/5696ec1))
* **doc:** 重构视图展示页 ([9cc2ca8](https://github.com/nervjs/taro-ui/commit/9cc2ca8))
* **doc:** 重构表单组件展示页 ([d9645d4](https://github.com/nervjs/taro-ui/commit/d9645d4))
* **docs:** basic组件文档 ([db3b577](https://github.com/nervjs/taro-ui/commit/db3b577))
* **docs:** 修复一部分的文档问题 ([5971977](https://github.com/nervjs/taro-ui/commit/5971977))
* **docs:** 增加tag文档 ([881bc76](https://github.com/nervjs/taro-ui/commit/881bc76))
* **docs:** 增加文档 ([65cd80c](https://github.com/nervjs/taro-ui/commit/65cd80c))
* **docs:** 添加组件描述 ([1105b2f](https://github.com/nervjs/taro-ui/commit/1105b2f))
* **docs:** 调整grid 和 float-layout 的文档 ([8cef6a8](https://github.com/nervjs/taro-ui/commit/8cef6a8))
* **Form:** 优化样式 ([b0ff170](https://github.com/nervjs/taro-ui/commit/b0ff170))
* **Form:** 修改表单组件的样式 ([5acbef2](https://github.com/nervjs/taro-ui/commit/5acbef2))
* **grid:** add folder && file ([5a4d25f](https://github.com/nervjs/taro-ui/commit/5a4d25f))
* **ICON:** 更换 Loading 图标 ([e218090](https://github.com/nervjs/taro-ui/commit/e218090))
* **ICON:** 替换成自定义的图标库 ([7c1b388](https://github.com/nervjs/taro-ui/commit/7c1b388))
* **ICON:** 添加 alert 图标 ([34f5a1d](https://github.com/nervjs/taro-ui/commit/34f5a1d))
* **ICON:** 添加新图标 ([1342906](https://github.com/nervjs/taro-ui/commit/1342906))
* **Indicator:** 优化样式，新增图标 ([14d1990](https://github.com/nervjs/taro-ui/commit/14d1990))
* **input:** 增加autofocus属性 ([759a418](https://github.com/nervjs/taro-ui/commit/759a418))
* **input:** 增加onConfirm 事件 ([27e443b](https://github.com/nervjs/taro-ui/commit/27e443b))
* **input:** 增加控制input border props ([738b030](https://github.com/nervjs/taro-ui/commit/738b030))
* **Input:** 调整 Input 样式 ([5e2b435](https://github.com/nervjs/taro-ui/commit/5e2b435))
* **input-number:** 增加size参数 ([c968116](https://github.com/nervjs/taro-ui/commit/c968116))
* **input-number:** 自定义宽度 ([7a7ccf4](https://github.com/nervjs/taro-ui/commit/7a7ccf4))
* **layout:** list 增加 click 事件 ([0d80914](https://github.com/nervjs/taro-ui/commit/0d80914))
* **layout:** 初步完成layout 文档 ([f592688](https://github.com/nervjs/taro-ui/commit/f592688))
* **layout:** 初步完成layout组件bug ([c4ce79a](https://github.com/nervjs/taro-ui/commit/c4ce79a))
* **layout:** 增加layout文档的示例 ([b45464c](https://github.com/nervjs/taro-ui/commit/b45464c))
* **layout:** 完善flex布局示例 ([28de062](https://github.com/nervjs/taro-ui/commit/28de062))
* **layout:** 完善flex示例+修复actionsheet+修复Card ([3cebff3](https://github.com/nervjs/taro-ui/commit/3cebff3))
* **layout:** 完成Flex组件 ([3c44f30](https://github.com/nervjs/taro-ui/commit/3c44f30))
* **layout:** 完成float-layout组件 ([78ae374](https://github.com/nervjs/taro-ui/commit/78ae374))
* **layout:** 完成Grid组件 ([f9b104c](https://github.com/nervjs/taro-ui/commit/f9b104c))
* **layout:** 完成list组件 ([5b88597](https://github.com/nervjs/taro-ui/commit/5b88597))
* **layout:** 完成卡片组件 ([d39deb5](https://github.com/nervjs/taro-ui/commit/d39deb5))
* **layout:** 新增falot-layout动画效果 ([00cbf69](https://github.com/nervjs/taro-ui/commit/00cbf69))
* **Layout:** 调整布局组件的样式 ([6f6eae2](https://github.com/nervjs/taro-ui/commit/6f6eae2))
* **mixins:** 完善border-thin ([a349b70](https://github.com/nervjs/taro-ui/commit/a349b70))
* **Modal:** 优化样式，完善 DEMO 页 ([c258eff](https://github.com/nervjs/taro-ui/commit/c258eff))
* **nav-bar:** 修改nav-bar示例 ([80ca035](https://github.com/nervjs/taro-ui/commit/80ca035))
* **nav-bar:** 新增组件 ([c32f046](https://github.com/nervjs/taro-ui/commit/c32f046))
* **navigation:** drawer组件开发 ([dbf256c](https://github.com/nervjs/taro-ui/commit/dbf256c))
* **navigation:** 修复drawer组件 ([2249e79](https://github.com/nervjs/taro-ui/commit/2249e79))
* **navigation:** 分页组件 ([f1453bb](https://github.com/nervjs/taro-ui/commit/f1453bb))
* **navigation:** 增加timeline、drawer ([63a90dd](https://github.com/nervjs/taro-ui/commit/63a90dd))
* **navigation:** 增加分页组件 ([20dc1b9](https://github.com/nervjs/taro-ui/commit/20dc1b9))
* **Navigation:** 调整组件样式 ([18a6e44](https://github.com/nervjs/taro-ui/commit/18a6e44))
* **NoticeBar:** 优化通告栏样式 ([d2d98a9](https://github.com/nervjs/taro-ui/commit/d2d98a9))
* **Progress:** 优化样式，完善 DEMO ([3049115](https://github.com/nervjs/taro-ui/commit/3049115))
* **radio:** 增加disabled 状态 ([4a242b0](https://github.com/nervjs/taro-ui/commit/4a242b0))
* **Radio:** 修改组件的样式 ([ac30df9](https://github.com/nervjs/taro-ui/commit/ac30df9))
* **rate:** 支持显示半星 ([5fecea9](https://github.com/nervjs/taro-ui/commit/5fecea9))
* **segmented-control:** 新增组件 ([7ffbd71](https://github.com/nervjs/taro-ui/commit/7ffbd71))
* **switch:** 增加 border 开关 ([060b0b1](https://github.com/nervjs/taro-ui/commit/060b0b1))
* **switch:** 开放color props ([c18d3d7](https://github.com/nervjs/taro-ui/commit/c18d3d7))
* **switch:** 添加disabled 状态 ([54d55bd](https://github.com/nervjs/taro-ui/commit/54d55bd))
* **tab-bar:** 修改示例 ([a38da87](https://github.com/nervjs/taro-ui/commit/a38da87))
* **tab-bar:** 新增tab-bar ([df08626](https://github.com/nervjs/taro-ui/commit/df08626))
* **tab-bar:** 新增tab-bar组件 ([beeafd7](https://github.com/nervjs/taro-ui/commit/beeafd7))
* **tabs:** 修改示例页面 ([2bb73e2](https://github.com/nervjs/taro-ui/commit/2bb73e2))
* **tabs:** 增加动画 ([fa7a9c2](https://github.com/nervjs/taro-ui/commit/fa7a9c2))
* **tabs:** 增加动画，手势滑动 ([1c4fc7e](https://github.com/nervjs/taro-ui/commit/1c4fc7e))
* **tabs:** 新增 tab 标签页组件 ([d947ead](https://github.com/nervjs/taro-ui/commit/d947ead))
* **Tag:** 优化 Tag 样式 ([3f4ff4a](https://github.com/nervjs/taro-ui/commit/3f4ff4a))
* **Tag:** 边框改成 1px ([23d89e7](https://github.com/nervjs/taro-ui/commit/23d89e7))
* **textarea:** 增加props ([be97b36](https://github.com/nervjs/taro-ui/commit/be97b36))
* **textarea:** 增加字数显示开关 ([d5902e7](https://github.com/nervjs/taro-ui/commit/d5902e7))
* **textarea:** 自定义高度、超过字符红字提示 ([31d86fe](https://github.com/nervjs/taro-ui/commit/31d86fe))
* **toast:** 组件测试案例 ([0412ea4](https://github.com/nervjs/taro-ui/commit/0412ea4))
* **Toast:** 优化样式 ([1dccf04](https://github.com/nervjs/taro-ui/commit/1dccf04))
* **Toast:** 优化样式，完善 Demo 页面 ([00608c6](https://github.com/nervjs/taro-ui/commit/00608c6))
* **view:** noticebar增加文字滚动功能 ([b2da15f](https://github.com/nervjs/taro-ui/commit/b2da15f))
* **展示页:** 完善组件展示页 ([85fd7fe](https://github.com/nervjs/taro-ui/commit/85fd7fe))
* **文档:** 重构文档首页和列表页 ([9a4ce09](https://github.com/nervjs/taro-ui/commit/9a4ce09))
* 新增文档首页 ([fdeb3ba](https://github.com/nervjs/taro-ui/commit/fdeb3ba))
* 新增表单组件 ([c8b1fa3](https://github.com/nervjs/taro-ui/commit/c8b1fa3))
* 更改 mixins 引入路径&StyleLint ([485daad](https://github.com/nervjs/taro-ui/commit/485daad))
* 添加默认主题的 SCSS 变量 ([d79ebdf](https://github.com/nervjs/taro-ui/commit/d79ebdf))



