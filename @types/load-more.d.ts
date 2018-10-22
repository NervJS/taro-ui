import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtLoadMoreProps extends AtComponent{
  status?: 'more' | 'loading' | 'noMore'

  loadingText?: string

  moreText?: string

  noMoreText?: string

  onClick?: BaseEventFunction
}

declare const AtLoadMore: ComponentClass<AtLoadMoreProps>

export default AtLoadMore
