import React, { useCallback, useState } from 'react'
import { Button, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import classNames from 'classnames'
import { noop, PLATFORM } from '../../utils'
import { AtButtonProps } from '../../../types/button'

// RN 水平 padding
const PADDING_HORIZONTAL = {
  large: 16,
  medium: 16,
  small: 10,
  mini: 10,
  tiny: 10
}

// RN 描边宽度
const BORDER_WIDTH = 0.5

const AtButton: React.FC<AtButtonProps> = props => {
  const { isWEAPP, isWEB, isALIPAY, isRN } = PLATFORM
  const {
    disabled,
    type,
    size,
    className,
    customStyle,
    children,
    formType,
    openType,
    lang,
    sessionFrom,
    sendMessageTitle,
    sendMessagePath,
    sendMessageImg,
    showMessageCard,
    appParameter,
    onClick,
    onGetUserInfo,
    onGetPhoneNumber,
    onOpenSetting,
    onError,
    onContact
  } = props

  const rootClassName = 'at-button'
  const typeClassName = `at-button--${type}`
  const sizeClassName = `at-button--${size}`
  const textClassName = `at-button--${type}__text`
  const sizeTextClassName = `at-button--${size}__text`

  // RN 自动宽度
  const [width, setWidth] = useState<string | number>('auto')

  // RN 布局调整宽度
  const onLayout = useCallback(
    (event: any) => {
      const { width } = event.nativeEvent.layout
      const paddingHorizontal = size && PADDING_HORIZONTAL[size]
      const borderWidth = type !== 'primary' ? BORDER_WIDTH : 0
      if (paddingHorizontal) {
        const newWidth = width + paddingHorizontal * 2 + borderWidth * 2
        // TODO: fix: 解决动态计算 button 抖动问题
        if (borderWidth) {
          setWidth(Math.floor(newWidth))
        } else {
          setWidth(newWidth)
        }
      }
    },
    [size, type]
  )

  const _onClick = useCallback(
    (event: CommonEvent) => {
      if (disabled) {
        event.stopPropagation()
      } else {
        onClick && onClick(event)
      }
    },
    [disabled, onClick]
  )

  const webButton = (
    <Button
      className='at-button__wxbutton'
      lang={lang}
      formType={formType}
    ></Button>
  )

  const button = (
    <Button
      className='at-button__wxbutton'
      formType={formType}
      openType={openType}
      lang={lang}
      sessionFrom={sessionFrom}
      sendMessageTitle={sendMessageTitle}
      sendMessagePath={sendMessagePath}
      sendMessageImg={sendMessageImg}
      showMessageCard={showMessageCard}
      appParameter={appParameter}
      onGetUserInfo={onGetUserInfo}
      onGetPhoneNumber={onGetPhoneNumber}
      onOpenSetting={onOpenSetting}
      onError={onError}
      onContact={onContact}
    ></Button>
  )

  if (isRN) {
    return (
      <Button
        disabled={disabled}
        hoverStyle={{
          opacity: 0.6
        }}
        className={classNames(
          rootClassName,
          typeClassName,
          sizeClassName,
          className,
          {
            'at-button--disabled': disabled
          }
        )}
        style={Object.assign({ width, paddingHorizontal: 0 }, customStyle)}
        onClick={_onClick}
      >
        <View
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onLayout={onLayout}
          className={classNames(textClassName, sizeTextClassName)}
        >
          {children}
        </View>
      </Button>
    )
  }

  return (
    <View
      className={classNames(
        rootClassName,
        typeClassName,
        sizeClassName,
        className,
        {
          'at-button--disabled': disabled
        }
      )}
      style={customStyle}
      onClick={_onClick}
    >
      {isWEB && !disabled && webButton}
      {isWEAPP && !disabled && button}
      {isALIPAY && !disabled && button}
      <View className={classNames(textClassName, sizeTextClassName)}>
        {children}
      </View>
    </View>
  )
}

AtButton.displayName = 'AtButton'

AtButton.defaultProps = {
  size: 'medium',
  type: 'secondary',
  disabled: false,
  lang: 'zh_CN',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: '',
  onClick: noop
}

export default AtButton
