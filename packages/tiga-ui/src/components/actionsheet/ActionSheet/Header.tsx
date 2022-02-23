import React from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { AtActionSheetHeaderProps } from '../../../../types/action-sheet'

const AtActionSheetHeader: React.FC<AtActionSheetHeaderProps> = ({
  className,
  children
}) => {
  const rootClass = classNames('at-action-sheet__header', className)

  return <View className={rootClass}>{children}</View>
}

export default AtActionSheetHeader
