import { ComponentClass } from 'react'
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
   * 元素持续的事件（设置为 0 将不会自动消失）
   * @default auto
   */
  duration?: string
  // duration?: number
  /**
   * 是否存在底部遮罩层(无法点击底部的内容区)
   */
  maskHide?: boolean

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

export type ToastRef = {
  // eslint-disable-next-line no-unused-vars
  show: (params?: AtToastProps) => void
  hide: () => void
}

export type ToastRefObj = {
  current: ToastRef | null
}

interface ToastComponent extends ComponentClass<AtToastProps> {
  // eslint-disable-next-line no-unused-vars
  show: (params?: AtToastProps) => void
  hide: () => void
}

declare const AtToast: ToastComponent

export default AtToast
