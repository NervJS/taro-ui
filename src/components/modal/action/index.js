import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import ModalButton from './button.js'

import './index.scss'

export default class ModalFooter extends Taro.Component {
  static Button = ModalButton

  render () {
    const { children } = this.props
    return (
      <View className='at-modal-footer'>
        <View className='at-modal-footer__action'>{children}</View>
      </View>
    )
  }
}
