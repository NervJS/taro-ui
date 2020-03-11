import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { AtActionSheetItemProps } from 'types/action-sheet'
import { View } from '@tarojs/components'

export default class AtActionSheetItem extends React.Component<
  AtActionSheetItemProps
> {
  public static defaultProps: AtActionSheetItemProps
  public static propTypes: InferProps<AtActionSheetItemProps>

  private handleClick = (args: any): void => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(args)
    }
  }

  public render(): JSX.Element {
    const rootClass = classNames('at-action-sheet__item', this.props.className)

    return (
      <View className={rootClass} onClick={this.handleClick}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetItem.propTypes = {
  onClick: PropTypes.func
}
