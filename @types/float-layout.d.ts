import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtFloatLayoutProps extends AtComponent{
  isOpened: boolean

  title?: string

  onClose?: BaseEventFunction
}

declare const AtFloatLayout: ComponentClass<AtFloatLayoutProps>

export default AtFloatLayout
