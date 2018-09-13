import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtIconProps {
  prefixClass: string

  value: string

  size?: number | string

  color?: string

  onClick?: (event: BaseEventFunction) => void
}

declare const AtIcon: ComponentClass<AtIconProps>

export default AtIcon
