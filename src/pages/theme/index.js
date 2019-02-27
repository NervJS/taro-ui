import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class PanelBasic extends Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  render () {
    return (
      <View>Theme</View>
    )
  }
}
