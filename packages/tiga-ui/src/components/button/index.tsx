import React, { useCallback, useState } from 'react'
import { Button, View } from '@tarojs/components'
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

const AtButton: React.FunctionComponent<AtButtonProps> = props => {
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
    onClick
  } = props

  const rootClassName = 'at-button'
  const typeClassName = `at-button--${type}`
  const sizeClassName = `at-button--${size}`
  const textClassName = `at-button--${type}__text`
  const sizeTextClassName = `at-button--${size}__text`

  // RN 自动宽度
  const [width, setWidth] = useState('auto')
  const onLayout = useCallback(
    (event: any) => {
      const { width } = event.nativeEvent.layout
      const paddingHorizontal = size && PADDING_HORIZONTAL[size]
      const borderWidth = type !== 'primary' ? BORDER_WIDTH : 0
      if (paddingHorizontal) {
        setWidth(width + paddingHorizontal * 2 + borderWidth * 2)
      }
    },
    [size, type]
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
      // sessionFrom={sessionFrom}
      // sendMessageTitle={sendMessageTitle}
      // sendMessagePath={sendMessagePath}
      // sendMessageImg={sendMessageImg}
      // showMessageCard={showMessageCard}
      // appParameter={appParameter}
      // onGetUserInfo={this.onGetUserInfo.bind(this)}
      // onGetPhoneNumber={this.onGetPhoneNumber.bind(this)}
      // onOpenSetting={this.onOpenSetting.bind(this)}
      // onError={this.onError.bind(this)}
      // onContact={this.onContact.bind(this)}
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
        onClick={onClick}
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
      onClick={onClick}
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

AtButton.defaultProps = {
  size: 'medium',
  type: 'secondary',
  full: false,
  disabled: false,
  onClick: noop
}

export default AtButton
