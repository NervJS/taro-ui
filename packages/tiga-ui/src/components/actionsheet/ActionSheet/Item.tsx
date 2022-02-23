import React from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { AtActionSheetItemProps } from '../../../../types/action-sheet'

const AtActionSheetItem: React.FC<AtActionSheetItemProps> = ({
  className,
  children,
  subText,
  hasBottomBorder = true,
  onClick
}) => {
  const rootClass = classNames(
    'at-action-sheet__item',
    {
      'at-action-sheet__item--border-bottom': hasBottomBorder
    },
    className
  )

  const handleClick = (args: any): void => {
    if (typeof onClick === 'function') {
      onClick(args)
    }
  }

  return (
    <View
      className={rootClass}
      onClick={handleClick}
      hoverStyle={{
        backgroundColor: '#e0e0e0'
      }}
    >
      {children}
      {subText && (
        <View className='at-action-sheet__item--sub-text'>{subText}</View>
      )}
    </View>
  )
}

export default AtActionSheetItem
