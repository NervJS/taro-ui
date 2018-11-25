import { ComponentClass } from 'react'

import AtComponent from './base'

interface AtRangeProps extends AtComponent{
  sliderStyle?: string | Object

  railStyle?: string | Object

  trackStyle?: string | Object

  value?: []

  min?: number

  max?: number

  blockSize?: number

  disabled?: boolean

  onChange?: (value: []) => void

  onAfterChange?: (value:[]) => void
}

declare const AtRange: ComponentClass<AtRangeProps>

export default AtRange
