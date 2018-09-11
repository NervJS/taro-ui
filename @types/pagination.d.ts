import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtPaginationProps {
  total: number

  current?: number

  pageSize?: number

  icon?: boolean
  
  pickerSelect?: boolean

  className?: string | Array<string>

  onPageChange?: (data: {type: 'prev' | 'next', current: number}) => void
}

declare const AtPagination: ComponentClass<AtPaginationProps>

export default AtPagination
