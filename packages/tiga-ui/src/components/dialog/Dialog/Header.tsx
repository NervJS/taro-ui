import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtDialogHeaderProps } from '../../../../types/dialog'

const AtDialogHeader: React.FC<AtDialogHeaderProps> = ({ children }) => {
  const rootClass = classNames('at-dialog__header')
  return <View className={rootClass}>{children}</View>
}

export default AtDialogHeader
