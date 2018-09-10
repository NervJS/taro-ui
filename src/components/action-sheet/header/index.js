import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtComponent from '../../../common/component'

import './index.scss'

export default class AtActionSheetHeader extends AtComponent {
  render () {
    return (
      <View
        className={this.getClassName(
          'at-action-sheet-header',
          this.props.className
        )}
      >
        <Text>{this.props.children}</Text>
      </View>
    )
  }
}
