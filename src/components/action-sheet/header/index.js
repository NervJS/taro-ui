import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtComponent from '../../../common/component'

import './index.scss'

export default class AtActionSheetHeader extends AtComponent {
  render () {
    return (
      <View className='at-action-sheet-header'>
        <Text>{this.props.children}</Text>
      </View>
    )
  }
}
