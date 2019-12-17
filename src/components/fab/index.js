import * as React from 'nervjs'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'

export default class AtFab extends AtComponent {
  onClick () {
    this.props.onClick && this.props.onClick(...arguments)
  }

  render () {
    const { size, className } = this.props

    const rootClass = classNames('at-fab', className, {
      [`at-fab--${size}`]: size
    })

    return (
      <View
        className={rootClass}
        onClick={this.onClick.bind(this)}
      >{this.props.children}</View>
    )
  }
}

AtFab.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  onClick: PropTypes.func,
}

AtFab.defaultProps = {
  size: 'normal',
  onClick: () => {},
}
