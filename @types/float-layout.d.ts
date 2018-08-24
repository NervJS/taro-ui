import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtFloatLayoutProps {
  isOpened: boolean

  title?: string

  onClose?: BaseEventFunction
}

declare const AtFloatLayout: ComponentClass<AtFloatLayoutProps>

export default AtFloatLayout
