import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtModalHeader extends Component {
  render () {
    return <View className='at-modal-header'>{this.props.children}</View>
  }
}
