import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtInputNumberProps extends AtComponent{
  value: number | string

  style?: string

  min?: number

  max?: number

  step?: number

  size?: string

  width?: number

  disabled?: boolean

  onChange: (value: number) => void
}

declare const AtInputNumber: ComponentClass<AtInputNumberProps>

export default AtInputNumber
