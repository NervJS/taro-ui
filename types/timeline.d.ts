import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface Item {
  title: string

  content?: string[]

  icon?: string

  color?: string
}

export interface AtTimeLineProps extends AtComponent{
  pending?: boolean

  items: Array<Item>

  className?: string | Array<string>

  customStyle?: object | string
}

declare const AtTimeLine: ComponentClass<AtTimeLineProps>

export default AtTimeLine
