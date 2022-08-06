import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtFabProps } from '../../../types/fab'

export default class AtFab extends React.Component<AtFabProps> {
  public static defaultProps: AtFabProps
  public static propTypes: InferProps<AtFabProps>

  private onClick(e: CommonEvent): void {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(e)
    }
  }

  public render(): JSX.Element {
    const { size, className, children } = this.props

    const rootClass = classNames('at-fab', className, {
      [`at-fab--${size}`]: size
    })

    return (
      <View className={rootClass} onClick={this.onClick.bind(this)}>
        {children}
      </View>
    )
  }
}

AtFab.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  onClick: PropTypes.func
}

AtFab.defaultProps = {
  size: 'normal'
}
