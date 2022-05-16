import React, { Fragment, useCallback, useState } from 'react'
import { Label, View, Input } from '@tarojs/components'
import classNames from 'classnames'
import { AtInputGroupProps } from '../../../types/input'
import { CommonEvent } from '@tarojs/components/types/common'

type ExtendEvent = {
  index?: number
}

const AtInputGroup: React.FC<AtInputGroupProps> = props => {
  const { config = [], title, disabled, onChange } = props
  const initValue = config.map(item => item.value) || []
  const [value, setValue] = useState(initValue)
  const rootClass = classNames('at-input-group', {
    'at-input--disabled': disabled
  })
  const handlechange = useCallback(
    (index, e) => {
      value[index] = e
      setValue(value)
      onChange?.(value)
    },
    [onChange, value]
  )
  const handleInput = useCallback(
    (index, event: CommonEvent & ExtendEvent) => {
      handlechange(index, event.detail.value)
    },
    [handlechange]
  )

  return (
    <View className={rootClass}>
      {title && (
        <View className='at-input-group__titlebox'>
          <Label className={`at-input-group__titlebox__title`}>{title}</Label>
        </View>
      )}
      {config.map((item, index) => (
        <Fragment key={`at-input-${index}`}>
          <Input
            className='at-input-group__input'
            placeholder='请输入'
            placeholder-style={'padding-top: 1rpx'}
            // value={value[index] || ''}
            onInput={e => handleInput(index, e)}
            disabled={disabled}
          />
          {item.label && (
            <Label className='at-input-group__label'>{item.label}</Label>
          )}
        </Fragment>
      ))}
    </View>
  )
}

export default AtInputGroup
