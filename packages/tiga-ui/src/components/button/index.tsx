import React from 'react'
import { Button, View } from '@tarojs/components'
import classNames from 'classnames'
import { noop, PLATFORM } from '../../utils'
import { AtButtonProps } from '../../../types/button'

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
  const webButton = (
    <Button
      // className='at-button__wxbutton'
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
        style={customStyle}
        onClick={onClick}
      >
        <View className={classNames(textClassName, sizeTextClassName)}>
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
      {/* {isRN && !disabled && RNbutton} */}
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
