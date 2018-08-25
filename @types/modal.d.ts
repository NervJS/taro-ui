import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtModalProps {
  title: string

  content: string

  cancleText: string

  confirmText: string

  onCancle: BaseEventFunction

  onConfirm: BaseEventFunction
}

declare const AtModal: ComponentClass<AtModalProps>

export default AtModal
