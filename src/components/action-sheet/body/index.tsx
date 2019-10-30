import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { View } from '@tarojs/components'

import AtComponent from '../../../common/component'
import { AtActionSheetBodyProps } from 'types/action-sheet-body'

export default class AtActionSheetBody extends AtComponent<AtActionSheetBodyProps> {
  public render (): JSX.Element {
    const rootClass = classNames('at-action-sheet__body', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
