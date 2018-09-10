import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtComponent from '../../../common/component'

import './index.scss'

export default class AtModalContent extends AtComponent {
  render () {
    return (
      <View
        className={this.getClassName('at-modal-content', this.props.className)}
      >
        {this.props.children}
      </View>
    )
  }
}
