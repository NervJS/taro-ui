import { ReactNode, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtModalSheetCommonProps {
  /**
   * 元素的标题
   */
  title?: string | ReactNode
  /**
   * 取消文案
   */
  cancelText?: string
  /**
   * 重置文案
   */
  resetText?: string
  /**
   * 确定文案
   */
  confirmText?: string
  /**
   * 关闭图标
   * @default comm_icon_false_line
   */
  closeIcon?: string
  /**
   * 元素被关闭触发的事件
   */
  onClose?: CommonEventFunction
  /**
   * 点击取消触发的事件
   */
  onCancel?: CommonEventFunction
  /**
   * 点击重置触发的事件
   */
  onReset?: CommonEventFunction
  /**
   * 点击确定触发的事件
   */
  onConfirm?: CommonEventFunction
}

export interface AtModalSheetProps
  extends AtModalSheetCommonProps,
    AtComponent {
  /**
   * 是否展示元素
   * @default false
   */
  isOpened: boolean
  /**
   * 点击浮层的时候时候自动关闭
   * @default true
   */
  closeOnClickOverlay?: boolean
}

export interface AtModalSheetState {
  _isOpened: boolean
}

export interface AtModalSheetHeaderProps
  extends AtModalSheetCommonProps,
    AtComponent {}

export interface AtModalSheetFooterProps extends AtComponent {
  onClick?: CommonEventFunction
}

export interface AtModalSheetBodyProps extends AtComponent {}

export interface AtModalSheetItemProps extends AtComponent {
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

export declare const AtModalSheetItem: ComponentClass<AtModalSheetItemProps>

declare const AtModalSheet: ComponentClass<AtModalSheetProps>

export default AtModalSheet
