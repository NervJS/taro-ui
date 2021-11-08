import classNames from 'classnames'
import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import { AtModalContentProps } from '../../../../types/modal'

export default class AtModalContent extends React.Component<AtModalContentProps> {
  public render(): JSX.Element {
    const rootClass = classNames('at-modal__content', this.props.className)
    return (
      <View className={rootClass}>
        <ScrollView scrollY>{this.props.children}</ScrollView>
      </View>
    )
  }
}
