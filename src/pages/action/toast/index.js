import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor() {
    super(...arguments)
    this.atButton = ''
    this.state = {}
  }

  render() {
    return (
      <View className='index-page'>
        
        <View>
          <View>Taro UI Modal</View>
          <View>Alert Modal</View>
          <View>Confirm Modal</View>
          <View>Custom Modal</View>
        </View>
      </View>
    )
  }
}
