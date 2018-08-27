import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtProgressProps {
  color?: string

  status?: string

  percent?: number

  strokeWidth?: number

  isHidePercent?: boolean
}

declare const AtProgress: ComponentClass<AtProgressProps>

export default AtProgress
