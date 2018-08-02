import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtActionSheetItem extends Taro.Component {
  render () {
    const { onClick } = this.props
    return (
      <View className='at-action-sheet-item' onClick={onClick}>
        {this.props.children}
      </View>
    )
  }
}
