import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface TagInfo {
  name: string
  active: boolean
}

export interface AtTagProps extends AtComponent {
  /**
   * 大小尺寸
   * @default 'normal'
   */
  size?: 'normal' | 'small'
  /**
   * 样式类型
   */
  type?: string
  /**
   * 标签名字
   */
  name?: string
  /**
   * 是否大圆角
   * @default false
   */
  circle?: boolean
  /**
   * 是否为选中态
   * @default false
   */
  active?: boolean
  /**
   * 是否为禁用态
   * @default false
   */
  disabled?: boolean
  /**
   * 点击标签时触发，返回标签名字和状态的对象
   */
  onClick?: (tagInfo: TagInfo, event: CommonEvent) => void
}

declare const AtTag: ComponentClass<AtTagProps>

export default AtTag
