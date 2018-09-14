import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtModalProps extends AtComponent{
  title?: string

  content?: string

  cancelText?: string

  confirmText?: string

  onCancel?: BaseEventFunction

  onConfirm?: BaseEventFunction
}

declare const AtModal: ComponentClass<AtModalProps>

export default AtModal
