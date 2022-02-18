import classNames from 'classnames'
import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import { AtDialogContentProps } from '../../../types/dialog'

const AtDialogContent: React.FC<AtDialogContentProps> = ({
  children,
  scrollY
}) => {
  const rootClass = classNames('at-dialog__content')
  if (!children) {
    return null
  }

  if (scrollY) {
    return (
      <ScrollView scrollY className={rootClass}>
        {children}
      </ScrollView>
    )
  }

  return <View className={rootClass}>{children}</View>
}

export default AtDialogContent
