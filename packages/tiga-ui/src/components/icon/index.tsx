import classNames from 'classnames'
import React from 'react'
import { Text } from '@tarojs/components'
import { AtIconProps } from '../../../types/icon'
import { noop } from '../../utils'

const AtIcon: React.FC<AtIconProps> = ({
  value,
  size,
  color,
  className,
  customStyle,
  prefixClass,
  onClick
}) => {
  const iconName = value ? `${prefixClass}-${value}` : ''
  const rootClass = classNames('at-icon', iconName, className)
  const style = {
    color,
    fontSize: size + 'px',
    ...customStyle
  }

  return <Text className={rootClass} style={style} onClick={onClick} />
}

AtIcon.defaultProps = {
  prefixClass: 'at-icon',
  size: 16,
  color: '',
  onClick: noop
}

export default AtIcon
