import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/action/toast/index',
      // 'pages/action/modal/index',
      'pages/action/progress/index',
      // 'pages/action/action-sheet/index',
      'pages/action/activity-indicator/index',
      'pages/form/checkbox/index',
      'pages/form/input/index',
      'pages/form/input-number/index',
      'pages/form/radio/index',
      'pages/form/textarea/index',
      'pages/form/switch/index',
      'pages/form/rate/index',
      'pages/basic/icon/index',
      'pages/basic/button/index',
      'pages/view/noticebar/index',
      'pages/view/badge/index',
      'pages/view/tag/index',
      'pages/view/avatar/index',
      'pages/view/article/index',
      'pages/navigation/timeline/index',
      'pages/navigation/drawer/index',
      'pages/navigation/tabs/index',
      'pages/navigation/tab-bar/index'

      // 'pages/layout/flex/index'
      // 'pages/layout/grid/index',
      // 'pages/layout/float-layout/index',
      // 'pages/layout/card/index'
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
