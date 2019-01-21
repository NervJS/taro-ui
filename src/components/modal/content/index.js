import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import AtComponent from '../../../common/component'

export default class AtModalContent extends AtComponent {
  render () {
    const rootClass = classNames('at-modal__content', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
