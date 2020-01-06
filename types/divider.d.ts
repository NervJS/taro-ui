import { MouseEvent, ComponentClass } from 'react'
import AtComponent from './base'

export interface AtDividerProps extends AtComponent {
  /**
   * 分隔符文字
   */
  content?: string
  /**
   * 分隔符高度，会自动转 rem,rpx
   * @default 112
   */
  height?: number | string
  /**
   * 文字颜色
   * @default #6190E8
   */
  fontColor?: string
  /**
   * 文字大小，会自动转 rem,rpx
   * @default 32
   */
  fontSize?: number | string
  /**
   * 分割线颜色
   * @default #CCC
   */
  lineColor?: string
}

declare const AtDivider: ComponentClass<AtDividerProps>

export default AtDivider
