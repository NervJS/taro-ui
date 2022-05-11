import React, { Fragment, useCallback, useState } from 'react'
import { Label, View, Input } from '@tarojs/components'
import classNames from 'classnames'
import { AtInputGroupProps, InputEventDetail } from '../../../types/input'
import { CommonEvent } from '@tarojs/components/types/common'

type ExtendEvent = {
  // target: {
  //   value?: string
  // }
  index?: number
}

const AtInputGroup: React.FC<AtInputGroupProps> = props => {
  const { value = [], title, onChange } = props
  const handlechange = (index, e) => {
    value[index].value = e
    // const temp = [].concat(value)
    // console.log(temp, 'ttt')
    onChange?.(value)
  }
  const handleInput = useCallback((index, event: CommonEvent & ExtendEvent) => {
    // onChange?.(event.detail.value)
    handlechange(index, event.detail.value)
  }, [])

  return (
    <View
      className={'at-input-group'}
      // style={{display: flex, alignItems: 'center', backgroundColor: 'red'}}
    >
      {title && (
        <View className='at-input-group__titlebox'>
          <Label
            className={`at-input-group__titlebox__title`}
            // for={name}
          >
            {title}
          </Label>
          {/* {required && <View className='at-input__titlebox--required'>*</View>} */}
          {/* <View className='at-input__titlebox--symbol'>{prefix}</View> */}
        </View>
      )}
      {value.map((item, index) => (
        <Fragment key={`at-input-${index}`}>
          <Input
            className='at-input-group__input'
            placeholder='请输入'
            value={item.value}
            onInput={e => handleInput(index, e)}
          />
          <Label className='at-input-group__label'>{item.label}</Label>
        </Fragment>
      ))}
    </View>
  )
}

export default AtInputGroup
