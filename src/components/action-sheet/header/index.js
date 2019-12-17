import * as React from 'nervjs'
import classNames from 'classnames'
import { View } from '@tarojs/components'

import AtComponent from '../../../common/component'

export default class AtActionSheetHeader extends AtComponent {
  render () {
    const rootClass = classNames('at-action-sheet__header', this.props.className)

    return <View className={rootClass}>{this.props.children}</View>
  }
}
