import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { AtActionSheetFooterProps } from 'types/action-sheet'
import { View } from '@tarojs/components'

export default class AtActionSheetFooter extends React.Component<
  AtActionSheetFooterProps
> {
  public static defaultProps: AtActionSheetFooterProps
  public static propTypes: InferProps<AtActionSheetFooterProps>

  private handleClick = (...args: any[]): void => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }

  public render(): JSX.Element {
    const rootClass = classNames(
      'at-action-sheet__footer',
      this.props.className
    )

    return (
      <View onClick={this.handleClick} className={rootClass}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}
