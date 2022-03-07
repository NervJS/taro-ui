import classNames from 'classnames'
import React, { useCallback, useState, useEffect } from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtToastProps } from '../../../types/toast'
import { PLATFORM } from '../../utils'

const DURATION_MAP = {
  short: 2000,
  long: 3500
}
const { isWEB } = PLATFORM
const LEGAL_DURATION = ['auto', 'short', 'long']
const AtToast: React.FunctionComponent<AtToastProps> = props => {
  const { isOpened, text, children, maskHide, onClick, onClose, customStyle } =
    props
  let { duration = 'auto' } = props
  duration = LEGAL_DURATION.indexOf(duration) > -1 ? duration : 'auto'

  const rootClassName = 'at-toast'
  const [_isOpened, setOpened] = useState<boolean>(isOpened)
  const [_timer, setTimer] = useState<NodeJS.Timeout | null>(null)
  const [durationTimer, setDuration] = useState<number>(0)
  let toastContent: React.ReactNode | string | undefined = text
  if (text) {
    toastContent = text
    if (isWEB) {
      toastContent = (
        <Text
          dangerouslySetInnerHTML={{
            __html: text.replace(/\n/g, '<br/>')
          }}
        />
      )
    }
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
      clearTimmer()
    }
  }, [_isOpened, clearTimmer])
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
  // ========================= Effect =========================
  // 字符串duration转换准确时间
  useEffect(() => {
    if (duration === 'auto') {
      text && text.length > 8 ? setDuration(3500) : setDuration(2000)
      return
    }
    setDuration(DURATION_MAP[duration])
  }, [text, duration])

  // 同步外界isOpened状态
  useEffect(() => {
    setOpened(isOpened)
  }, [isOpened])

  // 初始化状态 设置定时器
  useEffect(() => {
    if (!_isOpened) {
      close()
      handleClose()
    } else {
      clearTimmer()
      makeTimer(durationTimer || 0)
    }
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_isOpened, durationTimer])

  // ========================= Render =========================
  const Toast = _isOpened ? (
    <View
      className={classNames(rootClassName)}
      style={customStyle}
      onClick={handleClick}
    >
      {maskHide && <View className='at-toast__overlay' />}
      <View className='at-toast-body'>
        {toastContent && (
          <View className='at-toast-body-content__info'>{toastContent}</View>
        )}
      </View>
    </View>
  ) : null
  return Toast
}

AtToast.defaultProps = {
  duration: 'auto',
  isOpened: false
}

export default AtToast
