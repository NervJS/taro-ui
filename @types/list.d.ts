import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtList {
  hasBorder?: boolean
}

export interface AtListItemProps extends AtComponent{
  hasBorder?: boolean

  disabled?: boolean

  note?: string

  title?: string

  thumb?: string

  isSwitch?: boolean

  switchIsCheck?: boolean

  extraText?: string

  extraThumb?: string

  arrow?: 'up' | 'down' | 'right'

  onClick?: BaseEventFunction

  onSwitchChange?: BaseEventFunction
}

export const AtList: ComponentClass<AtList>

declare const AtListItem: ComponentClass<AtListItemProps>

export default AtListItem
