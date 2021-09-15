import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtModalHeaderProps } from '../../../../types/modal'

export default class AtModalHeader extends React.Component<AtModalHeaderProps> {
  public render(): JSX.Element {
    const rootClass = classNames('at-modal__header', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
