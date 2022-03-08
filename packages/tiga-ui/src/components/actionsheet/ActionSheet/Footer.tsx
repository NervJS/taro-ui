import React, { useCallback, useMemo } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { AtActionSheetFooterProps } from '../../../../types/action-sheet'
import { PLATFORM } from '../../../utils'

const AtActionSheetFooter: React.FC<AtActionSheetFooterProps> = ({
  className,
  children,
  onClick
}) => {
  const rootClass = classNames('at-action-sheet__footer', className)

  const handleClick = useCallback(
    (args: any): void => {
      if (typeof onClick === 'function') {
        onClick(args)
      }
    },
    [onClick]
  )

  const restProps = useMemo(() => {
    const hoverStyle = {
      backgroundColor: '#e0e0e0'
    }

    return PLATFORM.isRN ? { hoverStyle } : {}
  }, [])

  return (
    <View {...restProps} className={rootClass} onClick={handleClick}>
      {children}
    </View>
  )
}

export default AtActionSheetFooter
