import React from 'react'
import { Button, Form, View, Text } from '@tarojs/components'
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

  const rootClassName = ''

  const webButton = (
    <Button
      className='at-button__wxbutton'
      // lang={lang}
      // formType={formType}
    ></Button>
  )

  const RNbutton = (
    <Button
      disabled={disabled}
      className={classNames(rootClassName, className)}
      style={customStyle}
      hoverStyle={{
        opacity: 0.6
      }}
      type={type !== 'primary' ? 'default' : 'primary'}
      size={size === 'medium' ? 'default' : 'mini'}
      onClick={onClick}
    >
      {type === 'secondary' && children ? (
        <Text className={`at-button--secondary--text at-button--${size}--text`}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Button>
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

  return (
    <View
      className={classNames(rootClassName, className)}
      style={customStyle}
      onClick={onClick}
    >
      {isWEB && !disabled && webButton}
      {isWEAPP && !disabled && (
        <Form
        // onSubmit={this.onSumit.bind(this)}
        // onReset={this.onReset.bind(this)}
        >
          {button}
        </Form>
      )}
      {isALIPAY && !disabled && button}
      {isRN && !disabled && RNbutton}
      <View className='at-button__text'>{children}</View>
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
