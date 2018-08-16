import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default class AtActionSheetHeader extends Component {
  render () {
    return (
      <View className='at-action-sheet-header'>
        <Text>{this.props.children}</Text>
      </View>
    )
  }
}
