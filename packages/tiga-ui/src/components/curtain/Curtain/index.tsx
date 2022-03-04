import React, { useCallback, useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtCurtainMainProps } from '../../../../types/curtain'
import { PLATFORM } from '../../../utils'
import AtIcon from '../../icon'

const CurtainMain: React.FC<AtCurtainMainProps> = ({
  isOpened,
  children,
  className,
  customStyle,
  closeBtnPosition,
  onClose
}) => {
  const [_isOpened, setOpened] = useState(isOpened)

  const onInternalClose = useCallback(
    (e: CommonEvent) => {
      if (PLATFORM.isRN) {
        onClose(e)
      } else {
        e.stopPropagation()
        onClose(e)
      }
      setOpened(false)
    },
    [onClose]
  )

  useEffect(() => {
    setOpened(val => {
      if (val !== isOpened) {
        return isOpened
      }
      return val
    })
  }, [isOpened])

  const _stopPropagation = useCallback((e: CommonEvent) => {
    if (!PLATFORM.isRN) {
      e.stopPropagation()
    }
  }, [])

  const rootClass = classNames(
    {
      'at-curtain': true,
      'at-curtain--closed': !_isOpened
    },
    className
  )
  const btnCloseClass = classNames({
    'at-curtain__btn-close': true,
    [`at-curtain__btn-close--${closeBtnPosition}`]: closeBtnPosition
  })

  return (
    <View
      data-testid='at-curtain'
      className={rootClass}
      style={customStyle}
      onClick={_stopPropagation}
    >
      <View className='at-curtain__container'>
        <View className='at-curtain__body'>
          {children}
          <View
            data-testid='at-curtain__btn-close'
            className={btnCloseClass}
            onClick={onInternalClose}
          >
            <AtIcon
              className='at-curtain__btn-close--at-icon'
              value='curtain_icon_cancel'
              size={36}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default CurtainMain

CurtainMain.defaultProps = {
  className: '',
  isOpened: false,
  closeBtnPosition: 'bottom',
  onClose: (): void => {}
}
