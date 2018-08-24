import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtActionSheetProps {
  isOpened: boolean

  title?: string
  cancleText?: string

  onClose?: (event: BaseEventFunction) => void
  onCancle?: (event: BaseEventFunction) => void
}

declare const AtActionSheet: ComponentClass<AtActionSheetProps>

export default AtActionSheet
