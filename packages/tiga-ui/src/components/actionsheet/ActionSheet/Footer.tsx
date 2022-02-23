import React from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { AtActionSheetFooterProps } from '../../../../types/action-sheet'

const AtActionSheetFooter: React.FC<AtActionSheetFooterProps> = ({
  className,
  children,
  onClick
}) => {
  const rootClass = classNames('at-action-sheet__footer', className)

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
    </View>
  )
}

export default AtActionSheetFooter
