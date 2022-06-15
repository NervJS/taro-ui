import React, { useEffect, useState, useCallback } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Switch } from '@tarojs/components'
import { AtSwitchProps } from '../../../types/switch'

const defaultValues = {
  color: '#ff4d13',
  checked: false,
  disabled: false
}

const AtSwitch: React.FC<AtSwitchProps> = props => {
  const {
    checked,
    disabled,
    className,
    customStyle,
    color = defaultValues.color,
    onChange
  } = props

  const [_checked, setChecked] = useState(!!checked)
  const rootClassName = classNames('at-switch', className, {
    'at-switch__disabled': disabled
  })

  const handleChange = useCallback(
    event => {
      const { value, checked } = event.detail
      const state = typeof value === 'undefined' ? checked : value
      if (onChange) {
        onChange(state)
      }
    },
    [onChange]
  )

  useEffect(() => {
    setChecked(v => {
      if (v !== _checked) {
        return _checked
      }
      return v
    })
  }, [_checked])

  return (
    <Switch
      style={customStyle}
      disabled={disabled}
      className={rootClassName}
      checked={_checked}
      color={color}
      onChange={handleChange}
    />
    // <View className={rootCls} style={customStyle}>
    //   <View className='at-switch__title'>{title}</View>
    //   <View className={containerCls}>
    //     <View className='at-switch__mask'></View>
    //     <Switch
    //       className='at-switch__switch'
    //       checked={checked}
    //       color={color}
    //       onChange={handleChange}
    //     />
    //   </View>
    // </View>
  )
}

AtSwitch.defaultProps = defaultValues

AtSwitch.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.oneOfType([PropTypes.string]),
  color: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

export default AtSwitch
