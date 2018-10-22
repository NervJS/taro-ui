import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtToastProps extends AtComponent{
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

declare const AtToast: ComponentClass<AtToastProps>

export default AtToast
