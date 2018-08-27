import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtActivityIndicatorProps {
  size?: number

  mode?: 'center' | 'normal'

  color?: string

  content?: string
}

declare const AtActivityIndicator: ComponentClass<AtActivityIndicatorProps>

export default AtActivityIndicator
