import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtActionSheetHeader extends Taro.Component {
  render () {
    return <View className='at-action-sheet-header'>{this.props.children}</View>
  }
}
