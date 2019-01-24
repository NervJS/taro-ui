import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent, { AtIconBaseProps } from './base'

export interface AtAccordionProps extends AtComponent {
  open?: boolean

  title?: string

  icon?: AtIconBaseProps

  onClick?: CommonEventFunction
}

declare const AtAccordion: ComponentClass<AtAccordionProps>

export default AtAccordion
