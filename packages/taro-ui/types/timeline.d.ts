import { MouseEvent, ComponentClass, ReactNode } from 'react'

import AtComponent from './base'

export interface Item {
  /**
   * 标题
   */
  title: ReactNode
  /**
   * 子项内容
   */
  content?: ReactNode[]
  /**
   * 自定义 icon
   */
  icon?: string
  /**
   * icon 颜色
   * @default 'blue'
   */
  color?: 'blue' | 'green' | 'red' | 'yellow'
}

export interface AtTimelineProps extends AtComponent {
  /**
   * 最后一项是否为未完成态
   * @default false
   */
  pending?: boolean
  /**
   * 需展示的内容
   */
  items: Array<Item>
}

declare const AtTimeline: ComponentClass<AtTimelineProps>

export default AtTimeline
