import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

export interface Item {
  title: string

  content?: string

  icon?: string

  color?: string
}

export interface AtTimeLineProps {
  pending?: boolean

  items: Array<Item>
}

declare const AtTimeLine: ComponentClass<AtTimeLineProps>

export default AtTimeLine
