
# 更新日志

----

项目遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范

<div class="row changelog">
  <div class="at-timeline">
    <div class="at-timeline__item at-timeline__item--custom at-timeline__item--error">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot">
        <i class="icon icon-award"></i>
      </div>
      <div class="at-timeline__content">
        <p class="head">v2.3.0</p>
        <p class="time">
          <span>2020-02-29</span>
        </p>
        <ul class="content">
          <li><span>Calendar</span>修复因 key 重复导致的日期更新错位问题（<a href="https://github.com/nervjs/taro-ui/issues/853">#853</a>）</li>
          <li><span>ImagePicker</span>修复 AtImagePicker 的 onChange 首参类型错误（<a href="https://github.com/NervJS/taro-ui/issues/902">#902</a>）</li>
          <li><span>InputNumber</span>修复 AtInputNumber onChange 没有 Event 对象的问题 close（<a href="https://github.com/NervJS/taro-ui/issues/923">#923</a>）</li>
          <li><span>Model</span>修复 model content 在显示长文本时会溢出（<a href="https://github.com/NervJS/taro-ui/issues/954">#954</a>）</li>
          <li><span>Range</span>只有一个 value 变动的情况也触发渲染（<a href="https://github.com/NervJS/taro-ui/issues/952">#952</a>）</li>
          <li><span>Input</span>input 的 clear 清除问题（<a href="https://github.com/NervJS/taro-ui/issues/840">#840</a>）</li>
          <li><span>Modal</span>AtModal 模态框属性 isOpened 文档不对（<a href="https://github.com/NervJS/taro-ui/issues/844">#844</a>）</li>
          <li><span>ImagePicker</span>修复 ImagePicker 的 Length 属性可以为 0 的问题 close（<a href="https://github.com/NervJS/taro-ui/issues/901">#901</a>）</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--custom at-timeline__item--error">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot">
        <i class="icon icon-award"></i>
      </div>
      <div class="at-timeline__content">
        <p class="head">v2.2.0</p>
        <p class="time">
          <span>2019-06-12</span>
        </p>
        <ul class="content">
          <li><span>Calendar</span>组件新增仅显示有效时间组功能（<a href="https://github.com/NervJS/taro-ui/issues/527">#527</a>）</li>
          <li>修复<span>SearchBar</span>输入框文字显示不全的样式问题（<a href="https://github.com/NervJS/taro-ui/issues/539">#539</a>）</li>
          <li>修复<span>SwipeAction</span>新版本报错问题（<a href="https://github.com/NervJS/taro-ui/issues/574">#574</a>）</li>
          <li><span>SwipeAction</span>阻止滑动触发默认行为（<a href="https://github.com/NervJS/taro-ui/issues/525">#525</a>）</li>
          <li>修复<span>Accordion</span>组件折叠后高度仍保留的样式问题（<a href="https://github.com/NervJS/taro-ui/issues/629">#629</a>）</li>
          <li>修复<span>Typings</span></li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--custom at-timeline__item--error">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot">
        <i class="icon icon-award"></i>
      </div>
      <div class="at-timeline__content">
        <p class="head">v2.1.0</p>
        <p class="time">
          <span>2019-04-10</span>
        </p>
        <ul class="content">
          <li>新增<span>Fab</span>浮动按钮组件</li>
          <li><span>Input</span>组件事件返回值新增当前事件 event</li>
          <li><span>InputNumber</span>组件增加错误回调事件</li>
          <li><span>NavBar</span>组件支持自定义字体图标</li>
          <li><span>SearchBar</span>组件增加清除按钮回调事件</li>
          <li><span>TabBar</span>组件支持图片图标</li>
          <li>修复<span>Range</span>的排序问题（<a href="https://github.com/NervJS/taro-ui/issues/481">#481</a>）</li>
          <li>修复<span>Tabs</span>内容换行的问题（<a href="https://github.com/NervJS/taro-ui/issues/483">#483</a>）</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--custom at-timeline__item--error">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot">
        <i class="icon icon-award"></i>
      </div>
      <div class="at-timeline__content">
        <p class="head">v2.0.0</p>
        <p class="time">
          <span>2019-02-03</span>
        </p>
        <ul class="content">
          <li>适配<span>百度小程序</span></li>
          <li>优化<span>自定义主题</span>功能</li>
          <li>新增<span>红色主题</span></li>
          <li>重构<span>Accordion</span>组件</li>
          <li>修复<span>Calendar</span>组件 start 大于 end 的问题（<a href="https://github.com/NervJS/taro-ui/issues/366">#366</a>）</li>
          <li>修复<span>Checkbox</span>图标变形问题（<a href="https://github.com/NervJS/taro-ui/issues/378">#378</a>）</li>
          <li>修复<span>Form</span>组件中元素位置偏右的问题（<a href="https://github.com/NervJS/taro-ui/issues/158">#158</a>）</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--default">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot"></div>
      <div class="at-timeline__content">
        <p class="head">v2.0.0-beta.2</p>
        <p class="time">
          <span>2019-01-17</span>
        </p>
        <ul class="content">
          <li>日历组件新增<span>onSelectDate</span>方法</li>
          <li>修复<span>Calendar</span>组件 onMonthChange 触发的问题（<a href="https://github.com/NervJS/taro-ui/issues/305">#305</a>）</li>
          <li>修复<span>Countdown</span>组件因为 setState 引起倒计时停止的问题（<a href="https://github.com/NervJS/taro-ui/issues/333">#333</a>）</li>
          <li>修复<span>FloatLayout</span>组件滑动穿透的问题（<a href="https://github.com/NervJS/taro-ui/issues/352">#352</a>）</li>
          <li>新增<span>FloatLayout</span>组件标题不存在的容错处理（<a href="https://github.com/NervJS/taro-ui/issues/327">#327</a>）</li>
          <li>修复<span>Tabs</span>组件的二次点击问题（<a href="https://github.com/NervJS/taro-ui/issues/321">#321</a>）</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--custom at-timeline__item--error">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot">
        <i class="icon icon-award"></i>
      </div>
      <div class="at-timeline__content">
        <p class="head">v2.0.0-beta.1</p>
        <p class="time">
          <span>2019-01-03</span>
        </p>
        <ul class="content">
          <li>适配<span>支付宝小程序</span></li>
          <li>新增<span>自定义主题</span>功能</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--default">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot"></div>
      <div class="at-timeline__content">
        <p class="head">v1.5.4</p>
        <p class="time">
          <span>2018-12-30</span>
        </p>
        <ul class="content">
          <li>组件兼容<span>taro v1.2.3</span>版本</li>
          <li>修复<span>Countdown</span>组件 onTimeUp 事件多次触发的问题</li>
          <li>修复<span>ActionSheet</span>组件修改 state 无法变更 Title 的问题（<a href="https://github.com/NervJS/taro-ui/issues/269">#269</a>）</li>
          <li>修复组件中带有浮层的滑动穿透问题（<a href="https://github.com/NervJS/taro-ui/issues/286">#286</a>）</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--default">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot"></div>
      <div class="at-timeline__content">
        <p class="head">v1.5.3</p>
        <p class="time">
          <span>2018-12-25</span>
        </p>
        <ul class="content">
          <li><span>FloatLayout</span>组件新增 ScrollView 的属性配置（<a href="https://github.com/NervJS/taro-ui/issues/258">#258</a>）</li>
          <li><span>InputNumber</span>组件新增 onBlur 事件</li>
          <li>修复<span>ICON</span>组件的 rpx 转换问题（<a href="https://github.com/NervJS/taro-ui/issues/112">#112</a>）</li>
          <li>修复<span>ImagePicker</span>组件不能选择同一文件的问题</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--default">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot"></div>
      <div class="at-timeline__content">
        <p class="head">v1.5.2</p>
        <p class="time">
          <span>2018-12-13</span>
        </p>
        <ul class="content">
          <li>修复<span>Calendar</span>组件在禁止滑动状态下无法点击日期的问题</li>
          <li>修复<span>Textarea</span>组件配置 maxLength 无效的问题</li>
          <li>修复<span>CountDown</span>组件在页面隐藏时倒计时未停止的问题</li>
          <li>修复<span>Indexes</span>组件在 H5 下锚点定位错乱的问题</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--custom at-timeline__item--error">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot">
        <i class="icon icon-award"></i>
      </div>
      <div class="at-timeline__content">
        <p class="head">v1.5.0</p>
        <p class="time">
          <span>2018-11-27</span>
        </p>
        <ul class="content">
          <li>新增<span>AtImagePicker</span>图片选择器组件</li>
          <li>新增<span>AtRange</span>范围选择器组件</li>
          <li>新增<span>AtIndexes</span>索引选择器组件</li>
          <li>新增<span>AtCalendar</span>日历组件</li>
          <li>修复<span>AtInputNumber</span> max 值失效的问题（<a href="https://github.com/NervJS/taro-ui/issues/141">#141</a>）</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--custom at-timeline__item--error">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot">
        <i class="icon icon-award"></i>
      </div>
      <div class="at-timeline__content">
        <p class="head">v1.4.0</p>
        <p class="time">
          <span>2018-11-11</span>
        </p>
        <ul class="content">
          <li>新增<span>AtCountDown</span>组件</li>
          <li>新增<span>AtDivider</span>组件</li>
          <li>新增<span>AtLoadMore</span>组件</li>
          <li>新增<span>AtSteps</span>组件</li>
          <li>新增<span>AtCurtain</span>组件</li>
          <li>新增<span>AtMessage</span>组件</li>
          <li>修复<span>AtDrawer</span> onClose 事件重复触发的问题（<a href="https://github.com/NervJS/taro-ui/issues/167">#167</a>）</li>
          <li>修复<span>AtDrawer</span> 溢出滚动（<a href="https://github.com/NervJS/taro-ui/issues/132">#132</a>）</li>
          <li>修复<span>AtTabs</span> 在 iOS8 下展示异常（<a href="https://github.com/NervJS/taro-ui/issues/163">#163</a>）</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--default">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot"></div>
      <div class="at-timeline__content">
        <p class="head">v1.3.2</p>
        <p class="time">
          <span>2018-10-20</span>
        </p>
        <ul class="content">
          <li><span>Tabs</span>组件增加纵向布局</li>
          <li><span>Grid</span>组件支持自定义图标</li>
          <li><span>List</span>组件支持自定义图标</li>
          <li><span>Button</span>新增通栏按钮</li>
          <li><span>SwipeAction</span>交互优化</li>
          <li>部分组件的<span>1px</span>优化</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--custom at-timeline__item--error">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot">
        <i class="icon icon-award"></i>
      </div>
      <div class="at-timeline__content">
        <p class="head">v1.3.1</p>
        <p class="time">
          <span>2018-10-09</span>
        </p>
        <ul class="content">
          <li>新增<span>AtSlider</span>组件</li>
          <li>新增<span>AtSwipeAction</span>组件</li>
          <li>新增<span>AtSearchBar</span>组件</li>
          <li>新增<span>AtAccordion</span>组件</li>
          <li>修复<span>AtSwitch</span>在禁用状态仍然可以切换的问题（<a href="https://github.com/NervJS/taro-ui/issues/95">#95</a>）</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--default">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot"></div>
      <div class="at-timeline__content">
        <p class="head">v1.2.3</p>
        <p class="time">
          <span>2018-09-30</span>
        </p>
        <ul class="content">
          <li><span>AtListItem</span>组件新增<span>disabled</span>属性（<a href="https://github.com/NervJS/taro-ui/issues/90">#90</a>）</li>
          <li>开放<span>AtButton</span>小程序开放能力的回调</li>
          <li>完善声明文件<span>.d.ts</span></li>
          <li>修复<span>AtActionSheet</span>组件的样式问题（<a href="https://github.com/NervJS/taro-ui/issues/78">#78</a>）</li>
          <li>修复<span>style prop</span>传空时报错的问题（<a href="https://github.com/NervJS/taro-ui/issues/84">#84</a>） </li>
          <li>修复<span>AtToast</span>无法自动关闭的问题</li>
          <li>修复组件参数报<span>warning</span>的问题</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--default">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot"></div>
      <div class="at-timeline__content">
        <p class="head">v1.2.2</p>
        <p class="time">
          <span>2018-09-20</span>
        </p>
        <ul class="content">
          <li><span>AtInput</span>组件添加<span>name</span>参数支持</li>
          <li>修复<span>AtFlex</span>无法换行的问题</li>
          <li>修复<span>AtToast</span>组件的遮罩层无效的问题</li>
          <li>跳转<span>AtToast</span>组件的样式层级</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--default">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot"></div>
      <div class="at-timeline__content">
        <p class="head">v1.2.1</p>
        <p class="time">
          <span>2018-09-15</span>
        </p>
        <ul class="content">
          <li><span>AtButton</span>, <span>AtInput</span>, <span>AtTextarea</span>, <span>AtForm</span>组件属性和小程序对齐，例如支持<span>open-type</span></li>
          <li><span>AtAvatar</span>组件添加<span>open-data</span>适配</li>
          <li><span>AtIcon</span>, <span>AtTabBar</span>支持自定义图标</li>
          <li><span>AtTabs</span>组件支持自动滑动到选中项</li>
          <li><span>AtGrid</span>组件增加<span>noBorder</span>配置</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--default">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot"></div>
      <div class="at-timeline__content">
        <p class="head">v1.1.0</p>
        <p class="time">
          <span>2018-08-29</span>
        </p>
        <ul class="content">
          <li>组件添加<span>全局样式类</span>（<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html">小程序全局样式类</a>）</li>
          <li>添加<span>TypeScript</span>声明文件</li>
        </ul>
      </div>
    </div>
    <div class="at-timeline__item at-timeline__item--last at-timeline__item--custom at-timeline__item--error">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot">
        <i class="icon icon-award"></i>
      </div>
      <div class="at-timeline__content">
        <p class="head">v1.0.0</p>
        <p class="time">
          <span>2018-08-24</span>
        </p>
        <ul class="content">
          <li>发布<span>Taro UI</span>v1.0.0</li>
          <li>发布第一个版本，包含<span>33</span>个组件</li>
        </ul>
      </div>
    </div>
  </div>
</div>
