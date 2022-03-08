import classNames from 'classnames'
import React, { useMemo } from 'react'
import { View } from '@tarojs/components'
import { AtDialogActionProps } from '../../../../types/dialog'
import { PLATFORM } from '../../../utils'

const AtDialogAction: React.FC<AtDialogActionProps> = ({
  hasLeftBorder,
  children,
  type,
  onClick
}) => {
  const rootClass = classNames(
    'at-dialog__action',
    `at-dialog__action--${type}`,
    { 'at-dialog__action--border-left': hasLeftBorder }
  )

  const restProps = useMemo(() => {
    const hoverStyle = {
      backgroundColor: '#e0e0e0'
    }

    return PLATFORM.isRN ? { hoverStyle } : {}
  }, [])

  return (
    <View {...restProps} className={rootClass} onClick={onClick}>
      {children}
    </View>
  )
}

AtDialogAction.defaultProps = {
  type: 'primary',
  hasLeftBorder: false
}

export default AtDialogAction
