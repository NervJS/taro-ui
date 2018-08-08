import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default class AtActionSheetHeader extends Taro.Component {
  render () {
    return (
      <View className='at-action-sheet-header'>
        <Text>{this.props.children}</Text>
      </View>
    )
  }
}
