import classNames from 'classnames'
import React, { useCallback, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import Modal from 'react-native-modal'
// import RootSiblings, { RootSiblingParent } from 'react-native-root-siblings'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtToastProps } from '../../../types/toast'

const DURATION_MAP = {
  short: 2000,
  long: 3500
}
const LEGAL_DURATION = ['auto', 'short', 'long']
const AtToast: React.FunctionComponent<AtToastProps> = props => {
  const {
    isOpened,
    text,
    children,
    maskHide,
    isShowInModal = false,
    onClick,
    onClose,
    customStyle,
    className
  } = props
  let { duration = 'auto' } = props
  duration = LEGAL_DURATION.indexOf(duration) > -1 ? duration : 'auto'

  const [_isOpened, setOpened] = useState<boolean>(isOpened)
  const [_timer, setTimer] = useState<NodeJS.Timeout | null>(null)
  const [durationTimer, setDuration] = useState<number>(0)
  const [layout, setLayout] = useState<any | null>(null)
  const rootStyle: any = {}
  if (!maskHide) {
    rootStyle.backgroundColor = 'rgba(0, 0, 0, 0.8)'
    rootStyle.borderRadius = '4px'
    rootStyle.marginLeft = layout ? (layout.width * -1) / 2 : 0
    rootStyle.marginTop = layout ? (layout.height * -1) / 2 : 0
    rootStyle.opacity = layout ? 1 : 0
  }
  const rootClass = classNames(
    {
      'at-toast': true,
      'at-toast--active': _isOpened,
      'at-toast--no-mask': !maskHide
    },
    className
  )
  const overlayClass = classNames('at-toast__overlay', {
    'at-toast__overlay--active': _isOpened
  })
  let toastContent: React.ReactNode | string | undefined = text
  if (text) {
    toastContent = text
  } else {
    toastContent = children
  }
  // ========================= Events =========================
  const clearTimmer = useCallback((): void => {
    if (_timer) {
      clearTimeout(_timer)
      setTimer(null)
    }
  }, [_timer])
  const close = useCallback((): void => {
    if (_isOpened) {
      setOpened(false)
    }
  }, [_isOpened])
  const makeTimer = useCallback(
    (durationTimer: number): void => {
      const tempTimer = setTimeout(() => {
        close()
      }, +durationTimer)
      setTimer(tempTimer)
    },
    [close]
  )
  const handleClick = useCallback(
    (event: CommonEvent): void => {
      if (onClick) {
        return onClick(event)
      }
      close()
    },
    [close, onClick]
  )
  const handleClose = useCallback(
    (event?: CommonEvent): void => {
      if (typeof onClose === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        onClose(event!)
      }
    },
    [onClose]
  )
  const onLayout = useCallback(
    (event): void => {
      if (_isOpened) {
        setLayout(event.nativeEvent.layout)
      }
    },
    [_isOpened]
  )
  // ========================= Effect =========================
  // 同步外界isOpened状态
  useEffect(() => {
    setOpened(val => {
      if (val !== isOpened) {
        return isOpened
      }
      return val
    })
  }, [isOpened])
  // 字符串duration转换准确时间
  useEffect(() => {
    if (duration === 'auto') {
      text && text.length > 8 ? setDuration(3500) : setDuration(2000)
      return
    }
    setDuration(DURATION_MAP[duration])
  }, [duration, text])
  useEffect(() => {
    if (!_isOpened) {
      handleClose()
    } else {
      clearTimmer()
      makeTimer(durationTimer || 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_isOpened])

  // ========================= Render =========================
  const BaseToast = (
    <View
      data-testid='at-toast'
      className={classNames(rootClass)}
      style={rootStyle}
      onClick={handleClick}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onLayout={onLayout}
    >
      {maskHide && <View className={classNames(overlayClass)} />}
      <View
        className={'at-toast-body'}
        data-testid='at-toast-body'
        style={customStyle}
      >
        {toastContent && (
          <View className='at-toast-body-content__info'>{toastContent}</View>
        )}
      </View>
    </View>
  )
  const ToastComponent = isShowInModal ? (
    <Modal
      animationIn='fadeIn'
      animationOut='fadeOut'
      isVisible={_isOpened}
      hasBackdrop={false}
      style={{
        margin: 0
      }}
    >
      {BaseToast}
    </Modal>
  ) : (
    BaseToast
  )
  return _isOpened ? ToastComponent : null
}

AtToast.defaultProps = {
  duration: 'auto',
  isOpened: false
}

export default AtToast
