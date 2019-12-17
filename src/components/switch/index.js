import * as React from 'nervjs'
import { View, Switch } from '@tarojs/components'
import PropTypes from 'prop-types'
import _isUndefined from 'lodash/isUndefined'
import classNames from 'classnames'

import AtComponent from '../../common/component'

export default class AtSwitch extends AtComponent {
  handleChange = (event, ...arg) => {
    const { value, checked } = event.detail
    const state = _isUndefined(value) ? checked : value
    this.props.onChange(state, event, ...arg)
  }

  render () {
    const {
      customStyle,
      className,
      disabled,
      border,
      title,
      checked,
      color
    } = this.props

    const rootCls = classNames('at-switch', {
      'at-switch--without-border': !border
    }, className)
    const containerCls = classNames('at-switch__container', {
      'at-switch--disabled': disabled
    })

    return <View className={rootCls} style={customStyle}>
      <View className='at-switch__title'>{title}</View>
      <View className={containerCls}>
        <View className='at-switch__mask'></View>
        <Switch
          className='at-switch__switch'
          checked={checked}
          color={color}
          onChange={this.handleChange}
        />
      </View>
    </View>
  }
}

AtSwitch.defaultProps = {
  customStyle: '',
  className: '',
  title: '',
  color: '#6190e8',
  border: true,
  disabled: false,
  checked: false,
  onChange: () => {},
}

AtSwitch.propTypes = {
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  title: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}
