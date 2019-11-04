import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent, { AtIconBaseProps } from './base'

export interface Item {
  /**
   * 宫格图片
   */
  image?: string
  /**
   * 宫格文字
   */
  value?: string
  /**
   * 宫格图标
   */
  iconInfo?: AtIconBaseProps
}

export interface AtGridProps extends AtComponent {
  /**
   * 宫格布局数据源
   */
  data: Array<Item>
  /**
   * 每一列有多少个
   */
  columnNum?: number
  /**
   * 是否有边框
   * @default true
   */
  hasBorder?: boolean
  /**
   * 布局模式
   * @default square
   */
  mode?: 'square' | 'rect'
  /**
   * 点击宫格触发的事件
   */
  onClick?: (item: Item, index: number, event: CommonEvent) => void
}

declare const AtGrid: ComponentClass<AtGridProps>

export default AtGrid
