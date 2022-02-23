import React from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { AtActionSheetBodyProps } from '../../../../types/action-sheet'

const AtActionSheetBody: React.FC<AtActionSheetBodyProps> = ({
  className,
  children
}) => {
  const rootClass = classNames('at-action-sheet__body', className)

  return <View className={rootClass}>{children}</View>
}

export default AtActionSheetBody
