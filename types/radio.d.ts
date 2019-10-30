import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from "@tarojs/components/types/common";

import AtComponent from './base'

export interface Option<T> {
  value: T
  label: string
  desc?: string
  disabled?: boolean
}

export interface AtRadioProps<T> {
  value: T

  options: Array<Option<T>>

  onClick: (vaule: T, event: CommonEvent) => void
}

declare const AtRadio: ComponentClass<AtRadioProps<any>>

export default AtRadio
