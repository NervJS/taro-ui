import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtDialogActionProps } from '../../../../types/dialog'

const AtDialogAction: React.FC<AtDialogActionProps> = ({
  hasLeftBorder,
  children,
  type,
  onClick
}) => {
  const rootClass = classNames(
    'at-dialog__action',
    `at-dialog__action--${type}`,
    { 'at-dialog__action--border--left': hasLeftBorder }
  )

  return (
    <View
      className={rootClass}
      onClick={onClick}
      hoverStyle={{ backgroundColor: '#e0e0e0' }}
    >
      {children}
    </View>
  )
}

AtDialogAction.defaultProps = {
  type: 'primary',
  hasLeftBorder: false
}

export default AtDialogAction
