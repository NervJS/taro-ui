import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface Option<T> {
  value: T
  label: string
  desc?: string
  disabled?: boolean
}

export interface AtRadioProps<T> {
  style?: string

  value: T

  options: Array<Option<T>>

  onClick: (vaule: T, event: BaseEvent) => void
}

declare const AtRadio: ComponentClass<AtRadioProps<any>>

export default AtRadio
