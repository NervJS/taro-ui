import { MouseEvent, ComponentClass } from 'react'

export interface AtInputNumberProps {
  min?: number

  max?: number

  step?: number

  size?: string

  value?: number

  width?: number

  disabled?: boolean

  onChange?: (value: number) => void
}

declare const AtInputNumber: ComponentClass<AtInputNumberProps>

export default AtInputNumber
