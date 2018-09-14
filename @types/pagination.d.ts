import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtPaginationProps extends AtComponent{
  total: number

  current?: number

  pageSize?: number

  icon?: boolean

  onPageChange?: (data: {type: 'prev' | 'next', current: number}) => void
}

declare const AtPagination: ComponentClass<AtPaginationProps>

export default AtPagination
