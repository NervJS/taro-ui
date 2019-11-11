import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtToastProps extends AtComponent {
  /**
   * 是否展示元素
   * @default false
   */
  isOpened: boolean
  /**
   * 元素的内容
   */
  text?: string
  /**
   * icon 的类型
   */
  icon?: string
  /**
   * 元素展示的图片
   */
  image?: string
  /**
   * 元素的状态
   */
  status?: 'error' | 'loading' | 'success'
  /**
   * 元素持续的事件（设置为 0 将不会自动消失）
   * @default 3000
   */
  duration?: number
  /**
   * 是否存在底部遮罩层(无法点击底部的内容区)
   */
  hasMask?: boolean
  /**
   * 元素被点击之后触发的事件
   */
  onClick?: CommonEventFunction
  /**
   * 元素被关闭之后触发的事件
   */
  onClose?: CommonEventFunction
}

export interface AtToastState {
  _isOpened: boolean
}

declare const AtToast: ComponentClass<AtToastProps>

export default AtToast
