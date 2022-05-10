import classNames from 'classnames'
import React, { useCallback, useState, useEffect, useRef } from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtToastProps } from '../../../types/toast'
import { PLATFORM, SYSTEMINFO, delayGetClientRect } from '../../utils'

const DURATION_MAP = {
  short: 2000,
  long: 3500
}
const { isWEB } = PLATFORM
const LEGAL_DURATION = ['auto', 'short', 'long']
const AtToast: React.FunctionComponent<AtToastProps> = props => {
  const {
    isOpened,
    text,
    children,
    maskHide,
    onClick,
    onClose,
    customStyle,
    className,
    isShowInModal
  } = props
  let { duration = 'auto' } = props
  duration = LEGAL_DURATION.indexOf(duration) > -1 ? duration : 'auto'

  const [_isOpened, setOpened] = useState<boolean>(isOpened)
  const [_timer, setTimer] = useState<NodeJS.Timeout | null>(null)
  const [durationTimer, setDuration] = useState<number>(0)
  const bodyRef = useRef<HTMLBaseElement | null>(null)
  const [marginLeft, setMarginLeft] = useState<number>(0)
  const [showToast, setShowToast] = useState(false)
  const rootClass = classNames(
    {
      'at-toast': true,
      'at-toast--active': _isOpened
    },
    className
  )
  const overlayClass = classNames('at-toast__overlay', {
    'at-toast__overlay--active': _isOpened
  })
  // fix：解决水平居中和最大宽度的冲突问题 如果在弹窗中就沿用left50%的效果
  // 否则正常用动态计算marginleft的那套逻辑
  const bodyClass = classNames(
    {
      'at-toast-body': true,
      'at-toast-center': !isShowInModal,
      'at-toast-inner-center': isShowInModal,
      'at-toast-body-opactiy': !showToast
    },
    className
  )
  // 动态计算出的marginleft值
  const marginStyle = !isShowInModal ? { marginLeft: `${marginLeft}px` } : ''
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
  // fix：解决水平居中和最大宽度的冲突问题
  // 动态计算 marginleft = 屏幕宽度-toast主体宽度  / 2
  const calMarginLeft = useCallback(() => {
    const screenWidth: number =
      document.querySelector('body')?.offsetWidth || SYSTEMINFO.windowWidth || 0
    delayGetClientRect({ selectorStr: '.at-toast-body', delayTime: 0 }).then(
      res => {
        const toastWidth = res[0].width || 0
        const dymMarginLeft = (screenWidth - toastWidth) / 2
        setMarginLeft(dymMarginLeft)
        setShowToast(true)
      }
    )
  }, [])

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
      // ui改进 有遮罩层点击不关
      if (!maskHide) {
        close()
      }
    },
    [close, maskHide, onClick]
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
    setOpened(val => {
      if (val !== isOpened) {
        return isOpened
      }
      return val
    })
  }, [isOpened])
  // 初始化状态 设置定时器
  useEffect(() => {
    if (!_isOpened) {
      // close()
      handleClose()
      setMarginLeft(0)
      setShowToast(false)
    } else {
      calMarginLeft()
      clearTimmer()
      makeTimer(durationTimer || 0)
    }
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_isOpened])

  // ========================= Render =========================
  const Toast = _isOpened ? (
    <View
      data-testid='at-toast'
      className={classNames(rootClass)}
      style={customStyle}
      onClick={handleClick}
    >
      {maskHide && <View className={classNames(overlayClass)} />}
      <View
        className={bodyClass}
        data-testid='at-toast-body'
        ref={bodyRef}
        style={marginStyle}
      >
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
