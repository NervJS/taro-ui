import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtSegmentedControlProps extends AtComponent{
  current: number

  color?: string

  selectedColor?: string

  fontSize?: number

  disabled?: boolean

  values: string[]

  onClick: (index: number, BaseEvent) => void
}

declare const AtSegmentedControl: ComponentClass<AtSegmentedControlProps>

export default AtSegmentedControl
