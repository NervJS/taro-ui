import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtModalContent extends Taro.Component {
  render () {
    return <View className='at-modal-content'>{this.props.children}</View>
  }
}
