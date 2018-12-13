
# 更新日志

----

项目遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范

<div class="row changelog">
  <div class="at-timeline">
    <div class="at-timeline__item at-timeline__item--default">
      <div class="at-timeline__tail"></div>
      <div class="at-timeline__dot"></div>
      <div class="at-timeline__content">
        <p class="head">v1.5.2</p>
        <p class="time">
          <span>2018-12.13</span>
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
