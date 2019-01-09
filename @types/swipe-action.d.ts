import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface Option {
  text: string

  style?: object | string

  className?: object | string | string[]
}

export interface AtSwipeActionProps extends AtComponent {
  isOpened?: boolean

  disabled?: boolean

  onClick?: CommonEventFunction

  onOpened?: CommonEventFunction

  onClosed?: CommonEventFunction

  autoClose?: boolean

  options?: Option[]
}

declare const AtSwipeAction: ComponentClass<AtSwipeActionProps>

export default AtSwipeAction
