import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'

import AtComponent from '../../../common/component'

import './index.scss'

export default class AtActionSheetHeader extends AtComponent {
  render () {
    const rootClass = classNames('at-action-sheet-header', this.props.className)

    return (
      <View className={rootClass}>
        <Text>{this.props.children}</Text>
      </View>
    )
  }
}
