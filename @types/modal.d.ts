import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtModalProps {
  title?: string

  content?: string

  cancelText?: string

  confirmText?: string

  onCancel?: BaseEventFunction

  onConfirm?: BaseEventFunction
}

declare const AtModal: ComponentClass<AtModalProps>

export default AtModal
