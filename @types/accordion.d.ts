import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent, { AtIconBaseProps } from './base'

export interface AtAccordionProps extends AtComponent {
  open?: boolean

  title?: string

  icon?: AtIconBaseProps

  isAnimation?: boolean

  hasBorder?: boolean

  onClick?: CommonEventFunction
}

declare const AtAccordion: ComponentClass<AtAccordionProps>

export default AtAccordion
