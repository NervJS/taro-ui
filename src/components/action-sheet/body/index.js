import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtComponent from '../../../common/component'

import './index.scss'

export default class AtActionSheetBody extends AtComponent {
  render () {
    return <View className='at-action-sheet-body'>{this.props.children}</View>
  }
}
