import classNames from 'classnames'
import React from 'react'
import { AtSwipeActionOptionsProps } from 'types/swipe-action'
import { View } from '@tarojs/components'
import { delayQuerySelector } from '../../../common/utils'

export default class AtSwipeActionOptions extends React.Component<
  AtSwipeActionOptionsProps
> {
  private trrigerOptionsDomUpadte(): void {
    delayQuerySelector(
      `#swipeActionOptions-${this.props.componentId}`,
      100
    ).then(res => {
      this.props.onQueryedDom(res[0])
    })
  }

  public componentDidMount(): void {
    this.trrigerOptionsDomUpadte()
  }

  public UNSAFE_componentWillReceiveProps(
    nextProps: AtSwipeActionOptionsProps
  ): void {
    if (nextProps.options !== this.props.options) {
      this.trrigerOptionsDomUpadte()
    }
  }

  public render(): JSX.Element {
    const rootClass = classNames(
      'at-swipe-action__options',
      this.props.className
    )

    return (
      <View
        id={`swipeActionOptions-${this.props.componentId}`}
        className={rootClass}
      >
        {this.props.children}
      </View>
    )
  }
}
