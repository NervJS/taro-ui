import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtCurtainProps extends AtComponent {
  isOpened?: boolean

  closeBtnPosition?: string

  onClose: CommonEventFunction
}

declare const AtCurtain: ComponentClass<AtCurtainProps>

export default AtCurtain
