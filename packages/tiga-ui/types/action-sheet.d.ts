import { ReactNode, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtActionSheetProps extends AtComponent {
  /**
   * 是否展示元素
   * @default false
   */
  isOpened: boolean
  /**
   * 元素的标题
   */
  title?: string | ReactNode
  /**
   * 取消按钮的内容
   * @default 取消
   */
  cancelText?: string
  /**
   * 点击浮层的时候时候自动关闭
   * @default true
   */
  closeOnClickOverlay?: boolean
  /**
   * 元素被关闭触发的事件
   */
  onClose?: CommonEventFunction
  /**
   * 点击了底部取消按钮触发的事件
   */
  onCancel?: CommonEventFunction
}

export interface AtActionSheetState {
  _isOpened: boolean
}

export interface AtActionSheetHeaderProps extends AtComponent {}

export interface AtActionSheetFooterProps extends AtComponent {
  onClick?: CommonEventFunction
}

export interface AtActionSheetBodyProps extends AtComponent {}

export interface AtActionSheetItemProps extends AtComponent {
  /**
   * Item 释义
   */
  subText?: string
  /**
   * Item 释义
   * @default true
   */
  hasBottomBorder?: boolean
  /**
   * 点击 Item 触发的事件
   */
  onClick?: CommonEventFunction
}

export declare const AtActionSheetItem: ComponentClass<AtActionSheetItemProps>

declare const AtActionSheet: ComponentClass<AtActionSheetProps>

export default AtActionSheet
