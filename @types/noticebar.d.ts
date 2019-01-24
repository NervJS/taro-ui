import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtNoticeBarProps extends AtComponent{
  close?: boolean

  single?: boolean

  marquee?: boolean

  speed?: number

  moreText?: string

  showMore?: boolean

  icon?: string

  className?: string | Array<string>

  customStyle?: object | string

  onClose?: (event: CommonEventFunction) => void

  onGotoMore?: (event: CommonEventFunction) => void
}

declare const AtNoticeBar: ComponentClass<AtNoticeBarProps>

export default AtNoticeBar
