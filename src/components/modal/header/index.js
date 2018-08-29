import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtComponent from '../../../common/component'

import './index.scss'

export default class AtModalHeader extends AtComponent {
  render () {
    return <View className='at-modal-header'>{this.props.children}</View>
  }
}
