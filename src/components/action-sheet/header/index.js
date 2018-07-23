import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtActionSheetHeader extends Taro.Component {
  render () {
    const { children } = this.props
    return <View className='at-action-sheet-header'>{children}</View>
  }
}
