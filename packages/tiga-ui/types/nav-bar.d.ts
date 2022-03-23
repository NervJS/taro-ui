import { ReactNode, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtNavBarProps extends AtComponent {
  /**
   * 标题
   */
  title?: ReactNode
  /**
   * 是否固定顶部
   * @default false
   */
  fixed?: boolean
  /**
   * 是否显示下划线
   * @since v1.4.0
   * @default true
   */
  border?: boolean
  /**
   * 左边图标类型，图标类型请看 AtIcon 文档
   * @default 'chevron-left'
   */
  leftIcon?: ReactNode
  /**
   * 左边文字
   */
  leftText?: string
  /**
   * 右边操作区
   */
  extra?: ReactNode
  /**
   * 点击左边区域调事件回调
   */
  onBack?: CommonEventFunction
}

declare const AtNavBar: ComponentClass<AtNavBarProps>

export default AtNavBar
