import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtIconProps {
  value: string

  size?: number

  color?: string

  onClick?: BaseEventFunction
}

declare const AtIcon: ComponentClass<AtIconProps>

export default AtIcon
