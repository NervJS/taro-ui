import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtCardProps extends AtComponent{
  note?: string

  isFull?: boolean

  thumb?: string

  title?: string

  extra?: string

  onClick?: CommonEventFunction
}

declare const AtCard: ComponentClass<AtCardProps>

export default AtCard
