import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtCurtainProps extends AtComponent {
  isOpened?: boolean

  closeBtnPosition?: string

  onClose: (event: BaseEventFunction) => void
}

declare const AtCurtain: ComponentClass<AtCurtainProps>

export default AtCurtain
