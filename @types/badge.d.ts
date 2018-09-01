import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtBadgeProps {
  dot?: boolean

  value?: string | number

  maxValue?: number
}

declare const AtBadge: ComponentClass<AtBadgeProps>

export default AtBadge
