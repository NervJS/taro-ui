import React, { useCallback } from 'react'
import { Textarea, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import classNames from 'classnames'
import { AtTextareaProps } from '../../../types/textarea'
import { pxTransform } from '../../utils'

type ExtendEvent = {
  target: {
    value: string
  }
}

function getMaxLength(
  maxLength: number,
  textOverflowForbidden: boolean
): number {
  if (!textOverflowForbidden) {
    return maxLength + 500
  }
  return maxLength
}

const AtTextarea: React.FC<AtTextareaProps> = props => {
  const {
    customStyle,
    className,
    value,
    title,
    extra,
    count,
    height,
    required,
    message,
    cursorSpacing,
    placeholder,
    placeholderStyle,
    placeholderClass,
    maxLength = 200,
    disabled,
    autoFocus,
    focus,
    showConfirmBar,
    selectionStart,
    selectionEnd,
    fixed,
    textOverflowForbidden,
    onChange,
    onFocus,
    onBlur,
    onConfirm,
    onLinechange
  } = props

  const rootClassName = classNames('at-textarea', className)

  const handleInput = useCallback(
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
  const handleConfirm = useCallback(
    (event: CommonEvent & ExtendEvent) => onConfirm?.(event),
    [onConfirm]
  )
  const handleLinechange = useCallback(
    (event: CommonEvent & ExtendEvent) => onLinechange?.(event),
    [onLinechange]
  )

  const _maxLength = textOverflowForbidden
    ? +maxLength
    : getMaxLength(+maxLength, !!textOverflowForbidden)

  const textareaStyle = height ? { height: pxTransform(height) } : {}

  return (
    <View className={rootClassName} style={customStyle}>
      {title && (
        <View className='at-textarea__header'>
          {required && <View className='at-textarea__header--required'>*</View>}
          <View className='at-textarea__header--title'>{title}</View>
          <View className='at-textarea__header__extra'>{extra}</View>
        </View>
      )}
      <Textarea
        className='at-textarea__input'
        style={textareaStyle}
        placeholderStyle={placeholderStyle}
        placeholderClass={placeholderClass}
        cursorSpacing={cursorSpacing}
        value={value}
        maxlength={_maxLength}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        focus={focus}
        showConfirmBar={showConfirmBar}
        selectionStart={selectionStart}
        selectionEnd={selectionEnd}
        fixed={fixed}
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onConfirm={handleConfirm}
        onLineChange={handleLinechange}
      />
      <View className='at-textarea__footer'>
        {message && (
          <View className='at-textarea__footer--error'>{message}</View>
        )}
        {!message && count && <View className='at-textarea__footer--gap' />}
        {count && (
          <View
            className={classNames('at-textarea__footer--count', {
              'at-textarea__footer--count__error': value.length > maxLength
            })}
          >
            {value.length}/{maxLength}
          </View>
        )}
      </View>
    </View>
  )
}

AtTextarea.defaultProps = {
  value: '',
  height: 72, // 默认3行，3 * 24（line-height）
  count: true,
  maxLength: 60,
  textOverflowForbidden: false
}

export default AtTextarea
