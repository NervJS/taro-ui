import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

export interface AtDrawerProps {
  show: boolean

  mask?: boolean

  width?: string

  right?: boolean

  items?: Array<string>
}

declare const AtDrawer: ComponentClass<AtDrawerProps>

export default AtDrawer
