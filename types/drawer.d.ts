import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtDrawerProps extends AtComponent{
  show: boolean

  mask?: boolean

  width?: string

  right?: boolean

  items?: Array<string>

  className?: string | Array<string>

  onItemClick?: (index: number) => void

  onClose?: () => void
}

declare const AtDrawer: ComponentClass<AtDrawerProps>

export default AtDrawer
