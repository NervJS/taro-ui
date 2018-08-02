import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtList extends Component {
  render () {
    return <View className='at-list'>{this.props.children}</View>
  }
}
