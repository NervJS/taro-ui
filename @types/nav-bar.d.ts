import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtNavBarProps extends AtComponent{
  style?: string

  title?: string

  fixed?: boolean

  border?: boolean

  color?: string

  leftIconType?: string

  leftText?: string

  rightFirstIconType?: string

  rightSecondIconType?: string

  onClickLeftIcon?: BaseEventFunction

  onClickRgIconSt?: BaseEventFunction

  onClickRgIconNd?: BaseEventFunction
}

declare const AtNavBar: ComponentClass<AtNavBarProps>

export default AtNavBar
