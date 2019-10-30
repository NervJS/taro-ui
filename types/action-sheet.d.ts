import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtActionSheetProps extends AtComponent {
  isOpened: boolean

  title?: string

  cancelText?: string

  onClose?: CommonEventFunction

  onCancel?: CommonEventFunction
}

declare const AtActionSheet: ComponentClass<AtActionSheetProps>

export default AtActionSheet
