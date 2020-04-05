import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtProgressProps extends AtComponent {
  /**
   * 元素的颜色
   */
  color?: string
  /**
   * 元素的状态
   */
  status?: 'progress' | 'error' | 'success'
  /**
   * 元素的进度
   */
  percent?: number
  /**
   * 元素的规格
   */
  strokeWidth?: number
  /**
   * 是否隐藏文字
   */
  isHidePercent?: boolean
}

declare const AtProgress: ComponentClass<AtProgressProps>

export default AtProgress
