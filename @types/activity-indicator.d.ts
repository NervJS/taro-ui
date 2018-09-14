import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtActivityIndicatorProps extends AtComponent{
  size?: number

  mode?: 'center' | 'normal'

  color?: string

  content?: string
}

declare const AtActivityIndicator: ComponentClass<AtActivityIndicatorProps>

export default AtActivityIndicator
