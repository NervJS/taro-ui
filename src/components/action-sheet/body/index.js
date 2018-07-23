import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtActionSheetItem from './item/index.js'

import './index.scss'

export default class AtActionSheetBody extends Taro.Component {
  static Item = AtActionSheetItem

  render () {
    const { children } = this.props
    return <View className='at-action-sheet-body'>{children}</View>
  }
}
