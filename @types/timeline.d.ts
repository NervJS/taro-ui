import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

export interface Item {
  title: string

  content?: string[]

  icon?: string

  color?: string
}

export interface AtTimeLineProps {
  pending?: boolean

  items: Array<Item>

  className?: string | Array<string>

  customStyle?: object | string
}

declare const AtTimeLine: ComponentClass<AtTimeLineProps>

export default AtTimeLine
