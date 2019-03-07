import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

interface InputError {
  type: 'OVER' | 'LOW' | 'DISABLED',
  errorValue: number,
}

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

  onBlur?: CommonEventFunction

  onErrorInput?: (errCb: InputError) => void
}

declare const AtInputNumber: ComponentClass<AtInputNumberProps>

export default AtInputNumber
