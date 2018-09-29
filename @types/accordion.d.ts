import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface Icon {
  value?: string

  color?: string

  size?: string
}

export interface AtAccordionProps extends AtComponent {
  title?: string

  icon?: Icon

  onClick?: (event: BaseEventFunction) => void
}

declare const AtAccordion: ComponentClass<AtAccordionProps>

export default AtAccordion
