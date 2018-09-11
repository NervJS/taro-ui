import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtIconProps {
  value: string

  size?: number | string

  color?: string

  className?: string | Array<string>

  onClick?: (event: BaseEventFunction) => void
}

declare const AtIcon: ComponentClass<AtIconProps>

export default AtIcon
