import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import classNames from 'classnames'
import AtDialogHeader from './header'
import AtDialogContent from './content'
import AtDialogWrapper from './wrapper'
import AtDialogFooter from './footer'
import { AtDialogProps } from '../../../types/dialog'
import { PLATFORM } from '../../utils'

const AtDialog: React.FC<AtDialogProps> = ({
  customStyle,
  className,
  children,
  isOpened,
  title,
  content,
  primaryText,
  secondaryText,
  tertiaryText,
  closeOnClickOverlay,
  onClose,
  onPrimary,
  onSecondary,
  onTertiary
}) => {
  const { isWEB } = PLATFORM
  const [_isOpened, setOpened] = useState(isOpened)
  // ========================== Init ==========================

  // ========================= Events =========================
  const onInternalClose = useCallback(
    (e: CommonEvent) => onClose?.(e),
    [onClose]
  )

  const handleTouchMove = useCallback((e: CommonEvent) => {
    e.stopPropagation()
  }, [])

  const handleClickOverlay = useCallback(
    (e: CommonEvent): void => {
      if (closeOnClickOverlay) {
        setOpened(false)
        onInternalClose(e)
      }
    },
    [closeOnClickOverlay, onInternalClose]
  )

  // ========================= Effect =========================
  useEffect(() => {
    if (isOpened) {
      setOpened(true)
    } else {
      setOpened(false)
    }
    return () => {}
  }, [isOpened])

  // ========================= Render =========================
  const rootClass = classNames(
    'at-dialog',
    {
      'at-dialog--active': _isOpened
    },
    className
  )
  const overlayClass = classNames('at-dialog__overlay', {
    'at-dialog__overlay--active': _isOpened
  })
  const containerClass = classNames('at-dialog__container', {
    'at-dialog__container--active': _isOpened
  })

  // 无标题：用户确认的内容，需控制在25字之内，超过使用标题。样式用标题的样式。
  if (!title) {
    if (content && content.length <= 25) {
      title = content
    }
  }

  let dialogContent: React.ReactNode | string | undefined = content
  if (content) {
    dialogContent = content
    if (isWEB) {
      dialogContent = (
        <Text
          dangerouslySetInnerHTML={{
            __html: content.replace(/\n/g, '<br/>')
          }}
        />
      )
    }
  } else {
    dialogContent = children
  }

  return (
    <View
      onTouchMove={handleTouchMove}
      className={rootClass}
      style={customStyle}
    >
      <View className={overlayClass} onClick={handleClickOverlay} />
      <View className={containerClass}>
        <AtDialogWrapper>
          {title && <AtDialogHeader>{title}</AtDialogHeader>}
          <AtDialogContent>{dialogContent}</AtDialogContent>
        </AtDialogWrapper>
        <AtDialogFooter
          primaryText={primaryText}
          secondaryText={secondaryText}
          tertiaryText={tertiaryText}
          onPrimary={onPrimary}
          onSecondary={onSecondary}
          onTertiary={onTertiary}
        />
      </View>
    </View>
  )
}

AtDialog.displayName = 'AtDialog'

AtDialog.defaultProps = {
  title: '',
  primaryText: '主要操作',
  isOpened: false,
  closeOnClickOverlay: false
}

export default AtDialog
