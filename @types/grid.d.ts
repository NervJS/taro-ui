import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent, { AtIconBaseProps } from './base'

export interface GridLoading{
  size?: number

  color?: string
}

export interface Item {
  image?: string

  value?: string

  iconInfo?: AtIconBaseProps,

  loading?: boolean | GridLoading
}

export interface AtGridProps extends AtComponent {
  data: Array<Item>

  columnNum?: number

  hasBorder?: boolean

  mode?: 'square' | 'rect'

  onClick?: (item: Item, index: number, event: CommonEvent) => void
}

declare const AtGrid: ComponentClass<AtGridProps>

export default AtGrid
