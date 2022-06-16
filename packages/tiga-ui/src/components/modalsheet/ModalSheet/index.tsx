import React, { useEffect, useState, useCallback } from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import classNames from 'classnames'
import { AtModalSheetProps } from '../../../../types/modal-sheet'
import AtModalContainer from './Container'
import AtModalSheetHeader from './Header'
import AtModalSheetBody from './Body'

const AtActionSheet: React.FC<AtModalSheetProps> = ({
  title,
  isOpened,
  className,
  children,
  cancelText,
  resetText,
  confirmText,
  closeIcon,
  closeOnClickOverlay = true,
  onClose,
  onCancel,
  onReset,
  onConfirm
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
    'at-modal-sheet',
    {
      'at-modal-sheet--active': _isOpened
    },
    className
  )

  const handleTouchMove = useCallback((e: CommonEvent) => {
    e.stopPropagation()
  }, [])

  const handleCancel = useCallback(() => {
    if (typeof onCancel === 'function') {
      onCancel()
    }
    if (typeof onClose === 'function') {
      onClose()
    }
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
      <View
        data-testid='at-modal-sheet__overlay'
        onClick={handleClickOverlay}
        className='at-modal-sheet__overlay'
      />
      <AtModalContainer>
        <AtModalSheetHeader
          cancelText={cancelText}
          resetText={resetText}
          confirmText={confirmText}
          closeIcon={closeIcon}
          onCancel={handleCancel}
          onReset={onReset}
          onConfirm={onConfirm}
          onClose={onInternalClose}
        >
          {title}
        </AtModalSheetHeader>
        <AtModalSheetBody>{children}</AtModalSheetBody>
      </AtModalContainer>
    </View>
  )
}

export default AtActionSheet
