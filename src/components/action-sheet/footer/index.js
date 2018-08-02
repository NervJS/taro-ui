import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtActionSheetFooter extends Taro.Component {
  render () {
    const { onClick } = this.props
    return (
      <View className='at-action-sheet-footer' onClick={onClick}>
        {this.props.children}
      </View>
    )
  }
}
