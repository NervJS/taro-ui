import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import AtComponent from '../../../common/component'

export default class AtModalHeader extends AtComponent {
  render () {
    const rootClass = classNames('at-modal-header', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
