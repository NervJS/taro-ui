import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/form/checkbox/index',
      'pages/form/input/index',
      'pages/form/input-number/index',
      'pages/form/radio/index',
      'pages/form/textarea/index',
      'pages/form/switch/index',
      'pages/form/rate/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
