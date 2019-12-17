import * as React from 'nervjs'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../common/component'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
}


export default class AtTag extends AtComponent {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  onClick () {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick({ name: this.props.name, active: this.props.active })
    }
  }

  render () {
    const {
      size = 'normal',
      type = '',
      circle = false,
      disabled = false,
      active = false,
      customStyle,
    } = this.props
    const rootClassName = ['at-tag']

    const classObject = {
      [`at-tag--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      [`at-tag--${type}`]: TYPE_CLASS[type],
      'at-tag--disabled': disabled,
      'at-tag--active': active,
      'at-tag--circle': circle
    }

    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
        onClick={this.onClick.bind(this)}
      >
        {this.props.children}
      </View>
    )
  }
}

AtTag.defaultProps = {
  size: 'normal',
  type: '',
  name: '',
  circle: false,
  active: false,
  disabled: false,
  customStyle: {},
  onClick: () => {},
}

AtTag.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['', 'primary']),
  name: PropTypes.string,
  circle: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func,
}
