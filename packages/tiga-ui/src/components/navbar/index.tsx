import React, { useCallback } from 'react'
import { View } from '@tarojs/components'
import { navigateBack } from '@tarojs/taro'
import { AtNavBarProps } from '../../../types/nav-bar'
import AtIcon from '../icon'

const AtNavBar: React.FC<AtNavBarProps> = ({
  title,
  leftIcon,
  extra,
  customStyle,
  onBack
}) => {
  const rootClassName = 'at-nav-bar'

  const handleBack = useCallback(
    e => {
      if (typeof onBack === 'function') {
        return onBack(e)
      }
      return navigateBack()
    },
    [onBack]
  )

  return (
    <View className={rootClassName} style={customStyle}>
      <View className='at-nav-bar__back' onClick={handleBack}>
        {leftIcon}
      </View>
      <View className='at-nav-bar__title'>{title}</View>
      <View className='at-nav-bar__extra'>{extra}</View>
    </View>
  )
}

AtNavBar.defaultProps = {
  title: '自定义标题',
  leftIcon: <AtIcon value='comm_icon_left_line' size={18} />
}

AtNavBar.displayName = 'AtNavBar'

export default AtNavBar
