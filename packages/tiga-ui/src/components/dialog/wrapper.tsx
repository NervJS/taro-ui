import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtDialogWrapperProps } from '../../../types/dialog'

const AtDialogWrapper: React.FC<AtDialogWrapperProps> = ({
  className,
  children
}) => {
  const rootClass = classNames('at-dialog__wrapper', className)
  return <View className={rootClass}>{children}</View>
}

export default AtDialogWrapper
