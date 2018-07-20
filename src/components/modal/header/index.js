import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class ModalHeader extends Taro.Component {
  constructor () {
    super(...arguments)
  }

  render () {
    const { children } = this.props
    return (
      <View className='at-modal-header'>{children}</View>
    )
  }
}
