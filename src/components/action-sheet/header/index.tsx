import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { View } from '@tarojs/components'

import AtComponent from '../../../common/component'
import { AtActionSheetHeaderProps } from 'types/action-sheet'

export default class AtActionSheetHeader extends AtComponent<AtActionSheetHeaderProps> {
  public render (): JSX.Element {
    const rootClass = classNames('at-action-sheet__header', this.props.className)

    return <View className={rootClass}>{this.props.children}</View>
  }
}
