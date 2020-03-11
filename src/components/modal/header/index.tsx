import classNames from 'classnames'
import React from 'react'
import { AtModalHeaderProps } from 'types/modal'
import { View } from '@tarojs/components'

export default class AtModalHeader extends React.Component<AtModalHeaderProps> {
  public render(): JSX.Element {
    const rootClass = classNames('at-modal__header', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
