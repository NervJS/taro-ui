import { FC } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtDialogProps extends AtComponent {
  /**
   * 元素的标题
   */
  title?: string
  /**
   * 是否显示模态框
   * @default false
   */
  isOpened: boolean
  /**
   * 元素的内容
   */
  content?: string
  /**
   * 点击浮层的时候时候自动关闭
   * @default false
   */
  closeOnClickOverlay?: boolean
  /**
   * 主操作按钮的文本
   */
  primaryText?: string
  /**
   * 次操作按钮的文本
   */
  secondaryText?: string
  /**
   * 次次操作按钮的文本
   */
  tertiaryText?: string
  /**
   * RN 配置，是否内容滚动
   * @default false
   */
  scrollY?: boolean
  /**
   * 触发关闭时的事件
   */
  onClose?: CommonEventFunction
  /**
   * 点击主操作按钮触发的事件
   */
  onPrimary?: CommonEventFunction
  /**
   * 点击次操作按钮触发的事件
   */
  onSecondary?: CommonEventFunction
  /**
   * 点击次次操作按钮触发的事件
   */
  onTertiary?: CommonEventFunction
}

export interface AtDialogState {
  _isOpened: boolean
  isWEB: boolean
}

export interface AtDialogFooterProps extends AtComponent {
  primaryText?: string
  secondaryText?: string
  tertiaryText?: string
  onPrimary?: CommonEventFunction
  onSecondary?: CommonEventFunction
  onTertiary?: CommonEventFunction
}

export interface AtDialogContentProps extends AtComponent {
  /**
   * RN 配置，是否内容滚动
   * @default false
   */
  scrollY?: boolean
}

export type AtDialogHeaderProps = AtComponent

export interface AtDialogWrapProps extends AtComponent {
  /**
   * RN 配置，是否内容滚动
   * @default false
   */
  scrollY?: boolean
}

export interface AtDialogActionProps extends AtComponent {
  /**
   * action的类型
   * @default 'primary'
   */
  type?: 'primary' | 'secondary' | 'tertiary'
  /**
   * action的类型
   * @default false
   */
  hasLeftBorder?: boolean
  onClick?: CommonEventFunction
}

declare const AtDialog: FC<AtDialogProps>

export default AtDialog
