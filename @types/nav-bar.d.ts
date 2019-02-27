import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtNavBarProps extends AtComponent{
  title?: string

  fixed?: boolean

  border?: boolean

  color?: string

  leftIconType?: string

  leftText?: string

  rightFirstIconType?: string

  rightSecondIconType?: string

  onClickLeftIcon?: CommonEventFunction

  onClickRgIconSt?: CommonEventFunction

  onClickRgIconNd?: CommonEventFunction
}

declare const AtNavBar: ComponentClass<AtNavBarProps>

export default AtNavBar
