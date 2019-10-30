import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent, { AtIconBaseProps } from './base'

export interface AtNavBarProps extends AtComponent {
  title?: string

  fixed?: boolean

  border?: boolean

  color?: string

  leftIconType?: string | AtIconBaseProps

  leftText?: string

  rightFirstIconType?: string | AtIconBaseProps

  rightSecondIconType?: string | AtIconBaseProps

  onClickLeftIcon?: CommonEventFunction

  onClickRgIconSt?: CommonEventFunction

  onClickRgIconNd?: CommonEventFunction
}

declare const AtNavBar: ComponentClass<AtNavBarProps>

export default AtNavBar
