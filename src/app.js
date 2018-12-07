import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/panel/index',
      'pages/basic/icon/index',
      'pages/basic/button/index',
      'pages/basic/color/index',
      'pages/basic/typo/index',
      'pages/view/noticebar/index',
      'pages/view/badge/index',
      'pages/view/tag/index',
      'pages/view/avatar/index',
      'pages/view/article/index',
      'pages/view/timeline/index',
      'pages/view/swiper/index',
      'pages/view/load-more/index',
      'pages/view/divider/index',
      'pages/view/countdown/index',
      'pages/view/steps/index',
      'pages/view/curtain/index',
      'pages/action/toast/index',
      'pages/action/modal/index',
      'pages/action/progress/index',
      'pages/action/action-sheet/index',
      'pages/action/swipe-action/index',
      'pages/action/activity-indicator/index',
      'pages/action/message/index',
      'pages/navigation/drawer/index',
      'pages/navigation/pagination/index',
      'pages/navigation/tabs/index',
      'pages/navigation/tabbar/index',
      'pages/navigation/segmented-control/index',
      'pages/navigation/navbar/index',
      'pages/navigation/indexes/index',
      'pages/layout/flex/index',
      'pages/layout/grid/index',
      'pages/layout/float-layout/index',
      'pages/layout/card/index',
      'pages/layout/list/index',
      'pages/layout/accordion/index',
      'pages/form/checkbox/index',
      'pages/form/input/index',
      'pages/form/input-number/index',
      'pages/form/radio/index',
      'pages/form/textarea/index',
      'pages/form/switch/index',
      'pages/form/rate/index',
      'pages/form/picker/index',
      'pages/form/picker-view/index',
      'pages/form/slider/index',
      'pages/form/search-bar/index',
      'pages/form/image-picker/index',
      'pages/form/range/index',
      'pages/advanced/calendar/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
