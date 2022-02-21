import React, { useCallback } from 'react'
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
  const _onClose = useCallback(
    (e: CommonEvent) => {
      if (PLATFORM.isRN) {
        onClose(e)
      } else {
        e.stopPropagation()
        onClose(e)
      }
    },
    [onClose]
  )

  const _stopPropagation = useCallback((e: CommonEvent) => {
    if (!PLATFORM.isRN) {
      e.stopPropagation()
    }
  }, [])

  const curtainClass = classNames(
    {
      'at-curtain': true,
      'at-curtain--closed': !isOpened
    },
    className
  )
  const btnCloseClass = classNames({
    'at-curtain__btn-close': true,
    [`at-curtain__btn-close--${closeBtnPosition}`]: closeBtnPosition
  })

  return (
    <View
      className={curtainClass}
      style={customStyle}
      onClick={_stopPropagation}
    >
      <View className='at-curtain__container'>
        <View className='at-curtain__body'>
          {children}
          <View className={btnCloseClass} onClick={_onClose}>
            <AtIcon
              className='at-curtain__btn-close--at-icon'
              value='close'
              size={12}
              // customStyle={{ color: 'white' }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default CurtainMain

CurtainMain.defaultProps = {
  customStyle: '',
  className: '',
  isOpened: false,
  closeBtnPosition: 'bottom',
  onClose: (): void => {}
}
