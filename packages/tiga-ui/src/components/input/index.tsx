import classNames from 'classnames'
import React, { useCallback, useState } from 'react'
import { Input, Label, View } from '@tarojs/components'
import {
  CommonEvent,
  ITouchEvent,
  BaseEventOrig
} from '@tarojs/components/types/common'
import {
  AtInputItemProps,
  KeyboardHeightEventDetail
} from '../../../types/input'
import AtIcon from '../icon'
import AtButton from '../button'
type ExtendEvent = {
  target: {
    value: string
  }
}

const AtInput: React.FunctionComponent<AtInputItemProps> = props => {
  const {
    value,
    disabled,
    required,
    title,
    placeholder,
    clearable,
    maxlength,
    children,
    prefix,
    iconName,
    iconSize,
    iconColor,
    buttonTxt,
    buttonDisabled,
    customStyle,
    onFocus,
    onBlur,
    onChange,
    onClick,
    onRules,
    onKeyboardHeightChange
  } = props
  const rootClass = classNames('at-input', {
    'at-input--disabled':
      (disabled && !buttonTxt) || (disabled && buttonTxt && buttonDisabled),
    'at-input__container--required': required
  })
  const [showValid, setShowValid] = useState(false)
  const handleChange = useCallback(
    (event: CommonEvent & ExtendEvent) => onChange?.(event.detail.value, event),
    [onChange]
  )
  const handleFocus = useCallback(
    (event: CommonEvent & ExtendEvent) => onFocus?.(event),
    [onFocus]
  )
  const handleBlur = useCallback(
    (event: CommonEvent & ExtendEvent) => onBlur?.(event),
    [onBlur]
  )

  const handleClear = useCallback(
    (event: ITouchEvent): void => {
      onChange?.('', event)
    },
    [onChange]
  )

  const handleKeyboardHeightChange = useCallback(
    (event: BaseEventOrig<KeyboardHeightEventDetail>): void => {
      onKeyboardHeightChange?.(event)
    },
    [onKeyboardHeightChange]
  )
  return (
    <View className={rootClass} style={customStyle}>
      {title && (
        <View className='at-input__titlebox'>
          <Label className={`at-input__titlebox__title`}>{title}</Label>
          {required && <View className='at-input__titlebox--required'>*</View>}
          {!!prefix && (
            <View className='at-input__titlebox--symbol'>{prefix}</View>
          )}
        </View>
      )}

      <View className='at-input-contentbox'>
        <View className='at-input__content'>
          <Input
            className='at-input__input'
            placeholder={placeholder}
            placeholder-style={'padding-bottom: 1rpx'}
            value={value}
            maxlength={maxlength}
            onInput={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyboardHeightChange={handleKeyboardHeightChange}
            disabled={disabled}
          />
          {clearable && value && (
            <View className='at-input__clear' onClick={handleClear}>
              <AtIcon
                className='at-input-icon'
                value='comm_icon_input_delete'
                color='#ccc'
                size={16}
              />
            </View>
          )}
          {buttonTxt && (
            <View className='at-input__button'>
              <AtButton
                size='small'
                type='secondary'
                disabled={buttonDisabled}
                onClick={onClick}
              >
                {buttonTxt}
              </AtButton>
            </View>
          )}
          {iconName && (
            <View className='at-input__icon'>
              <AtIcon value={iconName} size={iconSize} color={iconColor} />
            </View>
          )}
          <View className='at-input__children'>{children}</View>
        </View>

        {/* {!!showValid && !!validMessage && (
          <View className='at-input__errorword'>
            <Text className='at-input__word-alert'>{validMessage}</Text>
          </View>
        )} */}
      </View>
    </View>
  )
}

export default AtInput
