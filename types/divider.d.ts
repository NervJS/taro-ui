import { MouseEvent, ComponentClass } from 'react'
import AtComponent from './base'

export interface AtDividerProps extends AtComponent{
  content?: string

  height?: number | string

  fontColor?: string

  fontSize?: number | string

  lineColor?: string
}

declare const AtDivider: ComponentClass<AtDividerProps>

export default AtDivider
