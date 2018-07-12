import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class Modal extends Taro.Component {
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
      <View className='modal-picker'>
        
      </View>
    )
  }
}
