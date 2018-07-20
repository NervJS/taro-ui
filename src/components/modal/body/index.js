import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class ModalFooter extends Taro.Component {
  render () {
    const { children } = this.props
    return <View className='at-modal-body'>{children}</View>
  }
}
