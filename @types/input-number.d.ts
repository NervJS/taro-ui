import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtInputNumberProps extends AtComponent{
  type: 'number' | 'digit'

  value: number | string

  style?: string

  min?: number

  max?: number

  step?: number

  size?: string

  width?: number

  disabled?: boolean

  onChange: (value: number) => void

  onBlur: BaseEventFunction
}

declare const AtInputNumber: ComponentClass<AtInputNumberProps>

export default AtInputNumber
