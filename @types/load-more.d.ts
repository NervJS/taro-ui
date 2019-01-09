import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtLoadMoreProps extends AtComponent{
  noMoreTextStyle?: string | object,

  moreBtnStyle?: string | object,

  status?: 'more' | 'loading' | 'noMore'

  loadingText?: string

  moreText?: string

  noMoreText?: string

  onClick?: CommonEventFunction
}

declare const AtLoadMore: ComponentClass<AtLoadMoreProps>

export default AtLoadMore
