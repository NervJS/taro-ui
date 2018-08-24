import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtNavBarProps {
  title: string

  fixed: boolean

  color: string

  leftIconType: string

  leftText: string

  rightFirstIconType: string

  rightSecondIconType: string

  onClickLeftIcon: BaseEventFunction

  onClickRgIconSt: BaseEventFunction

  onClickRgIconNd: BaseEventFunction
}

declare const AtNavBar: ComponentClass<AtNavBarProps>

export default AtNavBar
