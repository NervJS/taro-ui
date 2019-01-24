import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtPaginationProps extends AtComponent{
  total: number

  current?: number

  pageSize?: number

  icon?: boolean

  className?: string | Array<string>

  customStyle?: object | string

  onPageChange?: (data: {type: 'prev' | 'next', current: number}) => void
}

declare const AtPagination: ComponentClass<AtPaginationProps>

export default AtPagination
