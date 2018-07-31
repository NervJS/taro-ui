import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtGrid extends Taro.Component {
  render () {
    return <View className='at-list'>{this.props.children}</View>
  }
}
