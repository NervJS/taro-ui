import React, { useEffect, useState, useCallback } from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import classNames from 'classnames'
import { AtActionSheetProps } from '../../../../types/action-sheet'
import AtActionSheetHeader from './Header'
import AtActionSheetBody from './Body'
import AtActionSheetFooter from './Footer'

const AtActionSheet: React.FC<AtActionSheetProps> = ({
  title,
  isOpened,
  className,
  children,
  cancelText = '取消',
  closeOnClickOverlay = true,
  onClose,
  onCancel
}) => {
  const [_isOpened, setOpen] = useState(isOpened)

  // tips: 外部状态更新，内部状态同步更新，内部状态更新时，
  // 如果没有通知外部改变状态的话，会有内外部状态不一致的问题
  useEffect(() => {
    setOpen(val => {
      if (isOpened !== val) {
        return isOpened
      }
      return val
    })
  }, [isOpened])

  const rootClass = classNames(
    'at-action-sheet',
    {
      'at-action-sheet--active': _isOpened
    },
    className
  )

  const handleTouchMove = useCallback((e: CommonEvent) => {
    e.stopPropagation()
  }, [])

  const handleCancel = useCallback(() => {
    if (typeof onCancel === 'function') {
      return onCancel()
    }
    onClose?.()
  }, [onClose, onCancel])

  const onInternalClose = useCallback(
    (e: CommonEvent) => {
      onClose?.(e)
      setOpen(false)
    },
    [onClose]
  )

  const handleClickOverlay = useCallback(
    (e: CommonEvent): void => {
      if (closeOnClickOverlay) {
        onInternalClose(e)
      }
    },
    [closeOnClickOverlay, onInternalClose]
  )

  return (
    <View className={rootClass} onTouchMove={handleTouchMove}>
      {/* RN 场景 overlay 不展示， opacity: 0 */}
      <View onClick={handleClickOverlay} className='at-action-sheet__overlay' />
      <View className='at-action-sheet__container'>
        {title && <AtActionSheetHeader>{title}</AtActionSheetHeader>}
        <AtActionSheetBody>{children}</AtActionSheetBody>
        {cancelText && (
          <AtActionSheetFooter onClick={handleCancel}>
            {cancelText}
          </AtActionSheetFooter>
        )}
      </View>
    </View>
  )
}

export default AtActionSheet
