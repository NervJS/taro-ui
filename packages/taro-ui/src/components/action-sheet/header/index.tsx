import classNames from 'classnames'
import React from 'react'
import { AtActionSheetHeaderProps } from 'types/action-sheet'
import { View } from '@tarojs/components'

export default class AtActionSheetHeader extends React.Component<
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
