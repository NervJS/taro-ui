import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtActionSheetProps extends AtComponent {
  isOpened: boolean

  title?: string

  cancelText?: string

  onClose?: (event: BaseEventFunction) => void

  onCancel?: (event: BaseEventFunction) => void
}

declare const AtActionSheet: ComponentClass<AtActionSheetProps>

export default AtActionSheet
