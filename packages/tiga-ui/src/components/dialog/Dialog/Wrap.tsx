import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtDialogWrapProps } from '../../../../types/dialog'

const AtDialogWrapper: React.FC<AtDialogWrapProps> = ({
  className,
  children
}) => {
  const rootClass = classNames('at-dialog__wrap', className)
  return <View className={rootClass}>{children}</View>
}

export default AtDialogWrapper
