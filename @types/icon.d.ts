import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtIconProps extends AtComponent{
  prefixClass: string

  value: string

  size?: number | string

  color?: string

  onClick?: (event: BaseEventFunction) => void
}

declare const AtIcon: ComponentClass<AtIconProps>

export default AtIcon
