import React, { CSSProperties, Fragment, useCallback, useState } from 'react'
import { Label, View, Input } from '@tarojs/components'
import classNames from 'classnames'
import { AtInputGroupProps } from '../../../types/input'
import { CommonEvent } from '@tarojs/components/types/common'
import { PLATFORM, pxTransform } from '../../utils'

type ExtendEvent = {
  index?: number
}

const AtInputGroup: React.FC<AtInputGroupProps> = props => {
  const { data = [], title, disabled, onChange, ...restProps } = props
  const initValue = data.map(item => item.value) || []
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

  const inputStyle: CSSProperties = React.useMemo(() => {
    const _style: any = {}
    if (PLATFORM.isWEAPP) {
      if (PLATFORM.isIOS) {
        _style.top = pxTransform(-1.5)
      } else {
        _style.top = pxTransform(-1)
      }
    }

    return _style
  }, [])

  return (
    <View className={rootClass} style={inputStyle}>
      {title && (
        <View className='at-input-group__titlebox'>
          <Label className={`at-input-group__titlebox__title`}>{title}</Label>
        </View>
      )}
      {data.map((item, index) => (
        <Fragment key={`at-input-${index}`}>
          <Input
            {...restProps}
            className='at-input-group__input'
            placeholder='请输入'
            onInput={e => handleInput(index, e)}
            disabled={disabled}
          />
          {item.label && (
            <Label
              className={classNames('at-input-group__label', {
                'at-input-group__label--last': index === data.length - 1
              })}
            >
              {item.label}
            </Label>
          )}
        </Fragment>
      ))}
    </View>
  )
}

export default AtInputGroup
