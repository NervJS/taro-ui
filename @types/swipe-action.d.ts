import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface Option {
  text: string

  style?: object | string

  className?: object | string | string[]
}

export interface AtSwipeActionProps extends AtComponent {
  isClose?: boolean

  disabled?: boolean

  onClick?: BaseEventFunction

  onOpened?: BaseEventFunction

  onClosed?: BaseEventFunction

  autoClose?: boolean

  options?: Option[]
}

declare const AtSwipeAction: ComponentClass<AtSwipeActionProps>

export default AtSwipeAction
