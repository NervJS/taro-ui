import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

export interface AtTimeLineProps {
  isOpened: boolean

  text?: string

  icon?: string

  image?: string

  status?: 'error' | 'loading' | 'success'

  duration?: number

  hasMask?: boolean

  onClick?: BaseEventFunction

  onClose?: BaseEventFunction
}

declare const AtTimeLine: ComponentClass<AtTimeLineProps>

export default AtTimeLine
