import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface Icon {
  value?: string

  activeColor?: string

  inactiveColor?: string

  size?: string|number
}

export interface Item {
  title?: string

  desc?: string

  icon?: Icon

  success?: boolean

  error?: boolean
}

export interface AtStepsProps extends AtComponent {
  current: number

  items?: Array<Item>

  onChange: (current: number, event: BaseEventFunction) => void
}

declare const AtSteps: ComponentClass<AtStepsProps>

export default AtSteps
