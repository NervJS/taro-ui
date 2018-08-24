import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtListItemProps {
  note: string

  title: string

  thumb: string

  isSwitch: boolean

  extraText: string

  extraThumb: string

  arrow: 'up' | 'down' | 'right'

  onClick: BaseEventFunction

  onSwitchChange: BaseEventFunction
}

declare const AtListItem: ComponentClass<AtListItemProps>

export default AtListItem
