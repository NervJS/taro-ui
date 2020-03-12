import classNames from 'classnames'
import { AtActionSheetHeaderProps } from 'types/action-sheet'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../../common/component'

export default class AtActionSheetHeader extends AtComponent<
  AtActionSheetHeaderProps
> {
  public render(): JSX.Element {
    const rootClass = classNames(
      'at-action-sheet__header',
      this.props.className
    )

    return <View className={rootClass}>{this.props.children}</View>
  }
}
