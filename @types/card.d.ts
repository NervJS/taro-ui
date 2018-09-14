import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtCardProps extends AtComponent{
  note?: string

  isFull?: boolean

  thumb?: string

  title?: string

  extra?: string

  onClick?: BaseEventFunction
}

declare const AtCard: ComponentClass<AtCardProps>

export default AtCard
