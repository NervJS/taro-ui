import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtProgressProps extends AtComponent{
  color?: string

  status?: 'progress' | 'error' | 'success'

  percent?: number

  strokeWidth?: number

  isHidePercent?: boolean
}

declare const AtProgress: ComponentClass<AtProgressProps>

export default AtProgress
