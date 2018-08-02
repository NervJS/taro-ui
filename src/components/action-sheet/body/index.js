import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtActionSheetBody extends Component {
  render () {
    return <View className='at-action-sheet-body'>{this.props.children}</View>
  }
}
