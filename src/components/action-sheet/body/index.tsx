import classNames from 'classnames'
import { AtActionSheetBodyProps } from 'types/action-sheet'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../../common/component'

export default class AtActionSheetBody extends AtComponent<
  AtActionSheetBodyProps
> {
  public render(): JSX.Element {
    const rootClass = classNames('at-action-sheet__body', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
