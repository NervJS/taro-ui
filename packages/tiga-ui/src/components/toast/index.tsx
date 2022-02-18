import classNames from 'classnames'
import React, { useCallback, useState, useEffect } from 'react'
import { Image, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtToastProps } from '../../../types/toast'
import { PLATFORM } from '../../utils'
import statusImg from './img.json'

const DURATION_MAP = {
  short: 2000,
  long: 3500
}
const LEGAL_DURATION = ['auto', 'short', 'long']
const AtToast: React.FunctionComponent<AtToastProps> = props => {
  const { isRN } = PLATFORM
  const {
    image,
    text,
    icon,
    isOpened = false,
    status,
    maskHide,
    onClick,
    onClose,
    className,
    customStyle
  } = props
  let { duration = 'auto' } = props
  duration = LEGAL_DURATION.indexOf(duration) > -1 ? duration : 'auto'

  const rootClassName = 'at-toast'

  const [_isOpen, setOpen] = useState<boolean>(isOpened)
  const [_timer, setTimer] = useState<NodeJS.Timeout | null>(null)
  const [durationTimer, setDuration] = useState<number>(0)
  // 字符串duration转换准确时间
  useEffect(() => {
    if (duration === 'auto') {
      text && text.length > 8 ? setDuration(3500) : setDuration(2000)
      return
    }
    setDuration(DURATION_MAP[duration])
  }, [duration, text])
  // 同步外界isOpened状态
  useEffect(() => {
    setOpen(isOpened)
  }, [isOpened])
  const clearTimmer = useCallback((): void => {
    if (_timer) {
      clearTimeout(_timer)
      setTimer(null)
    }
  }, [_timer])
  const close = useCallback((): void => {
    if (_isOpen) {
      setOpen(false)
      clearTimmer()
    }
  }, [_isOpen, clearTimmer])
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
      if (status === 'loading') {
        return
      }
      if (onClick) {
        return onClick(event)
      }
      close()
    },
    [close, onClick, status]
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
  useEffect(() => {
    if (!_isOpen) {
      close()
      handleClose()
    } else {
      clearTimmer()
      makeTimer(durationTimer || 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_isOpen, durationTimer])

  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  const realImg = image || statusImg[status!] || null
  const isRenderIcon = !!(icon && !(image || statusImg[status!]))
  /* eslint-enable @typescript-eslint/no-non-null-assertion */

  const bodyClass = classNames('toast-body', {
    'at-toast__body--custom-image': image,
    'toast-body--text': !realImg && !icon,
    [`at-toast__body--${status}`]: !!status
  })

  const iconClass = classNames('at-icon', {
    [`at-icon-${icon}`]: icon
  })

  if (isRN) {
    return _isOpen ? (
      <View
        className={classNames('at-toast', 'leadingBorder')}
        // onClick={handleClick}
      >
        {/* <Text>抽风</Text> */}
        <View className='toast-body-content'>
          {text && (
            <View>
              <Text className='toast-body-content__info'>{text}</Text>
              <Text style={{ color: 'blue' }}>{text}</Text>
            </View>
          )}
        </View>
      </View>
    ) : null
  }
  const webToast = _isOpen ? (
    <View
      className={classNames(rootClassName, className)}
      onClick={handleClick}
    >
      {maskHide && <View className='at-toast__overlay' />}
      <View className={bodyClass} style={customStyle}>
        <View className='toast-body-content'>
          {realImg ? (
            <View className='toast-body-content__img'>
              <Image
                className='toast-body-content__img-item'
                src={realImg}
                mode='scaleToFill'
              />
            </View>
          ) : null}
          {isRenderIcon && (
            <View className='toast-body-content__icon'>
              <Text className={iconClass} />
            </View>
          )}
          {text && (
            <View className='toast-body-content__info'>
              <Text>{text}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  ) : null
  return webToast
}

AtToast.defaultProps = {
  duration: 'auto',
  isOpened: false
}

export default AtToast
