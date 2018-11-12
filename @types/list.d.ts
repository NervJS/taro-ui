import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent, { AtIconBaseProps } from './base'

export interface AtListProps {
  hasBorder?: boolean
}

export interface AtListItemProps extends AtComponent {
  hasBorder?: boolean

  disabled?: boolean

  note?: string

  title?: string

  thumb?: string

  isSwitch?: boolean

  extraText?: string

  extraThumb?: string

  switchIsCheck?: boolean

  iconInfo?: AtIconBaseProps

  arrow?: 'up' | 'down' | 'right'

  onClick?: BaseEventFunction

  onSwitchChange?: BaseEventFunction
}

export const AtList: ComponentClass<AtListProps>

declare const AtListItem: ComponentClass<AtListItemProps>

export default AtListItem
