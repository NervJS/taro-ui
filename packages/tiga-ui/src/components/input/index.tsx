import classNames from 'classnames'
import React, { useCallback, useState, useEffect } from 'react'
import { Input, Label, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtInputItemProps } from '../../../types/input'
import { BaseEventOrig, ITouchEvent } from '@tarojs/components/types/common'
import AtIcon from '../icon'
import AtButton from '../button'
type ExtendEvent = {
  target: {
    value: string
  }
}

const AtInput: React.FunctionComponent<AtInputItemProps> = props => {
  const {
    customStyle,
    name,
    disabled,
    required,
    title,
    rules,
    placeholderStyle,
    placeholder,
    placeholderClass,
    onFocus,
    onBlur,
    onChange,
    value,
    clearable,
    validMessage,
    children,
    prefix,
    iconName,
    iconSize,
    buttonTxt,
    buttonDisabled,
    onClick,
    onKeyboardHeightChange
  } = props
  const rootClass = classNames('at-input', {
    'at-input--error': validMessage,
    'at-input--disabled':
      (disabled && !buttonTxt) || (disabled && buttonTxt && buttonDisabled),
    'at-input__container--required': required
  })

  const placeholderCls = classNames('placeholder', placeholderClass)
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

  // const handleChange = useCallback(
  //   (event: BaseEventOrig<InputEventDetail>): void => {
  //     console.log(event.detail.value, 'value是什么')
  //     if (required && event.detail.value !== '') {
  //       setShowValid(false)
  //     }
  //     if (typeof onChange === 'function') {
  //       onChange(event.detail.value, event)
  //     }
  //   },
  //   []
  // )
  // const handleBlur = useCallback((event: any): void => {
  //   console.log('blur')
  //   if (typeof onBlur === 'function') {
  //     console.log('handleblurfunc')
  //   }
  //   if (rules && typeof rules === 'function') {
  //     const validres = rules(event.detail.value)
  //     setShowValid(!validres)
  //   }
  // }, [])

  const handleClear = useCallback(
    (event: ITouchEvent & ExtendEvent): void => {
      onChange('', event)
    },
    [onChange]
  )

  const handleKeyboardHeightChange = useCallback(
    (event: CommonEvent & ExtendEvent): void => {
      onKeyboardHeightChange(event)
    },
    []
  )
  return (
    <View className={rootClass} style={customStyle}>
      {title && (
        <View className='at-input__titlebox'>
          <Label
            className={`at-input__titlebox__title`}
            // for={name}
          >
            {title}
          </Label>
          {required && <View className='at-input__titlebox--required'>*</View>}
          <View className='at-input__titlebox--symbol'>{prefix}</View>
        </View>
      )}

      <View className='at-input-contentbox'>
        <View className='at-input__content'>
          <Input
            className='at-input__input'
            placeholderStyle={placeholderStyle}
            placeholderClass={placeholderCls}
            placeholder={placeholder}
            value={value}
            id={name}
            name={name}
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
                value='curtain_icon_cancel'
                size={16}
                style={{ color: 'gray' }}
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
              <AtIcon
                value={iconName}
                size={iconSize}
                style={{ color: 'gray' }}
              />
            </View>
          )}
          <View className='at-input__children'>{children}</View>
        </View>

        {!!showValid && !!validMessage && (
          <View className='at-input__errorword'>
            <Text className='at-input__word-alert'>{validMessage}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default AtInput
